const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();




//get request to search based off name

    router.get('/', (req, res) => {
        let queryText = `SELECT * FROM "date_rooms" WHERE in_use = false LIMIT 1; `;
        pool.query(queryText)
            .then((response) => {
                res.send(response.rows);
            }).catch((error) => {
                console.log('error room router.get', error);
                res.sendStatus(200); // For testing only, can be removed
            })
    });




module.exports = router;