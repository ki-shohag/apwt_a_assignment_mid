const express 	= require('express');
const router 	= express.Router();

router.get('/', (req, res)=>{
	res.render('home/index');	
});
router.get('/products', (req, res)=>{
	res.render('home/product-management');	
});
router.get('/customers', (req, res)=>{
	res.render('home/customer-management');	
});

module.exports = router;