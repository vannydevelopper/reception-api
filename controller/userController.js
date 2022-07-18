const Validation = require("../class/Validation");
const { query } = require("../functions/db");
const generateToken = require("../functions/generateToken");
const md5 = require("md5");
const userModel = require("../model/userModel")

const login = async (req,res) =>{
       try{
              const{email, password}=req.body
              const validation = new Validation(
                     req.body,
                     {
                            email: "required",
                            password: {
                                      required: true,
                                      length: [8],
                            },
                     },
                     {
                            email: {
                                   required: "L'email est requis",
                            },

                            password: {
                                   required:  "Le mot de passe est requis",
                                   length:  "Mot de passe trop court",
                            },
                     }
              );
              validation.run();
              if(!validation.isValidate()){
                     return res.status(422).json({ errors: validation.getErrors() });
              }
              var user = (await userModel.findBy("USER_EMAIL", email))[0];
              console.log(md5("12345678"))
              if(user){
                    if(user.PASSWORD == md5(password)) {
                            if(user.PROFIL == 2){
                                   var sqlQuery ="SELECT PARTENAIRE_ID, NOM, PHONE, EMAIL, LOGO, DATE_INSERT FROM partenaire";
                                   sqlQuery +=" WHERE PARTENAIRE_ID = ? ORDER BY DATE_INSERT DESC LIMIT 1";
                                   const partenaire = (await query(sqlQuery, [user.PARTENAIRE_ID]))[0];
                                   console.log(partenaire, user.PARTENAIRE_ID)
                                   if(partenaire){
                                          user = {...user, ...partenaire};
                                   }else{
                                          const errors ={
                                                 main: "Identifiants incorrects",
                                          };
                                          return res.status(404).json({ errors });
                                   }
                            }
                            // const re = await query(
                            //        "UPDATE users SET LATITUDE = ?, LONGITUDE = ?, IS_ACTIF = 1 WHERE ID_UTILISATEUR = ?",
                            //        [lat, long, user.ID_UTILISATEUR]
                            // );
                            var tokenData = { ...user };
                            res.status(200).json({
                                   success: true,
                                   message: "vous avez été connecté avec succès",
                                   TOKEN: generateToken(tokenData, 3600 * 24 * 365 * 3),
                                   ...tokenData,
                         });
                    }else{
                            const errors = {
                                   main:"Identifiants incorrects",
                            }
                            res.status(404).json({ errors });
                    }
              }else{
                     const errors = {
                            main:"Identifiants incorrects",
                     }
                     res.status(404).json({ errors });
              }
       }
       catch(error){
              console.log(error)
              resizeBy.status(500).send("server error")
       }
}

module.exports = {
       login 
}