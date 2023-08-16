// if-else
const condition = true;
if (condition) {
    console.log("It's Hero time");
} else {
    console.log('Bla bla');
}

// Switch statements
const num = 100;

switch (num) {
    case 50:
        console.log('bla');
        break;
    case 100:
        console.log('It was 100');
        break
    default:
        console.log('Done');
        break;
}

// Ternary operator
let ans = num > 50 ? 'Hello' : 'World';
console.log(ans);