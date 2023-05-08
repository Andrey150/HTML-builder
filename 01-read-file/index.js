const fs = require('fs');
const path = require('path');
const folderPath = path.join(__dirname, '/text.txt')


const stream = fs.createReadStream(folderPath, 'utf-8');
let text = '';
stream.on('data',  chunk => console.log(text += chunk));