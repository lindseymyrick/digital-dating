const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();




//post request to add favorite cocktail
router.post('/', async (req, res) => {

    let recipe = req.body.cocktailDetails; 
    const createRecipe = await pool.connect();
    try {
        await createRecipe.query('BEGIN'); 
        let queryText = `INSERT INTO "favorite_drink" ("api_id","drink_name", "image_url", "method", "comments", "user_id")
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

    //updates favorite cocktail recipe
router.put('/:id', (req, res) => {
    console.log('REQ.PARAMS', req.params.id, 'REQ.BODY', req.body.comments);
    const comments = req.body.comments;
    const id = req.params.id;

    let queryString = `UPDATE "favorite_drink" SET "comments" = $1 WHERE "id" = $2;`;

    pool.query(queryString, [comments,  id])
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        })
}) //end put request 


    
//gets all favorite drink recipes 
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "favorite_drink" ORDER BY "drink_name"; `;
    pool.query(queryText)
        .then((response) => {
            res.send(response.rows)
        }).catch((error) => {
            console.log('error in favorite router.get', error);
            res.sendStatus(200); // For testing only, can be removed
        })
});

//gets recipe details when a user selects recipe 
router.get('/recipe/:id', (req, res) => {
    let queryText = `SELECT "favorite_drink".comments, "favorite_drink".drink_name, "favorite_drink".image_url, 
    "favorite_drink".method, "favorite_drink".id, "favorite_drink_ingredients".ingredient_measurement 
     FROM "favorite_drink" JOIN "favorite_drink_ingredients" on "favorite_drink"."id" = "favorite_drink_ingredients"."recipe_id"
      WHERE "favorite_drink"."id" = $1; `;
    console.log(req.params.id);
    pool.query(queryText, [req.params.id])
        .then((response) => {
            res.send(response.rows); 
        }).catch((error) => {
            console.log('error in favorite router get with ID', error);
        })
});


//deletes favorite cocktail from database 
router.delete('/:id', async (req, res) => {

    let id = req.params.id;
    console.log(`in router delete`, id); 
     const deleteRecipe = await pool.connect();
    try {
        await deleteRecipe.query('BEGIN');
        let queryText = `DELETE FROM "favorite_drink" WHERE "id" = $1;`;
        await deleteRecipe.query(queryText, [id]);
        let subQuery = `DELETE FROM "favorite_drink_ingredients" WHERE "recipe_id" = $1`
        await deleteRecipe.query(subQuery, [id])
        await deleteRecipe.query('COMMIT');
        res.sendStatus(200);
    } catch (err) {
        await deleteRecipe.query('ROLLBACK');
        throw err;
    } finally {
        deleteRecipe.release();
    }

});

module.exports = router;


