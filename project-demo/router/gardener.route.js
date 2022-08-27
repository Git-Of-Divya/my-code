const express = require('express');
const route = express.Router();
const gardenerController = require('../controller/gardener.controller');
const { body } = require('express-validator');
const multer = require('multer');

var storage = multer.diskStorage({
   destination: "public/images",
   filename: function (req, file, cb) {
       cb(null, Date.now() + "-" + file.originalname);
   },
});

var upload = multer({storage: storage})

route.post("/signUp",upload.single('gardenerImage'),
   body('gardenerName').notEmpty(),
   body('gardenerEmail').notEmpty().isEmail(),
   body('gardenerPassword').notEmpty().isLength(8),
   body('gardenerMobile'),
   body('gardenerAddress').notEmpty(),
   gardenerController.signUp
);

route.post("/signin",
    body("gardenerEmail").notEmpty().isEmail(),
    body("gardenerPassword").notEmpty(),
    gardenerController.signIn
);

route.post("/edit",upload.single("gardenerImage"),
    body("gardenerName").notEmpty(),
    body("gardenerEmail").notEmpty().isEmail(),
    body("gardenerMobile").notEmpty().isMobilePhone(),
    body("gardenerAddress").notEmpty(),
    body("gardenerId").notEmpty(),
    gardenerController.updateProfile
);

route.get("/user-list",gardenerController.userList);

module.exports = route;