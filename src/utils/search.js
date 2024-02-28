const cheerio = require('cheerio');
const storeUrls = require('./stores')

const searchStore = async (item, store) => {
    const searchUrl = storeUrls[store] + item

    const res = await fetch(searchUrl)
    const htmlString = res.text()
    const $ = cheerio.load(htmlString)
    

searchStore('chocolate', 'Tesco')
    .then(res => console.log(res))

