const db = require('./db');

module.exports= {
	getByName: function(name, callback){
		var sql = "SELECT * FROM `product` WHERE name='"+name+"'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getByBrand: function(brand, callback){
		var sql = "SELECT * FROM `product` WHERE brand='"+brand+"'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getByCategory: function(category, callback){
		var sql = "SELECT * FROM `product` WHERE category='"+category+"'";
		//console.log(sql);
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getByCategoryAndBrand: function(category,brand, callback){
		var sql = "SELECT * FROM `product` WHERE category='"+brand+"' AND brand='"+category+"'";
		console.log(sql);
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getById: function(id, callback){
		var sql = "select * from product where id='"+id+"'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAllProduct: function(callback){
		var sql = "select * from product";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getFeaturedItems: function(callback){
		var sql = "SELECT * FROM `product` ORDER BY id DESC LIMIT 10";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	insert: function(product, callback){
		var sql = "INSERT INTO `product`(`id`, `name`, `description`, `price`, `category`, `brand`) VALUES (0,'"+product.name+"','"+product.description+"','"+product.price+"','"+product.category+"','"+product.brand+"')";
		console.log(sql);
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
		var sql = "DELETE FROM `product` WHERE id='"+id+"';";
		db.execute(sql, function(status){
			callback(status);
		});
	}
}