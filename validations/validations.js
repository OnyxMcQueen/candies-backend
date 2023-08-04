const checkName = (req, res, next) => {
    if(!req.body.candy_name){
        res.status(500).send("Sorry you need to provide a candy name")
    }
    else{
        next();
    }
}

const checkIsBoolean = (req, res, next) => {
    if(typeof req.body.is_favorite !== "boolean"){
        res.status(500).send("This must either be true or false boolean value");
    }
    else{
        next();
    }
}

const checkPrice = (req, res, next) => {
    if(!(typeof req.body.price === 'number' && Number.isFinite(req.body.price))){
        res.status(500).send("Price must be a number");
    }
    else{
        next();
    }
}

const checkRating = (req, res, next) => {
    if(typeof req.body.rating !== "number"){
        res.status(500).send("The rating must be a number")
    }
    else if(req.body.rating < 0 || req.body.rating > 10){
        res.status(500).send("The rating must be a whole number between 0 and 10")
    }
    else{
        next();
    }
}

module.exports = {
    checkName,
    checkIsBoolean,
    checkPrice,
    checkRating
}