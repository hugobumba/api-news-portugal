const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeObservador() {
	const url = 'https://observador.pt/';
	const page = await axios.get(url);
	const $ = cheerio.load(page.data);
	
	const articleInfo = [];

	$('#row-5c9d3001-7f28-4b69-8bc6-7467650c87ac > div.fbg-col-4.fbg-col-md-4.fbg-col-lg-2 > div').each((index, element) => {
		const sourceName = "Observador";
		const sourceUrl = url;
		const title = $(element).find('.title a').text().trim();
		const desc = $(element).find('.lead').text().trim();
		const img = $(element).find('.image img').attr('src');
		const link = $(element).find('.title a').attr('href');
		//console.log({ sourceName, sourceUrl, title, desc, img, link });

        articleInfo.push({ sourceName, sourceUrl, title, desc, img, link });
	});

    return articleInfo;

}

//scrapeObservador();
module.exports = scrapeObservador;
