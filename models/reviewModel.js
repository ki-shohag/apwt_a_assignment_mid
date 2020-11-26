const db = require('./db');

module.exports= {
	getByName: function(name, callback){
		var sql = "SELECT * FROM `review` WHERE name='"+name+"'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getByText: function(text, callback){
		var sql = "SELECT * FROM `review` WHERE name LIKE '%"+text+"%' OR description LIKE '%"+text+"%' OR category LIKE '%"+text+"%' OR brand LIKE '%"+text+"%'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getByBrand: function(brand, callback){
		var sql = "SELECT * FROM `review` WHERE brand='"+brand+"'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getByCategory: function(category, callback){
		var sql = "SELECT * FROM `review` WHERE category='"+category+"'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getByCategoryAndBrand: function(category,brand, callback){
		var sql = "SELECT * FROM `review` WHERE category='"+brand+"' AND brand='"+category+"'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getByProductId: function(id, callback){
        var sql = "select * from review where product_id='"+id+"'";
        console.log(sql);
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAllProduct: function(callback){
		var sql = "select * from review";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getFeaturedItems: function(callback){
		var sql = "SELECT * FROM `review` ORDER BY id DESC LIMIT 10";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	insert: function(product, callback){
		var sql = "INSERT INTO `review`(`id`, `name`, `description`, `price`, `category`, `brand`) VALUES (0,'"+product.name+"','"+product.description+"','"+product.price+"','"+product.category+"','"+product.brand+"')";
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
		var sql = "DELETE FROM `review` WHERE id='"+id+"';";
		db.execute(sql, function(status){
			callback(status);
		});
	},
	insertReview: function(review, callback){
		var sql = "INSERT INTO `review`(`id`, `body`, `reviewer_name`, `product_id`) VALUES (0,'"+review.body+"','"+review.reviwer_name+"','"+review.product_id+"')";
		db.execute(sql, function(status){
			callback(status);
		});
	},
}