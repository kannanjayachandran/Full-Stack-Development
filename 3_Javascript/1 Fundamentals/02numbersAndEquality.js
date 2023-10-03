// Operators

let num1 = 100;
let num2 = 200;

console.log(`Arithmetic Operators: { ${num1} and ${num2} }`)
console.log("sum:", num1 + num2);
console.log("Difference:", num2 - num1);
console.log("Product:", num1 * num2);
console.log("Division:", num2 / num1);

// some useful Math functions
let x = 9.8;
let y = '10.8';
let z = "100px";

console.log('\nMath functions')
console.log('Round: ', Math.round(x));
console.log('Floor: ', Math.floor(x));
console.log('Random: ', Math.round(Math.random() * 100));
console.log('String converted to number: ', Number(y));
console.log('Integer parsed from string: ', parseInt(z));

// Equality
// Two equal symbol : loose equality : only value is checked
// Three equal symbol : Strict equality Checks both value and type

let num3 = '100';

// Strictly equality operator 
console.log('\nStrict Equality: ');
console.log(`${num1} === ${num2} : ${num1 === num2}`);
console.log(`${num1} (type: ${typeof num1}) === ${num3} (type: ${typeof num3}) : ${num1 === num3}`);

// loosely equality operator
console.log('\nLoose Equality: ');
console.log(`${num1} == ${num2} : ${num1 == num2}`);
console.log(`${num1} (type: ${typeof num1}) == ${num3} (type: ${typeof num3}) : ${num1 == num3}`);

// infinity
console.log('\nInfinity: ', Infinity, 'Negative infinity: ', -Infinity);
