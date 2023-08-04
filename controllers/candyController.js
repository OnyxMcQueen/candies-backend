//DEPENDENCIES
const express = require('express');
const router = express.Router();

const { getAllCandies, getOneCandy, createCandy, deleteCandy, updateCandy } = require('../queries/candies');

const { checkName, checkIsBoolean, checkPrice, checkRating } = require('../validations/validations');

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

//INDEX - GET ONE CANDY
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    let result = await getOneCandy(id);

    if(Object.keys(result).length === 0){
        res.status(500).send("We're sorry we couldn't find that candy")
    }
    else{
        res.send(result[0]);
    }
});

//CREATE - CREATE CANDY
router.post('/', checkName, checkIsBoolean, checkPrice, checkRating, async (req, res) => {
    let createdCandy = await createCandy(req.body);

    if(Object.keys(createdCandy).length === 0){
        res.status(500).send('Could not create the candy')
    }
    else{
        res.send(createdCandy);
    }
});

//DELETE - DELETE CANDY
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    let deletedCandy = await deleteCandy(id);

    if(Object.keys(deletedCandy).length === 0){
        res.status(500).send('Could not delete the candy')
    }
    else{
        res.send(deletedCandy);
    }
});

//UPDATE - UPDATE CANDY
router.put('/:id', async (req, res) => {
    const { id } = req.params;

    let updatedCandy = await updateCandy(id, req.body);

    res.send(updatedCandy);
})



module.exports = router;