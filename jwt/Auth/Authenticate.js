const { response } = require('express');
const jwt = require('jsonwebtoken');

exports.tokenAuth = (request,response,next) =>{
  
    console.log(request.headers.authorization);
    if(!request.headers.authorization){
      return response.status(401).send("not geneiune request");
    }else if(request.headers.authorization==null){
      return response.status(401).send("token is null")
    }else{
      let token = request.headers.authorization.split(" ")[1];
      console.log(token);
      let payload = jwt.verify(token,"Dipu");
      next();
    }
  }
  

