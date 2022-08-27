const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;
const userRouter = require('./router/userRouter');
const productRouter = require('./router/productRouter');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

mongoose.connect('mongodb://divya:lucky123@cluster0-shard-00-00.ooldz.mongodb.net:27017,cluster0-shard-00-01.ooldz.mongodb.net:27017,cluster0-shard-00-02.ooldz.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-99g2lj-shard-0&authSource=admin&retryWrites=true&w=majority')
.then(result=>{
       console.log("Database connected...");
       app.use("/user",userRouter);
       app.use("/product",productRouter);
       app.listen(port,(err)=>{
       err?console.log(err):console.log("server started on port "+port);
    });
})
.catch(err=>{
    console.log(err)
    console.log("Database not connected...");
})

