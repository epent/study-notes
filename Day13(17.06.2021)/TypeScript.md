# TypeScript

- a programming language building up on JS, that is compiled to JS afterwards (because browsers and Node do not support TypeScript)

- can use ES6 features that are compiled down for older browsers (built-in, no need for babel)

## Core Types

- number (no differenciation for floats and integers)

- string ('Hi', "Hi", +backticks)

- boolean (just true/false, no 'truthy' values)

- object

- Array

```
const person = {
    hobbies: ['sports', 'cooking'], // type: string[]
    hobbies: ['sports', 5], // type: (string | number)[]
    hobbies: [5, true] // type: (number | boolean)[]
};
```

- Tuple (fixed-length array [1, 2])

```
const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]
} = {
    name: 'Max',
    age: 30,
    hobbies: ['sports', 'cooking'],
    role: [2, 'admin']
};

// TS throws an error here, because we set role to be of type 'tuple' with number on the first place and string on the second
// second element cannot be of type number
person.role[1] = 10;

// code below does not throw an error because of 'push', this is an exception
person.role.push('author'); // role: [2, 'admin', 'author']
```

- Enum (enum {ONE, TWO, THREE} gives enumerated list, labels are translated to numbers starting at 0)

```
enum Role { ADMIN, READ_ONLY, AUTHOR };
```

- any (*, TS does not check the type as it can be any)

## Union Types

```
let input: number | string;
```

## Literal Types


## Type Inference

TypeScript does its best to understand which type the variable has