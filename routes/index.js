var express = require('express');
var router = express.Router();
var passport = require('passport');
var Product = require('../models/product');

var csrf = require('csurf');

router.use(csrf());

/* GET home page. */
router.get('/', function(req, res, next) {
    Product.find({}, (err, products) => {
        if (err) throw err;
        res.render('shop/index', { title: 'Shopping Cart', products: products});
    });
});

// sign up
router.get('/signup', (req, res) => {
    const messages = req.flash('error');
    res.render('user/signup', { csrfToken: req.csrfToken(), messages: messages, hasError: messages.length > 0 });
});
router.post('/signup', passport.authenticate('local.signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
}));


// profile
router.get('/profile', (req, res) => {
    res.render('user/profile');
});


// sign in
router.get('/signin', (req, res) => {
    res.render('user/signin', {});
});



module.exports = router;
