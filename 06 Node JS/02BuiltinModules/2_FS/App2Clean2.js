// we can clean up the code much further using the util module
const util = require('util');
const { readFile, writeFile } = require('fs');

const path1 = '04NODE\\02BuiltinModules\\2_FS\\First.txt';
const path2 = '04NODE\\02BuiltinModules\\2_FS\\Second.txt';
const resultPath = '04NODE\\02BuiltinModules\\2_FS\\Simple1.txt';

// make readFile and writeFile return promises
const readFilePromisify = util.promisify(readFile);
const writeFilePromisify = util.promisify(writeFile);

const func = async (path1, path2, resultPath) => {
    try {
        const first_data = await readFilePromisify(path1, 'ascii');
        const second_data = await readFilePromisify(path2, 'ascii');
        await writeFilePromisify(resultPath, `Written using Promisified functions\n${first_data} \n${second_data}`);

        const resultData = await readFilePromisify(resultPath, 'ascii');
        console.log(resultData);
    } catch (error) {
        console.log(error);
    }
}

func(path1, path2, resultPath);


// This is how we would implement it from scratch in node.

// util module has a function called promisify which takes a function following the common error-first callback
// style, i.e. taking an (err, value) => ... callback as the last argument { readFile },
// and returns a version that returns promises. Read more here
// https://nodejs.org/dist/latest-v18.x/docs/api/util.html#utilpromisifyoriginal
