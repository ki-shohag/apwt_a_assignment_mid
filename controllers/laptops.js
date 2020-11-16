const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.render('products/laptops/laptops',{user: [{full_name: req.session.full_name, type: req.session.type}]});
});
router.get('/hp', (req, res) => {
	res.render('products/laptops/laptop-brand', {
		brand: 'HP',
		user: [{full_name: req.session.full_name, type: req.session.type}]
	});
});
router.get('/dell', (req, res) => {
	res.render('products/laptops/laptop-brand', {
		brand: 'Dell',
		user: [{full_name: req.session.full_name, type: req.session.type}]
	});
});
router.get('/apple', (req, res) => {
	res.render('products/laptops/laptop-brand', {
		brand: 'Apple',
		user: [{full_name: req.session.full_name, type: req.session.type}]
	});
});
router.get('/microsoft', (req, res) => {
	res.render('products/laptops/laptop-brand', {
		brand: 'Microsoft',
		user: [{full_name: req.session.full_name, type: req.session.type}]
	});
});
router.get('/lenovo', (req, res) => {
	res.render('products/laptops/laptop-brand', {
		brand: 'Lenovo',
		user: [{full_name: req.session.full_name, type: req.session.type}]
	});
});
module.exports = router;