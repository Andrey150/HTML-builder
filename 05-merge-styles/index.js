let fs = require('fs');
const path = require('path');
const styles  = path.join(__dirname, 'styles');
const bundle  = fs.createWriteStream(path.join(__dirname, 'project-dist', 'bundle.css'));

fs.readdir(styles, { withFileTypes: true }, (err, data) => {
  if (err) throw err;

  for (let file of data) {
    if (file.isFile() && file.name.split('.')[1] === 'css') {
      const createReadStream = fs.createReadStream(path.join(styles, file.name), 'utf-8');

      createReadStream.on('data', chunk => bundle.write(`${chunk} `));
    }
  }
})