const partenaireModel = require("../model/partenaireModel")

const findAllPartenaire = async (req, res) =>{
       try{
              const partenaire = await partenaireModel.findAll()
              res.status(200).json(partenaire)
       }
       catch(error){
              console.log(error)
              res.status(500).send("server error")
       }
}

module.exports = {
       findAllPartenaire
}