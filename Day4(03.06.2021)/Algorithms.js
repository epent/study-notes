// Truncate a string 
//if it is longer than the given number and add '...' at the end

const truncateString = (str, num) => {
    return str.length > num ? str.slice(0, num) + '...' : str;
};

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));



//Look through an array and return the first element that passes the test (func)

const findElement = (arr, func) => {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return num = arr[i];
        }
    }
    return undefined;
};

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));


// UpperCase each word in a sentence

const titleCase = (str) => {
    let array = str.toLowerCase().split(' ');
    let array2 = [];
    for (let i = 0; i < array.length; i++) {
        array2.push(array[i].replace(array[i][0], array[i][0].toUpperCase()));
    }
    return array2.join(' ');
};

console.log(titleCase("sHoRt AnD sToUt"));


// Slice and Splice
//copy each element of the first array into the second array, in order
// begin inserting elements at index n of the second array

const frankenSplice = (arr1, arr2, n) => {
    let copy1 = arr1.slice();
    let copy2 = [...arr2];
    copy2.splice(n, 0, ...copy1);
    return copy2;
};

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));



// Remove all falsy values from an array
// falsy = false, null, 0, '', undefined, NaN

const bouncer = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};

console.log(bouncer([7, "ate", "", false, 9, null, 0, NaN, undefined]));



// Sort 'arr', return lowest index at which 'num' can be inserted into 'arr'

const getIndexToIns = (arr, num) => {
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num) {
            return i;
        }
    }
    return arr.length;
};

console.log(getIndexToIns([2, 20, 10], 19));



//return true if the first element contains all letters of second element

const mutation = (arr) => {
    let targetWord = arr[0].toLowerCase();
    let testWord = arr[1].toLowerCase();
    for (let i = 0; i < testWord.length; i++) {
        if (targetWord.indexOf(testWord[i]) < 0) {
            return false;
        }
    }
    return true;
};

console.log(mutation(["floor", "for"]));



// split an 'arr' into groups of length 'size' and return them as 
// two-dimensional arrays

const chunkArrayInGroups = (arr, size) => {
    let newArr = [];
    while (arr.length > 0) {
        newArr.push(arr.splice(0, size));
    }
    return newArr;
};

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));



//check if 'str' ends with 'target'

const confirmEnding = (str, target) => {
    return str.slice(str.length - target.length) === target;
};

console.log(confirmEnding("Open sesame", "same"));