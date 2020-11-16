const express 	= require('express');
const router 	= express.Router();
const userModel = require.main.require('./models/userModel');

router.get('/', (req, res)=>{
	res.render('access/sign-up');	
});
router.post('/', (req, res)=>{
	var current_datetime = new Date()
	var formatted_date =  current_datetime.getFullYear()+ "-" + (current_datetime.getMonth() + 1) + "-" +current_datetime.getDate();
	console.log(formatted_date);
	var user = {
		full_name: req.body.full_name,
		email: req.body.email,
		phone: req.body.phone,
		type: req.body.type,
		address: req.body.address,
		password: req.body.password,
		confirm_password: req.body.confirm_password,
		joining_date: formatted_date
	};
	if(user.password!=user.confirm_password){
		res.redirect('sign-up');
	}
	else{
		userModel.getByEmail(user, function(result){
			if(result.length > 0){
				res.redirect('/sign-up');
			}
			else{
				userModel.insert(user, function(status){
					if(status ==true){
						res.redirect('/login');
					}
					else{
						res.redirect('/sign-up');
					}
				});
			}
		});
	}
});

module.exports = router;