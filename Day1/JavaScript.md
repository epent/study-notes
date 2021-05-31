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
let sum = (...args) => args.reduce((a, b) => a + b, 0)
```


## Spread operator (...) - return to this!

is used to split up array elements or object properties

returns an 'unpacked' array as a comma-separated list, so-to-say *spreads* an array


## Destructuring Objects

allows to extract values from objects:

```
const user = {name: 'John, age: 20};

const {name, age} = user;
```

assign new variables when extracting from objects:

```
const user = {name: 'John', age: 20};

const {name: userName, age: userAge} = user;
```


## Destructuring Nested Objects

```
const user = {johndoe: {name: 'John', age: 20}};

const {johndoe: {name, age} } = user;
```



## Destructuring Arrays

```
const [one, , three] = [1, 2, 3];

// one = 1; three = 3;
```



## Destructuring Arrays with rest (...) parameter

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

const greeting = `My name is ${person.name}`;
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



