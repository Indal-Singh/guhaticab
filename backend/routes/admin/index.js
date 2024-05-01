const express = require('express');
const router = express.Router();
const {requireAdminAuth, redirectToDashboard} = require('../../middleware/admin/auth');
const {listAllUsers} = require('../../controllers/admin/users.controllers');
/* GET home page. */
router.get('/',redirectToDashboard, function(req, res, next) {
  res.render('admin/index',{pageTitle:"Admin Login"});
});


router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if username and password are correct (in this example, hardcoded)
  if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
      req.session.adminAuthenticated = true;
      res.redirect('/admin/dashboard');
  } else {
      res.redirect('/admin');
  }
});

router.get('/dashboard', requireAdminAuth, (req, res) => {
  res.render('admin/dashboard', {pageTitle:"Dashboard - CAB",navActive:"dashboard"});
});
router.get('/users', requireAdminAuth, listAllUsers);

router.get('/categories', requireAdminAuth, (req, res) => {
  res.render('admin/categories/categories', {pageTitle:"Categories - CAB",navActive:"categories"});
});

router.get('/add-category', requireAdminAuth, (req, res) => {
  res.render('admin/categories/addCategory.ejs', {pageTitle:"Add Categories - CAB",navActive:"categories"});
});

router.get('/edit-category', requireAdminAuth, (req, res) => {
  res.render('admin/categories/editCategory.ejs', {pageTitle:"Edit Categories - CAB",navActive:"categories"});
});

router.get('/products', requireAdminAuth, (req, res) => {
  res.render('admin/products/products', {pageTitle:"Products - CAB",navActive:"products"});
});

router.get('/add-product', requireAdminAuth, (req, res) => {
  res.render('admin/products/addProduct.ejs', {pageTitle:"Add Products - CAB",navActive:"products"});
});

router.get('/edit-product', requireAdminAuth, (req, res) => {
  res.render('admin/products/editProduct.ejs', {pageTitle:"Edit Products - CAB",navActive:"products"});
});


router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;