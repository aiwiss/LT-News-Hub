const rp = require('request-promise');
const cheerio = require('cheerio');

var pages = [
    "https://www.delfi.lt/archive/latest.php"
];

const articleSelector = '.headline';
const titleElemClass = 'headline-title';
const imgElemClass = 'headline-image';

function getArticleTitle(article) {
    var titleElement = article.children.find(x => x.attribs.class === titleElemClass);
    var title = titleElement.children.find(x => x.name === 'a').firstChild.data;
    return title;
}

function getArticleUrl(article) {
    var titleElement = article.children.find(x => x.attribs.class === titleElemClass);
    var url = titleElement.children.find(x => x.name === 'a').attribs.href;
    return url;
}

function getArticleImageUrl(article) {
    var imgElement = article.children.find(x => x.attribs.class === imgElemClass).firstChild;
    var imgUrl = imgElement.children.find(x => x.name === 'img').attribs['data-src'];
    return imgUrl;
}

module.exports.syncContent = async () => {
    var list = [];
    
    for (var i = 0; i < pages.length; i++) {
        var html = await rp(pages[i]);
        
        var articles = cheerio(articleSelector, html);

        for (var j = 0; j < articles.length; j++) {
            var item = {};

            item.title = getArticleTitle(articles[j]);
            item.url = getArticleUrl(articles[j]);
            item.imageUrl = getArticleImageUrl(articles[j]);

            list.push(item);
        }
    }

    console.log(list.length);
}