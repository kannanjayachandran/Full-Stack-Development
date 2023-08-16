// Arrays
const arr = [1, 2, 3, 4, 5];
console.log('The array is :', arr);
console.log('Length of the array is :', arr.length);
console.log('Arrays are also objects in Js of Type:', typeof arr);

// we can create array using the array constructor also
const newArr = Array(1, 2, 3, 4, 5, 6);
console.log('\nnewArr :>> ', newArr);

// This would create an array of 3 empty spaces
const emptyArr = Array(3);
console.log('\nemptyArr :>> ', emptyArr);

// This would create array of 5 0's, .fill() is in place 
const filledArr2 = Array(5).fill(5, 0, 2);   // .fill(value, start, end) : filll the array with value from start to end, rest empty.
console.log('emptyArr2 :>> ', filledArr2);

// one hack with length property although not recommended
console.log('\nOriginal arr :>> ', arr);
arr.length = 10;
console.log('After manually changing the length of the arr, arr :>> ', arr);

// adding elements to array
arr.push(100);
console.log('\nThe array is :', arr);
arr.pop();
console.log('The array is :', arr);

// unshift add elements to the front of the array and shift removes elements form the front
arr.unshift(-2, -1, 0);
console.log('\nNew arr', arr);
arr.shift();
arr.shift();        //both shift and unshift are not so efficient like pop and push
console.log(arr);

// Checking if the object is an array
console.log(Array.isArray(arr));

// .splice(startingElement, number of elements to delete) : returns the deleted elements
arr.splice(5);
console.log(arr);

// .slice
const newArr3 = arr.slice(1, 4);
console.log(newArr3);

// .join function
console.log(arr.join('*'), 'Type: ', typeof arr.join('*'), '\n');

//Iterating through an array
arr.forEach((value, index) => {
    console.log(`Value at index ${index} is ${value}`);
});

// map(), filter(), find(), every(), some(), reduce()

//map()
const mappedArr = arr.map((value, index) => {
    return value + index;
});

console.log('\nArray after mapping: ', mappedArr, '\n');

// filter()
const filteredArr = mappedArr.filter((value) => {
    return value > 2;
});

console.log('Filtered Array is:', filteredArr)

// .reduce()
console.log('Given arrays: ', filteredArr);
const reducedVal = filteredArr.reduce((accumulator, currValue) => {
    return accumulator + currValue;
});

console.log('Sum of the elements of the array: ', reducedVal);

// find()
const findArr = filteredArr.find((value) => {
    return value > 2;

});

console.log('First value greater than 2: ', findArr);
// find(): first element that satisfies the condition 
// filter() returns all the elements that satisfies the condition

// .every() is also same it would return true if all the elements passes a certain condition
const findArr2 = filteredArr.every((value) => {
    return value > 0;
});

console.log('Every element is positive: ', findArr2);

// .some() would return true if some elements passes the conditions
const findArr3 = filteredArr.some((value) => {
    return value % 2 === 1;
})
console.log('Some elements are odd: ', findArr3);
