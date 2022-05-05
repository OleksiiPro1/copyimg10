import axios from 'axios';

const res = await axios.get('https://api.memegen.link/images/');
console.log(res);

let getImageUrls = require('get-image-urls');
