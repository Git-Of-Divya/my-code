const { request, response } = require('express');
const admin = require('../model/admin.model');
const category = require('../model/category.model');
const nursery = require('../model/nursery.model');
const gardener = require('../model/gardener.model');
const user = require('../model/user.model');

exports.signIn = (request,response,next) =>{
    admin.findOne({
        adminEmail:request.body.adminEmail,
        adminPassword:request.body.adminPassword 
    })
    .then(result => {
        return response.status(200).json(result);
    })
    .catch(err => {
        return response.status(500).json(err);
    })
}

exports.addCtegory = (request,response,next) =>{
    category.create(request.body)
    .then(result=>{
        return response.status(200).json(result);
    })
    .catch(err=>{
       return response.status(500).json(errr);
    })
}

exports.updateCategory = (request,response,next) =>{
    category.updateOne({_id:request.body.categoryId},{
        $set:{
           categoryName:request.body.categoryName,
           categoryImage:request.body.categoryImage
        }
    })
    .then(result=>{
        return response.status(200).json(result);
    })
    .catch(err=>{
       return response.status(500).json(errr);
    })

}

exports.deleteCategory = (request,response,next)=>{
    category.deleteOne({_id:request.body.categoryId})
    .then(result=>{
        return response.status(200).json(result);
    })
    .catch(err=>{
       return response.status(500).json(errr);
    })
}

exports.categoryList = (request,response,next)=>{
    category.find()
    .then(result=>{
        return response.status(200).json(result);
    })
    .catch(err=>{
       return response.status(500).json(errr);
    })
}

exports.categoryById = (request, response) => {
    Category.findOne({ _id: request.params.id })
        .then(result => {
            if (result)
                return response.status(200).json(result);
            else
                return response.status(401).json({ message: "Result Not Found..." });
        })
        .catch(err => {
            return response.status(500).json({ error: "Internal server error.." });
        });
}

exports.nurserList = (request,response,next) =>{
    nursery.find()
    .then(result=>{
        return response.status(200).json(result);
    })
    .catch(err=>{
       return response.status(500).json(errr);
    })
}

exports.gardenerList = (request,response,next) =>{
    gardener.find()
    .then(result=>{
        return response.status(200).json(result);
    })
    .catch(err=>{
       return response.status(500).json(errr);
    })
}

exports.userList = (request,response,next) =>{
    user.find()
    .then(result=>{
        return response.status(200).json(result);
    })
    .catch(err=>{
       return response.status(500).json(errr);
    })
}




