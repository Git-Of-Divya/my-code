const express = require('express');
const { request } = require('http');
const app = express();
const mongoose = require('mongoose');
const Product = require('./model');
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://divya:awantika12345@cluster0.ooldz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    .then((result) => {
        console.log("Database connected");
    })
    .catch((err) => {
        console.log(err);
    })

app.get("/home", (request, response, next) => {
    return response.status(200).json({ message: 'This is a home page' });
})

app.post("/add-product", (request, response, next) => {
    console.log(request.body)
    Product.create(request.body)
        .then(result => {
            return response.status(200).json(result);
        })
        .catch(err => {
            return response.status(500).json({ error: "Internal server error" });
        });
})

app.post("/delete-product", (request, response, next) => {
    console.log(request.body);
    Product.deleteOne({ _id: request.body.productId })
        .then(result => {
            return response.status(200).json(result);
        })
        .catch(err => {
            return response.status(500).json({ error: "Internal server error" });
        })
})

app.get("/product-list", (request, response, next) => {
    Product.find(request.body)
        .then(result => {
            return response.status(200).json(result);
        })
        .catch(err => {
            return response.status(500).json({ error: "Internal server error" });
        })
})

app.post("/edit-product", (request, response, next) => {
    console.log(request.body)
    Product.updateOne({ _id: request.body.productId }, {
        $set: {
            productName: request.body.productName,
            productDescription: request.body.productDescription,
            productPrice: request.body.productPrice
        }
    })
        .then(result => {
            console.log(result);
            return response.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ error: "Interval server error" });
        })
})

app.post("/search-product", (request, response, next) => {
    var regex = new RegExp(request.body.searchText, 'i');
    Product.find({
        $or: [
            { productName: regex },
            { productDescription: regex },
        ]
    })
        .then(result => {
            console.log(result);
            if (result.length > 0)
                return response.status(201).json(result);
            else
                return response.status(201).json({ message: "No Result Found...." });
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ error: "Internal server error" });
        })
})

app.post("/product-by-category/:name", (request, response, next) => {
    Product.find({ ctegoryName: request.params.name })
        .then(result => {
            return response.status(200).json(error);
        })
        .catch(err => {
            return response.status(500).json({ error: "Internal server error" });
        })
})

app.listen(3005, (err) => {
    err ? console.log(error) : console.log("server running...");
})