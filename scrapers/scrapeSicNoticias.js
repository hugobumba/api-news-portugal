const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeSicNoticias() {
	const url = 'https://sicnoticias.pt';
	const page = await axios.get(url);
	const $ = cheerio.load(page.data);
	
	const articleInfo = [];

	$('#root > main > section:nth-child(6) > div > div > div > div > div > ul.list-articles.item-count-1.featured-articles > li > .teaser-article > div').each((index, element) => {
		const sourceName = "SIC Notícias";
		const sourceUrl = url;
		const title = $(element).find('.teaser-article-inner h2.title a').text().trim().replace('Em direto/ ', '');
		const desc = $(element).find('.lead a').text().trim();
		const img = $(element).find('img').attr('src');
		const link = url + $(element).find('.title a').attr('href');
		//console.log({ source, title, desc, img, link });

        articleInfo.push({ sourceName, sourceUrl, title, desc, img, link });
	});

    return articleInfo;

}

//scrapeSicNoticias();
module.exports = scrapeSicNoticias;
