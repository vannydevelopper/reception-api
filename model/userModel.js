const {query} = require("../functions/db")

const findBy = async (column, value) =>{
       try{
              var sqlQuery = `SELECT * FROM users  WHERE ${column} = ? AND (PROFIL = 2) `;
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
       ADRESSE
) => {
       try{
              return query(
                     "INSERT INTO users(PARTENAIRE_ID,PROFIL, USER_EMAIL, USER_PHONE, PASSWORD, NOM, PRENOM, ADRESSE) VALUES(?,?, ?, ?, ?, ?, ?, ?)",
                     [PARTENAIRE_ID, 3, USER_EMAIL, USER_PHONE, PASSWORD, NOM, PRENOM, ADRESSE]
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