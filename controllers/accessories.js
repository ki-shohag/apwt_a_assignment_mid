const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    if (req.session.email != null) {
        res.render('products/show-product', {
            user: [{
                full_name: req.session.full_name,
                type: req.session.type
            }]
        });
    } else {
        res.render('products/show-product', {
            user: [{
                full_name: null,
                type: null
            }]
        });
    }

});
router.get('/keyboard', (req, res) => {
    if (req.session.email != null) {
        res.render('products/keyboards/keyboard', {
            user: [{
                full_name: req.session.full_name,
                type: req.session.type
            }]
        });
    } else {
        res.render('products/keyboards/keyboard', {
            user: [{
                full_name: null,
                type: null
            }]
        });
    }
});
router.get('/keyboard/:brand', (req, res) => {
    if (req.params.brand == "logitech") {
        res.render('products/keyboards/keyboard-brand', {
            brand: 'Logitech',
            user: [{full_name: req.session.full_name, type: req.session.type}]
        });
    } else if (req.params.brand == "a4tech") {
        res.render('products/keyboards/keyboard-brand', {
            brand: 'A4Tech',
            user: [{full_name: req.session.full_name, type: req.session.type}]
        });
    } else if (req.params.brand == "gamdias") {
        res.render('products/keyboards/keyboard-brand', {
            brand: 'Gamdias',
            user: [{full_name: req.session.full_name, type: req.session.type}]
        });
    } else if (req.params.brand == "cougar") {
        res.render('products/keyboards/keyboard-brand', {
            brand: 'Cougar',
            user: [{full_name: req.session.full_name, type: req.session.type}]
        });
    } else {
        res.render('products/keyboards/keyboard',{user: [{full_name: req.session.full_name, type: req.session.type}]});
    }
});


router.get('/mouse', (req, res) => {
    res.render('products/mouse/mouse',{user: [{full_name: req.session.full_name, type: req.session.type}]});
});
router.get('/mouse/:brand', (req, res) => {
    if (req.params.brand == "logitech") {
        res.render('products/mouse/mouse-brand', {
            brand: 'Logitech',
            user: [{full_name: req.session.full_name, type: req.session.type}]
        });
    } else if (req.params.brand == "a4tech") {
        res.render('products/mouse/mouse-brand', {
            brand: 'A4Tech',
            user: [{full_name: req.session.full_name, type: req.session.type}]
        });
    } else if (req.params.brand == "gamdias") {
        res.render('products/mouse/mouse-brand', {
            brand: 'Gamdias',
            user: [{full_name: req.session.full_name, type: req.session.type}]
        });
    } else if (req.params.brand == "cougar") {
        res.render('products/mouse/mouse-brand', {
            brand: 'Cougar',
            user: [{full_name: req.session.full_name, type: req.session.type}]
        });
    } else {
        res.render('products/mouse/mouse',{user: [{full_name: req.session.full_name, type: req.session.type}]});
    }
});



router.get('/pen-drive', (req, res) => {
    res.render('products/pen-drive/pen-drive',{user: [{full_name: req.session.full_name, type: req.session.type}]});
});
router.get('/pen-drive/:brand', (req, res) => {
    if (req.params.brand == "sandisk") {
        res.render('products/pen-drive/pen-drive-brand', {
            brand: 'Sandisk',
            user: [{full_name: req.session.full_name, type: req.session.type}]
        });
    } else if (req.params.brand == "adata") {
        res.render('products/pen-drive/pen-drive-brand', {
            brand: 'Adata',
            user: [{full_name: req.session.full_name, type: req.session.type}]
        });
    } else if (req.params.brand == "avexir") {
        res.render('products/pen-drive/pen-drive-brand', {
            brand: 'Avexir',
            user: [{full_name: req.session.full_name, type: req.session.type}]
        });
    } else if (req.params.brand == "transcend") {
        res.render('products/pen-drive/pen-drive-brand', {
            brand: 'Transcend',
            user: [{full_name: req.session.full_name, type: req.session.type}]
        });
    } else {
        res.render('products/pen-drive/pen-drive',{user: [{full_name: req.session.full_name, type: req.session.type}]});
    }
});


router.get('/webcam', (req, res) => {
    res.render('products/webcam/webcam',{user: [{full_name: req.session.full_name, type: req.session.type}]});
});
router.get('/webcam/:brand', (req, res) => {
    if (req.params.brand == "logitech") {
        res.render('products/webcam/webcam-brand', {
            brand: 'Logitech',
            user: [{full_name: req.session.full_name, type: req.session.type}]
        });
    } else if (req.params.brand == "a4tech") {
        res.render('products/webcam/webcam-brand', {
            brand: 'A4Tech',
            user: [{full_name: req.session.full_name, type: req.session.type}]
        });
    } else if (req.params.brand == "value-top") {
        res.render('products/webcam/webcam-brand', {
            brand: 'Value Top',
            user: [{full_name: req.session.full_name, type: req.session.type}]
        });
    } else {
        res.render('products/webcam/webcam',{user: [{full_name: req.session.full_name, type: req.session.type}]});
    }
});

module.exports = router;