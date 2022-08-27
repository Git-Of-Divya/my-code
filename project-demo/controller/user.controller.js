const User = require('../model/user.model');

exports.signUp = (request, response, next) => {
    console.log(request.body);
    User.create(request.body)
        .then(result => {
            return response.status(200).json(result);
        })
        .catch(err => {
            console.log(err)
            return response.status(500).json(err);
        })
}

exports.signIn = (request, response, next) => {
    console.log(request.body);
    User.find({
        userEmail: request.body.userEmail,
        userPassword: request.body.userPassword
    })
        .then(result => {
            return response.status(201).json(result);
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json(err);
        })
}

exports.updateProfile = (request,response,next) =>{
    console.log(request.body);
    User.updateOne({_id:request.body.userId},{
        $set:
        {
         userImage:request.file.filename,
         userName:request.body.userName,
         userEmail:request.body.userEmail,
         userMobile:request.body.userMobile,
         userAddress:request.body.userAddress,
         userPassword:request.body.userPassword
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

exports.userList = (request,response,next) =>{
    User.find()
    .then(result=>{
        if(result.length >0)
           return response.status(200).json(result);
        return response.status(500).json({message:"result not found"});     
    })
    .catch(err=>{
        return response.status(500).json({message:"something went wrong"});
    })
}