var express = require('express');
var router = express.Router();
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
    res.render('user/signup', { csrfToken: req.csrfToken() });
});
router.post('/signup', (req, res) => {
   res.redirect('/');
});

// sign in
router.get('/signin', (req, res) => {
    res.render('user/signin', {});
});



module.exports = router;
