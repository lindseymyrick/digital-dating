const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();



//get request to Cocktail DB API to get all recipe information by ID after user selects
router.get('/:id', (req, res) => {
    console.log(' in /cocktail/id GET');
    let id = req.params.id;
    console.log('id', id)
    axios.get(`https://www.thecocktaildb.com/api/json/v1/${process.env.COCKTAIL_DB_API_KEY}/lookup.php?i=${id}`)
        .then(response => {
            console.log('response', response.data.drinks[0])
            // console.log(response.data.drinks)
            if (response.data.drinks === null) {
                res.send('null');
            } else {
                res.send(response.data.drinks);
            }

        }).catch(error => {
            console.log('Error getting drinks based off name', error)
        })
});

module.exports = router;

