// Quick sort
function quickSort(array) {
    if (array.length === 0) {
        return [];
    }

    let left = [];
    let right = [];
    let pivot = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort([9, 2, 5, 6, 4, 3, 7, 10, 1, 12, 8, 11]));