// Middleware to check if user is authenticated
function requireAdminAuth(req, res, next) {
    if (req.session && req.session.adminAuthenticated) {
        return next();
    } else {
        res.redirect('/admin');
    }
}

// Middleware to redirect to dashboard if already authenticated
function redirectToDashboard(req, res, next) {
    if (req.session && req.session.adminAuthenticated) {
        res.redirect('/admin/dashboard');
    } else {
        next(); // Call next() to continue middleware chain
    }
}

module.exports = { requireAdminAuth, redirectToDashboard };

