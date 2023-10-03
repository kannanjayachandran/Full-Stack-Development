// we can assign two or more types to a variable
let num: number | string = 123;
console.log(num);

// we can create custom type using type keyword
type NumString = number | string;
let new_num: NumString = 500;
console.log(new_num)

// we can also have the type to be string or pretty much anything
type state = 'on' | 'off';
let isWorking: state = 'off';

// enums
enum whatIsTheState {
    ON = "on",
    OFF = "off"
}

let onSwitch: whatIsTheState = whatIsTheState.OFF;

// functions
function add(x: number, y: number): number {
    return (x+y)*0.2;
}

console.log(add(100, 20));

function subtract(x: number, y: number): void {
    console.log(x-y);
}

subtract(10, 5);

interface Hero {
    name: string;
    job: string;
}

const ben: Hero = {
    name: "Ben Tennyson",
    job: "SuperHero", 
}

class AlienForce implements Hero{
    name: string;
    job: string;

    constructor(name) {
        this.name = name;
        this.job = "SUPERHERO"
    }
}

const kevin: Hero = new AlienForce('Kevin 11');

// generics
const arr: Array<number> = [1, 2, 3, 4];
console.log(arr);  