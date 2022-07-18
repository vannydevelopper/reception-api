const {query} = require("../functions/db")

const findBy = async (column, value) =>{
       try{
              var sqlQuery = `SELECT * FROM users  WHERE ${column} = ? AND (PROFIL = 2) `;
              return query(sqlQuery, [value]);
       }
       catch(error){
              throw error
       }
}

module.exports={
       findBy
}