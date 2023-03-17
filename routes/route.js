const express = require('express');
const router = express.Router();
const ContactController = require('../controllers/ContactController');
const ProductController = require('../controllers/ProductController');
const LoginController = require('../controllers/LoginController')

router.post('/upload',ProductController.uploadProduct);

router.get('/getproducts',ProductController.getProducts);

router.post('/login',LoginController.login);

router.post('/check-authentication',LoginController.check);

router.post('/getdetails',ProductController.details);
router.post('/contactinfo',ContactController.createContact);
router.get('/notification',ContactController.getContact);
router.post('/contactdelete',ContactController.deleteContact);

module.exports=router;