const express 	= require('express');
const router 	= express.Router();

router.get('/', (req, res)=>{
	res.render('products/laptops/laptops');
});
router.get('/hp', (req, res)=>{
	res.render('products/laptops/laptop-brand', {brand: 'HP'});
});
router.get('/dell', (req, res)=>{
	res.render('products/laptops/laptop-brand', {brand: 'Dell'});
});
router.get('/apple', (req, res)=>{
	res.render('products/laptops/laptop-brand', {brand: 'Apple'});
});
router.get('/microsoft', (req, res)=>{
	res.render('products/laptops/laptop-brand', {brand: 'Microsoft'});
});
router.get('/lenovo', (req, res)=>{
	res.render('products/laptops/laptop-brand', {brand: 'Lenovo'});
});
module.exports = router;