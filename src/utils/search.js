const cheerio = require('cheerio')
const storeDetails = require('./stores/storeDetails')

const searchStore = async (item, store) => {
    const webData = storeDetails[store]
    const searchUrl =  webData.url + item

    const res = await fetch(searchUrl)
    const htmlString = res.text()
    const $ = cheerio.load(htmlString)
    return $(webData.item).map((_, li) => ({
        name: $(webData.name, li).text(),
    }))
}

searchStore('chocolate', 'Tesco').then(res => console.log(res))
