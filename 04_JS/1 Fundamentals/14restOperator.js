const show_args = (...args) => console.log(args);

show_args(1, 2, 3, 4, 5);

const total = (...args) => {
    let sum = 0
    for (let i = 0; i < args.length; i++) {
        sum += args[i]
    }
    console.log(sum);
}

total(1, 2, 3, 4, 5);

// Rest Operator is similar to args-kwargs 
