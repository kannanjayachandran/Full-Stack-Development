const arr = [10, 4, 2, 6, 7, 9, 8, 3, 1, 5];
console.log('Original arr: ', arr);

// sort in ascii order not in numerical order
arr.sort();
console.log('Ascii Sorted arr: ', arr);

// ascending order
arr.sort((first, second) => first - second);

console.log('Numerically sorted array (ascending order): ', arr);

//descending order
arr.sort((a, b) => b - a);
console.log('Numerically sorted array (descending order): ', arr)

/*
The sort() method takes a callback function (a compare function) that compares two elements of the array and returns 
a negative value if the first element is less than the second, a positive value if the first 
element is greater than the second, or zero if the two elements are equal.
*/