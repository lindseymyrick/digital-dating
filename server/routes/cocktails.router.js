const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/:searchTerm', (req, res) => {
    console.log(' in /search GET', req.params);
    // let searchTerm = req.body;
    // axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${searchTerm}&limit=9&rating=pg&lang=en`)
    //     .then(response => {
    //         res.send(response.data);
    //     }).catch(error => {
    //         console.log('Error adding giphy url', error)
    //     })
});





module.exports = router;