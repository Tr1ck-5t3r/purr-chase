// routes

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.post("/login", (req,res) => {
    const body = req.body;
    console.log(body);
    
});

router.get('/find', (req, res) => {
    res.send('Find a pet');
});

router.get('/gallery', (req, res) => {
    res.send('Gallery');
});

module.exports = router;   
