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
              //console.log(md5("12345678"))
              if(user){
                    if(user.PASSWORD == md5(password)) {
                            if(user.PROFIL == 2){
                                   var sqlQuery ="SELECT PARTENAIRE_ID, NOM, PHONE, EMAIL, LOGO, DATE_INSERT FROM partenaire";
                                   sqlQuery +=" WHERE PARTENAIRE_ID = ? ORDER BY DATE_INSERT DESC LIMIT 1";
                                   const partenaire = (await query(sqlQuery, [user.PARTENAIRE_ID]))[0];
                                   //console.log(partenaire, user.PARTENAIRE_ID)
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
                            var tokenData = { user:user.USER_ID };
                            res.status(200).json({
                                   success: true,
                                   message: "vous avez été connecté avec succès",
                                   TOKEN: generateToken(tokenData, 3600 * 24 * 365 * 3),
                                   ...user,
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

const create = async (req, res) => {
       try{
              const {PARTENAIRE_ID, USER_EMAIL,PASSWORD, USER_PHONE, NOM, PRENOM, ADRESSE } = req.body
              var errors = {}
              const existEmail = (
                     await query ("SELECT * FROM users WHERE USER_EMAIL = ?",
                     [USER_EMAIL])
              ) [0];

              const existNumero = (
                     await query("SELECT * FROM users WHERE USER_PHONE = ?",
                     [USER_PHONE])
              )[0];
              const validation = new Validation(
                     req.body,
                     {
                            PASSWORD: {
                                   required: true,
                                   length: [8],
                            },
                            PARTENAIRE_ID:"required",
                            USER_EMAIL: "required",
                            USER_PHONE: "required",
                            NOM: "required",
                            PRENOM: "required",
                            ADRESSE: "required", 
                     },
                     {      
                            PARTENAIRE_ID: {
                                   required: "Le pertenaire est requis",
                            },
                            PASSWORD: {
                                   required: "Le mot de passe est requis",
                                   length:  "Mot de passe trop court",
                            },
                            USER_EMAIL: {
                                   required: "Le nom est requis",
                            },
                            USER_PHONE: {
                                   required: "Le nom est requis",
                            },
                            NOM: {
                                   required: "Le nom est requis",
                            },
                            PRENOM: {
                                   required: "Le nom est requis",
                            },
                            ADRESSE: {
                                   required: "Le nom est requis",
                            },
                     }
              );
              validation.run();

              if (existEmail)
              validation.setError(
                     "USER_EMAIL",
                     "Le même email existe déjà"
              );

              if(existNumero) validation.setError(
                     "USER_PHONE",
                     "Le même numero existe déjà"
              )

              if (!validation.isValidate()) {
                        return res.status(422).json({ errors: validation.getErrors() });
              }
              const { insertId } = await userModel.createOne(
                     PARTENAIRE_ID,
                     USER_EMAIL,
                     USER_PHONE,
                     md5(PASSWORD),
                     NOM,
                     PRENOM,
                     ADRESSE
              );
              const user = (await userModel.findBy("USER_ID", insertId))[0];
              var tokenData = { user:user.USER_ID };
              res.status(200).json({
                     ...user,
                     TOKEN: generateToken(tokenData, 3600 * 24 * 365 * 3),
              });
       }
       catch(error){
              console.log(error)
              res.status(500).send("server error")
       }
}

module.exports = {
       login,
       create
}