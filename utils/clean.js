import fs from 'fs';

function deleteFolderRecursive(path) {
  if (fs.existsSync(path) && fs.lstatSync(path).isDirectory()) {
    fs.readdirSync(path).forEach(function(file){
      const currentPath = path + '/' + file;

      if (fs.lstatSync(currentPath).isDirectory()) {
        deleteFolderRecursive(currentPath);
      } else {
        fs.unlinkSync(currentPath);
      }
    });

    console.log(`Deleting directory "${path}"...`);
    fs.rmdirSync(path);
  }
};

console.log('Cleaning working tree...');

deleteFolderRecursive('./allure-report');
deleteFolderRecursive('./allure-results');

console.log('Successfully cleaned working tree!');
