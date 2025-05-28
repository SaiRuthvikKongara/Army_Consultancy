const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

// MongoDB Connection with updated options
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/consultancy', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
  family: 4, // Use IPv4, skip trying IPv6
  directConnection: true // Force direct connection
})
.then(() => {
  console.log('MongoDB connected successfully');
  // Create indexes after connection
  return Promise.all([
    mongoose.model('Leader').createIndexes(),
    mongoose.model('Award').createIndexes(),
    mongoose.model('User').createIndexes(),
    mongoose.model('Image').createIndexes()
  ]);
})
.then(() => console.log('Database indexes created'))
.catch((err) => {
  console.log('MongoDB connection error:', err);
  process.exit(1); // Exit if cannot connect to database
});

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/leaders', require('./routes/leaders'));
app.use('/api/awards', require('./routes/awards'));
app.use('/api/images', require('./routes/imageRoutes'));

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Consultancy API' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 