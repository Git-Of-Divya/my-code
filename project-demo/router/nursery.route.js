const express = require('express');
const route = express.Router();
const nurseryController = require('../controller/nursery.controller');
const { body } = require('express-validator');
const multer = require('multer');

var storage = multer.diskStorage({
   destination: "public/images",
   filename: function (req, file, cb) {
       cb(null, Date.now() + "-" + file.originalname);
   },
});

var upload = multer({storage: storage})

route.post("/signUp",upload.single('nurseryImage'),
   body('nurseryName').notEmpty(),
   body('nurseryOwnerEmail').notEmpty().isEmail(),
   body('nurseryOwnerPassword').notEmpty().isLength(8),
   body('nurseryOwnerMobile'),
   body('nurseryOwnerAddress').notEmpty(),
   body('nurseryOwnerName').notEmpty(),
   nurseryController.signUp
);

route.post("/signin",
    body("nurseryEmail").notEmpty().isEmail(),
    body("nurseryPassword").notEmpty(),
    nurseryController.signIn
);

route.post("/edit",upload.single("nurseryImage"),
    body("nurseryName").notEmpty(),
    body("nurseryEmail").notEmpty().isEmail(),
    body("nurseryMobile").notEmpty().isMobilePhone(),
    body("nurseryAddress").notEmpty(),
    body("nurseryId").notEmpty(),
    nurseryController.updateProfile
);

route.get("/user-list",nurseryController.userList);

module.exports = route;