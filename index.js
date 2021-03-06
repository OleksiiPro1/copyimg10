import fs, { mkdir } from 'node:fs';
import axios from 'axios';
import https from 'https';
import request from 'request';
import Stream from 'stream';

// Папка с 10 картинками https://api.memegen.link/images/
const res = await axios.get('https://api.memegen.link/images/');
console.log(res.data[0].url);
console.log(res.data[1].url);
console.log(res.data[2].url);
console.log(res.data[3].url);
console.log(res.data[4].url);
console.log(res.data[5].url);
console.log(res.data[6].url);
console.log(res.data[7].url);
console.log(res.data[8].url);
console.log(res.data[9].url);
//Создаем папку мемы
fs.mkdir('./meme', { recursive: true }, (err) => {
  console.log(err);
});
// Загружаем 10 картинок в папку картинки
process.chdir('meme');
for (let k = 0; k < 10; k++) {
  https.get(res.data[k].url, (ress) => {
    ress.pipe(fs.createWriteStream('img' + k + '.png'));
  });
}
console.log('The file was saved! WOW COLL!!! YESSSSSS!');
