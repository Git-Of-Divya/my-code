const User = require('../model/userModel');
const jwt = require('jsonwebtoken');


exports.signUp = (request, response, next) => {
    console.log(request.body);
    User.create(request.body)
    .then(result=>{
       return response.status(200).json(result);
    })
    .catch(err=>{
        console.log(err);
       return response.status(500).json(err);
    })
}

exports.signIn = (request, response, next) => {
    User.findOne({
        userEmail: request.body.userEmail,
        userPassword: request.body.userPassword
    })
        .then(result => {
            if (result) {
                let payload = { subject: result._id }
                let token = jwt.sign(payload, 'Dipu')
                return response.status(200).json({result:result,token:token});
            }
           
        })
        .catch(err => {
            return response.status(402).json({msg:"No user Found"});
        })
}

exports.update = (request,response,next) =>{
    console.log(request.body);
    User.updateOne({_id: request.body.userId},
        {
            $set:{
                userName:request.body.userName,
                userEmail:request.body.userEmail,
                userPassword:request.body.userPassword
            }
        }
    ).then(result=>{
        console.log(result);
       return response.status(200).json(result);
    })
    .catch(err=>{
       return response.status(500).json(err);
    })
}