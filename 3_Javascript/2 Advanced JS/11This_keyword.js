const button = document.querySelector('button');
button.addEventListener('click', logThis);
// Here the this keyword returns the button itself; for call back function inside event listeners, 
//this would return the item the event happened. 
// Arrow functions on the other hand does not get the this binding, it would simply return the env it was on,
// that is the window object here.


// In a browser the default this object is the windows
console.log(this);

function logThis() {
    console.log(this);
}

const obj = {
    num: 10,
    logThis,
}

// this inside an object is the object itself.
obj.logThis();

// we can bind an object using the bind keyword
const new_obj = {
    num: 200,
}
const boundObj = logThis.bind(new_obj);
boundObj();

// if we just need to use the function once then we can use the call method
logThis.call(new_obj);

// Using this within the array iterator functions
const arr = [1, 2, 3, 4, 5];
arr.forEach(function (num) {
    console.log(this);
    console.log(num);
});

// this in class
class Person {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log("I am " + this.name);
    }
}

const human1 = new Person("Hello");
human1.speak();

// Usually this is a runtime binding.
