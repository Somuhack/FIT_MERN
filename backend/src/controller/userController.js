const User = require("../model/User")

const AddUserDataController = async(req,res)=>{
    const mydata ={
        name:"Riik Dhara",
        email:"rik12@gmail.com",
        password:"123456",
        phone:"1234567890",
        address:"India",
    }
    const isDataAdded = new User(mydata)
    await isDataAdded.save()
    console.log("Data added successfully");
    
}
module.exports = {AddUserDataController}