const rp = require('request-promise');
const cheerio = require('cheerio');

var pages = [
    "https://www.15min.lt/",
    "https://www.15min.lt/naujienos"
];

module.exports.syncContent = async () => {
    var list = [];
    for (var i = 0; i < pages.length; i++){
        var html = await rp(pages[i]);

        cheerio('a.vl-img-container', html).each(function(index, element) {
            var item = {};
            item.title = element.attribs.title;
            item.url = element.attribs.href;
            item.imageUrl = element.children.find(x => x.name === 'img').attribs['data-src'];
            //list.findIndex(x => x.title == item.title) === -1 ? list.push(item) : null;
        });
    }
}