const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();




//post request to add favorite cocktail
router.post('/', (req, res) => {
    console.log('in cocktails/favorite/POST', req.body); 

    console.log(req.body.cocktailDetails.idDrink, req.body.cocktailDetails.strDrink, req.body.cocktailDetails.strDrinkThumb, req.body.cocktailDetails.strInstructions, req.body.comments)
    
    const queryText = `INSERT INTO "favorite_drink" ("id","drink_name", "image_url", "directions", "comments")
    VALUES ($1, $2, $3, $4, $5); 
    INSERT INTO "ingredients" VALUES ("ingredient_name") 
    VALUES ($)`; 

    // const values = [];
    
    // const shelfItem = `INSERT INTO "item"("description", "image_url", "user_id")
    // VALUES ($1, $2, $3);`;
    // console.log('!!!!!!!!!!!', req.body)
    // const values = [req.body.description, req.body.image_url, req.user.id];
    // pool.query(shelfItem, values)
    //     .then((response) => {
    //         res.sendStatus(201)
    //     })
    //     .catch((error) => {
    //         console.log('error in router POST', error);
    //     })
});

module.exports = router;