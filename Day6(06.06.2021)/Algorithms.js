// sum all numbers in a range
let sumAll = (arr) => {
    let sum = 0;
    if (arr[1] > arr[0]) {
        for (let i = arr[1]; i >= arr[0]; i--) {
            sum += i;
        }
    } else {
        for (let i = arr[1]; i <= arr[0]; i++) {
            sum += i;
        }
    }
    return sum;
};

console.log(sumAll([1, 5])); // 15


//codewars
// given an array of all even or all odd integers, find an outlier
function findOutlier(integers) {
    let evenIntegers = integers.filter(integer => integer % 2 === 0);
    let oddIntegers = integers.filter(integer => integer % 2 !== 0);
    return evenIntegers.length === 1 ? +evenIntegers.join() : +oddIntegers.join();
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));  // 11
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));  // 160


// all characters exept for 4 last should be '#'
function maskify(cc) {
    let list = [];
    for (let i = cc.length - 1; i >= 0; i--) {
        if (i === cc.length - 1 || i === cc.length - 2 || i === cc.length - 3 || i === cc.length - 4) {
            list.unshift(cc[i]);
        } else {
            list.unshift('#');
        }
    }
    let string = list.join('');
    return string;
}

console.log(maskify('Something')); // #####hing


// find a sum of all multiples of both 3 and 5 below the given 'number'
// multiples should not repeat
function solution(number) {
    let sum = 0;
    for (let i = number - 1; i > 0; i--) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(solution(10));   // 23
console.log(solution(13));   // 45

