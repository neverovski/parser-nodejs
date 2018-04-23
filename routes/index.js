const express = require('express');

const router = express.Router();
const parse = require('../services/parser');

router.get('/', (req, res) => {
    res.render('home');
});

router.post('/ebay', (req, res) => {
    if (req.body.url) {
        parse(req.body.url, data => {
            res.status(200).send(data);
        });
    } else {
        res.status(404).send('Not found!')
    }
});

module.exports = router;
