// Normal function
function greetings(name) {
    return `Hello ${name}`;
}

// This is what an arrow function looks like
const newGreetings = (name) => `Hello ${name}`;

console.log(greetings('Ben Tennyson'));
console.log(newGreetings('Ben Tennyson'));

const addingTwo = (num1, num2) => console.log(num1 + num2);
addingTwo(25, 25);
