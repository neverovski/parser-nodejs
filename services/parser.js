const request = require('request');
const cheerio = require('cheerio');

const parser = (url, callback) => {
    request(url, function (err, res, body) {
        const $ = cheerio.load(body);

        const Price = $('#mm-saleDscPrc').text() ? $('#mm-saleDscPrc').text() : $('#prcIsum').text();
        const parseInformation = {
            H1: $('#vi-lkhdr-itmTitl').text(),
            Price: Price,
            Images: $('#icImg').attr('src')
        };

        callback(parseInformation);
    });
};

module.exports = parser;