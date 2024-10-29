const start = document.getElementById('start');
const stop = document.getElementById('stop');
const count = document.getElementById('count');

start.addEventListener('click', startTime);
stop.addEventListener('click', stopTime);

// creating timeout
let timeoutID = setTimeout(() => {
    console.log('Hello')

}, 1000);

let timerId;

function startTime() {
    //creating intervals
    timerId = setInterval(() => {
        count.textContent++;
    }, 500);

}

function stopTime() {
    clearInterval(timerId);
}

// animation frames
let animationFrameID;
function startTime() {
    count.textContent++;
    animationFrameID = requestAnimationFrame(startTime);
}

function stopTime() {
    cancelAnimationFrame(animationFrameID)
}

// time passed since time origin or how much time has passed since the page loaded
console.log(performance.now());

// milliseconds passed since jan 1970
console.log(Date.now())

//date
const new_date = new Date(2023, 3, 10, 6, 10, 20);
console.log(new_date);