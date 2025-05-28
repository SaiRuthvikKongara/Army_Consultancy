const express = require('express');
const router = express.Router();
const awardController = require('../controllers/awardController');
const auth = require('../middleware/auth');

// @route   GET api/awards
// @desc    Get all awards
// @access  Public
router.get('/', awardController.getAwards);

// @route   GET api/awards/:id
// @desc    Get award by ID
// @access  Public
router.get('/:id', awardController.getAward);

// @route   POST api/awards
// @desc    Create an award
// @access  Private/Admin
router.post('/', auth, awardController.createAward);

// @route   PUT api/awards/:id
// @desc    Update an award
// @access  Private/Admin
router.put('/:id', auth, awardController.updateAward);

// @route   DELETE api/awards/:id
// @desc    Delete an award
// @access  Private/Admin
router.delete('/:id', auth, awardController.deleteAward);

// @route   POST api/awards/:id/recipients
// @desc    Add recipient to award
// @access  Private/Admin
router.post('/:id/recipients', auth, awardController.addRecipient);

module.exports = router; 