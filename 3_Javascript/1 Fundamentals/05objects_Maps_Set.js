// Objects
const hero = {
    name: 'Ben Tennyson',
    age: 10,
    aliens: ['four arms', 'diamond head', 'grey matter', 'heat blast'],
};
console.log('Hero object:', hero);

// converting object to JSON
console.log('\nJSON: ', JSON.stringify(hero));

// converting JSON to object
let a = JSON.stringify(hero);
console.log('Object: ', JSON.parse(a));

// changing values of object
console.log('\nChanging values of object\nAlien list: ', hero.aliens, '\nAge: ', hero.age);

hero.age = 11;
hero.aliens.push('stink fly');

console.log('New age:', hero.age)
console.log('New aliens list is:', hero.aliens);

// Map()
const map = new Map();
map.set(1, 'hello');
map.set(2, 'world');
console.log('\n\nMap()');
console.log('map object with key == 1:', map.get(1));
console.log('Total size of the map:', map.size);

// set
const set = new Set();
set.add('Swamp fire');
set.add('Swamp fire');
set.add('big chill');
console.log('\n\nset()')
console.log('Set is:', set);
console.log('\nSet size:', set.size);
