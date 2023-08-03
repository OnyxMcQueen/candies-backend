const db = require('../db/dbConfig');

async function getAllCandies(){
    try{
        let result = await db.any("SELECT * FROM candies");
        return result;
    }
    catch(error){
        return(error)
    }
}

module.exports = {
    getAllCandies
}