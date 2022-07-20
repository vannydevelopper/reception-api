const express = require("express")
const scanController = require("../controller/scanController")

const scanRouter = express.Router()
scanRouter.post("/qrecode", scanController.create)

module.exports = scanRouter