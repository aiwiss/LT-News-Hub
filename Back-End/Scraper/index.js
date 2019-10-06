const express = require('express');
const bp = require('body-parser');
useragent = require('express-useragent');

const scraper = require('./modules/scraper.js');

var html = scraper.getUrlContent();

const app = express();
const port = 2000;

app.use(bp.json());
app.use(useragent.express());

app.get('/', async (req,res) => {
    var html = await scraper.getUrlContent();
    res.send(html);
    // res.send(req.useragent);
});

app.listen(port, () => console.log(`App is listening on port ${port}`));