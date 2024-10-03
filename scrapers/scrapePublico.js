const axios = require('axios');
const cheerio = require('cheerio');

async function scrapePublico() {
	const url = 'https://www.publico.pt';
	const page = await axios.get(url);
	const $ = cheerio.load(page.data);
	
	const articleInfo = [];

	$('#main-content > section.block.block--bf-widget.block--bf-widget-9.editorial-content.editorial-content.new-container > div > div.cs--1.cn--16.mdmax-cs--1.mdmax-cn--16 > div:nth-child(1) > div.cs--1.cn--12.mdmax-cs--1.mdmax-cn--12.md-r-bdr > article.article.article--level-2.article--media-66.tone--news.article--is-unique > div').each((index, element) => {
		const sourceName = "Público";
		const sourceUrl = url;
		const title = $(element).find('.article__title a').text().trim();
		const desc = $(element).find('.article__lead').text().trim();
		const img = $(element).find('picture source[type="image/jpeg"]').attr('srcset').split(' ')[0];
		const link = url + $(element).find('.article__title a').attr('href');
		//console.log({ sourceName, sourceUrl, title, desc, img, link });

        articleInfo.push({ sourceName, sourceUrl, title, desc, img, link });
	});

	return articleInfo;
}

//scrapePublico();
module.exports = scrapePublico;