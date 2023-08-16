// OBJECTS 
const Watch = {
    name: 'Omnitrix',
    aliens: 10,
    copies: ['Unitrix', 'Ulitmatrix'],
    benIsOwner: true,
    printName() {
        console.log(this.name);
    }
};

console.log('Watch object:>> ', Watch);
Watch.printName();

// we can create object from existing variables
const name = 'Ben Tennyson';
const age = 10;
const isHero = true;
const aliens = ['four arms', 'diamond head', 'cannon bolt'];

const Hero = {
    name,
    age,
    isHero,
    aliens,
};

console.log('\nObject created from variables:>>', Hero);

// we can also use the object constructor to create object
const batman = new Object();

batman.name = 'Bruce Wayne';
batman.job = 'Super Hero';
batman.isRich = true;

console.log('\nObject created using `Object()` constructor: ', batman);

// function constructor
function batmanConstructor(name, job, isRich) {
    this.name = name;
    this.job = job;
    this.isRich = isRich;
}

const bale = new batmanConstructor('Christian Bale', 'The Dark Knight', true);

console.log("Object created using function constructor: ", bale);

// ES2015 class format
class batmanConstructor1 {
    constructor(name, job, isRich) {
        this.name = name;
        this.job = job;
        this.isRich = isRich;
    }
}
const ben = new batmanConstructor1('Ben Affleck', 'Batman vs Superman', true);
console.log(ben);
