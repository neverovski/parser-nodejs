const express = require('express');

const router = express.Router();
const parse = require('../scripts/parse');

router.get('/', function (req, res) {
    parse('https://www.ebay.com/itm/Mens-Sexy-Bikini-Pouch-thongs-Size-M-L-XL-Seamless-PANTIES-Pants-lots-602/263608705525', data => {
        res.render('home', {
            H1: data.H1,
            OldPrice: data.OldPrice,
            Price: data.Price,
            Images: data.Images,
        });
    });
});

module.exports = router;
