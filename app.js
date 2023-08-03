//DEPENDENCIES 
const express = require('express');
const cors = require('cors');

//CANDIES ROUTES
const candyController = require('./controllers/candyController');


//CONFIGURATION
const app = express();

//MIDDLEWARE
app.use(express.json());
app.use(cors());

//ROUTES

app.get('/', (req, res) => {
    res.send('Welcome To Candyland!!🍬');
})

app.use('/candies', candyController);

app.get('*', (req, res) => {
    res.status(404).send("Page Not Found :(");
})

//EXPORT
module.exports = app;