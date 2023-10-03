function* genNumbers() {
    for (let i = 0; i < 5; i++) {
        yield i;
    }
    return "OK"
}

const genObject = genNumbers();
console.log(genObject.next());
console.log(genObject.next());
console.log(genObject.next());
console.log(genObject.next());
console.log(genObject.next());
console.log(genObject.next());

for (value of genObject) {
    console.log(value);
}