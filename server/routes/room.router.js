const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
// const { rejectUnauthenticated } = require(‘../’); TO DO 




router.get('/', async (req, res) => {

   
    const getRoomUrl = await pool.connect();
    try {
        await getRoomUrl.query('BEGIN');
        let queryText = `SELECT * FROM "date_rooms" WHERE in_use = false LIMIT 1; `;
       let result = await getRoomUrl.query(queryText);
        const roomID = result.rows[0].id;
        console.log('result.rows', result.rows[0])
        let subQuery = `UPDATE "date_rooms" SET "in_use" = true WHERE "id" = ${roomID}`;
        await getRoomUrl.query(subQuery);

        await getRoomUrl.query('COMMIT');
       
        res.send(result.rows[0]);
    } catch (err) {
        await getRoomUrl.query('ROLLBACK');
        throw err;
    } finally {
        getRoomUrl.release();
    }

})

router.get('/:id', async (req, res) => {
    let queryText = `SELECT * FROM "date_rooms" WHERE id = $1;  `;
    pool.query(queryText, [req.params.id])
        .then((response) => {
            res.send(response.rows[0])
        }).catch((error) => {
            console.log('error in join room router.get', error);
            res.sendStatus(200); // For testing only, can be removed
        })

})




module.exports = router;