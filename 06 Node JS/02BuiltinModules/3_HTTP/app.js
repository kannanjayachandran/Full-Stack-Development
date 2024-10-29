const htpp = require('http');

const server = htpp.createServer((req, res) => {

    if (req.url === '/') {
        res.write(`<h1> Hello World </h1>`);
        res.end('My First Node Server.');

    } else if (req.url === '/about') {
        res.end(`<h1> About Page </h1>`);
    } else {
        res.end(`<h1> Opps wrong dimension👽</h1> <p> That resource is not available </p>`);
    }
    // we can return response like this also.
    // res.write("My first Node server.");
    // res.end();
});

server.listen(5000, () => console.log('Server listening at port 5000'));