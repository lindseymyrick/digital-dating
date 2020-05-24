const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();



router.get('/:searchTerm', (req, res) => {
    console.log(' in /search GET', req.params.searchTerm);
    let searchTerm = req.params.searchTerm;
    // console.log(`https://www.thecocktaildb.com/api/json/v1/${process.env.COCKTAIL_DB_API_KEY}filter.php?i=${searchTerm}`)
    console.log('API KEY', process.env.COCKTAIL_DB_API_KEY);
    axios.get(`https://www.thecocktaildb.com/api/json/v1/${process.env.COCKTAIL_DB_API_KEY}/filter.php?i=${searchTerm}`)
        .then(response => {
            console.log('API DATA',response.data)
            // res.send(response.data);
        }).catch(error => {
            console.log('Error adding giphy url', error)
        })
});

// https://www.thecocktaildb.com/api/json/v1/1;filter.php?i=Vodka
// https://www.thecocktaildb.com/api/json/v1/1;filter.php?i=Vodka

module.exports = router;