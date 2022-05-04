Try 1:
let scrape = require('scrape');
scrape.request(
'https://memegen-link-examples-upleveled.netlify.app/',
function (err, $) {
if (err) return console.error(err);

    $('div.link').each(function (div) {
      let score = div.find('div.score.unvoted').first(),
        link = div.find('a.title').first();
      console.log('[%s] %s (%s)', score.text, link.text, link.attribs.href);
    });

},
);
