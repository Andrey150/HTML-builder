let fs = require('fs').promises;
const path = require('path');
const directory  = path.join(__dirname, 'files');
const directoryNew  = path.join(__dirname, 'files-copy');

async function createDir(){

}

async function copyFiles() {
  try {
    await fs.access(directoryNew);
    await fs.rm(directoryNew, { recursive: true });
    console.log('Папка успешно удалена');
  } catch (err) {
    console.error(err);
  }

  try {
    await fs.mkdir(directoryNew, { recursive: true });
    console.log('Папка успешно создана');

    const dirContent = await fs.readdir(directory, 'utf8');
    for (const file of dirContent) {
      await fs.copyFile(path.join(directory, file), path.join(directoryNew, file));
      console.log(`Файл успешно скопирован`);
    }
  } catch (err) {
    console.error(err);
  }
}

copyFiles();
