const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeCMJornal() {
	const url = 'https://www.cmjornal.pt';
	const page = await axios.get(url);
	const $ = cheerio.load(page.data);

	const articleInfo = [];

	$('body > section.container.manchetes > div.centro > div > div.manchete_maior > article.destaque.manchete01').each((index, element) => {
		const sourceName = "CM Jornal";
		const sourceUrl = url;
		const title = $(element).find('h1 a').text().trim();
		const desc = $(element).find('p').text().trim();
		const img = $(element).find('.image img').attr('src');
		const link = url + $(element).find('h1 a').attr('href');
		//console.log({ sourceName, sourceUrl, title, desc, img, link });

        articleInfo.push({ sourceName, sourceUrl, title, desc, img, link });
	});

    return articleInfo;

}

//scrapeCMJornal();
module.exports = scrapeCMJornal;
