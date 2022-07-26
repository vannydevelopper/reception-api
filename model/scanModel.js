const {query} = require("../functions/db")

const findById = async (id) => {
       try {
         return query("SELECT * FROM users_scan WHERE ID_USERS_SCAN  = ?", [
           id,
         ]);
       } catch (error) {
         throw error;
       }
}

const createOne = (userId, PATH, EVENEMENT_ID) =>{
       try{
              return query(
                     "INSERT INTO users_scan(USER_ID,PATH,EVENEMENT_ID) VALUES(?,?,?)",
                     [userId, PATH, EVENEMENT_ID]
              );
       }
       catch(error){
              throw error
       }
}


module.exports={
       findById,
       createOne
}