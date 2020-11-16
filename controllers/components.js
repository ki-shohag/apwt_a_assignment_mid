const express 	= require('express');
const productsModel = require.main.require('./models/productModel');
const router 	= express.Router();

router.get('/', (req, res)=>{
	res.render('home/index');
});
router.get('/ram', (req, res)=>{
	productsModel.getByCategory(category, function(result){
		res.render('products/ram/ram', {products: result});
	});
});
router.get('/ram/corsair', (req, res)=>{
	res.render('products/ram/ram-brand', {brand: 'Corsair'});
});
router.get('/ram/gskill', (req, res)=>{
	res.render('products/ram/ram-brand', {brand: 'GSkill'});
});
router.get('/ram/adata', (req, res)=>{
	res.render('products/ram/ram-brand', {brand: 'Adata'});
});
router.get('/ram/avexir', (req, res)=>{
	res.render('products/ram/ram-brand', {brand: 'Avexir'});
});

router.get('/ssd', (req, res)=>{
	res.render('products/ssd/ssd');
});
router.get('/ssd/corsair', (req, res)=>{
	res.render('products/ssd/ssd-brand', {brand: 'Corsair'});
});
router.get('/ssd/samsung', (req, res)=>{
	res.render('products/ssd/ssd-brand', {brand: 'Samsung'});
});
router.get('/ssd/gigabyte', (req, res)=>{
	res.render('products/ssd/ssd-brand', {brand: 'Gigabyte'});
});


router.get('/graphics-card', (req, res)=>{
	res.render('products/graphics-card/graphics-card');
});
router.get('/graphics-card/gigabyte', (req, res)=>{
	res.render('products/graphics-card/graphics-card-brand', {brand: 'Gigabyte'});
});
router.get('/graphics-card/zotac', (req, res)=>{
	res.render('products/graphics-card/graphics-card-brand', {brand: 'Zotac'});
});
router.get('/graphics-card/asus', (req, res)=>{
	res.render('products/graphics-card/graphics-card-brand', {brand: 'Asus'});
});
router.get('/graphics-card/msi', (req, res)=>{
	res.render('products/graphics-card/graphics-card-brand', {brand: 'MSI'});
});

router.get('/casing', (req, res)=>{
	res.render('products/casing/casing');
});
router.get('/casing/corsair', (req, res)=>{
	res.render('products/casing/casing-brand', {brand: 'Cosair'});
});
router.get('/casing/gamdias', (req, res)=>{
	res.render('products/casing/casing-brand', {brand: 'Gamdias'});
});
router.get('/casing/cooler-master', (req, res)=>{
	res.render('products/casing/casing-brand', {brand: 'Cooler Master'});
});
module.exports = router;