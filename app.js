//DEPENDENCIES 
const express = require('express');
const cors = require('cors');

//CONFIGURATION
const app = express();

//MIDDLEWARE
app.use(express.json());
app.use(cors());

//ROUTES

app.get('/', (req, res) => {
    res.send('Welcome To Candyland!!🍬');
})

//EXPORT
module.exports = app;