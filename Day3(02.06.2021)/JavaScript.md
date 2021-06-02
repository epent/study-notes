# Basic Data Strucutres. Arrays

## Add items to array

- **push()** adds elements to the end of an array

- **unshift()** adds elements to the beginning of an array

```
let numbers = [3, 4, 5];

numbers.push(6);
numbers.unshift(1, 2);

console.log(numbers); // [1, 2, 3, 4, 5, 6]
```

- **splice(startingIndex, howManyToRemove, whatToInsert)** allows to add any number of consecutive elements from anywhere in an array

```
let numbers = [1, 2, 3, 3, 7, 8];

numbers.splice(3, 1, 4, 5, 6);
console.log(numbers);   // [1, 2, 3, 4, 5, 6, 7, 8]
```

## Remove items from array

- **pop()** removes a single element from the end of an array

- **shift()** removes a single element from the beginning of an array

```
let fruit = ['apple', 'banana', 'peach'];

let peach = fruit.pop();
console.log(fruit); //['apple', 'banana']
console.log(peach); // 'peach'

fruit.shift();
console.log(fruit); //['banana']
```

- **splice(startingIndex, howManyToRemove)** allows to remove any number of consecutive elements from anywhere in an array

```
let ingredients = ['cheese', 'meat', 'salad', 'bacon'];

let updatedIngredients = ingredients.splice(1, 3);

console.log(ingredients);        // ['cheese'] ]
console.log(updatedIngredients); // ['meat', 'salad', 'bacon']
```


## Copy array items

- **slice(startingIndex, stoppingIndex)** allows to extract elements from array without touching the initial array

stoppingIndex is not included in the new array

```
let cities = ['Berlin', 'London', 'Paris', 'Moscow', 'Haifa'];

let visited = cities.slice(2, 5);

console.log(cities);   // ['Berlin', 'London', 'Paris', 'Moscow', 'Haifa']
console.log(visited);  // ['Paris', 'Moscow', 'Haifa']
```

- **spread(...) operator** allows to copy the whole array


## Check for the presence of an element

- **indexOf()** returns index of the element or '-1' if the element is not part of an array

```
let vegetables = ['cucumber', 'tomato', 'carrot'];

vegetables.indexOf('carrot');   // 2
vegetables.indexOf('cabbage');  // -1
```

# Basic Data Strucutres. Objects

## Add key-value pairs

- **dot notation**

```
let fruits = {
    apples: 8,
    bananas: 10;
    oranges: 5
}
fruits.peaches = 3; // adds a new key-value pair
```

- **bracket notation** is used when the key has whitespaces or if the key is a variable:

```
let fruits = {
    apples: 8,
    bananas: 10;
    oranges: 5
}

let newFruit = 'peaches'

fruits[newFruit] = 3;      // key is a variable
fruits['red oranges'] = 1; // key has whitespaces
```


## Delete key-value pairs

- **delete** keyword is used

```
let fruits = {
    apples: 8,
    bananas: 10;
    oranges: 5
}

delete fruits.apples;
```


## Check for the property in an object

- **hasOwnProperty()**
- **in** keyword

```
fruits.hasOwnProperty('bananas');  // true
'bananas' in fruits;               // true
```

## Iterate through an object with for...in

```
let fruits = {
    apples: 5,
    bananas: 8
}
for (let fruit in fruits) {
    console.log(fruit);
}
```


## Object.keys()

generates an array of all the keys of the object

```
let fruits = {
    apples: 5,
    bananas: 8
}

Object.keys(fruits);  // ['apples', 'bananas']
```