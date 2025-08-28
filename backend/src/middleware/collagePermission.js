const collagePermission =(req,res,next)=>{
      if(req.query.isclassStart){
        next()
      }
      else{
        res.send("Your collage is not permissed to strat the class right now")
      }
}
const istituePermisiion =(req,res,next)=>{
    if(req.query.isPaymentClear){
        next()
    }
    else{
        res.send("Your institute is not permissed to start the class right now")
    }
}
module.exports = {collagePermission,istituePermisiion}
