const express 	= require('express');
const router 	= express.Router();

router.get('/', (req, res)=>{
	res.render('products/monitor/monitor');
});
router.get('/hp', (req, res)=>{
	res.render('products/monitor/monitor-brand', {brand: 'HP'});
});
router.get('/dell', (req, res)=>{
	res.render('products/monitor/monitor-brand', {brand: 'Dell'});
});
router.get('/lg', (req, res)=>{
	res.render('products/monitor/monitor-brand', {brand: 'LG'});
});
router.get('/samsung', (req, res)=>{
	res.render('products/monitor/monitor-brand', {brand: 'Samsung'});
});
router.get('/benq', (req, res)=>{
	res.render('products/monitor/monitor-brand', {brand: 'BenQ'});
});
module.exports = router;