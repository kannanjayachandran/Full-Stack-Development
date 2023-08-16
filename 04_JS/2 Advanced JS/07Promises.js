// The object can have 3 values [pending, fulfilled, rejected].
const promise = new Promise((resolve, reject) => {
    resolve('The promise has been kept.'); // result
    reject('The promise is broken');
});

console.log(promise);

// The async nature of promises
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('The promise has been kept.'), 1000); // This won't wait one second to execute; it would simply display pending.
});
console.log(promise3);

setTimeout(() => console.log(promise3), 1500);

// using promise
promise3.then(
    value => console.log(value),
    error => console.log(`Oh No! ${error}`)
);
//or    promise3.then((val, error) => console.log(val ?? error));

// we can chain functions inside the then
promise3.then(console.log).catch(error => console.log('Something wrong happened'));
// then works like this because then also returning a promise

// we can chain more then
const new_promise1 = Promise.resolve(10);
new_promise1
    .then(value => value * 2)
    .then(value => value + 1)
    .then(console.log)
    .catch(error => console.log('Error here!' + error));

// finally
const new_promise2 = Promise.resolve(10);
new_promise2
    .then(value => value * 2)
    .then(value => value + 1)
    .then(console.log)
    .catch(error => console.log('Error here!' + error))
    .finally(() => console.log("This is the finally block and it won't take any parameters and would always run"));

// some promise functions
Promise.all([
    Promise.resolve(5),
    Promise.resolve(3)]).then(console.log);

Promise.race([
    Promise.resolve(5),
    Promise.resolve(3)
]).then(console.log);

Promise.race([
    new Promise((res, rej) => setTimeout(() => res(5), 2000)),
    new Promise((res, rej) => setTimeout(() => res(3), 1000)),
    new Promise((res, rej) => setTimeout(() => res(100), 700)),
]).then(console.log);

Promise.any([
    new Promise((res, rej) => setTimeout(() => res(5), 2000)),
    new Promise((res, rej) => setTimeout(() => rej(3), 1000)),
    new Promise((res, rej) => setTimeout(() => rej(100), 700)),

]).then(console.log);


// async and await
async function foo() {
    const foo_value = await new Promise((res, rej) => setTimeout(() => res(10), 1000));
    console.log(foo_value);
}

foo();

// catching the error
async function foo2() {
    return await new Promise((res, rej) => {
        setTimeout(() => rej(new Error('Error happened')), 1000);
    });
}
foo2().then(console.log).catch(error => console.log('Something went wrong' + error));
