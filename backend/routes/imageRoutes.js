const express = require('express');
const router = express.Router();
const multer = require('multer');
const imageController = require('../controllers/imageController');

// Configure multer for memory storage
const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB limit
    }
});

// Routes
router.post('/upload', upload.single('image'), imageController.uploadImage);
router.get('/:id', imageController.getImage);
router.get('/category/:category', imageController.getImagesByCategory);
router.delete('/:id', imageController.deleteImage);

module.exports = router; 