// Sum All Numbers in a Range
function sumAll(arr) {
    let maxNum = Math.max(...arr);
    let minNum = Math.min(...arr);
    let sum = 0;

    for (let i = minNum; i <= maxNum; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumAll([4, 1])); //10
console.log(sumAll([10, 5])); //45



// Diff Two Arrays (return to this!)
function diffArray(arr1, arr2) {
    let newArr = [...arr1, ...arr2];
    return newArr.filter(elm => !arr1.includes(elm) || !arr2.includes(elm));
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); // [4]
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));  //["piglet", 4]



// Seek and Destroy
function destroyer(array, ...args) {
    return array.filter(elm => !args.includes(elm));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

