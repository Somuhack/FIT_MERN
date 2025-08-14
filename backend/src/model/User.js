const { name } = require("ejs");
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: String,
    email:{
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(email) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            }
    }
    },
    password: String,
    phone: String,
    address: String,
    role :{
        type:String,
        default:"user",
        enum:["user","admin"]
    }
}) 
const User = mongoose.model("User",userSchema)
module.exports = User;