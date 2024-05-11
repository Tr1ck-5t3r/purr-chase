// routes

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.ejs',{name: "Tarun"});
});



router.get('/find', (req, res) => {
    res.send('Find a pet');
});

router.get('/gallery', (req, res) => {
    res.send('Gallery');
});

module.exports = router;   
