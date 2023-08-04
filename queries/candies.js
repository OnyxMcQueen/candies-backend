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

async function getOneCandy(id){
    try{
        let result = await db.any("SELECT * FROM candies WHERE id = $1", [id]);
        return result;
    }
    catch(error){
        return error
    }
}

async function createCandy(data){

    const {
    candy_name, 
    price,
    rating,
    is_favorite,
    candy_image,
    candy_type
    } = data;

    try{
        let result = await db.one("INSERT INTO candies (candy_name, price, rating, is_favorite, candy_image, candy_type) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *", [candy_name, price, rating, is_favorite, candy_image, candy_type]);
        return result;
    }
    catch(error){
        return error;
    }
}

async function deleteCandy(id){
    try{
        let result = await db.one("DELETE FROM candies WHERE id = $1 RETURNING *", id);
        return result;
    }
    catch(error){
        return error
    }
}

async function updateCandy(id, data){
    let values = Object.values(data);

    function makequeryString(data){
        let count = 2;
        let result = "";

        for(let key in data){
            result += `${key} = $${count},`
            count++;
        }
        
        result = result.substring(0, result.length - 1);
        return result;
    }

    let queryString = makequeryString(data);
    let finalQueryString = `UPDATE candies SET ${queryString} WHERE id = $1 RETURNING *`;
    
    const result = await db.one(finalQueryString, [id, ...values]);
    return result;

}

module.exports = {
    getAllCandies,
    getOneCandy,
    createCandy,
    deleteCandy,
    updateCandy
}