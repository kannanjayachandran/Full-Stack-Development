// template literal
let red = 123;
let green = 123;
let blue = 123;
let alpha = 0.4;

const rgbaExp = 'Old Expression: rgba(' + red + ', ' + green + ', ' + blue + ', ' + alpha + ')';
console.log(rgbaExp);

// we can simplify this using template strings
const new_rgbExp = `New Expression: rgba(${red}, ${green}, ${blue}, ${alpha})`;
console.log(new_rgbExp);

console.log(`Addition inside template literal: ${100 + 3}`);
