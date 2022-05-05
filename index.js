import axios from 'axios';

// Папка с картинками https://api.memegen.link/images/

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
