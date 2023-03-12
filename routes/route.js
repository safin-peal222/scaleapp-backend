const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/ProductController');
const LoginController = require('../controllers/LoginController')

router.post('/upload',ProductController.uploadProduct);

router.get('/getproducts',ProductController.getProducts);

router.post('/login',LoginController.login);

router.post('/check-authentication',LoginController.check);

router.post('/getdetails',ProductController.details);

module.exports=router;