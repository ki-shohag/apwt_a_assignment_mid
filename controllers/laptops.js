const express = require('express');
const router = express.Router();
const productsModel  = require.main.require('./models/productModel');

router.get('/', (req, res) => {
	productsModel.getByCategory('Laptop', function (result){
		res.render('products/laptops/laptops', {
			user: [{full_name: req.session.full_name, type: req.session.type}],
			product: result
		});
	});
});
router.get('/:brand', (req, res) => {
	productsModel.getByCategoryAndBrand(req.params.brand,'Laptop', function (result){
		res.render('products/laptops/laptop-brand', {
			brand: req.params.brand,
			user: [{full_name: req.session.full_name, type: req.session.type}],
			product: result
		});
	});
});
module.exports = router;