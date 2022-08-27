const express = require('express');
const route = express.Router();
const userController =require('../controller/userController');
const jwtAuth = require('../Auth/Authenticate');

route.post("/signUp",userController.signUp);
route.post("/signIn",userController.signIn);
route.post("/update",jwtAuth.tokenAuth,userController.update);

module.exports = route;