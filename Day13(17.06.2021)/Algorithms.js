// Arguments Optional
function addTogether(...args) {
    let array = [...args];

    if (typeof array[0] == 'number') {
        if (!array[1]) {
            return function (num) {
                return typeof num === 'number' ? array[0] + num : undefined;
            }
        } else if (typeof array[1] == 'number') {
            return array[0] + array[1];
        } else {
            return undefined;
        }
    } else {
        return undefined;
    }
}

console.log(addTogether(2)([3]));
console.log(addTogether(5)(7));
console.log(addTogether(5, 3));



// not correct
var Person = function (firstAndLast) {

    this.getFullName = function () {
        return this.fullName;
    };
    this.getFirstName = function () {
        return this.firstName;
    }
    this.getLastName = function () {
        return this.lastName;
    }
    this.setFullName = function (firstAndLast) {
        this.fullName = firstAndLast;
    };
    this.setFirstName = function (first) {
        this.firstName = first;
    }
    this.setLastName = function (last) {
        this.lastName = last;
    }
};


var bob = new Person('Bob Ross');
console.log(bob.getFullName());




//

function anagrams(word, words) {
    let array = [];

    for (let i = 0; i <= words.length - 1; i++) {
        if (words[i].length === word.length) {
            let w = words[i].split('');
            let wordSplit = word.split('');


            while (w.length > 0 && wordSplit.includes(w[0])) {
                w.shift();
            }

            if (wordSplit.length === 0) {
                array.push(words[i]);
            }
        }
    }
    return array;
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
// => ['aabb', 'bbaa']

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
// => ['carer', 'racer']  ['r', 'a', 'c', 'a', 'r']  ['r', 'a', 'c', 'e', 'r']

console.log(anagrams('laser', ['lazing', 'lazy', 'lacer']));
// => []


//
function comp(array1, array2) {
    if (Array.isArray(array1) && Array.isArray(array2) && array1.length === array2.length) {
        for (let i = 0; i <= array2.length - 1; i++) {
            if (array2.includes(Math.pow(array1[0], 2))) {
                array1.shift();
            } else return false;
        }
    }
    
    if (array1.length === 0) return true;

    return false;
}

// a = [121, 144, 19, 161, 19, 144, 19, 11];
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361];
// console.log(comp(a, b));

c = [10, 0, 10, 6, 6, 4, 9, 4, 6, 1, 1, 7, 2, 8, 7, 6, 8, 8, 6, 0];
d = [36, 64, 49, 4, 1, 49, 0, 100, 64, 36, 36, 64, 16, 100, 81, 36, 1, 16, 1, 36];
console.log(comp(c, d));
