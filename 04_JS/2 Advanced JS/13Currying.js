// Currying : It is the transforms a function with multiple arguments into a nested series of functions, each taking a single argument. 
// Currying helps you avoid passing the same variable multiple times, and it helps you create a higher order function.

function mySum(a, b, c, d) {
    return a + b + c + d;
}

function curriedMySum(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return a + b + c + d;
            }
        }
    }
}

console.log(mySum(1, 2, 3, 4));
console.log(curriedMySum(1)(2)(3)(4));

// creating a curry function
function curry(func) {
    return function (a) {
        return function (b) {
            return function (c) {
                return function (d) {
                    return func(a, b, c, d);
                }
            }
        }
    }
}

const curriedMySum2 = curry(mySum);
console.log(curriedMySum2(1)(2)(3)(4));

function subtract(a, b, c, d) {
    return a - b - c - d;
}

const curriedSubtract = curry(subtract);
console.log(curriedSubtract(4)(3)(2)(1));

function curry2(func) {
    return (a) => (b) => (c) => (d) => func(a, b, c, d);
}

// One of the use case of curried function is when we need to use some part of a function or similar use case.
