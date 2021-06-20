# TypeScript Classes

## 'this' keyword

'this' is always referred to the object on which the method is called

```
class Department {
    name: string;

    constructor(n: string) {
        this.name = n;
    }

    describe() {
        console.log('Department: ' + this.name);
    }
}
const accounting = new Department('Accounting');

accounting.describe(); // Department: Accounting

const accounting2 = {describe: accounting.describe};

// method is called on accounting2, but accounting2 does not have a name property
// so it is 'undefined'
accounting2.describe(); // Department: undefined
```

we can specify the class with which 'this' should consult before compiling (*)

```
class DepartmentCopy {
    name: string;

    constructor(n: string) {
        this.name = n;
    }

    describe(this: DepartmentCopy) {   // (*)
        console.log('DepartmentCopy: ' + this.name);
    }
}
const accountingCopy = new DepartmentCopy('Accounting');

const accountingCopy2 = {describe: accountingCopy.describe};

// property 'name' is missing in accountingCopy2
// since DepartmentCopy class declares 'name' and 'describe', we need to have both for the code below to compile
accountingCopy2.describe(); // not compiled
```

## Private access

to make sure that properties and methods of the class are only accessible within that class and not from outside (*), we can add 'private' keyword before the properties/methods (**)

such properties are not available in inherited classes!

```
class Department {
    name: string;
    private employees: string[] = []; (**)

    constructor(n: string) {
        this.name = n;
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }
}

const accounting = new Department('Accounting');

// employees is private, only accessible within the object
accounting.employees[2] = 'Anna'; (*)
```

## Readonly 

'readonly' keyword in front of properties indicates that these properties cannot be changed after initialisation

```
class Department {
    name: string;
    readonly employees: string[] = []; 
}
```

## Inheritance, super()

to create a class that inhetits from another class we use 'extends'

to add the constructor function from the parent class, we need to call super() with all the necessary params

```
class ITDepartment extends Department {
    constructor(id: string) {
        // calls the constructor of the base class
        super(id, 'IT');
    }
}
```

## Protected

does not allow to change property from outside, but allows to use them in inherited classes

## Abstract methods

These are methods that are defined in the parent class without {} and force child classes to define their own method with such name. 

In the parent class we do not provide any general implementation of the method, we just declare it in an abstract way.

```
abstract class Department {
    name: string;
    id: string;
    protected employees: string[] = [];

    constructor(n: string, id: string) {
        this.name = n;
        this.id = id;
    }

    abstract describe(): void; // (*)
}
```

Classes that have abstract methods are abstract classes. They cannot be instantiated, they can be only inherited from.


## Private Constructor

'private' keyword in front of constructor function allows to create a Singleton - class that can have exactly one instance.

Singleton cannot be created with 'new' keyword, it should be instanciated within the class itself.


# TypeScript Interface

describes a structture of an object

```
interface Person {
    name: string;
    age: number;

    greet(phrase: string): void;
}

let user1: Person;

user1 = {
    name: 'Max',
    age: 27,
    greet(phrase: string) {
        console.log(phrase);
    }
};
```

# Advanced Types

## Intersection Types

allows to combine multiple types

```
type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Max',                    //from both
    privileges: ['create-server'],  //from Admin
    startDate: new Date()           //from Employee
};
```

## Type Guards

type guard makes sure our code runs correctly at runtime

Possible type guards:
- typeof
- in ('something' in object)
- instanceof

```
type Combinable = number | string;

function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a+ b;
}
```