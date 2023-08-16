const slowButton = document.getElementById('slow');
const sayHelloButton = document.getElementById('say-hello');

slowButton.addEventListener('click', slowOperation);
sayHelloButton.addEventListener('click', sayHello);

function slowOperation() {
    const worker = new Worker('./16worker.js');
    worker.postMessage("This is the message passed to the worker...");

    worker.addEventListener('message', event => {
        console.log(event.data);
    });

    worker.terminate();
}

function sayHello() {
    console.log("Hello World");
}

// shared workers
function newOperation() {
    const worker1 = new SharedWorker('./16worker.js');
    worker1.port.postMessage(10);

    worker1.port.onmessage = (event) => {
        console.log(event.data);
    };
}

// when we have a slow operation that needs to be done in using a web worker so that it won't block the main thread.
// But ideally we should do all the heavy computation on the server rather than doing it on the client side.