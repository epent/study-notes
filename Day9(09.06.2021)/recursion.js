// factorial
function factorial(n) {
    if (n == 1) return n;
    return n * factorial(n - 1)
};

console.log(factorial(5));

// sum nums up to n
function sumTo(n) {
    return n == 1 ? n : n + sumTo(n - 1);
}

console.log(sumTo(5));


//fibonacci
function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2)
}

console.log(fib(7));


//power
function pow(a, b) {
    return b == 1 ? a : a * pow(a, b - 1);
}

console.log(pow(2, 5));


// product of an array
function productOfArray(arr) {
    return arr.length == 0 ? 1 : arr.shift() * productOfArray(arr);

}


var six = productOfArray([1, 2, 3]); // 6
var sixty = productOfArray([1, 2, 3, 10]); // 60

console.log(six);
console.log(sixty);



// sum of elements of an array
function sum(array) {
    if (array.length === 0) {
        return 0;
    } else {
        return array.shift() + sum(array);
    };
}

let arr = [1, 2, 3, 4, 5];
console.log(sum(arr));


// search JS object
function contains(obj, val) {
    for (let key in obj) {
        return obj[key] == val ? true : contains(obj[key], val);
    }
    return false;
}


var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false

console.log(doesntHaveIt);
console.log(hasIt);

