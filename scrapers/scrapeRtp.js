const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeRtp() {
	const url = 'https://www.rtp.pt/noticias/';
	const page = await axios.get(url);
	const $ = cheerio.load(page.data);
	
	const articleInfo = [];

	$('#noticias > div.container.main-content.margin-top > div:nth-child(2) > div.col-12.col-md-12.col-lg-8.content-block1 > div.featured-block1-layout1 > div:nth-child(1) > section').each((index, element) => {
		const sourceName = "RTP Notícias";
		const sourceUrl = url;
		const title = $(element).find('.meta.highlights h2').text().trim();
		const desc = '';
		const img = $(element).find('.img-container img').attr('src');
		const link = $(element).find('link href').attr('href');
		//console.log({ sourceName, sourceUrl, title, desc, img, link });

        articleInfo.push({ sourceName, sourceUrl, title, desc, img, link });
	});

    return articleInfo;

}

//scrapeRtp();
module.exports = scrapeRtp;
