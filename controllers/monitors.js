const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.render('products/monitor/monitor',{user: [{full_name: req.session.full_name, type: req.session.type}]});
});
router.get('/hp', (req, res) => {
	res.render('products/monitor/monitor-brand', {
		brand: 'HP',
		user: [{full_name: req.session.full_name, type: req.session.type}]
	});
});
router.get('/dell', (req, res) => {
	res.render('products/monitor/monitor-brand', {
		brand: 'Dell',
		user: [{full_name: req.session.full_name, type: req.session.type}]
	});
});
router.get('/lg', (req, res) => {
	res.render('products/monitor/monitor-brand', {
		brand: 'LG',
		user: [{full_name: req.session.full_name, type: req.session.type}]
	});
});
router.get('/samsung', (req, res) => {
	res.render('products/monitor/monitor-brand', {
		brand: 'Samsung',
		user: [{full_name: req.session.full_name, type: req.session.type}]
	});
});
router.get('/benq', (req, res) => {
	res.render('products/monitor/monitor-brand', {
		brand: 'BenQ',
		user: [{full_name: req.session.full_name, type: req.session.type}]
	});
});
module.exports = router;