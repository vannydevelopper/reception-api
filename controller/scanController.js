const Validation = require("../class/Validation")
const scanModel = require("../model/scanModel")

const create = async (req, res) => {
       try{
              const {PATH} = req.body
              const validation = new Validation(req.body)
              validation.run();
              if (!validation.isValidate()) {
                     return res.status(422).json({ errors: validation.getErrors() });
               }
              const { insertId } = await scanModel.createOne(
                     req.userId,
                     PATH,
              );
              const user = (await scanModel.findById("ID_USERS_SCAN", insertId))[0];
              res.status(200).json({
                     succes: true,
                     message:"L'enregistrement est faites avec succes"
              });
       }
       catch(error){
              console.log(error)
              res.status(500).send("server error")
       }
}

module.exports={
       create
}