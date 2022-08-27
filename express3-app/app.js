const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { response } = require('express');
const productRouter = require('./route');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://divya:awantika12345@cluster0.ooldz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then(result=>{
   console.log("Database connected...");
})
.catch(err=>{
    console.log(err);
})

app.use("/product",productRouter);

app.listen(3002,(err)=>{
    err?console.log(error):console.log("Server started...")
})
