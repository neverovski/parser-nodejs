const request = require('request');
const cheerio = require('cheerio');

const parser = (url, callback) => {
    request(url, (err, res, body) => {
        const $ = cheerio.load(body);

        let Price = $('#mm-saleDscPrc').text() ? $('#mm-saleDscPrc').text() : $('#prcIsum').text();
        Price = Price ? Price : $('#prcIsum_bidPrice').text();
        const images = [];

        $('#vi_main_img_fs_slider img').each(function(i, elem) {
            let img = $(this).attr('src');
            img = img.substr(0, img.length - 6);
            images[i] = img + '500.jpg';
        });
        
        const parseInformation = {
            H1: $('#vi-lkhdr-itmTitl').text(),
            Price: Price,
            Images: images
        };

        callback(parseInformation);
    });
};

module.exports = parser;
