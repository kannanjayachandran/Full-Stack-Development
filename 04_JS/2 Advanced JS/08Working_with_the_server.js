// Assume that the following api's are already running in the following ports.

const BASE_API = 'http://localhost:8080/api';
const JSON_API = 'http://localhost:8080/jsonapi';
const POST_API = 'http://localhost:8080/postapi';
const SLOW_API = 'http://localhost:8080/slowapi';

// fetch would return promises
fetch(BASE_API)
    .then(res => res.text())
    .then(console.log)
    .catch(error => console.log('Error: ' + error));

// we can pass the search params inside the fetch function.
//fetch(BASE_API + '?firstName=Hello&lastName=World');
// This syntax is hard to read and hence not the preferred way.
// we would use the following way to pass 

const url = new URL(BASE_API);
url.searchparams.set('firstName', 'Hello');
url.searchparams.set('lastName', 'World');
fetch(url);

// before fetch we used the following syntax to work with the server
const request = new XMLHttpRequest();
request.addEventListener('load', function () {
    console.log(this.responseText);
});

request.open('GET', BASE_API);
request.send();

// We can use async await instead of then with fetch.
const url2 = URL(BASE_API);
url2.searchparams.set('firstName', 'Hello');
url2.searchparams.set('lastName', 'World');
fetch(url2)

async function main() {

    const url = URL(BASE_API);
    url.searchparams.set('firstName', 'Hello');
    url.searchparams.set('lastName', 'World');

    try {
        const response = await fetch(url2);
        const text = await response.text();
        console.log(text)
    } catch (error) {
        console.error('we got the ' + error);
    }
}

main();

// using the json api
// instead of text response this api would return a json object.
async function main() {

    try {
        const response = await fetch(JSON_API);
        const obj = await response.json();
        console.log(obj)
    } catch (error) {
        console.error('we got the ' + error);
    }
}

main();

// working with the post api
// we need to add one more parameter to the fetch function
async function main() {
    const data = {
        name: 'Hello',
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');

    try {
        const response = await fetch(POST_API, {
            method: 'POST',
            body: JSON.stringify(data),
            headers
        });
        const text = await response.text();
        console.log(text)
    } catch (error) {
        console.error('we got the ' + error);
    }
}

main();

// Interacting with a form in HTML using JS
const form = document.querySelector('form');
form.addEventListener('submit', onSubmit);

async function onSubmit(event) {
    event.preventDefault(); // Prevent the browser from refreshing as we want to perform the fetch by ourself.

    const options = {
        method: 'POST',
        body: new FormData(form)
    }

    try {
        const response = await fetch(POST_API, options);
        const text = await response.text();
        console.log(text)
    } catch (error) {
        console.error('we got the ' + error);
    }
}

// Using the slow api
async function main() {
    const abortController = new AbortController();
    setTimeout(() => {

    }, abortController.abort(), 2000);

    try {
        const response = await fetch(SLOW_API, {
            signal: abortController.signal
        });
    } catch (error) {
        console.error('we got the ' + error);
    }
}