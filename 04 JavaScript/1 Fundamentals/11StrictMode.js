'use strict';
// This enables strict mode globally

try {
    x = 10;

} catch (error) {
    console.error('This works in normal js; but shows an error in Strict mode');
}

// Uncomment the below code to see the actual error
// x = 1234;

// This would work
// let x = 234;
// console.log(x);

// we can use strict mode in various scope or level
function foo(x) {
    'use strict';
    p = 10;
    return p * x;
}

// foo(10); // This would also throws error
