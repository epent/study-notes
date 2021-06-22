// Inventory Update
function updateInventory(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (arr1[j][1] === arr2[i][1]) {
                arr1[j][0] += arr2[i][0];
            }
        }
        let array = Array.prototype.concat(...arr1);

        if (array.indexOf(arr2[i][1]) < 0) {
            let newElement = [arr2[i][0], arr2[i][1]];
            arr1.push(newElement);
        }

    }
    let sorted = arr1.sort((a, b) => {
        if (a[1] > b[1]) {
            return 1;
        } else if (a[1] < b[1]) {
            return -1;
        }
        return 0;
    });
    return sorted;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));




//Pairwise
function pairwise(arr, arg) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === arg
                && !array.includes(i)
                && !array.includes(j)) {
                array.push(i, j);
            }
        }
    }

    return array.reduce((sum, curr) => sum + curr, 0);
}

console.log(pairwise([1, 4, 2, 3, 0, 5], 7));
console.log(pairwise([1, 1, 1], 2));
console.log(pairwise([0, 0, 0, 0, 1, 1], 1));


// Bubble sort
function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                // let second = array[j];
                // array[j] = array[i];
                // array[i] = second;
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
    }
    return array;
}

console.log(bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));


// Selection sort
function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        if (min !== i) {
            [array[i], array[min]] = [array[min], array[i]];
        }
    }
    return array;
}


console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
console.log(selectionSort([1, 4, 2, 8, 345, 43, 32, 63, 1]));