# Functional programming

## Closure

is a function that remembers its lexical environment (outer variables) and can access outer functions' variables  - even after the outer function has returned.

In JavaScript all functions are naturally closures (since they all of them have access to the outer variables).

**Lexical environment** is the place/scope within which the function was declared and whithin which it is available.

```
function makeCounter() {
    let count = 0;

    return function () {
        return count++;
    };
}

let counter = makeCounter();
let counter2 = makeCounter();

// counter and counter2 are created at diff time, so they have independent outer Lexical Environmnets
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter2()); // 0
console.log(counter2()); // 1
```

```
function makeAdder(x) {
    return function (y) {
        return x + y;
    };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12
// add5 and add10 share the same function body, but store diff Lexical Envs
// add5: x is 5
// add10: x is 10
```

## Recursion

is when a function calls itself.

Pro and cons. Recursion functions can be re-written as loops. Recursions take less place vs loops, but recursions are more memory-consuming as each context should be stored in memory (number of contexts is equal to `n`).

Why use? Multiple loops in the same function can be hard to read and follow, since recursions are written in a simpler code and take less lines of code, they are used if no optimization is required.

