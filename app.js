const axios = require('axios');
const cheerio = require('cheerio');

const base_url = 'https://www.ebay.com/itm/Mens-Sexy-Bikini-Pouch-thongs-Size-M-L-XL-Seamless-PANTIES-Pants-lots-602/263608705525';

axios.get(base_url).then(response => {
    let $ = cheerio.load(response.data);
    let dom = [];
    dom.push({
        H1: $('#itemTitle a.it-sttl').attr('data-mtdes'),
        WasPrice: $('#mm-saleOrgPrc').text(),
        Price: $('#mm-saleDscPrc').text(),
        Image: $('#icImg').attr('src'),
    });
    return (dom);
}).then(dom => {
    console.log(dom)
});