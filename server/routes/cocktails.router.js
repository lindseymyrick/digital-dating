const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

let ingredientResult = [];
let nameResult = [];
let resultsToReturn;



router.get('/:searchTerm', (req, res) => {
    console.log(' in /search GET', req.params.searchTerm);
    let searchTerm = req.params.searchTerm;
    // console.log(`https://www.thecocktaildb.com/api/json/v1/${process.env.COCKTAIL_DB_API_KEY}filter.php?i=${searchTerm}`)
    // console.log('API KEY', process.env.COCKTAIL_DB_API_KEY);
    axios.get(`https://www.thecocktaildb.com/api/json/v1/${process.env.COCKTAIL_DB_API_KEY}/filter.php?i=${searchTerm}`)
        .then(response => {
            ingredientResult = response.data.drinks;
            axios.get(`https://www.thecocktaildb.com/api/json/v1/${process.env.COCKTAIL_DB_API_KEY}/search.php?s=${searchTerm}`)
                .then(response => {
                    // console.log('2ND API REQUEST', response.data.drinks); 
                    nameResult = response.data.drinks; 
                    resultsToReturn =ingredientResult.concat(nameResult);
                    // console.log('RESULT TO RETURN', resultsToReturn)
                 }).catch(error => {
                    console.log('Error getting drinks based off name', error)
                })
            res.send(resultsToReturn);
        }).catch(error => {
            console.log('Error getting drinks based off ingredient', error)
        })
});

// https://www.thecocktaildb.com/api/json/v1/1;filter.php?i=Vodka
// https://www.thecocktaildb.com/api/json/v1/1;filter.php?i=Vodka

module.exports = router;

