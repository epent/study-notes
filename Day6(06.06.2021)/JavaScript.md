# Functional programming

## Array.prototype.map()

is a pure function that 
1) does not alter the original array
2) its output depends only on its input
3) it takes another function as argument

That is how map() works behind the scenes:

```
let array = [1, 2, 3, 4];

Array.prototype.myMap = function(callback) {
    let updatedArray = [];
    for (let i = 0; i < this.length; i++) {
        updatedArray.push(callback(this[i]));
    }
    return updatedArray;
}

let newArray = array.myMap(function(item) {
    return item * 2;
});

console.log(newArray);  // [2, 4, 6, 8]
```


## Array.prototype.filter()

is a pure function that 
1) does not alter the original array
2) its output depends only on its input
3) it takes another function as argument

That is how filter() works behind the scenes:

```
let array = ['banana', 'apple', 3, 8, 'table', null];

Array.prototype.myFilter = function(callback) {
    let filteredArray = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            filteredArray.push(this[i]);
        }
    }
    return filteredArray;
}

let filteredArray = array.myFilter(function(item) {
    return typeof item === 'string';
});

console.log(filteredArray);  // ["banana", "apple", "table"]
```

## Immutable methods:

- **concat()** instead of push() (adds at the end)
- **slice()** instead of splice() (removes from array)