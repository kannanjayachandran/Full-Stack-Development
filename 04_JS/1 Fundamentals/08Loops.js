// for loop
for (let i = 0; i <= 2; i++) {
    console.log('for loop ');
}

// do while loop
let i = 0
do {
    console.log('Do while loop..');
    i++;
} while (i < 3)


//while loop
i = 0
while (i < 3) {
    console.log('The while loop..');
    i++;
}

// for of loop
const arr = [1, 2, 3, 4, 5]
for (const value of arr) {
    if (value == 4) {
        console.log('For of loop');
    }
}

let str = "It's Hero time";
for (const char of str) {
    if (char.toLowerCase() == 'e') {
        console.log(char);
    }
}

// for in loop
const obj = {
    name: 'Ben Tennyson',
    age: 10,
    aliens: ['four arms', 'diamond head'],
};

for (const key in obj) {
    console.log(key);
}

for (const key in obj) {
    console.log(key, obj[key]);
}

//for each loop
[1, 2, 3].forEach((value) => {
    console.log(value);
});
