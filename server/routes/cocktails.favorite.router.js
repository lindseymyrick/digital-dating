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
    
    
    // console.log('in cocktails/favorite/POST', req.body); 

    // console.log(req.body.cocktailDetails.idDrink, req.body.cocktailDetails.strDrink, req.body.cocktailDetails.strDrinkThumb, req.body.cocktailDetails.strInstructions, req.body.comments)
    
    
    // const queryText1 = `INSERT INTO "favorite_drink" ("id","drink_name", "image_url", "method", "comments", "user_id")
    // VALUES ($1, $2, $3, $4, $5, $6); `;
    
    // const queryText2 = `INSERT INTO "favorite_drink_ingredients" VALUES ("recipe_id", "ingredient_measurement") 
    // VALUES ($7, $8);`; 


    // let values1 = [req.body.cocktailDetails.idDrink, req.body.cocktailDetails.strDrink, req.body.cocktailDetails.strDrinkThumb, req.body.cocktailDetails.strInstructions, req.body.comments, req.body.id];
    // let values2 = [req.body.cocktailDetails.idDrink];
    // pool.query(queryText1, values1)
    //     .then((response) => {
    //         console.log('added1'); 
    //         for (i = 0; i < req.body.ingredients_measurement; i++) {
    //             console.log('values2 first time', values2);
    //             values2.push(req.body.ingredients_measurement[i]);
    //             console.log('values2 second time', values2);
    //             pool.query(queryText2, values2)
    //                 .then((response) => {
    //                     console.log('added2')
    //                     values2.pop(); 
    //                 })
    //                 .catch((error) => {
    //                     console.log('error posting favorite cocktail', error);
    //                 })
    //         };
            
    //     })
    //     .catch((error) => {
    //         console.log('error posting favorite cocktail', error);
    //     })
    
  

    
   

    // ingredients_measurement: ['2 oz  Vodka', '2 oz  Lime juice', '8 oz  Ginger ale'],
    //     comments: 'down to clown with this one',
    //         id: 1
    
    // const shelfItem = `INSERT INTO "item"("description", "image_url", "user_id")
    // VALUES ($1, $2, $3);`;
    // console.log('!!!!!!!!!!!', req.body)
    // const values = [req.body.description, req.body.image_url, req.user.id];
//     pool.query(shelfItem, values)
//         .then((response) => {
//             res.sendStatus(201)
//         })
//         .catch((error) => {
//             console.log('error in router POST', error);
//         })
// });

module.exports = router;


