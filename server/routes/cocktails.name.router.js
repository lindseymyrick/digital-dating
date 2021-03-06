const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();



//get request to search based off name
router.get('/:searchTerm', (req, res) => {
    console.log(' in /cocktail/name GET', req.params.searchTerm);
    let searchTerm = req.params.searchTerm;
  
            axios.get(`https://www.thecocktaildb.com/api/json/v1/${process.env.COCKTAIL_DB_API_KEY}/search.php?s=${searchTerm}`)
                .then(response => {
                    // console.log('2ND API REQUEST', response.data); 
                    // res.send(response.data.drinks)
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

