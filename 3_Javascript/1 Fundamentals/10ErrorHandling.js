// Error Handling

// Uncomment one of the following and run 

// throw 'This is an error';

// throw new Error('This is another error');

//Catching errors

try {
    throw new Error('This is also an error');
} catch (error) {
    console.log('I got the error');
}

// console object
console.log('Logging');
console.error('In most browsers this would be a red error message');
console.debug('This would show debug message');
console.table([[1, 2, 3], ['one', 'Two', 'Three']])

console.time();
for (let i = 0; i < 10000; i++) { }
console.timeLog();
console.timeEnd();

// this shows where we are in the code
console.trace();
