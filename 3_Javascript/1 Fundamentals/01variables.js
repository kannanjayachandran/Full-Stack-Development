// variables

let num1 = 10;
let str = "This is a string";
let isBool = true;
let bigNum = 100000000000n;     // we can also wrap it in BigInt function

let useless_value = null;
let some_variable = undefined; // or let some_variable;

console.log(` Number is ${num1}\n String is ${str}\n Boolean is ${isBool}\n Null is ${useless_value}\n Undefined is ${some_variable}\n Big Number is ${bigNum}`)

// array
let aliens = ["Four Arms", "Diamond Head", "XLR8"]
let alienNumber = [1, 2, 3];

console.log(`\nString array: ${aliens}\nNumber array: ${alienNumber}`)

//object
let alienObj = {
    name: "Four Arms",
    species: "Tetramand",
    strength: 1000,
}

console.log('\nObject: ', alienObj);

// variable declaration

let a = 10; // let is block scoped
var b = 10; // var is function scoped
const c = 10;   // const is block scoped and cannot be changed

// typeof operator
console.log(`\nType of alienObj.name: ${typeof alienObj.name}`);
