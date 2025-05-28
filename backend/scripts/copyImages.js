const fs = require('fs');
const path = require('path');

// Create upload directories if they don't exist
const createDirectories = () => {
    const dirs = [
        'public/uploads/leaders',
        'public/uploads/awards'
    ];

    dirs.forEach(dir => {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
            console.log(`Created directory: ${dir}`);
        }
    });
};

// Copy images from frontend to backend
const copyImages = () => {
    const frontendImagesDir = path.join(__dirname, '../../frontend/src/Images/Leaders');
    const backendImagesDir = path.join(__dirname, '../public/uploads/leaders');

    try {
        // Read all files from frontend images directory
        const files = fs.readdirSync(frontendImagesDir);

        // Copy each file to backend directory
        files.forEach(file => {
            if (file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png')) {
                const sourcePath = path.join(frontendImagesDir, file);
                const destPath = path.join(backendImagesDir, file.toLowerCase());
                
                fs.copyFileSync(sourcePath, destPath);
                console.log(`Copied: ${file}`);
            }
        });

        console.log('All images copied successfully!');
    } catch (error) {
        console.error('Error copying images:', error);
    }
};

// Run the script
createDirectories();
copyImages(); 