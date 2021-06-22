// Insertion sort
function insertionSort(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            for (let j = i + 1; j > 0; j--) {
                if (array[j] < array[j - 1]) {
                    [array[j - 1], array[j]] = [array[j], array[j - 1]];
                }
            }
        }
    }
    return array;

}

console.log(insertionSort([1, 4, 2, 8, 5643, 123, 43, 55, 234, 92]));



// Merge sort
function merge(arr1, arr2) {
    let mergedArr = [];
    while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
            mergedArr.push(arr1.shift());
        } else if (arr2[0] < arr1[0]) {
            mergedArr.push(arr2.shift());
        } else {
            mergedArr.push(arr1.shift(), arr2.shift());
        }
    }
    return [...mergedArr, ...arr1, ...arr2]
}

function mergeSort(array) {
    if (array.length === 1) {
        return array;
    } else {
        let n = array.length;
        let left = mergeSort(array.slice(0, n / 2));
        let right = mergeSort(array.slice(n / 2));
        return merge(left, right);
    }
}

console.log(mergeSort([1, 4, 2, 8, 5643, 123, 43, 55]));