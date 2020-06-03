const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
// const { rejectUnauthenticated } = require(‘../’); TO DO 




router.get('/create/:username', async (req, res) => {

   
    const getRoomUrl = await pool.connect();
    try {
        await getRoomUrl.query('BEGIN');
        console.log(req.params, req.user.username);
        let partnerUsername = req.params.username; 
        let queryText = `SELECT * FROM "date_rooms" WHERE in_use = false LIMIT 1; `;
       let result = await getRoomUrl.query(queryText);
        const roomID = result.rows[0].id;
        let subQuery = `UPDATE "date_rooms" SET "in_use" = true WHERE "id" = $1`;
        await getRoomUrl.query(subQuery, [roomID]);
        let subQueryTwo = `INSERT INTO "user_rooms" ("username_user", "username_partner", "room_id") 
        VALUES ($1, $2, $3);`;
        await getRoomUrl.query(subQueryTwo, [req.user.username, req.params.username, roomID]);

        await getRoomUrl.query('COMMIT');
       
        res.send(result.rows[0]);
    } catch (err) {
        await getRoomUrl.query('ROLLBACK');
        throw err;
    } finally {
        getRoomUrl.release();
    }

})

router.get('/join/', async (req, res) => {
    let queryText = `SELECT * FROM "user_rooms" WHERE "username_partner" = $1;  `;
    pool.query(queryText, [req.user.username])
        .then((response) => {
            console.log(response.rows)
            res.send(response.rows[0])
        }).catch((error) => {
            console.log('error in join room router.get', error);
            res.sendStatus(200); // For testing only, can be removed
        })

})




module.exports = router;