const Award = require('../models/Award');

// Get all awards
exports.getAwards = async (req, res) => {
  try {
    const { type } = req.query;
    const query = type ? { type } : {};
    const awards = await Award.find(query).sort({ name: 1 });
    res.json(awards);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get single award
exports.getAward = async (req, res) => {
  try {
    const award = await Award.findById(req.params.id);
    if (!award) {
      return res.status(404).json({ message: 'Award not found' });
    }
    res.json(award);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Create award (admin only)
exports.createAward = async (req, res) => {
  try {
    const newAward = new Award(req.body);
    const award = await newAward.save();
    res.json(award);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Update award (admin only)
exports.updateAward = async (req, res) => {
  try {
    const award = await Award.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!award) {
      return res.status(404).json({ message: 'Award not found' });
    }
    res.json(award);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Delete award (admin only)
exports.deleteAward = async (req, res) => {
  try {
    const award = await Award.findByIdAndDelete(req.params.id);
    if (!award) {
      return res.status(404).json({ message: 'Award not found' });
    }
    res.json({ message: 'Award removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Add recipient to award (admin only)
exports.addRecipient = async (req, res) => {
  try {
    const award = await Award.findById(req.params.id);
    if (!award) {
      return res.status(404).json({ message: 'Award not found' });
    }
    
    award.recipients.push(req.body);
    await award.save();
    
    res.json(award);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
}; 