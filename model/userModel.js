const {query} = require("../functions/db")

const findBy = async (column, value) =>{
       try{
              var sqlQuery = `SELECT * FROM users  WHERE ${column} = ? AND (PROFIL = 2 || PROFIL = 3 ) `;
              return query(sqlQuery, [value]);
       }
       catch(error){
              throw error
       }
};

const createOne = async (
       PARTENAIRE_ID,
       USER_EMAIL,
       USER_PHONE,
       PASSWORD,
       NOM,
       PRENOM,
       ADRESSE,
       SEXE = null
) => {
       try{
              return query(
                     "INSERT INTO users(PARTENAIRE_ID,PROFIL, USER_EMAIL, USER_PHONE, PASSWORD, NOM, PRENOM, ADRESSE, SEXE) VALUES(?,?, ?, ?, ?, ?, ?,?, ?)",
                     [PARTENAIRE_ID, 3, USER_EMAIL, USER_PHONE, PASSWORD, NOM, PRENOM, ADRESSE, SEXE]
              );
       }
       catch(error){
              throw error
       }
}

module.exports={
       findBy,
       createOne
}