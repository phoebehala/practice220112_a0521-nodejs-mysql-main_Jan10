const Product = require('../models/product.model')

exports.getAddProduct = (req,res,next) => {
    res.render('shop/add-edit-product', {
        pageTitle: 'Add Product',
        editing: false
    })
}

exports.postAddProduct = (req,res,next) => {
    // to extract incoming request bodies
    const { title, imageUrl, description, price } = req.body

    // to ask (Products) model to communicate with db
    // to instanciate
    const product = new Product(null, title, imageUrl, description, price)
    product.save()
    res.redirect('/')   // localhost:3000/
}

exports.getEditProduct = (req,res,next) => {
    const editMode = req.query.edit     // "localhost:3000/edit-product/<%= product.id %>?edit=true" from product-list.ejs
    console.log('editMode:',editMode);
    
    if(!editMode) res.redirect('/')  // http://localhost:3000/edit-product/3?edit=

    const prodId = req.params.productId  // get req.params.productId from localhost:3000/edit-product/:productId
    
    // to ask (Products) model to communicate with db
    Product.findById(prodId)
    .then(([rowData, fieldData]) => {
        //console.log(rowData); // [{}]
        console.log(rowData[0]); // {}

        // send back to view
        res.render('shop/add-edit-product', {
            pageTitle: 'Edit Product',
            editing: editMode,
            product: rowData[0]
        })
    })
    .catch(err => console.log(err))
}

exports.postEditProduct = (req,res,next) => {
    const {productId, title, imageUrl, description, price} = req.body
    const updatedProduct = new Product(productId, title, imageUrl, description, price)
    updatedProduct.edit()
    res.redirect('/')
}

exports.postDeleteProduct = (req,res, next) =>{
    const prodId = req.body.productId  
    
    // to ask (Products) model to communicate with db
    Product.deleteById(prodId)
    res.redirect('/')
}
