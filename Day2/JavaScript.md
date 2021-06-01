# ES6 features

## class Syntax

allows to create objects with the *class* keyword

ES5:

```
var Vegetable = function (vegetableName) {
    this.vegetableName = vegetableName;
}
var carrot = new Vegetable ('carrot');
```

ES6:

UpperCamelCase should be used to name classes
```
class Vegetable{
    constructor (vegetableName) {
        this.vegetableName = vegetableName;
    }
}
const cucumber = new Vegetable ('cucumber');
```


## getters and setters

allow to get and set the value of the object's private variable without the user directly accessing this private variable:

```
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer); //anonymus
novel.writer = 'newAuthor';
console.log(novel.writer); //newAuthor
```

More sophisticated example:

```
class Thermostat {
    constructor(farenheit) {
        this._temperature = farenheit;
    }
    get temperature(farenheit) {
        return 5/9 * (this._temperature - 32);
    }
    set temperature(celsius) {
        this._temperature = celsius * 9.0 / 5 + 32;
    }
}
```

In the example above the temperture inside the class should be tracked in one scale, either farenheit or celsius.


## Module script

to easily share code among JavaScript files, imports and exports are used. To be able to import and export files, you should create a script of type "module":

```
<script type="module" src="fileName.js"></script>
```


#  Regular Expressions

## /search/

.test() returns the boolean result of the search

```
let regex = /Search/;
let string = 'Search here';
regex.test(string);   // true
```


## /search1|search2|search3/ OR

```
let regex = /here|there|everywhere/;
let string = 'Search here, there';
regex.test(string);
```


## /search/i

i flag - ignores the case

```
let regex = /search/i;
let string = 'Search here';
regex.test(string);    // true
```


## extract matches

.match() returns the string result of the search

```
let regex = /Search/;
let string = 'Search here';
string.match(regex);
```

`.match()` is opposite of `.test()`:

```
'string'.match(/regex/);
/regex/.test('string');
```


## /search/g

g flag - to extract a pattern more than once

```
let regex = /search/g;
let string = 'Search, search, search';
string.match(regex);   // ['search', 'search']
```


## Wildcard period

.  - matches any character in the place of the dot

```
let regex = /.at/;

let stringCat = 'I have a cat'; 
let stringFat = 'He is fat'; 
let stringAt = 'Look at him';

stringCat.match(regex);   // ['cat']
stringFat.match(regex);   // ['fat']
stringAt.match(regex);    // [' at']
```


## Character classes

[ ] - allow to define a group of characters to search for 

```
let regex = /[cf]at/gi;

let string = 'That cat is so fat';

string.match(regex);   // ['cat', 'fat']    'that' does not count
```


## Range of characters

[ - ] allows to specify the range of characters

```
let regex = /[a-f]at/g;

let string = 'The cat is chasing a rat';

string.match(regex);   // ['cat']    'rat' does not count
```


This also works with numbers; letters and numbers can be combined:

```
let regex = /[0-6a-c]/g;

let string = '5 bananas and 8 apples';

string.match(regex);   // ['5', 'b', 'a', 'a', 'a', 'a', 'a']
```

## Negated character set

[^thingsThatWillNotBeMatched] - allows to exclude indicated characters/symbols/white spaces from the search

```
let regex = /[^0-9aeiou ]/g;

let string = '2 fat cats';

string.match(regex);   // ['f', 't', 'c', 't', 's']
```


## One or more times in a row

[ +] - allows to search for characters/groups that appear consecutively (one after another)

```
let regex = /[s+p+]/g;

let string = 'Mississippi';

string.match(regex);   // ['s', 's', 's', 's', 'p', 'p']
```


## Zero or more times

' *' - allows to match characters that occur 0+ times

```
let regex = /go*/i;

let stringGoal = 'Gooooooal';
let stringGummy = 'gummy bear';
let stringNothing = 'no match';

stringGoal.match(regex);       // ['Goooooo']  
stringGummy.match(regex);      // ['g']
stringNothing.match(regex);    // null
```


## Greedy vs Lazy matching

*greedy match* finds the longest possible part that fits


```
let regex = /t[a-z]*i/;

let string = 'titanic';

string.match(regex);   // ['titani']
```

*lazy match* finds the shortest possible part that fits

? - allows lazy matching

```
let regex = /t[a-z]*?i/;

let string = 'titanic';

string.match(regex);   // ['ti']
```


## Beginning String

^ outside of [ ] allows to search for the pattern only at the beginning of the string

```
let regex = /^Cat/;

let stringYes = 'Cat is found here';

let stringNo = 'Unable to find a Cat here';

stringYes.match(regex);  // ['Cat']
stringNo.match(regex);   // null
```


## Ending String

$ at the end of regex - allows to search for the pattern only at the end of the string

```
let regex = /dog$/;

let stringYes = 'I have a dog';

let stringNo = 'Dog is my pet';

stringYes.match(regex);  // ['dog']
stringNo.match(regex);   // null
```


## Shorthand charatcter classes

[ - ] - allows to specify the range of characters

[A-Za-z0-9_] - matches all uppercase and lowercase letters, numbers and underscore

\w  - shorthand for [A-Za-z0-9_]



## Opposite of the above

[^A-Za-z0-9_] - matches everything apart from uppercase and lowercase letters, numbers and underscore

\W  - shorthand for [^A-Za-z0-9_]


## Match all numbers

\d - same as [0-9]


## Match all non-numbers

\D - same as [^0-9]


## Whitespace

\s - whitespace, carriage return, tab, form feed, new line

\S - non-whitespace, [^ \r\t\f\n\v]


## Quantity specifiers

{ 3,6 } - for the lower and upper number of patterns (how many times the pattern should appear in the search)

{ 5, } - without second number it sets only lower bound

{ 5 } - just one number sets the exact nu,ber of matches

