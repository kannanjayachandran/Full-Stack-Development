// Stack LIFO
const stack = [];
stack.push(1);
stack.push(2);
console.log(stack.pop());

// Queue FIFO
const queue = [];
queue.push(1);
queue.push(2);
console.log(queue.shift());

// Hash Map
const map = new Map();
map.set('First', 1);
map.set('second', 2);
map.set(3, 'third');
console.log(map.size);
console.log(map.has(3));

for ([key, value] of map) {
    console.log(key, value);
}

console.log()

map.forEach((value, key) => {
    console.log(key, value);
});

const iter = map.entries();
console.log(iter.next().value);
const key_lis = map.keys();
console.log(key_lis);

// set
const set = new Set();
set.add(123);
set.add(10);

console.log(set.has(123));

set.forEach((value) => {
    console.log(value);
});

const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 1, 2, 3, 4, 5];
console.log(Array.from(new Set(arr)));

// weak set and weak map : works similar to maps and sets but weak map keys can only be objects and values of a weak set can only be
// objects. Weak set and Weak map does not prevent garbage collection.
