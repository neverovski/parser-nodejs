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
            images[i] = img.substr(0, img.length - 6) + '800.jpg';
        });
        $('.itemAttr').find("a").remove();
        const parseInformation = {
            H1: $('#vi-lkhdr-itmTitl').text(),
            Price: Price,
            Description: $('.itemAttr').html(),
            Images: images
        };
        callback(parseInformation);
        /*let url = $('#desc_ifr').attr('src');

        request(url, (err, res, body) => {
            const $ = cheerio.load(body);
            parseInformation.Description = $('.desccriptionBlock').html();

            callback(parseInformation);
        });*/
    });
};

module.exports = parser;
