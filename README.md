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

Try 2:

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
let scrape = require('scrape');
let urls = [...];

scrape.concurrent(urls, 10, function (url, next) {
if (url) {
scrape.request(url, function (err, $) {

            next();
        });
    } else {

    }

});

Try 3:

https://www.npmjs.com/package/axios

Try 4:

let m,
urls = [],
str =
'<img src="https://api.memegen.link/images/bad/your_meme_is_bad/and_you_should_feel_bad.jpg?width=300">',
rex = /<img[^>]+src="?([^"\s]+)"?\s\*\/>/g;
while ( m = rex.exec( str ) ) {
urls.push( m[1] );
console.log(urls);
