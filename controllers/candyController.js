//DEPENDENCIES
const express = require('express');
const router = express.Router();

const { getAllCandies } = require('../queries/candies');

//ROUTES

//INDEX - GET ALL CANDIES
router.get('/', async (req, res) => {
    let result = await getAllCandies();

    if(result.length === 0){
        res.status(500).send('No candies were returned')
    }
    else{
        res.send(result);
    }
    
});





module.exports = router;