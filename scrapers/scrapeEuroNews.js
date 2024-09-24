const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeEuroNews() {
	const url = 'https://pt.euronews.com/noticias/europa/portugal';
	const page = await axios.get(url);
	const $ = cheerio.load(page.data);
	
	const articleInfo = [];

	$('#enw-main-content > section.o-section.c-section.o-block-topstories-newsy.h-block-spacing > div > div > article').each((index, element) => {
		const sourceName = "Euro News";
		const sourceUrl = url;
		const title = $(element).find('.m-object__title.qa-article-title a').text().trim();
		const desc = '';
		const img = $(element).find('.media__img__link img').attr('src');
		const link = url + $(element).find('.m-object__title.qa-article-title a').attr('href');
		//console.log({ sourceName, sourceUrl, title, desc, img, link });

        articleInfo.push({ sourceName, sourceUrl, title, desc, img, link });
	});

    return articleInfo;

}

//scrapeEuroNews();
module.exports = scrapeEuroNews;
