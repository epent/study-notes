# Object Oriented Programming

## Constructor

- is a function that creates new object
- has capitalized name
- defines properties and behaviours, does not return anything
- use 'this' to set properties
- use 'new' operator when calling a constructor to create a new instance of the object 

```
function Person() {
    this.name = 'John';
    this.age = 25;
    this.hobbies = ['Tennis', 'Music'],
    this.sayHello = function() {return 'Hi, I am ' + this.name}
};

let personOne = new Person();
console.log(personOne.name);   // 'John'
console.log(personOne.age);    // 25

let personTwo = new Person();
personTwo.name = 'Max';
personTwo.age = 27;
console.log(personTwo.name);   // 'Max'
console.log(personTwo.age);    // 27

console.log(personOne.name);   // 'John', the result depends on the object name before the dot
```


More flexible constructors can receive arguments:

```
function Person(name, age, hobbies) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
    this.sayHello = function() {return 'Hi, I am ' + this.name};
};

let personOne = new Person('John', 26, ['Music', 'Sport']);
console.log(personOne.hobbies);   // ['Music', 'Sport']

let personTwo = new Person('Max', 27, ['Sport']);
console.log(personTwo.name);      // 'Max'
```

## instanceof

allows to check whether an object was created with a particular constructor (and is the inctance of that constructor)

```
function Person(name, age) {
    this.name = name;
    this.age = age;
};

let personOne = new Person('Alen', 26);
console.log(personOne instanceof Person);   // true

let personThree = {
  name: 'Jack',
  age: 34
};
 
console.log(personThree instanceof Person);  // false
```


## Prototype

part of the constructor function that holds hardcoded properties that are shared among all of the instances.

```
function Person(name, age) {
  this.name = name;
  this.age = age;
};

let personOne = new Person('Ann', 23);

Person.prototype.type = 'Human';
```

Prototype properties can be set all together at once if we write them all in one object:

```
function Person(name, age) {
  this.name = name;
  this.age = age;
};

Person.prototype = {
    constructor: Person,
    type: 'Human',
    sayHi: function() {
        return 'My name is ' + this.name
  }
};

let personOne = new Person('Ann', 23);

console.log(personOne.sayHi());
```

## Own properties vs prototype properties

*own properties* are defined directly on the inctance object, each instance of the object has its own 'name and age' properties

*prototype properties* are defined on the prototype and are shared among all instances of the object



## Inheritance

if same properties are defined multiple times in different constructors, we can create a *supertype* (=parent) which will define this property once in its own constructor, and all his instances will *inherit* these properties

```
// create constructor of Woman
function Woman(name, age) {
    this.name = name;
    this.age = age;
}

// create constructor of Human (= parent)
function Human() {}

// create prototype of Human (define the shared properties)
Human.prototype = {
    sayHi: function() {
        return 'I am ' + this.name
    }
}

// set Woman's prototype to the instance of Human
Woman.prototype = Object.create(Human.prototype);

// all Human's properties are now shared by Woman
let womanOne = new Woman('Sarah', 23);
console.log(womanOne.sayHi());      // 'I am Sarah'
```


# Functional programming

style of programming with simple solutions and isolated functions with no side effects outside of the function scope

- only pure functions that do not mutate global variables
- no dependancy on global variables, all necessary inputs should be provided as arguments

***Callback functions*** are passed into another function as an argument which are then invoked to complete some action(like filter())

***First class functions*** can be assigned to variables, passed into another function, returned from another function

***Higher order functions*** take a function as an argument or return a function

***Lambda functions*** are passed as an argument or returned from another function


