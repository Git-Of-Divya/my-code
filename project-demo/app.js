const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { Result } = require('express-validator');
const { response } = require('express');
const userRouter = require('./router/user.route');
const productRouter = require('./router/product.route');
const gardenerRouter = require('./router/gardener.route');
const adminRouter = require('./router/admin.route');
const nurseryRouter = require('./router/nursery.route');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

mongoose.connect("mongodb+srv://divya:awantika12345@cluster0.ooldz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    .then(result => {
        console.log("Database connected..");
        app.use("/user", userRouter);
        app.use("/product", productRouter);
        app.use("/gardener", gardenerRouter);
        app.use("/nursery", nurseryRouter);
        app.use("/admin", adminRouter);
    })
    .catch(err => {
        console.log("Database not connected...");
    })

app.listen(3000, (err) => {
    err ? console.log(error) : console.log("server running...");
})