const {query} = require("../functions/db")

const findAll = async () => {
       try{
              return query("SELECT PARTENAIRE_ID, NOM, PHONE, EMAIL, LOGO, STATUT, LATITUDE, LONGITUDE, DATE_INSERT, NEW_ID FROM partenaire WHERE 1")
       }
       catch(error){
              throw error
       }
}

module.exports={
       findAll
}