# ES6 features

## var/let/const

see `letVarConst.js` for more info and examples

## Prevent Object Mutation

`const` does not protect data from mutation

`Object.freeze(obj)` does. Once the Object is frozen, you cannot add, delete, update data in it 


## Default parameters for the function

default parameters come into play when the argumet is not specified

Syntax: 

```
let yourFunction = (argument = 'your default argument') => {}
```


## Rest parameter (...)

is used to merge a list of function arguments into an array

allows to create functions with a variable number of arguments

Syntax:

```
let sum = (...args) => {
    let sum = 0;

    console.log(args);    // [0, 1, 2] merged into an array
    console.log(...args); // 0 // 1 // 2  spread again

    for (let arg of args) sum += arg;

    return sum;
}
sum(0, 1, 2);
```

Function definition can have only one rest parameter(...) and it must be the last parameter in the function definition.


## Spread operator (...) - return to this!

is used to split up array elements or object properties

returns an 'unpacked' array as a comma-separated list, so-to-say *spreads* an array

```
let myFunction = (x, y, z) => {}

let args = [0, 1, 2];

myFunction(...args);   //unpacks an array and returns it as CSVs // 0 1 2
myFunction(args);      // [0, 1, 2] undefined undefined
```

Spread can be used multiple times:
```
let myFunction = (x, y, z) => {}

let args = [0, 1];

myFunction(-1, ...args, 2, ...[3]); // unpacks 2 arrays: [0, 1] and [3]
```

## Rest vs Spread

Rest parameters are used to create functions that accept any number of arguments.

The spread syntax is used to pass an array to functions that normally require a list of many arguments.



## Object Destructuring 

Allows to unpack object into a bunch of variables

```
const user = {
    name: 'John', 
    age: 20
};

const {name, age} = user;

console.log(name);  // 'John'
console.log(age);   // 20
```

and assign new variables when extracting from objects:

```
const user = {
    name: 'John', 
    age: 20
};

const {name: userName, age: userAge} = user;

console.log(userName);  // 'John'
```

We can use default values if some values in the object are missing:

```
const user = {
    name: 'John'
};

const {name: userName = 'Anonymus', userAge = 30} = user;

console.log(userAge);  // 30
```

## Nested Destructuring  

```
const user = {
    johndoe: {
        name: 'John', 
        age: 20
    },
    hobbies: ['Tennis', 'Music'],
};

const {johndoe: {name, age}, hobbies: [hobbie1, hobbie2], birthday = '01.01.2001'} = user;

console.log(name);      //'John'
console.log(age);       //20
console.log(hobbie1);   //'Tennis'
console.log(hobbie2);   //'Music'
console.log(birthday);  //'01.01.2001' - default parameter
```

## Array Destructuring 

Allows to unpack array into a bunch of variables

```
let [one, , three] = [1, 2, 3];

// one = 1; three = 3;
```
Array destructuring is the short way for this:

```
let firstName = arr[0];
let lastName = arr[1];

// let [firstName, lastName] = arr;
```

We can use default values if some values in the array are missing:

```
let [firstName = 'Jack', lastName = 'Wolfskin'] = ['John'];

console.log(firstName); // 'John' (from array)
console.log(lastName);  // 'Wolfskin' (default)
```

Destructuring Arrays with the rest (...) parameter:

```
const [a, b, ...arr] = [1, 2, 3, 4, 5];

// arr = [3, 4, 5]
```


## Template Literals

allow to create multi-line strings without '\n' and '+'

Syntax:

Use backticks `` instead of quotes and ${variable} to add variables to the string

```
const person = {name: 'John};

console.log(`My name is 
${person.name}`);

// 'My name is 
John' 
```


## Shorthand for Object Literal Declaration

ES5:

```
const getMousePosition = (x, y) => ({x: x, y: y});
```

ES6:

```
const getMousePosition = (x, y) => ({x, y})
```


## Concise Declarative Functions
ES5:
```
const person = {
    name: 'John',
    sayHello: function() {
        return `Hello, my name is ${this.name}`
    }
};
```
ES6:

```
const person = {
    name: 'John',
    sayHello() {
        return `Hello, my name is ${this.name}`
    }
};
```

## Export and Import

Export a code block:

```
export {nameOfFunctionOne, nameOfFunctionTwo};
```

Import a code block:

```
import {nameOfFunctionOne} from './fileName.js';
```

Import everything:

```
import * as nameYouChoose from './fileName.js';
```

Export default:

`export default` cannot be used with var/let/const

Import default:

without {}

```
import nameYouChoose from './fileName.js';
```


## Promise

see `promises.js` for more info and examples

Promise is a constructor function that acts asynchronously and either fulfills your promise or fails.

```
const makeServerRequest = new Promise ((resolve, reject) => {});
```

It has three stages: 'pending', 'fullfilled' or 'rejected'.



