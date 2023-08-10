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
  if (!isNaN(req.body.price)) {
    next();
  } else {
    res.status(500).send("Price must be a valid number");
  }
};

const checkRating = (req, res, next) => {
  const rating = req.body.rating;

  if (!isNaN(rating) && rating >= 0 && rating <= 10) {
    next();
  } else {
    res.status(500).send("The rating must be a number between 0 and 10");
  }
};

const validateURL = (req, res, next) => {
    if (
      req.body.candy_image.substring(0, 7) === "http://" ||
      req.body.candy_image.substring(0, 8) === "https://"
    ) {
      return next();
    } else {
      res
        .status(400)
        .json({ error: "You forgot to start your image link with http:// or https://" });
    }
  };

module.exports = {
    checkName,
    checkIsBoolean,
    checkPrice,
    checkRating,
    validateURL
}