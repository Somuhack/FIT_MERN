const jwt = require("jsonwebtoken")
const JWTverify=(req,res,next)=>{
    if(!(req.headers.authorization) || !(req.headers.authorization.split(" ")[0]=="Bearer")){
           return res.status(404).json({msg:"Invalid Access",success:false})
    }

    const token = req.headers.authorization.split(" ")[1]
    
    const decode = jwt.verify(token,process.env.JWT_SCRECT_KEY)
    if(!decode){
        return res.status(400).json({msg:"Invalid Credetional",success:false})
    }
    req.user=decode
    next()
}
module.exports=JWTverify