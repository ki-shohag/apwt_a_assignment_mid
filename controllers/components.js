const express = require('express');
const productsModel = require.main.require('./models/productModel');
const router = express.Router();

router.get('/', (req, res) => {
	res.render('products/components',{user: [{full_name: req.session.full_name, type: req.session.type}]});
});
router.get('/ram', (req, res) => {
	productsModel.getByCategory('Ram', function (result) {
		res.render('products/ram/ram', {
			product: result,
			user: [{full_name: req.session.full_name, type: req.session.type}]
		});
	});
});
router.get('/ram/:brand', (req, res) => {
	var brand = req.params.brand;
	productsModel.getByCategoryAndBrand(brand, 'Ram', function (result) {
		res.render('products/ram/ram-brand', {
			brand: brand,
			product: result,
			user: [{full_name: req.session.full_name, type: req.session.type}]
		});
	});
});

router.get('/ssd', (req, res) => {
	productsModel.getByCategory('SSD', function (result) {
		res.render('products/ssd/ssd', {
			product: result,
			user: [{full_name: req.session.full_name, type: req.session.type}]
		});
	});
});
router.get('/ssd/:brand', (req, res) => {
	var brand = req.params.brand;
	productsModel.getByCategoryAndBrand(brand, 'SSD', function (result) {
		console.log(result);
		res.render('products/ssd/ssd-brand', {
			brand: brand,
			product: result,
			user: [{full_name: req.session.full_name, type: req.session.type}]
		});
	});
});


router.get('/graphics-card', (req, res) => {
	productsModel.getByCategory('Graphics-Card', function (result) {
		res.render('products/graphics-card/graphics-card', {
			product: result,
			user: [{full_name: req.session.full_name, type: req.session.type}]
		});
	});
});
router.get('/graphics-card/:brand', (req, res) => {
	var brand = req.params.brand;
	productsModel.getByCategoryAndBrand(brand, 'Gaphics-Card', function (result) {
		res.render('products/graphics-card/graphics-card-brand', {
			brand: brand,
			product: result,
			user: [{full_name: req.session.full_name, type: req.session.type}]
		});
	});
});

router.get('/casing', (req, res) => {
	productsModel.getByCategory('Casing', function (result) {
		res.render('products/casing/casing', {
			product: result,
			user: [{full_name: req.session.full_name, type: req.session.type}]
		});
	});
});
router.get('/casing/:brand', (req, res) => {
	var brand = req.params.brand;
	productsModel.getByCategoryAndBrand(brand, 'Casing', function (result) {
		res.render('products/casing/casing-brand', {
			brand: brand,
			product: result,
			user: [{full_name: req.session.full_name, type: req.session.type}]
		});
	});
});
module.exports = router;