const express = require('express');
const productsModel = require.main.require('./models/productModel');
const router = express.Router();

router.get('/', (req, res) => {
	productsModel.getByCategory('Monitor', function (result) {
		res.render('products/monitor/monitor', {
			product: result,
			user: [{
				full_name: req.session.full_name,
				type: req.session.type
			}]
		});
	});
});
router.get('/:brand', (req, res) => {
	productsModel.getByCategoryAndBrand(req.params.brand, 'Monitor', function (result) {
		res.render('products/monitor/monitor-brand', {
			brand: req.params.brand,
			product: result,
			user: [{
				full_name: req.session.full_name,
				type: req.session.type
			}]
		});
	});
});
module.exports = router;