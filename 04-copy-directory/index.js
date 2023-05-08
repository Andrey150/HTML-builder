let fs = require('fs');
const path = require('path');
const directory  = path.join(__dirname, 'files');
const directoryNew  = path.join(__dirname, 'files-copy');

fs.mkdir(directoryNew, { recursive: true }, err => {
  if(err) throw err; // не удалось создать папку
  console.log('Папка успешно создана');
});


fs.readdir(directoryNew, 'utf8', function(error, dirContent){
  if(error) throw error; // ошибка чтения файла, если есть
  dirContent.forEach((file) => {
    fs.unlink(`${directoryNew}/${file}`, err => {
      if(err) throw err; // не удалось удалить файл
      console.log('Файл успешно удалён');
    });
  });
});

fs.readdir(directory, 'utf8', function(error, dirContent){
  if(error) throw error; // ошибка чтения файла, если есть
  dirContent.forEach((file) => {
    fs.copyFile(`${directory}/${file}`, `${directoryNew}/${file}`,  err => {
      if(err) throw err; // не удалось скопировать файл
      console.log('Файл успешно скопирован');
    });
  });
});