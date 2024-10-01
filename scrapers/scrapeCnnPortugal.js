const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeCnnPortugal() {
	const url = 'https://cnnportugal.iol.pt/';
	const page = await axios.get(url);
	const $ = cheerio.load(page.data);

	const articleInfo = [];

	$('#contentwrapper > main > div > div.contentWrapper > div.grid-1 > div.column.column-1 > div > div.manchetes').each((index, element) => {
	   
		const sourceName = "CNN Portugal";
		const sourceUrl = url;
		const title = $(element).find('a h1').text().trim();
		const desc = $(element).find('.manchetes a h2').text().trim();
		const img = $(element).find('div.picture16x9').attr('style').match(/url\((.*?)\)/)[1];

		const link = $(element).find('a').attr('href');
		//console.log({ sourceName, sourceUrl, title, desc, img, link });

        articleInfo.push({ sourceName, sourceUrl, title, desc, img, link });
	});

    return articleInfo;

}

//scrapeCnnPortugal();
module.exports = scrapeCnnPortugal;
