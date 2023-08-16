// Functions

function square(num = 2) {
    return num ** 2;
}

console.log(square(5));
console.log('calling square function without any parameter :', square());

// Passing functions like values
function foo(func, param) {
    console.log(func(param));
}

foo(square, 10);

// functions are also object but typeof shows them as `function`
console.log(typeof square);

// we can verify this by checking if the function is a object of the main Object class
console.log(square instanceof Object);

// Arrow functions
const square2 = (num) => {
    return num ** 2;
}
console.log('Arrow Function: ', square2(5));

// if the function has only one statement we can remove the curly braces and the return keyword
const square3 = (num) => num ** 2;

console.log('Arrow Function2: ', square3(5));

// if the function has only one parameter we can remove the parenthesis

const square4 = num => num ** 2;

console.log('Arrow Function3: ', square4(5));

// if the function has no parameter we can use empty parenthesis

const square5 = () => 2 ** 2;

console.log('Arrow Function4: ', square5());
