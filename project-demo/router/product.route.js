const express = require('express');
const route = express.Router();
const { body } = require('express-validator');
const productController = require('./controller');
const multer = require('multer');

var storage = multer.diskStorage({
   destination: "public/images",
   filename: function (req, file, cb) {
       cb(null, Date.now() + "-" + file.originalname);
   },
});

var upload = multer({storage: storage})

route.post("/add-product",upload.single('productImage'),
   body('productName').notEmpty(),
   body('productPrice').isNumeric().notEmpty(),
   body('productDescription').notEmpty(),
   productController.addProduct
);

route.get("/delete-product/:_id", productController.deleteProduct);

route.post("/edit-product",upload.single('productImage'),
   body('productName').notEmpty(),
   body('productDescription').notEmpty(),
   body('productPrice').isNumeric().notEmpty(),
   productController.updateProduct
);

route.get("/product-list",productController.productList);

route.get("/search-Product",productController.searchProduct);

module.exports = route;