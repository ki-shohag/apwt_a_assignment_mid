const express 	= require('express');
const router 	= express.Router();
const userModel = require.main.require('./models/userModel');
const productModel = require.main.require('./models/productModel');

router.get('/', (req, res)=>{
	res.render('home/index');	
});
router.get('/products', (req, res)=>{
	productModel.getAllProduct(function(result){
		res.render('home/product-management', {products: result});
	});
});
router.get('/customers', (req, res)=>{
	userModel.getAllCustomer(function(result){
		res.render('home/customer-management', {users: result});	
	});
});
router.get('/admin', (req, res)=>{
	userModel.getByEmail(req.session.email, function(result){
		res.render('home/admin', {user: result});
	});
});
router.get('/customers/remove/:id', (req, res)=>{
	userModel.delete(req.params.id, function(status){
		if(status==true){
			res.redirect('/customers');
		}
		else{
			res.redirect('/customers');
		}
	})	
});

module.exports = router;