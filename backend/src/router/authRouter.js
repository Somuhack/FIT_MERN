const express = require("express")
const JWTverify = require("../middleware/jwtVerifyMiddleware")
const router = express.Router()
const { Register, Login, Logout, Profile } = require("../controller/userAuthController")
router.post("/register", Register)
router.post("/login", Login)
router.post("/logout", Logout)
router.get("/profile",JWTverify,Profile)
module.exports = router