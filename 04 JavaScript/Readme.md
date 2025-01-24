# JavaScript

JavaScript is a high-level, interpreted (or JIT compiled) programming language. It is the language of the web, and it is used to add interactivity and dynamic content to websites.

## Variables

### var

`var` can be used to declare a variable with or without value. It is globally scoped when declared outside a function and function scoped when declared inside a function.

```js
var a = 1;
var b = 2;
var c;
```

### let

`let` is block-scoped, local variable in JavaScript. It can also be used to declare a variable with or without value.

```js
let a = 1;
let b = 2;
let c;
```

### const

`const` is used to declare a block-scoped, read-only named constant in JavaScript. It also can be used to declare a variable with or without value.

```js

const a = 1;
const b = 2;
const c;

```

<details>

<summary> Variables 🎉</summary>

- Use `const` whenever possible to avoid surprises.

</details>

## Data Types

> Indicates the type of the data we are storing in a variable. There are two types of data types in JavaScript: primitive and non-primitive.

### Primitive Data Types

- `number` - 64-bit floating point number
- `string` - a sequence of characters (Yes strings are primitive data types in JavaScript)
- `boolean` - true or false
- `null` - a special keyword denoting a null value
- `undefined` - a top-level property whose value is not defined
- `symbol` - data type whose instances are unique and immutable

### Non-Primitive Data Types

- `object` - key-value pairs of collection of data
- `array` - list-like object whose prototype has methods to perform traversal and mutation operations

## Operators

### Conditional (Ternary) Operator

> `condition ? expr1 : expr2` - if condition is true, the operator returns the value of expr1; otherwise, it returns the value of expr2

## Equality Operators

### `==` vs `===`

> `==` is called the loose equality operator; it would return true if the two operands are equal in value. `===` is called the strict equality operator; it would return true if the two operands are equal in value and type

## Arrays

> Arrays are list-like objects which are simply objects with integer-based keys and a length property.

### Array Literal

```js
var arr = ["Ben", 10, "New York"];
```

### Array Constructor

```js
var arr = new Array();

arr[0] = "Ben";
arr[1] = 10;
arr[2] = "New York";
```

## Objects

Objects are collections of properties. They are used to encapsulate _related functions_ and _variables_ into efficient packages and act as handy data containers.

### Object Literal

```js
var obj = {
  name: "Ben",
  age: 10,
  city: "New York",
};
```

### Map()

> Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

```js
var map = new Map();

map.set("name", "Ben");
map.set("age", 10);
map.set("city", "New York");
```

### set

> Set is a collection of values, where each value may occur only once (unique).

```js
var set = new Set();

set.add("Ben");
set.add(10);
set.add("New York");
```

## Functions

> functions are objects in JavaScript. They can be assigned to variables, passed as arguments to other functions, and returned from functions. JavaScript functions are first-class objects. This means that functions can be used like any other object.

### Function Declaration

```js
function add(a, b) {
  return a + b;
}
```

> we can add a default value to the parameters;

```js
function add(a = 0, b = 0) {
  return a + b;
}
```

### Function Expression

```js
var add = function (a, b) {
  return a + b;
};
```

## Loops

> There are many different kinds of loops, but they all essentially do the same thing: they repeat an action some number of times.

### for

```js
for (var i = 0; i < 10; i++) {
  console.log(i);
}
```

### while

```js
var i = 0;

while (i < 10) {
  console.log(i);
  i++;
}
```

### do while

```js
var i = 0;

do {
  console.log(i);
  i++;
} while (i < 10);
```

## Conditional Statements

> Conditional statements are used to perform different actions based on different conditions.

### if

```js
if (condition) {
  // code to be executed if condition is true
}
```

### if else

```js
if (condition) {
  // code to be executed if condition is true
} else {
  // code to be executed if condition is false
}
```

### if else if else

```js
if (condition1) {
  // code to be executed if condition1 is true
} else if (condition2) {
  // code to be executed if the condition1 is false and condition2 is true
} else {
  // code to be executed if the condition1 is false and condition2 is false
}
```

## Error Handling

> JavaScript has a built-in error object that provides error information when an error occurs.

### try catch

```js
try {
  // code to be executed
} catch (err) {
  // code to be executed if an error occurs
}
```

### throw

```js
throw "Error";
```

## Scope

> Scope determines the accessibility (visibility) of variables. JavaScript has two types of scope: global scope and local scope.

### Global Scope

> Variables defined outside a function block have Global scope. Global variables have global scope which means they can be seen everywhere in your JavaScript code.

### Local Scope

> Variables defined inside a function block have Local scope. Local variables have local scope which means they can only be seen inside the function.

## Strict Mode

> Strict mode makes it easier to write "secure" JavaScript.

```js
"use strict";
```

**Strict Mode Rules**

- Variables cannot be used without declaring them
- Deleting a variable (or object) is not allowed
- Duplicating a parameter name is not allowed
- The `with` statement is not allowed
- The `eval()` function cannot be used to create variables in the scope from which it was called
- The `eval()` function cannot be used to create variables in the local scope of the function it was called from
- The `this` keyword in functions behaves differently in strict mode

## Arrow functions

> Arrow functions are a new way to write anonymous function expressions in JavaScript. They have a shorter syntax than traditional function expressions.

```js
var add = (a, b) => {
  return a + b;
};
```

### Rest and spread operators

> The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

```js
function sum(...args) {
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}

console.log(sum(1)); // 1
console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3)); // 6
```

> The spread operator allows us to expand elements. It is commonly used to make shallow copies of JS objects.

```js
let arr = [1, 2, 3];

let arr2 = [...arr]; // like arr.slice()

arr2.push(4);

console.log(arr); // [ 1, 2, 3 ]
console.log(arr2); // [ 1, 2, 3, 4 ]
```
