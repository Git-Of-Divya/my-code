const { request } = require('express');
const nursery = require('../model/nursery.model');

exports.signUp = () =>{
    nursery.create(request.body)
    .then(result => {
        return response.status(200).json(result);
    })
    .catch(err => {
        console.log(err)
        return response.status(500).json(err);
    })
}

exports.signIn = () =>{
    nursery.findOne({
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
    nursery.updateOne({_id:request.body.nurseryId},{
        $set:
        {
         nurseryImage:request.file.filename,
         nurseryName:request.body.nurseryName,
         nurseryOwnerEmail:request.body.nurseryOwnerEmail,
         nurseryOwnerMobile:request.body.nurseryOwnerMobile,
         nurseryOwnerAddress:request.body.nurseryOwnerAddress,
         nurseryOnerPassword:request.body.nurseryOwnerPassword,
         nurseryOwnerName:request.body.nurseryOwnerName
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

exports.nurseryList = () =>{
    nursery.find()
    .then(result=>{
        if(result.length >0)
           return response.status(200).json(result);
        return response.status(500).json({message:"result not found"});     
    })
    .catch(err=>{
        return response.status(500).json({message:"something went wrong"});
    })
}
