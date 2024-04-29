const mongoose = require('mongoose');

// Function to connect to the database
async function connectDB() {
  try {
    // Connect to MongoDB using Mongoose
    await mongoose.connect(process.env.DB_URL);

    console.log('Connected to MongoDB');

    // Return the Mongoose connection object
    return mongoose.connection;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

module.exports = connectDB;
