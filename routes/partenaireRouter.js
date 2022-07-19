const express = require("express")

const partenaireController = require("../controller/partenaireController")

const partenaireRouter = express.Router()
partenaireRouter.get("/",partenaireController.findAllPartenaire)

module.exports = partenaireRouter