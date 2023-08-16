// anonymous function
const arr = [1, 2, 3];
const arr_3 = arr.map(num => num * 3);

console.log(arr_3);

// Destructuring values
const [first, second] = arr;
console.log(first, second);

const [a, b, ...rest] = arr;
console.log(a, b, rest);

// we do this with objects also
const Animal = {
    name: "King Kong",
    power: "Smashing",
    fav_num: 100,
};

const { name: destructuredName, ...remaining } = Animal;
console.log(destructuredName, remaining);

// Spread operator
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];
const arr_combined = [0, ...arr, ...arr2, ...arr3, 10];
console.log(arr_combined);

function printArgs(x, ...rest) {
    console.log(x);
    console.log(rest);
}

printArgs(1, "hello", "world", 234, { name: "King Kong", power: 410, isAlive: false });

// Ternary operator
const hero_name = "GodZilla";
const default_name = hero_name != null ? hero_name : 'Something else';
console.log(default_name)

// Nullish coalescing operator or Null coalescing operator
const apple = null;
console.log(apple ?? 'We will consider this since apple is null');

const orange = 'Orange';
console.log(orange ?? 'Something else');

// Optional chaining ?.
const Fruits = {
    waterMelon: {
        color: 'green',
    },
}
console.log(`We check if the prop ${Fruits.waterMelon?.taste}, exists without throwing an error.`);
console.log(`We check if the prop ${Fruits.waterMelon?.color}, exists without throwing an error.`);
