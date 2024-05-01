const User = require('../../models/User.model'); // Import the User model

// Controller function to list all users
const listAllUsers = async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.find();
    // console.log(users);
    // Render the 'users' EJS template and pass the users data to it
    res.render('admin/users/users', {pageTitle:"Users - CAB",navActive:"users",users:users });
  } catch (error) {
    // If an error occurs, send an error response
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { listAllUsers };
