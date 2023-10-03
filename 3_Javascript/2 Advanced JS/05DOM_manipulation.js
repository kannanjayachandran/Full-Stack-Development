// selecting element by ID
const second_list = document.getElementById('second_li');

// query selector (we can use a css selector to select the element)
const third_li = document.querySelector('li');

// query selector all
const all_li = document.querySelectorAll('li');

// get element by class name
const class_selector = document.getElementsByClassName('hello');

//get elements by tag name
const tag_selector = document.getElementsByTagName('li');

// class and tag would return HTML collections; they are not powerful as node list.

// some properties of Node list (not an array)
console.log(all_li.length);

all_li.forEach(li => console.log(li))

// converting a Node list to array
Array.from(all_li).map(li => console.log(li));

// some DOM Manipulation
all_li[0].style.color = "red";
all_li[0].textContent = "This content was changed";

// set attribute is a useful function
all_li[0].setAttribute('class', 'blue big');

// classlist property
all_li[1].classList.add('big', 'blue');
all_li[1].classList.remove('blue');
all_li[1].classList.toggle('red');

// creating DOM Nodes
const para = document.createElement('p');
para.textContent = "This is a paragraph inserted using JS";
document.body.appendChild(para);

// working with inner HTML
// using inner HTML can be highly prone to errors or bugs so use them wisely
// One useful application of inner HTML is that we can clear the workspace easily.
// document.body.innerHTML = '';
// Never use innerHTML while working with user inputs; user can add script to the input and thus
// it would run on the page.

// Using a loop to add items to the DOM
const parent = document.querySelector('ol');
const listItems_toAdd = [];

for (let i = 0; i < 5; i++) {
    const li = document.createElement('li');
    li.textContent = `List item with i = ${i}`;
    listItems_toAdd.push(li);
}
parent.append(...listItems_toAdd);

// We can do this using a fragment more easily
const fragment = document.createDocumentFragment();
for (let i = 0; i < 5; i++) {
    const li = document.createElement('li');
    li.textContent = `List item with i = ${i}`;
    fragment.append(li)
}
parent.append(fragment);

// Removing elements from the DOM
// all_li[0].parentNode.removeChild(all_li[0]);    // bit verbose way
all_li[0].remove();

// window object
console.log('Width of the window: ', window.innerWidth);
console.log('Height of the window: ', window.innerHeight);

console.log(window.getComputedStyle(all_li[2]).fontSize);

const scrollable = document.getElementById('scrollable');
console.log(scrollable.clientHeight);   // CSS height + CSS padding - height of horizontal scrollbar (if present).
console.log(scrollable.offsetHeight);   // offsetHeight is a measurement in pixels of the element's CSS height, including any borders, padding, and horizontal scrollbars (if rendered)
console.log(scrollable.scrollHeight);   // the height of an element including padding, but excluding borders, scrollbars, or margins.
console.log(scrollable.offsetTop);

// Using scroll bar in JS
scrollable.scrollTo({
    top: scrollable.querySelectorAll('p')[3].offsetTop,
    behavior: 'smooth'
});
