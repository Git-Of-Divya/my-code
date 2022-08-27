const express = require('express');
const route = express.Router();
const { body } = require('express-validator');
const productController = require('../controller/productController');
const jwtAuth = require('../Auth/Authenticate');

route.post("/add-product",
   body('productName').notEmpty(),
   body('productPrice').isNumeric().notEmpty(),
   body('productDescription').notEmpty(),
   jwtAuth.tokenAuth,
   productController.addProduct
);

route.get("/delete-product/:_id",jwtAuth.tokenAuth, productController.deleteProduct);

route.post("/edit-product",
   body('productName').notEmpty(),
   body('productDescription').notEmpty(),
   body('productPrice').isNumeric().notEmpty(),
   jwtAuth.tokenAuth,
   productController.updateProduct
);

route.get("/product-list",productController.productList);

route.get("/search-Product",productController.searchProduct);

module.exports = route;