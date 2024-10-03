const fs = require('fs');
const path = require('path');
const scrapePublico = require('./scrapers/scrapePublico');
const scrapeObservador = require('./scrapers/scrapeObservador');
const scrapeCmJornal = require('./scrapers/scrapeCmJornal');
const scrapeSicNoticias = require('./scrapers/scrapeSicNoticias');
const scrapeCnnPortugal = require('./scrapers/scrapeCnnPortugal');
const scrapeRtp = require('./scrapers/scrapeRtp');
const scrapeEuroNews = require('./scrapers/scrapeEuroNews');

async function mainScraper() {
    const jsonFilePath = path.join(__dirname, 'data', 'news.json');

    const results = await Promise.all([
        scrapeCmJornal(),
        scrapeObservador(),
        scrapeSicNoticias(),
        scrapeRtp(),
        scrapeCnnPortugal(),
        scrapeEuroNews(),
        scrapePublico(),
    ]);

    const allNews = results.flat();

    if (!fs.existsSync(path.join(__dirname, 'data'))) {
        fs.mkdirSync(path.join(__dirname, 'data'));
    }

    fs.writeFileSync(jsonFilePath, JSON.stringify(allNews, null, 2), 'utf-8');
    console.log('Done! Check: ' + jsonFilePath);
}

mainScraper();
