const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();




router.get('/:searchTerm', (req, res) => {
    console.log(' in /cocktail/ingredient GET', req.params.searchTerm);
    let searchTerm = req.params.searchTerm;
    // console.log(`https://www.thecocktaildb.com/api/json/v1/${process.env.COCKTAIL_DB_API_KEY}filter.php?i=${searchTerm}`)
    // console.log('API KEY', process.env.COCKTAIL_DB_API_KEY);
    axios.get(`https://www.thecocktaildb.com/api/json/v1/${process.env.COCKTAIL_DB_API_KEY}/filter.php?i=${searchTerm}`)
        .then(response => {
            console.log(response.data.drinks)
            res.send(response.data.drinks);
        }).catch(error => {
            console.log('Error getting drinks based off name', error)
        })
});

module.exports = router;