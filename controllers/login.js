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
			userModel.getByEmail(user.email, function(result){
				if(result[0].type =="Admin"){
					res.redirect('/home/admin');
				}
				else if(result[0].type=="Customer"){
					res.redirect('/home/customer');
				}
			});
		}
		else{
			res.redirect('/login');
		}
	});
});

module.exports = router;