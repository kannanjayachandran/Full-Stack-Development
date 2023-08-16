// NaN : It is not equal to anything not even itself
console.log(NaN == NaN); // false

// null and undefined are loosely equal
console.log(null == undefined); // true
console.log(null === undefined); //false

x = null;
// x = undefined
// we can use the expression below to check both the conditions
if (x == null) {
    console.log("Both null and undefined checked");
}
