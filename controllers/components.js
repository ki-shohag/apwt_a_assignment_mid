const express 	= require('express');
const router 	= express.Router();

router.get('/', (req, res)=>{
	res.render('home/index');
});
router.get('/ram', (req, res)=>{
	res.render('products/ram/ram');
});
router.get('/ram/corsair', (req, res)=>{
	res.render('products/ram/ram-brand', {brand: 'Corsair'});
});
router.get('/ram/gskill', (req, res)=>{
	res.render('products/ram/ram-brand', {brand: 'GSkill'});
});
router.get('/ram/adata', (req, res)=>{
	res.render('products/ram/ram-brand', {brand: 'Adata'});
});
router.get('/ram/avexir', (req, res)=>{
	res.render('products/ram/ram-brand', {brand: 'Avexir'});
});

module.exports = router;