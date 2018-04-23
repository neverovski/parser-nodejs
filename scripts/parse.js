const request = require('request');
const cheerio = require('cheerio');

const parse = (url, callback) => {
    request(url, function (err, res, body) {
        const $ = cheerio.load(body);

        const parseInformation = {
            H1: $('#itemTitle a.it-sttl').attr('data-mtdes'),
            OldPrice: $('#mm-saleOrgPrc').text(),
            Price: $('#mm-saleDscPrc').text(),
            Images: $('#icImg').attr('src')
        };

        callback(parseInformation);
    });
};

module.exports = parse;
