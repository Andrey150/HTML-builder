const fs = require('fs');
const path = fs.createWriteStream(`${__dirname}/text.txt`);
const {stdin, stdout} = process;

stdout.write('Введите текст\n');
stdin.on('data', data => {
  const text = data.toString().trim();
  if (text === 'exit') {
    stdout.write('Процесс был завершен вводом exit');
    process.exit()
  } else {
    path.write(data, 'utf-8');
  }
});
process.addListener('SIGINT', ()=> {
  stdout.write('Процесс был завершен комбинацией клавиш ctrl + c');
  process.exit();
});