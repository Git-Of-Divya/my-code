const jwt = require('jsonwebtoken');

exports.tokenAuth = (request,response,next) =>{
   try{
     if(!request.headers.authorisation){
       return response.status(401).json({msg:"Not a genuine request"});
     }else if(request.headers.authorisation==null){
       return response.status(401).json({msg:"It is null"})
     }else {
        let token = request.token.authorisation.split(" ")[1];
        let payload = jwt.verify(token,"Dipu");
        next();
     }
   }
   catch(err){
      return response.status(500).json(err);
   }
}