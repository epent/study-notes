// * 1.a var initialization is hoisted (raised up)
test = 'Test';
console.log(test);

var test;

// * even here when if-block is never run:
test = 'Test5';
if (false) {
    var test;
}
console.log(test);

// * 1.b let initialization is not hoisted
// * the code below gives ReferenceError
test = 'Test';
console.log(test);

let test;


// * 2.a variables declared with var are global (seen from anywhere)
if (true) {
    var test = 'Test2'
}
console.log(test);

// * 2.b variables declared with let/const are not global
if (true) {
    let test = 'Test2'
}
console.log(test);

// * 3.a same for loops, declared with var are global
for (var a = 0; a < 5; a++) {
    var b = 0;
}
console.log(a);
console.log(b);

// * 3.b this does not work with let
for (let a = 0; a < 5; a++) {
    let b = 0;
}
console.log(a);
console.log(b);

// * 4. if a code block is inside a function, var becomes function-level variable (46 works as in 2.a, 49 does not work)
function testing() {
    if (true) {
        var test = 'Test3';
    }
    console.log(test);
}
testing();
console.log(test);

// * 5.a var can be redeclared
var test = 'Test4';
console.log(test);
var test = 'Test5';
console.log(test);

// * 5.b let cannot, gives a SyntaxError
let one = 'One';
console.log(one);
let one = 'Two';
console.log(one);