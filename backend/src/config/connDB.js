const mongoose = require("mongoose")
const URI=process.env.DATABASE_URL
const connDB = async()=>{
    try {
        await mongoose.connect(URI);
        console.log("DB connected successfull");
    } catch (error) {
        console.log("DB connection failed", error);
    }
}
module.exports = connDB