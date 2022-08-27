const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ProductController = require('./controller');

mongoose.connect("mongodb+srv://divya:awantika12345@cluster0.ooldz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then(result=>{
    console.log("Database connected");
})
.catch(err=>{
    console.log(err);
})

app.use(bodyParser.urlencoded({extended:true}));

app.use("/add-product",ProductController.addProduct);

app.use("/delete-product/:_id",ProductController.deleteProduct);

app.use("/update-product",ProductController.updateProduct);

app.use("/product-list",ProductController.productList);

app.use("/search-product",ProductController.searchProduct);

app.listen(3008,(err)=>{
    err?console.log(error):console.log("server running...");
})