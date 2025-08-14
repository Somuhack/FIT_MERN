const express = require("express")
const { AddUserDataController } = require("../controller/userController")
const router = express.Router()

router.get("/add-user", AddUserDataController)

module.exports = router