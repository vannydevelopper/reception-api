const express = require("express")
const jsonController = require("../controller/jsonController")

const jsonRouter = express.Router()
jsonRouter.post("/json", jsonController.createDocument)


module.exports = jsonRouter