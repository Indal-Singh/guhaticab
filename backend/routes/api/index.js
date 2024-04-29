var express = require('express');
var router = express.Router();
const {registerUser} = require('../../controllers/api/register.controller');
const authController = require('../../controllers/api/auth.controller');

/* POSt register page. */
router.post('/register', registerUser);
router.post('/login', authController.loginUser)
module.exports = router;
