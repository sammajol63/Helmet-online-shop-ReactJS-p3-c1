const express = require('express');
const router = express.Router();
const controller = require('../controller/controller')
const {authentication} = require('../middleware/author')

router.post('/register', controller.register)
router.post('/login', controller.login)
router.use(authentication)
router.post('/addProduct', controller.addProduct)
router.post('/addCategory', controller.addCategory)
router.get('/readProduct', controller.readProduct)
router.get('/readCategory', controller.readCategory)
router.get('/detailProduct/:slug', controller.detailProduct)
router.delete('/destroyProduct/:id', controller.destroyProduct)
router.delete('/destroyCategory/:id', controller.destroyCategory)
module.exports = router