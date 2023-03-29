const express = require('express');
const router = express.Router();
const ContactController = require('../controllers/ContactController');
const ProductController = require('../controllers/ProductController');
const LoginController = require('../controllers/LoginController')
const CarouselController = require('../controllers/CarouselController')
const EmployeeController = require('../controllers/EmployeeController')

//Authentication
router.post('/login',LoginController.login);
router.post('/check-authentication',LoginController.check);

//Product
router.post('/upload',ProductController.uploadProduct);
router.get('/getproducts',ProductController.getProducts);
router.get('/gettopproducts',ProductController.getTopProducts);
router.post('/getdetails',ProductController.details);
router.post('/deleteproduct',ProductController.delete);
router.post('/updateproduct',ProductController.update);


//Notification
router.post('/contactinfo',ContactController.createContact);
router.get('/notification',ContactController.getContact);
router.post('/contactdelete',ContactController.deleteContact);


//Carousel
router.post('/add-image',CarouselController.store);
router.post('/delete',CarouselController.delete);
router.get('/carousel-image',CarouselController.get);

//Employee
router.post('/add-employee',EmployeeController.store);
router.post('/delete-employee',EmployeeController.delete);
router.get('/get-employee',EmployeeController.get);

module.exports=router;