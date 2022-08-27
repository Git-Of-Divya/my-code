const express = require('express');
const route = express.Router();
const userController = require('../controller/user.controller');
const { body } = require('express-validator');
const multer = require('multer');

var storage = multer.diskStorage({
   destination: "public/images",
   filename: function (req, file, cb) {
       cb(null, Date.now() + "-" + file.originalname);
   },
});

var upload = multer({storage: storage})

route.post("/signUp",upload.single('userImage'),
   body('userName').notEmpty(),
   body('userEmail').notEmpty().isEmail(),
   body('userPassword').notEmpty().isLength(8),
   body('userMobile'),
   body('userAddress').notEmpty(),
   userController.signUp
);

route.post("/signin",
    body("userEmail").notEmpty().isEmail(),
    body("userPassword").notEmpty(),
    userController.signIn
);

route.post("/edit",upload.single("userImage"),
    body("userName").notEmpty(),
    body("userEmail").notEmpty().isEmail(),
    body("userMobile").notEmpty().isMobilePhone(),
    body("userAddress").notEmpty(),
    body("userId").notEmpty(),
    userController.updateProfile
);

route.get("/user-list",userController.userList);

module.exports = route;