//const fetch = require('node-fetch');
//const fs = require('fs');

const https = require('https');
https.get('https://api.memegen.link/images/agnes/_/i_have_read_and_agree_to_the_terms_and_conditions.png', (resp)=>{

let data = '';
