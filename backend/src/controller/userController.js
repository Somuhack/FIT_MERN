const User = require("../model/User")

const AddUserDataController = async(req,res)=>{
   try {
    await User.create(req.body)
      return res.status(200).json({msg:"User Data is Added",data:req.body})
   } catch (error) {
    return res.status(500).json({msg:"Server Error!!",error:error.message})
   }
}
const GetDataController = async(req,res)=>{
    try {
        const userData = await User.find()
        return res.status(200).json({msg:"User Data is Fethed",data:userData})
    } catch (error) {
        return res.status(500).json({msg:"Sever Error!!",error:error.message})
    }
}
const DeleteDataController = async(req,res)=>{
    try {
        const {id}=req.params
        await User.findByIdAndDelete(id)
        return res.status(200).json({msg:"User Data is Deleted"})
    } catch (error) {
       return res.status(500).json({msg:"Sever Error!!",error:error.message})
    }
}
module.exports = {
      AddUserDataController,
      GetDataController,
      DeleteDataController,
}