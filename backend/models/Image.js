const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    data: {
        type: Buffer,
        required: function() { return !this.gridFsId; }
    },
    gridFsId: {
        type: mongoose.Schema.Types.ObjectId,
        required: function() { return !this.data; }
    },
    contentType: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['SouthCommand', 'Leaders', 'Gallery', 'Badges', 'Awards', 'General', 'New folder']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Image', imageSchema); 