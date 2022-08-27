const { Result } = require('express-validator');
const product = require('./model');

exports.addProduct = (request, response, next) => {
    console.log(request.body);
    product.create(request.body)
        .then(result => {
            console.log("product added successfully...");
            return response.status(200).json(result);
        })
        .catch(err => {
            return response.status(500).json(err);
        })
}

exports.deleteProduct = (request, response, next) => {
    console.log(request.params._id);
    product.deleteOne({ _id: request.params._id })
        .then(result => {
            console.log(result);
            if (result.deletedCount == 1)
                return response.status(201).json({ message: 'deleted successfully' });
            return response.status(201).json({ message: 'not deleted' });
        })
        .catch(err => {
            return response.status(500).json(error);
        })
}

exports.updateProduct = (request, response, next) => {
    console.log(request.body);
    product.updateOne({ _id: request.body.productId }, {
        $set:
        {
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
            return response.status(500).json(err);
        })
}

exports.productList = (request, response, next) => {
    product.find()
        .then(result => {
            console.log(result);
            return response.status(200).json(result);
        })
        .catch(err => {
            return response.status(500).json(err);
        })
}

exports.searchProduct = (request, response, next) => {
    var regex = new RegExp(request.body.searchText, 'i');
    product.find({
        $or: [
            { productName: regex },
            { productDescription: regex },
        ]
    })
        .then(result => {
            return response.status(200).json(result);
        })
        .catch(err => {
            return response.status(500).json(err);
        })
}

