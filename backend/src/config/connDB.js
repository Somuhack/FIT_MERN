const mongoose = require("mongoose")
const URI="mongodb+srv://som:12345@cluster0.tzt1r.mongodb.net/FIT_MERN?retryWrites=true&w=majority&appName=Cluster0"
const connDB = async()=>{
    try {
        await mongoose.connect(URI);
    console.log("DB connected successfull");
    } catch (error) {
        console.log("DB connection failed", error);
        
    }
}
module.exports = connDB