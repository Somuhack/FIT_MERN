 const express = require("express")
 const {Home,Product} = require("../controller/basicController")
 const router=express.Router()
router.get("/home",Home)
router.get("/product",Product)

 module.exports=router