// asynchronous way to read and write file 
const { readFile, writeFile } = require('fs');

const path1 = '04NODE\\02BuiltinModules\\2_FS\\First.txt';
const path2 = '04NODE\\02BuiltinModules\\2_FS\\Second.txt';
const resultPath = '04NODE\\02BuiltinModules\\2_FS\\Async_Result.txt';

readFile(path1, 'ascii', (err, result) => {
    if (err) {
        console.log(`Oops Error ${err}`);
        return;
    }
    const first = result;
    // reading second file
    readFile(path2, 'ascii', (err, result) => {
        if (err) {
            console.log(`Oops Error ${err}`);
            return;
        }
        const second = result;
        // writing file
        writeFile(resultPath, `Combining both files asynchronously ${first} \n${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
        });
    });
});
// This is known as callback hell, and avoid it whenever possible.
// we have a alternative way to write async file operation code in much cleaner way.

readFile(resultPath, 'ascii', (err, res) => {
    if (err) {
        console.log(`Oops error ${err}`);
        return;
    }
    console.log(res);
});
