const Image = require('../models/Image');
const mongoose = require('mongoose');
const { MongoClient, GridFSBucket, ObjectId } = require('mongodb');

const MONGO_URI = 'mongodb://127.0.0.1:27017/consultancy';
const DB_NAME = 'consultancy';

// Upload a new image
exports.uploadImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No image file provided' });
        }

        const image = new Image({
            name: req.file.originalname,
            data: req.file.buffer,
            contentType: req.file.mimetype,
            category: req.body.category || 'General'
        });

        await image.save();
        res.status(201).json({ message: 'Image uploaded successfully', imageId: image._id });
    } catch (error) {
        res.status(500).json({ message: 'Error uploading image', error: error.message });
    }
};

// Get image by ID
exports.getImage = async (req, res) => {
    try {
        const image = await Image.findById(req.params.id);
        if (!image) {
            return res.status(404).json({ message: 'Image not found' });
        }

        if (image.data && image.data.length > 0) {
            // Serve from buffer
            res.set('Content-Type', image.contentType);
            return res.send(image.data);
        } else if (image.gridFsId) {
            // Stream from GridFS
            const mongoClient = new MongoClient(MONGO_URI, { useUnifiedTopology: true });
            await mongoClient.connect();
            const db = mongoClient.db(DB_NAME);
            const bucket = new GridFSBucket(db, { bucketName: 'images' });
            res.set('Content-Type', image.contentType);
            const downloadStream = bucket.openDownloadStream(new ObjectId(image.gridFsId));
            downloadStream.on('error', (err) => {
                res.status(404).json({ message: 'Image not found in GridFS', error: err.message });
                mongoClient.close();
            });
            downloadStream.on('end', () => {
                mongoClient.close();
            });
            return downloadStream.pipe(res);
        } else {
            return res.status(404).json({ message: 'Image data not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving image', error: error.message });
    }
};

// Get images by category
exports.getImagesByCategory = async (req, res) => {
    try {
        const images = await Image.find({ category: req.params.category })
            .select('name contentType category createdAt')
            .sort({ createdAt: -1 });
        
        res.json(images);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving images', error: error.message });
    }
};

// Delete image
exports.deleteImage = async (req, res) => {
    try {
        const image = await Image.findByIdAndDelete(req.params.id);
        if (!image) {
            return res.status(404).json({ message: 'Image not found' });
        }
        res.json({ message: 'Image deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting image', error: error.message });
    }
}; 