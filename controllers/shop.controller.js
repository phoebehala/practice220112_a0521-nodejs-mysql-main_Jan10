const Product = require('../models/product.model')

exports.getProducts = (req,res,next) => {

    /*
    // data >>> [ [rows], [configs...] ] 
    Product.fetchAll().then((data) => {
        console.log(data);
    }).catch(err => console.log(err))
    */
    Product.fetchAll().then(([rowData, fieldData]) => {
        //console.log(rowData) 

        res.render('shop/product-list', {
            pageTitle: 'All Products',
            products: rowData
        })


    }).catch(err => console.log(err))
    
}

exports.getProductById= (req, res, next)=>{
    const prodId = req.params.productId  // get req.params.productId from localhost:3000/products/:productId
    
    Product.findById(prodId).then(([rowData, fieldData])=>{
        console.log(rowData);
        // send back to view
        res.render('shop/product-detail',{
            pageTitle: rowData[0].title,
            product: rowData[0]
        })
    }).catch((err)=>{
        console.log(err);
    })
}



