const Validation = require("../class/Validation")
const scanModel = require("../model/scanModel")

const create = async (req, res) => {
       try{
              const {PATH, EVENEMENT_ID} = req.body
              console.log(EVENEMENT_ID)
              const validation = new Validation(req.body)
              validation.run();
              if (!validation.isValidate()) {
                     return res.status(422).json({ errors: validation.getErrors() });
               }

              const  idEvenement = (await scanModel.findEvenementId(EVENEMENT_ID))[0];
               //console.log(idEvenement)
              // console.log(idEvenement.EVENEMENT_ID)
              if(!idEvenement == '') {
                     var evenementId= idEvenement.EVENEMENT_ID
                     const { insertId } = await scanModel.createOne(
                            req.userId,
                            PATH,
                            evenementId
                     );
                     res.status(200).json({
                            succes: true,
                            message:"L'enregistrement est faites avec succes"
                     });

                     //const user = (await scanModel.findById("ID_USERS_SCAN", insertId))[0];
                     //console.log(req.userId +" "+ PATH +" "+evenementId)

              }
              else{
                     res.status(401).json({
                            succes:false,
                            message:"L'enregistrement a ete echoue"
                     })
              } 
             
       }
       catch(error){
              console.log(error)
              res.status(500).send("server error")
       }
}

module.exports={
       create
}