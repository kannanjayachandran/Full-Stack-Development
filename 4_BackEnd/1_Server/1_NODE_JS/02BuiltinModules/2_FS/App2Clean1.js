const { readFile } = require('fs');

const path1 = '04NODE\\02BuiltinModules\\2_FS\\First.txt';
const path2 = '04NODE\\02BuiltinModules\\2_FS\\Second.txt';

// getData func returns a promise
const getData = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'ascii', (err, data) => {
            if (err) {
                console.log(`OOPS Error ${err}`);
                reject(err);
            }
            resolve(data);
        });
    });
}

// getDataAsync func for reading from two files
const getDataAsync = async () => {
    try {
        const data1 = await getData(path1);
        const data2 = await getData(path2);

        console.log(`From Async + promise : ${data1} \n${data2}`);
    } catch (error) {
        console.log(`OOPS Error ${error}`);
    }
}

getDataAsync();

// calling the function, catching any error, if some occurs, using the output { Chaining }
getData(path1)
    .then((result) => console.log(`From Chaining (Promise only) : ${result}\n`))
    .catch((err) => console.log(err))

console.log('FIRST')
