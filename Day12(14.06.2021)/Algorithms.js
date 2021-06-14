// remove each elm that returns false, once the condition is true:
// return the rest of array
function dropElements(arr, func) {
    while (!func(arr[0])) {
        arr.shift();
    }

    return arr;
}

console.log(dropElements([1, 2, 3, 4], function (n) { return n >= 3; }));
console.log(dropElements([0, 1, 0, 1], function (n) { return n === 1; }));


//flatten a nested array
function steamrollArray(arr) {
    let newArr = [];

    for (let key in arr) {
        if (Array.isArray(arr[key])) {
            newArr.push(...steamrollArray(arr[key]));
        } else {
            newArr.push(arr[key])
        }
    }
    return newArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
//[1, 2, 3, 4]
console.log(steamrollArray([1, {}, [3, [[4]]]]));
//[ 1, {}, 3, 4 ]


// check if the 'pre' is truthy on all elements of a 'collection' 
function truthCheck(collection, pre) {
    return collection.every(obj => obj[pre]);
}

console.log(truthCheck([
    { "user": "Tinky-Winky", "sex": "male" },
    { "user": "Dipsy", "sex": "male" },
    { "user": "Laa-Laa", "sex": "female" },
    { "user": "Po", "sex": "female" }
], "sex"));

console.log(truthCheck([
    { "user": "Tinky-Winky", "sex": "male" },
    { "user": "Dipsy" },
    { "user": "Laa-Laa", "sex": "female" },
    { "user": "Po", "sex": "female" }
], "sex"));
