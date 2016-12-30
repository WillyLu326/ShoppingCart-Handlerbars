var express = require('express');
var router = express.Router();
var Product = require('../models/product');

/* GET home page. */
router.get('/', function(req, res, next) {
    Product.find({}, (err, products) => {
        if (err) throw err;
        res.render('shop/index', { title: 'Shopping Cart', products: products });
    })

});

module.exports = router;
