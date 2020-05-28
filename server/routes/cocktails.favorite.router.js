const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();




//post request to add favorite cocktail
router.post('/', async (req, res) => {

    let recipe = req.body.cocktailDetails; 
    const createRecipe = await pool.connect();
    try {
        await createRecipe.query('BEGIN'); 
        let queryText = `INSERT INTO "favorite_drink" ("id","drink_name", "image_url", "method", "comments", "user_id")
         VALUES ($1, $2, $3, $4, $5, $6) RETURNING "id"; `;
         const result = await createRecipe.query(queryText, [recipe.idDrink, recipe.strDrink, recipe.strDrinkThumb, recipe.strInstructions, req.body.comments, req.body.id]);
         const newRecipeId = result.rows[0].id; 
         console.log('result rows', result.rows[0]);

        await Promise.all(req.body.ingredients_measurement.map (item => {
            let = subQuery = `INSERT INTO "favorite_drink_ingredients" ("recipe_id", "ingredient_measurement") VALUES ($1, $2);`;
            createRecipe.query(subQuery, [newRecipeId, item])
        }))
        await createRecipe.query('COMMIT'); 
        res.sendStatus(200); 
    }catch(err){
        await createRecipe.query('ROLLBACK');
        throw err; 
    }finally {
        createRecipe.release(); 
    }

    })


    
    
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "favorite_drink"; `
    pool.query(queryText)
        .then((response) => {
            res.send(response.rows)
        }).catch((error) => {
            console.log('error in favorite router.get', error);
            res.sendStatus(200); // For testing only, can be removed
        })
});

module.exports = router;


