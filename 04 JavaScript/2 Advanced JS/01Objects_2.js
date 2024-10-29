// A base object
const Watch = {
    name: 'Omnitrix',
    aliens: 10,
    copies: ['Unitrix', 'Ulitmatrix'],
    benIsOwner: true,
    printName() {
        console.log(this.name);
    }
};

// Inherit an object from another object
const Petrosapien = {
    Hero_name: 'Diamond Head',
    __proto__: Watch,
    [Symbol('id')]: 0,
};

console.log('\nInheritance in JS\n\nOwn Properties', Petrosapien);
console.log('\nInherited Properties', Petrosapien.__proto__);

// Iterating over an object
console.log('\nIterating over the object\n\nKeys in the object: ', Object.keys(Petrosapien));
console.log('Values in the object: ', Object.values(Petrosapien));
console.log('Entries in the object: ', Object.entries(Petrosapien));
console.log("\nEnumerating over all the properties/methods (including inherited ones):")
for (key in Petrosapien) {
    console.log(key)
};

// assign(target, source) function
const pyronite = {
    Hero_name: 'Heat Blast',
};
Object.assign(pyronite, Watch);
console.log('\nNewly created object using assign():\n', pyronite);

// freeze an object
Object.freeze(pyronite);
console.log("\nfreeze() : This essentially makes the object immutable. We can no longer change the object.");
console.log(`We can check if the object is frozen or not using : ${Object.isFrozen(pyronite)}`);


// seal an object
Object.seal(pyronite);
console.log(`\nwe can alternatively use Seal function to seal an object: ${Object.isSealed(pyronite)}`);
