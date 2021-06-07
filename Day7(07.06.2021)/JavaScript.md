# Object Oriented Programming (continue)

## Mixins

are functions that take objects as arguments and allow these unrelated objects to share a collection of functions (like bird and plane both can fly)

```
let bird = {
    name: 'Donald'
};

let plane = {
    name: 'Boing777'
};

let flyMixin = function(obj){
    obj.fly = function() {
        console.log('I c'an fly')
    }
};

flyMixin(bird);
flyMixin(plane);

bird.fly();   // 'I c'an fly'
plane.fly();  // 'I c'an fly'
```


## Closure protects properties from being modified

Properties declared within an object are public and can be modified just by accessing their names (obj.name = 'New name')

This can be avoided by creating a variable in the constructor function. The scope of such variable is within the constructor and only methods in the same scope can have access to it.

```
function Person() {
    this.name = 'John';

    let bankAccountNum = 123456789;

    this.getBankAccountNum = function() {
        return bankAccountNum;
    }
}

let john = new Person()
john.getBankAccountNum();  // 123456789
```


## IIFE

**Immediately invoked function expression** is executed as soon as it is defined

- avoids polluting global scope
- in old times used as 'for loop with var'

```
(function() {
    console.log('This is printed immediately');
})();
```



# Functional programming (continue)

## Array.prototype.reduce()

```
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
console.log(sumOfAges);
```

```
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersObj = users.reduce((obj, user) => {
  obj[user.name] = user.age;
  return obj;
}, {});
console.log(usersObj);
```


## Array.prototype.sort()

mutates the original array

```
function compare(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
```

## String.prototype.split()

splits a string into an array of strings, strings are immutable

```
let string = 'Hello World';
string.split(' ');     // ["Hello", "World"]

let string = 'String';
string.split('');      // ["S", "t", "r", "i", "n", "g"]
```


## Array.prototype.join()

joins elements of an array to create a string

```
let array = ["Hello", "World"];
array.join(' ');      // 'Hello World'

let array = ["S", "t", "r", "i", "n", "g"];
arrau.join('');       // 'String'
```


## Array.prototype.every()

check if *every* element of the array meets a criteria

```
let checkPositive = array => {
    return array.every(num => num > 0);
};

console.log(checkPositive([2, -3, 10]));    // false
console.log(checkPositive([10, 20, 30]));   // true
```


## Array.prototype.some()

check if *some* elements meet the criteria (at least one)

```
let checkPositive = array => {
    return array.some(num => num > 0);
};

console.log(checkPositive([2, -3, 10]));    // true
```


