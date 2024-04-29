const User = require('../../models/User.model');

async function registerUser(req, res, next) {
    try {
      const { email, password } = req.body;
  
      // Check if the email is already registered
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'Email is already registered' });
      }
  
      const newUser = await createUser(email, password);
  
      // Return a success response
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      // Handle any errors
      next(error);
    }
  }
  
  async function createUser(email, password) {
    // Create a new user instance
    const newUser = new User({ email, password });
  
    // Hash the password before saving
    newUser.password = await newUser.hashPassword(password);
  
    // Save the user to the database
    await newUser.save();
  
    return newUser;
  }
  
  module.exports = {
    registerUser
  };