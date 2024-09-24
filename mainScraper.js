const fs = require('fs');
const scrapeObservador = require('./scrapers/scrapeObservador');
const scrapeCmJornal = require('./scrapers/scrapeCmJornal');
const scrapeSicNoticias = require('./scrapers/scrapeSicNoticias');
const scrapeCnnPortugal = require('./scrapers/scrapeCnnPortugal');
const scrapeRtp = require('./scrapers/scrapeRtp');
const scrapeEuroNews = require('./scrapers/scrapeEuroNews');

async function mainScraper() {
    json_file_name = 'news.json'

    const results = await Promise.all([
        scrapeObservador(),
        scrapeCmJornal(),
        scrapeSicNoticias(),
        scrapeCnnPortugal(),
        scrapeRtp(),
        scrapeEuroNews(),
    ]);

    const allNews = results.flat();

    //console.log(allNews);

    fs.writeFileSync(json_file_name, JSON.stringify(allNews, null, 2), 'utf-8');
    console.log('Done! Check: '+json_file_name);
    
}

mainScraper();
