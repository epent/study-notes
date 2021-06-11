// calculate sum of the primes that are <= 'num'
function sumPrimes(num) {
    let sum = 0;
    let divisors = [];

    for (let i = num; i > 1; i--) {
        for (let j = i; j >= 1; j--) {
            if (i % j == 0) {
                divisors.push(j);
            }
        }

        if (divisors.length == 2) {
            sum += i;
        }
        divisors = [];
    }

    return sum;
}

console.log(sumPrimes(10));  // <= num



//find smallest common multiple for all the numbers in the given range
function smallestCommons(arr) {
    let newArr = [];
    let maxNum = Math.max(...arr);
    let minNum = Math.min(...arr);

    for (let i = minNum; i <= maxNum; i++) {
        newArr.push(i);
    }

    let upperBound = 1;

    for (let i = minNum; i <= maxNum; i++) {
        upperBound *= i;
    }

    let result = 0;
    let multiples = [];

    for (let i = maxNum; i <= upperBound; i++) {
        for (let j = 0; j <= newArr.length - 1; j++) {
            if (i % newArr[j] == 0) {
                multiples.push(newArr[j]);
            }
        }
        if (multiples.length == newArr.length) {
            return result = i;
        }
        multiples = [];
    }
}


console.log(smallestCommons([1, 5]));
