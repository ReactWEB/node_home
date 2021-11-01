//Собрать информацию о своем компьютере и системе (10 записей уникальных любых). 
//Записать в новую папку и файл ( используя ноду). 
//Написать функцию чтения этого файла.

const os = require('os');
const infoOs = {
  platform: os.platform(),
  architect: os.arch(),
  memory: os.freemem(),
  hostinfo: os.hostname(),
};
console.log(infoOs);

const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, 'umbrella'));

fs.writeFile(path.join(__dirname, 'umbrella', 'info_os.js'));

const info = fs.readFileSync(path.join(__dirname, 'umbrella', 'info_os.js'), 'utf-8');  
console.log(info);