const db = require('./db');

module.exports= {
	validate: function(user, callback){
		var sql = "SELECT * FROM `user` WHERE email='"+user.email+"' AND password='"+user.password+"'";
		db.getResults(sql, function(results){
			if(results.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	getByEmail: function(email, callback){
		var sql = "SELECT * FROM `user` WHERE email='"+email+"'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getById: function(id, callback){
		var sql = "select * from user where id='"+id+"'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAllCustomer: function(callback){
		var sql = "select * from user WHERE type='Customer'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	insert: function(user, callback){
        var sql = "INSERT INTO `user`(`id`, `full_name`, `email`, `password`, `type`, `phone`, `address`,`joining_date`) VALUES (0,'"+user.full_name+"','"+user.email+"','"+user.password+"','"+user.type+"','"+user.phone+"','"+user.address+"','"+user.joining_date+"')";
		db.execute(sql, function(status){
			callback(status);
		});
	},
	update:function(sql, callback){
		db.execute(sql, function(status){
			callback(status);
		});
	},
	delete: function(id, callback){
		var sql = "DELETE FROM `user` WHERE id='"+id+"';";
		db.execute(sql, function(status){
			callback(status);
		});
	}
}