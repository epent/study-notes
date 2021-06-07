// return the symmetric diff of the two arrays (not included in both)
function diffArray(arr1, arr2) {
    return arr1.concat(arr2).filter(elm => !arr1.includes(elm) || !arr2.includes(elm));

}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));


// remove from 'arr' all args
let destroyer = (arr, ...args) => {
    let argsArray = [...args];
    return arr.filter(element => !argsArray.includes(element));
};

console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));


