const Leader = require('../models/Leader');

// Get all leaders
exports.getLeaders = async (req, res) => {
  try {
    const leaders = await Leader.find().sort({ 'tenure.start': -1 });
    res.json(leaders);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get single leader
exports.getLeader = async (req, res) => {
  try {
    const leader = await Leader.findById(req.params.id);
    if (!leader) {
      return res.status(404).json({ message: 'Leader not found' });
    }
    res.json(leader);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Create leader (admin only)
exports.createLeader = async (req, res) => {
  try {
    const newLeader = new Leader(req.body);
    const leader = await newLeader.save();
    res.json(leader);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Update leader (admin only)
exports.updateLeader = async (req, res) => {
  try {
    const leader = await Leader.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!leader) {
      return res.status(404).json({ message: 'Leader not found' });
    }
    res.json(leader);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Delete leader (admin only)
exports.deleteLeader = async (req, res) => {
  try {
    const leader = await Leader.findByIdAndDelete(req.params.id);
    if (!leader) {
      return res.status(404).json({ message: 'Leader not found' });
    }
    res.json({ message: 'Leader removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
}; 