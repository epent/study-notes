// reduce() - sum the numbers
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum);



// reduce() - array into an object
const fruits = ['banana', 'apple', 'banana', 'peach', 'orange', 'apple', 'peach', 'banana', 'orange', 'apple'];

const object = fruits.reduce((acc, fruit) => {
    acc[fruit] ? acc[fruit] += 1 : acc[fruit] = 1
    return acc
}, {});

console.log(object);



// check if the 'source' is present in 'collection' and return the whole object that contains the matching pair
function whatIsInAName(collection, source) {
    let keys = Object.keys(source);

    return collection.filter(object => {
        for (let i = 0; i < keys.length; i++) {
            if (!object.hasOwnProperty(keys[i]) || object[keys[i]] !== source[keys[i]]) {
                return false
            }
        }
        return true;
    });
}

console.log(whatIsInAName([
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
], { last: "Capulet" }));


// if first is vowel - add 'way' at the end
// if first are consonants - move them to the end and add 'ay'
let pigLatin = str => {
    if (str.match(/^[aeiou]/)) return str + 'way';

    let consonants = str.match(/^[^aeiou]+/)[0];
    return str.substring(consonants.length) + consonants + 'ay';
};

console.log(pigLatin('glove'));
console.log(pigLatin('algorithm'));
