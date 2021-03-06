const express = require('express');
const router = express.Router();
const userModel = require.main.require('./models/userModel');
const productModel = require.main.require('./models/productModel');

router.get('/', (req, res) => {
	if (req.session.full_name != null) {
		userModel.getAllCustomer(function (result) {
			productModel.getFeaturedItems(function (featuredResult) {
				productModel.getAllProduct(function (allProductNames) {
					res.render('home/index', {
						users: result,
						user: [{
							full_name: req.session.full_name,
							type: req.session.type
						}],
						featuredResult: featuredResult,
						productlist: allProductNames
					});
				});
			})
		});
	} else {
		productModel.getFeaturedItems(function (featuredResult) {
			productModel.getAllProduct(function (allProductNames) {
				res.render('home/index', {
					user: [{
						full_name: null,
						type: null,
					}],
					featuredResult: featuredResult,
					productlist: allProductNames
				});
			});
		})
	}
});
router.get('/products', (req, res) => {
	if (req.session.full_name != null) {
		productModel.getAllProduct(function (result) {
			res.render('home/product-management', {
				products: result,
				user: [{
					full_name: req.session.full_name,
					type: req.session.type
				}]
			});
		});
	} else {
		res.redirect('/login');
	}
});
router.get('/customers', (req, res) => {
	if (req.session.full_name != null) {
		userModel.getAllCustomer(function (result) {
			res.render('home/customer-management', {
				users: result,
				user: [{
					full_name: req.session.full_name,
					type: req.session.type
				}]
			});
		});
	} else {
		res.redirect('/login');
	}
});
router.get('/admin', (req, res) => {
	if (req.session.full_name != null) {
		userModel.getByEmail(req.session.email, function (result) {
			res.render('home/admin', {
				user: result
			});
		})
	} else {
		res.redirect('/login');
	}
});
router.get('/customer', (req, res) => {
	if (req.session.full_name != null) {
		userModel.getByEmail(req.session.email, function (result) {
			res.render('home/customer', {
				user: result
			});
		});
	} else {
		res.redirect('/login');
	}
});
router.get('/customers/remove/:id', (req, res) => {
	if (req.session.full_name == null) {
		res.redirect('/login');
	} else {
		userModel.delete(req.params.id, function (status) {
			if (status == true) {
				res.redirect('/home/customers');
			} else {
				res.redirect('/home/customers');
			}
		});
	}
});

module.exports = router;