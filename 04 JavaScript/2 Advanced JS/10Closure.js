// closure is a function along with the lexical environment it was declared in.
function outerFunction() {
    const num = 100;

    return function () {
        console.log(num);
    }
}

//const innerFunction = outerFunction();
//innerFunction();

// The above code works but, in many programming languages it won't, as the variable num would be garbage collected as soon
// the outerFunction() gets executed.

// one of the common useful case of closures are private methods.

function makeFunctions() {

    let privateNum = 200;
    function privateInnerFunction() {
        privateNum++;
    }

    return {
        innerFunction: () => console.log(privateNum),
        incrementFunction: () => {
            privateInnerFunction();
            console.log('Private Inner function')
        }
    }
}

const { innerFunction, incrementFunction } = makeFunctions();
innerFunction();
incrementFunction();
innerFunction();

// another example
for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 500);
}

// but if we change let into var
for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 500);
}
//This is because let is block scoped, that is it is scoped inside the block it is defined.
// while var is function scoped
// closures are created at the time of declaration not at the running time.