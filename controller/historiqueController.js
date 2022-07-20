const historiqueModel = require("../model/historiqueModel")

const findAllHistorique = async(req, res) =>{
       try{

              const historique = await historiqueModel.findHistorique(req.userId)
              res.status(200).json(historique)
              console.log(historique)
       }
       catch(error){
              console.log(error)
              res.status(500).send("server error")
       }
}

module.exports = {
       findAllHistorique
}