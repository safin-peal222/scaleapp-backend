const express = require('express');
const router = express.Router();
const ContactController = require('../controllers/ContactController');
const ProductController = require('../controllers/ProductController');
const LoginController = require('../controllers/LoginController')
const CarouselController = require('../controllers/CarouselController')
const EmployeeController = require('../controllers/EmployeeController')
const  {checkAuthentication}= require('../middleware/checkAuth');


//Authentication
router.post('/login',LoginController.login);
router.post('/check-authentication',LoginController.check);

//Product
router.post('/upload',checkAuthentication,ProductController.uploadProduct);
router.post('/deleteproduct',checkAuthentication,ProductController.delete);
router.post('/updateproduct',checkAuthentication,ProductController.update);
router.get('/getproducts',ProductController.getProducts);
router.get('/gettopproducts',ProductController.getTopProducts);
router.post('/getdetails',ProductController.details);



//Notification
router.post('/contactinfo',ContactController.createContact);
router.get('/notification',ContactController.getContact);
router.post('/contactdelete',ContactController.deleteContact);


//Carousel
router.post('/add-image',checkAuthentication,CarouselController.store);
router.post('/delete',checkAuthentication,CarouselController.delete);
router.get('/carousel-image',CarouselController.get);

//Employee
router.post('/add-employee',checkAuthentication,EmployeeController.store);
router.post('/delete-employee',checkAuthentication,EmployeeController.delete);
router.get('/get-employee',EmployeeController.get);

module.exports=router;