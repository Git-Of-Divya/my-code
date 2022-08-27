const { response, request } = require('express');
const product = require('./model');

exports.addProduct = (request, response, next) => {
    product.create(request.body)
        .then(result => {
            return response.status(200).json(result);
        })
        .catch(err => {
            return response.status(500).json({ error: "Internal server error" });
        })
}

exports.deleteProduct = (request, response, next) => {
    console.log(request.params._id);
    product.deleteOne({ _id: request.params._id })
        .then(result => {
            console.log(result);
            if (result.deletedCount == 1)
                return response.status(201).json({ Message: "deleted..." });
            return response.status(201).json({ message: "not deleted..." });
        })
        .catch(err => {
            console.log(error);
            return response.status(500).json({ error: "Internal server error" });
        })
}

exports.updateProduct = (request, response, next) => {
    product.updateOne({_id: request.body.productId }, {
        $set: {
            productName: request.body.productName,
            productDescription: request.body.productDescription,
            productPrice: request.body.productPrice
        }
    })
        .then(result => {
            return response.status(200).json(result);
        })
        .catch(err => {
            return response.status(500).json(error);
        })
}

exports.productList = (request, respoonse, next) => {
    product.find(request.body)
        .then(result => {
            return response.status(200).json(result);
        })
        .catch(err => {
            return response.status(500).json(error);
        })
}

exports.searchProduct = (request, response, next) => {
    var regex = new RegExp(request.body.searchText, 'i');
    product.find({
        $or: [
            { productName: regex },
            { productDescription: regex }
        ]
    })
        .then(result => {
            if (result.length > 0)
                return response.status(201).json(result);
            return response.status(201).json({ message: "No result found.." });
        })
        .catch(err => {
            return response.status(500).json(error);
        })
}

// exports.searchByCategory = (request,response,next) =>{
    
// }
