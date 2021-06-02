// Factorialize a Number

const factorialize = (num) => {
    let result = 1;
    for (let i = num; i > 0; i--) {
        result *= i;
    }
    return result
};

console.log(factorialize(5));


// Find the Longest Word in a String

const findLongestWordLength = (str) => {
    let stringLength = [];
    let string = str.split(' ');
    for (let i = 0; i <= string.length - 1; i++) {
        stringLength.push(string[i].length);
    }
    return Math.max(...stringLength);
};

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));


//Return array of largest numbers in sub-arrays

const findLargestNumbers = (array) => {
    let newArray = [];
    for (let i = 0; i <= array.length - 1; i++) {
        let largestNumber = Math.max(...array[i]);
        newArray.push(largestNumber);
    }
    return newArray;
};

console.log(findLargestNumbers([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));


// Repeat a string

const repeatStringNumTimes = (str, num) => {
    let newString = '';
    if (num > 0) {
        for (let i = 1; i <= num; i++) {
            newString += str;
        }
    }
    return newString;
};

console.log(repeatStringNumTimes("abc", 3));