const express 	= require('express');
const router 	= express.Router();

router.get('/', (req, res)=>{
	res.render('access/sign-up');	
});

module.exports = router;