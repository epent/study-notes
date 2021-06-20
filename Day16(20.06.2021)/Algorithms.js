// Find the Symmetric Difference
function sym(...args) {
    let array = [...args];
    let result = [];

    let difference = (arr1, arr2) => {
        result = [];
        let together = arr1.concat(arr2);
        together.sort().filter(elm => {
            if ((!arr1.includes(elm) || !arr2.includes(elm)) && result.indexOf(elm) < 0) {
                result.push(elm);
            }
        });
    }

    while (array.length > 0) {
        if (array.length === arguments.length) {
            let array1 = array[0];
            let array2 = array[1];
            array.shift();
            array.shift();
            difference(array1, array2);
        } else {
            let array1 = result;
            let array2 = array[0];
            array.shift();
            difference(array1, array2);
        }
    }

    return result;
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));  // [3, 4, 5]
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5])); // [1, 4, 5]
console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]));  //[3, 4, 5]