const express 	= require('express');
const productsModel = require.main.require('./models/productModel');
const router 	= express.Router();

router.get('/', (req, res)=>{
	res.render('home/index');
});
router.get('/ram', (req, res)=>{
	productsModel.getByCategory('Ram', function(result){
		res.render('products/ram/ram', {product: result});
	});
});
router.get('/ram/:brand', (req, res)=>{
	var brand = req.params.brand;
	brand = brand.toUpperCase();
	productsModel.getByCategoryAndBrand(brand, 'Ram',function(result){
		res.render('products/ram/ram-brand', {brand: brand, product:result});
	});
});

router.get('/ssd', (req, res)=>{
	productsModel.getByCategory('SSD', function(result){
		res.render('products/ssd/ssd', {product: result});
	});
});
router.get('/ssd/:brand', (req, res)=>{
	var brand = req.params.brand;
	brand = brand.toUpperCase();
	productsModel.getByCategoryAndBrand(brand, 'SSD',function(result){
		res.render('products/ssd/ssd-brand', {brand: brand, product:result});
	});
});


router.get('/graphics-card', (req, res)=>{
	productsModel.getByCategory('Graphics-Card', function(result){
		res.render('products/graphics-card/graphics-card', {product:result});
	});
});
router.get('/graphics-card/:brand', (req, res)=>{
	var brand = req.params.brand;
	brand = brand.toUpperCase();
	productsModel.getByCategoryAndBrand(brand, 'SSD',function(result){
		res.render('products/graphics-card/graphics-card-brand', {brand: brand, product: result});
	});
});

router.get('/casing', (req, res)=>{
	productsModel.getByCategory('Casing', function(result){
		res.render('products/casing/casing', {product: result});
	});
});
router.get('/casing/:brand', (req, res)=>{
	var brand = req.params.brand;
	brand = brand.toUpperCase();
	productsModel.getByCategoryAndBrand(brand, 'Casing',function(result){
		res.render('products/casing/casing-brand', {brand: brand, product: result});
	});
});
module.exports = router;