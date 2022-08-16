const {query} = require("../functions/db")

const findById = async (id) => {
       try {
         return query("SELECT * FROM users_scan WHERE ID_USERS_SCAN  = ?", [
           id
         ]);
       } catch (error) {
         throw error;
       }
}

const createOne = (userId, PATH, evenementId) =>{
       try{
              
              return query(
                     "INSERT INTO users_scan(USER_ID,PATH,EVENEMENT_ID) VALUES(?,?,?)",
                     [userId, PATH, evenementId]
              );
       }
       catch(error){
              throw error
       }
}

const findEvenementId =async (id) => {
       try{
              // return query(`SELECT EVENEMENT_ID FROM evenement_evenement WHERE  md5(EVENEMENT_ID) = ?`,[id]
              return query(`SELECT EVENEMENT_ID FROM evenement_evenement WHERE  EVENEMENT_ID = ?`,[id]
              );
       }
       catch(error){
              throw error
       }
}


module.exports={
       findById,
       createOne,
       findEvenementId
}