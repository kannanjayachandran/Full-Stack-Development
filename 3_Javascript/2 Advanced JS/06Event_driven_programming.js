// Event driven programming
const button = document.querySelector('button');
button.addEventListener('click', () => {
    console.log(Event);
    console.log(Event.type);
    console.log(Event.target);
    console.log(this); // same as above line here because this is bound to button in this context
    console.log('You clicked the button !');
    const para = document.createElement("h1");
    para.textContent = "You clicked on the button";
    document.body.appendChild(para);
});

// Event Propagation : Event propagation is a way to describe the “stack” of events that are 
//  fired in a web browser. 
const new_button = document.getElementById('new_button');
new_button.addEventListener('click', whenClicked);
document.body.addEventListener('click', whenClicked);

function whenClicked(event) {
    console.log(event.target);
    event.stopPropagation();
    console.log(this);
}

// Event propagation happens in 3 phases; 
// 1. Capturing phase: When an event fires; it starts at the root of the DOM, then it end up on doing what it needed to do on the target.
// In this case it would click on body then the button
// 2. Target phase: In the capturing phase we move down the DOM and then in the target phase we fire the event on the 
//                  actual element.
// 3. Bubbling phase : In this phase we go back up.
// we can use the stopPropagation() function to stop the propagation when we want.
// Not all events propagate.

// Manually Removing an event listener
// new_button.removeEventListener('click', whenClicked); 

// if we put this removeEventListener() inside the whenClicked() function, it simply execute once.

// double click
new_button.addEventListener('dblclick', doubleClick);

function doubleClick(event) {
    console.log('Double clicked....');
}

// keyboard events
window.addEventListener('keydown', event => {
    console.log(event.code);
});

// scrolling
const scrollable = document.getElementById('scrollable');
scrollable.addEventListener('scroll', event => {
    console.log(event.target.scrollTop);
});

scrollable.addEventListener('mouseenter', event => {
    console.log(event.pageX, event.pageY);
});

// drag and drop
const dragDrop = document.getElementById('drag');
dragDrop.addEventListener('dragstart', event => {
    console.log(event);
});

scrollable.addEventListener('drop', event => {
    scrollable.prepend(dragDrop);
});

scrollable.addEventListener('dragover', event => {
    event.preventDefault();
});

// Event delegation : Adding more event listeners would slow down the browser, event delegation is the process of 
//                    adding the event listener to the parent and then calling the event listener when required.

scrollable.addEventListener('click', event => {
    if (event.target !== this) {
        event.target.textContent = 'Clicked';
    }
});
