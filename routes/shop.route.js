const express = require('express')
const router = express.Router()

const shopController = require('../controllers/shop.controller')

// for regular users
router.get('/', shopController.getProducts)

router.get('/products/:productId', shopController.getProductById )




module.exports = router