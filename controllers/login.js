const express 	= require('express');
const router 	= express.Router();
const userModel = require.main.require('./models/userModel');

router.get('/', (req, res)=>{
	res.render('access/login');	
});
router.post('/', (req, res)=>{
	var user = {
		email: req.body.email,
		password: req.body.password
	};
	userModel.validate(user, function(status){
		if(status == true){
			req.session.email = user.email;
			res.redirect('/home/admin');
		}
		else{
			res.redirect('/login');
		}
	});
});

module.exports = router;