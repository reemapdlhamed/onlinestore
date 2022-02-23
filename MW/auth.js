const jwt=require("jsonwebtoken");

module.exports=(request,response,next)=>{
        let token,decode;
    try{
        token = localStorage.getItem('token'); 
        //token=request.get("Authorization").split(" ")[1];
        console.log(token)
        decode=jwt.verify(token,process.env.SECRET_KEY)

    }catch(error)
    {
        error.message="No Authorized";
        error.status=403;
        next(error);
    }
    if(decode!==undefined)
    {
       request.role=decode.role; 
       request.email=decode.email; 

      next();              
    }


}