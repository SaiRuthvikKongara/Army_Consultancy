const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const { MongoClient, GridFSBucket } = require('mongodb');
const Image = require('../models/Image');
require('dotenv').config();

const FRONTEND_IMAGES_PATH = path.join(__dirname, '../../frontend/src/Images');
const MONGO_URI = 'mongodb://127.0.0.1:27017/consultancy';
const DB_NAME = 'consultancy';
const GRIDFS_THRESHOLD = 16 * 1024 * 1024; // 16MB

async function migrateImages() {
    let mongoClient;
    try {
        // Connect to MongoDB (mongoose for models, native for GridFS)
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
            family: 4
        });
        mongoClient = new MongoClient(MONGO_URI, { useUnifiedTopology: true });
        await mongoClient.connect();
        const db = mongoClient.db(DB_NAME);
        const bucket = new GridFSBucket(db, { bucketName: 'images' });
        console.log('Connected to MongoDB and GridFS');

        async function processDirectory(dirPath, category) {
            const files = fs.readdirSync(dirPath);
            for (const file of files) {
                const filePath = path.join(dirPath, file);
                const stats = fs.statSync(filePath);

                if (stats.isDirectory()) {
                    await processDirectory(filePath, file);
                } else if (stats.isFile() && /\.(jpg|jpeg|png|gif|svg)$/i.test(file)) {
                    if (stats.size > GRIDFS_THRESHOLD) {
                        // Store in GridFS
                        const readStream = fs.createReadStream(filePath);
                        const uploadStream = bucket.openUploadStream(file, {
                            contentType: `image/${path.extname(file).slice(1).toLowerCase()}`,
                            metadata: { category }
                        });
                        await new Promise((resolve, reject) => {
                            readStream.pipe(uploadStream)
                                .on('error', reject)
                                .on('finish', resolve);
                        });
                        // Save reference in Image collection
                        const image = new Image({
                            name: file,
                            data: Buffer.alloc(0), // No data, just a reference
                            contentType: `image/${path.extname(file).slice(1).toLowerCase()}`,
                            category: category,
                            gridFsId: uploadStream.id
                        });
                        await image.save();
                        console.log(`Migrated to GridFS: ${filePath}`);
                    } else {
                        // Store in regular collection
                        const fileData = fs.readFileSync(filePath);
                        const image = new Image({
                            name: file,
                            data: fileData,
                            contentType: `image/${path.extname(file).slice(1).toLowerCase()}`,
                            category: category
                        });
                        await image.save();
                        console.log(`Migrated: ${filePath}`);
                    }
                }
            }
        }

        await processDirectory(FRONTEND_IMAGES_PATH, 'General');
        console.log('Migration completed successfully');
    } catch (error) {
        console.error('Migration failed:', error);
    } finally {
        if (mongoClient) await mongoClient.close();
        await mongoose.connection.close();
    }
}

// Extend Image schema to allow gridFsId (if not already present)
if (!Image.schema.path('gridFsId')) {
    Image.schema.add({ gridFsId: mongoose.Schema.Types.ObjectId });
}

migrateImages(); 