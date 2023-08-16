import * as secondHelper from './15Modules2';


class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log("Hello " + this.name);
    }
}

const tennyson = new Person('Ben Tennyson');
tennyson.sayHello();

secondHelper.foo();

shouldSayHello = true;
if (shouldSayHello) {
    const { foo } = await import('./15Modules2')
    foo();
}