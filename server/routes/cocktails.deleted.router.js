const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//gets all deleted cocktail recipes 
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

//post request to add a new deleted cocktail recipe 
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