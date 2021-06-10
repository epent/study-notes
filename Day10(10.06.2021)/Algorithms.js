//search and replace (case-sensitive)
function myReplace(str, before, after) {
    if (str.indexOf(before)) {

        if (before[0] == before[0].toUpperCase()) {
            let first = after[0].toUpperCase();
            return str.replace(before, (first + after.slice(1)));
        } else {
            let first = after[0].toLowerCase();
            return str.replace(before, (first + after.slice(1)));
        }
    } else return str;

}

console.log(myReplace("Let us go to the store", "store", "mall"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("I think we should look up there", "up", "Down"));


// a DNA strand sequence is given, get the pair and return it as a 2D array of the base pairs
function pairElement(str) {
    let startArray = str.split('');
    let finishArray = [];

    for (let i = 0; i <= startArray.length; i++) {
        let letter = startArray[i];
        switch (letter) {
            case 'A':
                finishArray.push(['A', 'T']);
                break;
            case 'T':
                finishArray.push(['T', 'A']);
                break;
            case 'C':
                finishArray.push(['C', 'G']);
                break;
            case 'G':
                finishArray.push(['G', 'C']);
                break;
        }
    }
    return finishArray;
}

console.log(pairElement("GCG"));     // [["G", "C"], ["C","G"], ["G", "C"]]
console.log(pairElement("ATCGA"));   // [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]


// return an array of unique values from all the arrays passed to the func in the order they are passed
function uniteUnique(...arr) {
    let array = [];
    for (let i = 0; i <= arr.length - 1; i++) {
        array = array.concat(arr[i]);
    }

    let finalArray = [];

    while (array.length > 0) {
        if (finalArray.includes(array[0])) {
            array.shift();
        } else {
            finalArray.push(array[0]);
            array.shift();
        }

    }
    return finalArray;
}

console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
// [1, 2, 3, 5, 4, 6, 7, 8]