// Event Driven programming 
const EventEmitter = require('events');
const http = require('http');

const customEmitter = new EventEmitter();

// on and emit are two important funcs of this class. 
// on : where we want to listen to the something
customEmitter.on('response', () => {
    console.log(`Received data successfully...`);
});

// we can listen to same method and do other things
customEmitter.on('response', () => {
    console.log(`Other Crazy Stuff...`);
});

// or pass with some arguments
customEmitter.on('response', (name, id) => {
    console.log(`Received data successfully from user ${name} with id : ${id}`);
});

// emit event.
customEmitter.emit('response', "King kong", 2);

// EventEmitter, customEmitter, response, etc are just conventional names.
// Note 'response' needs to match in on and emit.

// an example
const server = http.createServer();

server.on('request', (req, res) => {
    res.end('This is an example of using on event')
});

server.listen(5000);

// Even though we might not set up event frequently on our own, almost all the libraries use them under the hood.
