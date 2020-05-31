const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "deleted_drinks";`;
    pool.query(queryText)
        .then((response) => {
            res.send(response.rows)
        }).catch((error) => {
            console.log('error in favorite router.get', error);
            res.sendStatus(200); // For testing only, can be removed
        })
});

router.post('/', async (req, res) => {

    const id = req.body.id;
    const title = req.body.name;
    const addDeletedCocktail = await pool.connect();
    try {
        await addDeletedCocktail.query('BEGIN');
        let queryText = `INSERT INTO "deleted_drinks" ("api_id", "drink_name") VALUES ($1, $2); `;
        await addDeletedCocktail.query(queryText, [id, title]);
        let subQuery = `SELECT * FROM "deleted_drinks";`;
        const result = await addDeletedCocktail.query(subQuery);


        // await Promise.all(req.body.ingredients_measurement.map(item => {
        //     let = subQuery = `INSERT INTO "favorite_drink_ingredients" ("recipe_id", "ingredient_measurement") VALUES ($1, $2);`;
        //     addDeletedCocktail.query(subQuery, [newRecipeId, item])
        // }))
        await addDeletedCocktail.query('COMMIT');
        console.log(result.rows); 
        res.send(result.rows);
    } catch (err) {
        await addDeletedCocktail.query('ROLLBACK');
        throw err;
    } finally {
        addDeletedCocktail.release();
    }

})

module.exports = router;