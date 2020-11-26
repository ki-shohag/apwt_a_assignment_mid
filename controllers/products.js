const express = require('express');
const productsModel = require.main.require('./models/productModel');
const reviewModel = require.main.require('./models/reviewModel');
const router = express.Router();

router.get('/', (req, res) => {
    if (req.session.full_name != null && req.session.type != null) {

        res.render('home/index', {
            user: [{
                full_name: req.session.full_name,
                type: req.session.type
            }]
        });
    } else {
        res.redirect('/login');
    }
});
router.post('/insert', (req, res) => {
    var product = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        brand: req.body.brand
    };
    productsModel.getByName(product.name, function (result) {
        if (result.length > 0) {
            res.redirect('/home/products');
        } else {
            productsModel.insert(product, function (status) {
                if (status == true) {
                    res.redirect('/home/products');
                } else {
                    res.redirect('/home/products');
                }
            });
        }
    });
});
router.get('/remove/:id', (req, res) => {
    productsModel.delete(req.params.id, function (status) {
        res.redirect('/home/products');
    });
});
router.get('/show-product/:id', (req, res) => {
    if (req.session.full_name != null && req.session.type != null) {
        productsModel.getById(req.params.id, function (result) {
            reviewModel.getByProductId(req.params.id, function (review) {
                res.render('products/show-product', {
                    product: result,
                    user: [{
                        full_name: req.session.full_name,
                        type: req.session.type
                    }],
                    review: review
                });
            });
        });
    } else {
        productsModel.getById(req.params.id, function (result) {
            reviewModel.getByProductId(req.params.id, function (review) {
                res.render('products/show-product', {
                    product: result,
                    user: [{
                        full_name: null,
                        type: null
                    }],
                    review:review
                });
            });
        });
    }
});
router.post('/review/:id', function (req, res){
    var review = {};
    review.body = req.body.review_body;
    review.product_id = req.params.id;
    review.reviwer_name = req.session.full_name;
    productsModel.insertReview(review, function (status){
       if(status==true){
           res.redirect('/products/show-product/'+req.params.id);
       }else{
        res.redirect('/products/show-product/'+req.params.id);
       }
    });
});
router.post('/search', function(req, res){
    searchText = req.body.userName;
    productsModel.getByText(searchText, function(result){
        if(result){
            res.json({user:result});
        }else{
            res.json({user:'error'});
        }
    });
})
module.exports = router;