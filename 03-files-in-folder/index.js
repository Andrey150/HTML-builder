const fs = require('fs');
const path = require('path');
const directory  = path.join(__dirname, 'secret-folder');

fs.readdir(directory, 'utf8', function(error, dirContent, stats){
  if(error) throw error; // ошибка чтения файла, если есть
  dirContent.forEach((file) => {
    const filePath = path.join(directory, file);
    fs.stat( filePath, function(err, stats){
      if (stats.isFile()) {
        const fileName = path.parse(file);
        const fileExtension = path.extname(file).slice(1);

        console.log(`${fileName.name} - ${fileExtension} - ${stats.size.toString()}kb`);
      }
    })
  });
});