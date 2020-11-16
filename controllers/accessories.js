const express = require('express');
const productsModel = require.main.require('./models/productModel');
const router = express.Router();

router.get('/', (req, res) => {
    if (req.session.email != null) {
        res.render('products/accessories', {
            user: [{
                full_name: req.session.full_name,
                type: req.session.type
            }]
        });
    } else {
        res.render('products/accessories', {
            user: [{
                full_name: null,
                type: null
            }]
        });
    }

});
router.get('/keyboard', (req, res) => {
    if (req.session.email != null) {
        productsModel.getByCategory('Keyboard', function (result) {

            res.render('products/keyboards/keyboard', {
                product: result,
                user: [{
                    full_name: req.session.full_name,
                    type: req.session.type
                }]
            });
        });
    } else {
        productsModel.getByCategory('Keyboard', function (result) {
            res.render('products/keyboards/keyboard', {
                product: result,
                user: [{
                    full_name: req.session.full_name,
                    type: req.session.type
                }]
            });
        });
    }
});
router.get('/keyboard/:brand', (req, res) => {
    productsModel.getByCategoryAndBrand(req.params.brand, 'Keyboard', function (result) {
        res.render('products/keyboards/keyboard-brand', {
            brand: req.params.brand,
            product: result,
            user: [{
                full_name: null,
                type: null
            }]
        });
    })

});


router.get('/mouse', (req, res) => {
    productsModel.getByCategory('Mouse', function (result) {
        res.render('products/mouse/mouse', {
            product: result,
            user: [{
                full_name: req.session.full_name,
                type: req.session.type
            }]
        });
    });
});
router.get('/mouse/:brand', (req, res) => {
    productsModel.getByCategoryAndBrand(req.params.brand, 'Mouse', function (result) {
        res.render('products/mouse/mouse-brand', {
            brand: req.params.brand,
            product: result,
            user: [{
                full_name: null,
                type: null
            }]
        });
    })
});



router.get('/pen-drive', (req, res) => {
    productsModel.getByCategory('Pen-Drive', function (result) {
        res.render('products/pen-drive/pen-drive', {
            product: result,
            user: [{
                full_name: req.session.full_name,
                type: req.session.type
            }]
        });
    });
});
router.get('/pen-drive/:brand', (req, res) => {
    productsModel.getByCategoryAndBrand(req.params.brand, 'Pen-Drive', function (result) {
        res.render('products/pen-drive/pen-drive-brand', {
            brand: req.params.brand,
            product: result,
            user: [{
                full_name: null,
                type: null
            }]
        });
    });
});


router.get('/webcam', (req, res) => {
    productsModel.getByCategory('Webcam', function (result) {
        res.render('products/webcam/webcam', {
            product: result,
            user: [{
                full_name: req.session.full_name,
                type: req.session.type
            }]
        });
    });
});
router.get('/webcam/:brand', (req, res) => {
    productsModel.getByCategoryAndBrand(req.params.brand, 'Webcam', function (result) {
        res.render('products/webcam/webcam', {
            brand: req.params.brand,
            product: result,
            user: [{
                full_name: null,
                type: null
            }]
        });
    });
});

module.exports = router;