// Strings
let str = 'first string';

console.log('Original string: ', str);
console.log('after concatenation: ', str + ' second string');

// working with string
console.log('\nThe first character of the string:', str[0]);
console.log('`Includes()` check if the string contains the argument:', str.includes('g'));
console.log('`startsWith()`:', str.startsWith('a'));
console.log('`toUpperCase()`:', str.toUpperCase());

// Substrings
console.log('\n`substring()`:', str.substring(0, 3));
console.log('padStart : would pad the string if it is not as ' +
    'long as the input the function received:', str.padStart(50, '*'));
