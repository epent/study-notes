let promise = new Promise(function (resolve, reject) {
    //executor (the producing code), runs automatically 

    //resolve(value) - calls resolve() if the attempt was successfull
    //reject(error) - calls reject() if an error occured
});

//resolve
let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(console.log('Done')), 5000);
});

//reject
let promise = new Promise(function (resolve, reject) {
    setTimeout(() => reject(console.log(new Error('Whoops!'))), 5000);
});

//.then() - in case of resolve
let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve('Done!'), 3000);
});

promise.then(
    result => console.log(result),
    error => console.log(error)
);

//.then() - in case of reject
let promise = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('Whoops, error!')), 3000);
});

promise.then(
    result => console.log(result),
    error => console.log(error)
);

//.catch() - in case of reject
let promise = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('New Error!')), 7000);
});

promise.catch(error => console.log(error));




//exercises
//delay with a promise
let delay = (ms) => {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, ms)
    });
}

delay(3000).then(() => console.log('runs after 3 seconds'));



//chaining promises
let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 4000);
}).then(function (result) {
    console.log(result);
    return result * 2;
}).then(function (result) {
    console.log(result);
    return result * 2;
}).then(function (result) {
    console.log(result);
    return result * 2;
});

//returning promises (each promise returns another promise)
let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 1000);
}).then(function (result) {
    console.log(result);
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve(result * 2), 1000);
    });
}).then(function (result) {
    console.log(result);
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve(result * 2), 1000);
    });
}).then(function (result) {
    console.log(result);
});