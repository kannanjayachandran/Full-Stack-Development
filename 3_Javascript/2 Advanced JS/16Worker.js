addEventListener('connect', event => {
    const port = event.ports[0];

    port.onmessage = function (event) {
        console.log(event.data);
        port.postMessage(event.data * 10);
    }
})

for (let i = 0; i < 3000000000; i++) {
    i += 2;
}
console.log("Slow Operation Finished.");

self.addEventListener('message', event => {     // no need of self in this line.
    console.log(event.data);
    postMessage("This is the reply by the worker...");
});
