const path = require('path');

const { readFile, writeFile } = require('fs').promises;

const path1 = '04NODE\\02BuiltinModules\\2_FS\\First.txt';
const path2 = '04NODE\\02BuiltinModules\\2_FS\\Second.txt';
const resultPath = '04NODE\\02BuiltinModules\\2_FS\\Simple2.txt';

const func = async () => {
    try {
        const first_data = await readFile(path1, 'ascii');
        const second_data = await readFile(path2, 'ascii');

        await writeFile(resultPath,
            `Written using Promise object of fs module\n${first_data} ${second_data}`, { flag: 'a' }
        );

        const resultData = await readFile(resultPath, 'ascii');
        console.log(resultData);
    } catch (error) {
        console.log(error);
    }
}

func();

// we don't actually need to use the Util package to promisify the read and write functions
// starting from version 10.0.0, the fs module was updated to include a promises object.
// This object contains functions that are similar to the traditional functions in the fs module but
// with one important difference: they return Promises.
