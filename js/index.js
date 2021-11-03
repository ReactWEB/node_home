//Собрать информацию о своем компьютере и системе (10 записей уникальных любых). 
//Записать в новую папку и файл ( используя ноду). 
//Написать функцию чтения этого файла.

const os = require('os');
const fs = require('fs');
const path = require('path');

/*fs.mkdir(path.join(__dirname, 'umbrella'), err => {
  if (err) throw new Error(err);
  console.log('Directory was created');
});*/
/*fs.writeFile(path.join(__dirname, 'umbrella', 'info_os.txt'), 'some txt hello', err => {
  if (err) throw new Error(err);
  console.log('Fail was created');
});*/

fs.readFile(path.join(__dirname, 'umbrella', 'info_os.txt'), 'utf-8', (err, data) => {
  if (err) throw new Error(err);
  console.log(data);
});  
