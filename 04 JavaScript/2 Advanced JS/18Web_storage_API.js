// Local storage

// storing item
localStorage.setItem('Name', 'Ben Tennyson');
localStorage.setItem('Job', 'SuperHero');
localStorage.setItem('WatchName', 'Omnitrix');

// get item
console.log(localStorage.getItem('Name'));
localStorage.removeItem('WatchName');

// session storage also works like this; session storage is non-persistent while local storage is persistent

// INDEXED DB
const request = indexedDB.open('myDatabase', 1);
request.addEventListener('upgradeneeded', event => {
    const database = event.target.result;
    const store = database.createObjectStore('HeroTime', { keyPath: 'id' });
    store.createIndex('name', 'name');

    store.add({
        id: 0,
        firstName: 'Ben Tennyson',
        job: 'SuperHero',
    });
    store.add({
        id: 1,
        firstName: 'Max Tennyson',
        job: 'Ranger',
    })
});

request.addEventListener('success', event => {
    const database = event.target.result;
    database
        .transaction(['HeroTime'], 'readwrite')
        .objectStore('HeroTime')
        .add({
            id: 2,
            name: 'Gwen Tennyson'
        });
});

request.addEventListener('success', event => {
    const database = event.target.result;
    const req = database
        .transaction(['HeroTime'], 'readwrite')
        .objectStore('HeroTime')
        .get(0);

    req.addEventListener('success', event => {
        console.log(event.target.result.firstName);
    })
});
