const express 	= require('express');
const router 	= express.Router();
const userModel = require.main.require('./models/userModel');

router.get('/', (req, res)=>{
	res.render('home/index');	
});
router.get('/products', (req, res)=>{
	res.render('home/product-management');	
});
router.get('/customers', (req, res)=>{
	userModel.getAll(function(result){
		res.render('home/customer-management', {users: result});	
	});
});
router.get('/admin', (req, res)=>{
	userModel.getByEmail(req.session.email, function(result){
		res.render('home/admin', {user: result});
	});
});

module.exports = router;