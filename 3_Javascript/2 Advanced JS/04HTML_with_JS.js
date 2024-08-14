const button = document.querySelector('button');
const h1 = document.querySelector('h1');

function random (number) {
    return Math.floor(Math.random() * (number + 1));
}

button.addEventListener('click',
    () => {
        const randomCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
        document.body.style.backgroundColor = randomCol;
    });

h1.addEventListener('mouseover',
    () => {
       const para =  document.createElement("p");
       para.textContent = "Newly created p tag !";
       document.body.appendChild(para);
    }
);