// synchronous way of reading and writing files
const { readFileSync, writeFileSync } = require('fs');

const path1 = '04NODE\\02BuiltinModules\\2_FS\\First.txt';
const path2 = '04NODE\\02BuiltinModules\\2_FS\\Second.txt';
const resultPath = '04NODE\\02BuiltinModules\\2_FS\\Result.txt';

const first = readFileSync(path1, 'utf-8');
const second = readFileSync(path2, 'ascii');

console.log(`First file is : ${first}\nSecond file is : ${second}\n`);

writeFileSync(resultPath,
    `Here is the result of combining two files ${first} \n${second}`, { flag: 'a' });

const result = readFileSync(resultPath, 'ascii');
console.log(`The result file is : ${result}`);
