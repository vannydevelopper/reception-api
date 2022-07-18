const express = require("express")
const userController = require("../controller/userController")

const userRouter = express.Router()
userRouter.post("/login",userController.login)

module.exports = userRouter