// Old way to create and work with classes (Prototype chaining)
const person = {
    isHuman: true,
};

const child = Object.create(person);
// we can manually set the prototype using the __proto__ alias. It is being deprecated.
//setPrototypeOf() : Not recommended
Object.setPrototypeOf(child, person);

// get proto()
console.log(Object.getPrototypeOf(child));

const funcProperties = Object.getPrototypeOf(() => { });
console.log(Object.getOwnPropertyNames(funcProperties));

// function constructors
function foo(name) {
    this.name = name;
}
const bar = new foo('Hello');
console.log(bar);

console.log(bar instanceof foo);
console.log(bar instanceof Object);

// we can use the set prototype property to do some useful things like implementing a functionality that an old browser does not has
Array.prototype.myPush = function (value) {
    this[this.length] = value;
}
// This is known as polyfill
const arr = [1, 2, 3];
console.log("Original array: " + arr);
arr.myPush(4);
console.log("New array: ", arr);


// Newer class syntax
class Animal {

    static isGroup = true;
    isAlive = true;

    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name + " is eating");
    }
}

const dog = new Animal("Dog");
dog.eat()
console.log(dog.isAlive);
console.log(dog.isGroup); // undefined as static properties are exclusive to class not to objects
console.log(Animal.isGroup);

// Inheritance
class Lion extends Animal {

    #thisIsPrivate = 12345;
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    intro() {
        console.log("I am " + this.name);
    }
    getAge() {
        return this.age;
    }
    setAge(age_num) {
        this.age = age_num;
    }
    secret(key) {
        if (key === 123) {
            return this.#thisIsPrivate;
        } else {
            return "Try Again";
        }
    }

}

const leo = new Lion("Leo", 8);
console.log(leo.intro());
console.log("Current age is: " + leo.getAge());
leo.setAge(10);
console.log("New age is: " + leo.getAge());
console.log(leo.secret(1));
console.log(leo.secret(123));