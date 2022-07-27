const {query} = require("../functions/db")

const findHistorique = (userId) => {
       try{
              //var sqlQuery =" SELECT us.*, u.USER_EMAIL, u.NOM, u.PRENOM  FROM users_scan us";
              // sqlQuery +="LEFT JOIN  users u ON  u.USER_ID = us.ID_USERS_SCAN WHERE us.USER_ID=?";
              // return query(sqlQuery, [userId])
              // return query("SELECT us.*, u.USER_EMAIL, u.NOM, u.PRENOM  FROM users_scan us LEFT JOIN  users u ON  u.USER_ID = us.USER_ID WHERE us.USER_ID=? ORDER BY us.DATE_INSERT DESC ",[userId])
              return query("SELECT US.*, US.IS_SEND, U.USER_EMAIL, U.USER_PHONE, U.NOM, EV.EVENEMENT_NOM, EV.DEBUT, EV.FIN, EV.DATE_INSERT,P.NOM FROM users_scan US LEFT JOIN users U ON U.USER_ID=US.USER_ID LEFT JOIN evenement_evenement EV ON EV.EVENEMENT_ID=US.EVENEMENT_ID LEFT JOIN partenaire P ON P.PARTENAIRE_ID=EV.PARTENAIRE_ID WHERE US.USER_ID=? ORDER BY US.DATE_INSERT DESC", [userId])
       }
       catch(error){
              throw error
       }
}

module.exports = {
       findHistorique
}