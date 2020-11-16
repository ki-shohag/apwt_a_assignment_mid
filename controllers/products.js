const express 	= require('express');
const productsModel = require.main.require('./models/productModel');
const router 	= express.Router();

router.get('/', (req, res)=>{
	res.render('home/index');
});
router.post('/insert', (req, res)=>{
    var product = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        brand: req.body.brand
    };
    productsModel.getByName(product.name,function(result){
        if(result.length > 0){
            res.redirect('/home/products');
        }
        else{
            productsModel.insert(product, function(status){
                if(status ==true){
                    res.redirect('/home/products');
                }
                else{
                    res.redirect('/home/products');
                }
            });
        }
    });
});
router.get('/remove/:id', (req, res) =>{
    productsModel.delete(req.params.id,function(status){
        res.redirect('/home/products');
    });
});
module.exports = router;