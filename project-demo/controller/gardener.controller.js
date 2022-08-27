const { request } = require('express');
const gardener = require('../model/gardener.model');

exports.signUp = () =>{
    gardener.create(request.body)
    .then(result => {
        return response.status(200).json(result);
    })
    .catch(err => {
        console.log(err)
        return response.status(500).json(err);
    })
}

exports.signIn = () =>{
    gardener.findOne({
        gardenerEmail:request.body.gardenerEmail,
        gardenerPassword:request.body.gardenerPassword 
    })
    .then(result => {
        return response.status(200).json(result);
    })
    .catch(err => {
        return response.status(500).json(err);
    })
}

exports.updateProfile = () =>{
    gardener.updateOne({_id:request.body.gardenerId},{
        $set:
        {
         gardenerImage:request.file.filename,
         gardenerName:request.body.gardenerName,
         gardenerEmail:request.body.gardenerEmail,
         gardenerMobile:request.body.gardenerMobile,
         gardenerAddress:request.body.gardenerAddress,
         gardenerPassword:request.body.gardenerPassword,
         gardenerExperience:request.body.gardenerExperience
        }
    }).then(result=>{
        console.log(result)
        return response.status(200).json(result);
    })
    .catch(err=>{
        console.log(err);
       return response.status(500).json(err);
    })
}

exports.gardenerList = () =>{
    gardener.find()
    .then(result=>{
        if(result.length >0)
           return response.status(200).json(result);
        return response.status(500).json({message:"result not found"});     
    })
    .catch(err=>{
        return response.status(500).json({message:"something went wrong"});
    })
}