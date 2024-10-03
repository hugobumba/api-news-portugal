const axios = require('axios');
const cheerio = require('cheerio');

async function scrapePublico() {
	const url = 'https://www.publico.pt';
	const page = await axios.get(url);
	const $ = cheerio.load(page.data);
	
	const articleInfo = [];

	// Corrigido o seletor para buscar os artigos corretamente
	$('article.article--level-2.article--media-66.tone--news.article--is-unique.article--sublinks.related-3').each((index, element) => {
		const sourceName = "Público";
		const sourceUrl = url;
		const title = $(element).find('.article__title a').text().trim();
		const desc = $(element).find('.article__lead').text().trim();
		const img = $(element).find('picture source[type="image/jpeg"]').attr('srcset')?.split(' ')[0];
		const link = url + $(element).find('.article__title a').attr('href');
		//console.log({ sourceName, sourceUrl, title, desc, img, link });

		articleInfo.push({ sourceName, sourceUrl, title, desc, img, link });
	});

	return articleInfo;
}

//scrapePublico();
module.exports = scrapePublico;
