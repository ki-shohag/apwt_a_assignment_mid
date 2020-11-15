const express 	= require('express');
const router 	= express.Router();

router.get('/', (req, res)=>{
	res.render('products/show-product');	
});
router.get('/keyboard', (req, res)=>{
	res.render('products/keyboards/keyboard');
});
router.get('/keyboard/:brand', (req, res)=>{
    if(req.params.brand=="logitech"){
        res.render('products/keyboards/keyboard-brand', {brand: 'Logitech'});
    }
    else if(req.params.brand=="a4tech"){
        res.render('products/keyboards/keyboard-brand', {brand: 'A4Tech'});
    }
    else if(req.params.brand=="gamdias"){
        res.render('products/keyboards/keyboard-brand', {brand: 'Gamdias'});
    }
    else if(req.params.brand=="cougar"){
        res.render('products/keyboards/keyboard-brand', {brand: 'Cougar'});
    }
    else{
        res.render('products/keyboards/keyboard');
    }
});


router.get('/mouse', (req, res)=>{
	res.render('products/mouse/mouse');
});
router.get('/mouse/:brand', (req, res)=>{
    if(req.params.brand=="logitech"){
        res.render('products/mouse/mouse-brand', {brand: 'Logitech'});
    }
    else if(req.params.brand=="a4tech"){
        res.render('products/mouse/mouse-brand', {brand: 'A4Tech'});
    }
    else if(req.params.brand=="gamdias"){
        res.render('products/mouse/mouse-brand', {brand: 'Gamdias'});
    }
    else if(req.params.brand=="cougar"){
        res.render('products/mouse/mouse-brand', {brand: 'Cougar'});
    }
    else{
        res.render('products/mouse/mouse');
    }
});



router.get('/pen-drive', (req, res)=>{
	res.render('products/pen-drive/pen-drive');
});
router.get('/pen-drive/:brand', (req, res)=>{
    if(req.params.brand=="sandisk"){
        res.render('products/pen-drive/pen-drive-brand', {brand: 'Sandisk'});
    }
    else if(req.params.brand=="adata"){
        res.render('products/pen-drive/pen-drive-brand', {brand: 'Adata'});
    }
    else if(req.params.brand=="avexir"){
        res.render('products/pen-drive/pen-drive-brand', {brand: 'Avexir'});
    }
    else if(req.params.brand=="transcend"){
        res.render('products/pen-drive/pen-drive-brand', {brand: 'Transcend'});
    }
    else{
        res.render('products/pen-drive/pen-drive');
    }
});


router.get('/webcam', (req, res)=>{
	res.render('products/webcam/webcam');
});
router.get('/webcam/:brand', (req, res)=>{
    if(req.params.brand=="logitech"){
        res.render('products/webcam/webcam-brand', {brand: 'Logitech'});
    }
    else if(req.params.brand=="a4tech"){
        res.render('products/webcam/webcam-brand', {brand: 'A4Tech'});
    }
    else if(req.params.brand=="value-top"){
        res.render('products/webcam/webcam-brand', {brand: 'Value Top'});
    }
    else{
        res.render('products/webcam/webcam');
    }
});

module.exports = router;