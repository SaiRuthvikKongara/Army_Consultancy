const express = require('express');
const router = express.Router();
const leaderController = require('../controllers/leaderController');
const auth = require('../middleware/auth');

// @route   GET api/leaders
// @desc    Get all leaders
// @access  Public
router.get('/', leaderController.getLeaders);

// @route   GET api/leaders/:id
// @desc    Get leader by ID
// @access  Public
router.get('/:id', leaderController.getLeader);

// @route   POST api/leaders
// @desc    Create a leader
// @access  Private/Admin
router.post('/', auth, leaderController.createLeader);

// @route   PUT api/leaders/:id
// @desc    Update a leader
// @access  Private/Admin
router.put('/:id', auth, leaderController.updateLeader);

// @route   DELETE api/leaders/:id
// @desc    Delete a leader
// @access  Private/Admin
router.delete('/:id', auth, leaderController.deleteLeader);

module.exports = router; 