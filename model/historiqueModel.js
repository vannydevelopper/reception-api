const {query} = require("../functions/db")

const findHistorique = (userId) => {
       try{
              // var sqlQuery =" SELECT us.*, u.USER_EMAIL, u.NOM, u.PRENOM  FROM users_scan us";
              // sqlQuery +="LEFT JOIN  users u ON  u.USER_ID = us.ID_USERS_SCAN WHERE us.USER_ID=?";
              // return query(sqlQuery, [userId])
              return query("SELECT us.*, u.USER_EMAIL, u.NOM, u.PRENOM  FROM users_scan us LEFT JOIN  users u ON  u.USER_ID = us.USER_ID WHERE us.USER_ID=? ORDER BY us.DATE_INSERT DESC ",[userId])
       }
       catch(error){
              throw error
       }
}

module.exports = {
       findHistorique
}