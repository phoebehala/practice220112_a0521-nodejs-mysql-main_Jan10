const router = require('express').Router()

const adminController = require('../controllers/admin.controller')

// for admin only ---- middleware to check users if roles !==admin from accessing below routes
router.get('/add-product', adminController.getAddProduct)

router.post('/add-product', adminController.postAddProduct)

router.get('/edit-product/:productId', adminController.getEditProduct)

router.post('/edit-product', adminController.postEditProduct)

router.post('/delete-product', adminController.postDeleteProduct)

module.exports = router