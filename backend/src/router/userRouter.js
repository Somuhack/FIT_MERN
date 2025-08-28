const express = require("express")
const { AddUserDataController,GetDataController,DeleteDataController,UpdateDataController  } = require("../controller/userController")
const router = express.Router()

router.post("/add-user", AddUserDataController)
router.get("/getall-user", GetDataController)
router.delete("/delete-user/:id", DeleteDataController)
router.put("/update-user/:id", UpdateDataController)

module.exports = router