const express = require("express")

const historiqueController = require("../controller/historiqueController")

const historiqueRouter = express.Router()
historiqueRouter.get("/", historiqueController.findAllHistorique)

module.exports = historiqueRouter