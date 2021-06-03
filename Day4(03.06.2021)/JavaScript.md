# Regular Expressions (continue)

## Optional elements 

'?' checks for zero or one of the preceding element, when you are not sure if that element exists in the search

```
let british = 'colour';
let american = 'color';

let regex = /colou?r/;

console.log(regex.test(british));   // true
console.log(regex.test(american));  // true
```


## Lookaheads

useful when need to search for multiple patterns within the same string

- **positive lookahead** (?=...) makes sure that the search element is there, but it does not match it; the rest of the pattern is returned if the positive lookahead part was there

```
let word = 'yes';

let regex = /ye(?=s)/; // is there 's' after 'ye'?

word.match(regex); // 'ye'; 's' was found, the rest is returned
```

```
let word = 'yes';

let regex = /ye(?=t)/; // is there 't' after 'ye'?

word.match(regex); // null; 't' was not found
```

- **negative lookahead** (?!...) makes sure that the search element is not there; the rest of the pattern is returned if the negative lookahed part was not there

```
let word = 'yes';

let regex = /ye(?=t)/; // there is no 't' after 'ye'?

word.match(regex); // 'ye'; 't' was not found, the rest is returned
```

```
let word = 'yes';

let regex = /ye(?=s)/; // there is no 's' after 'ye'?

word.match(regex); // null; 's' was found
```

## Reuse patterns with *capture groups*

- allows to search for repeat patterns

the pattern is indicated in () and \1 \2 \3 indicates the number of the capture group

```
let string = 'test test test';

let regex = /(\w+)(\s)\1\2\1/; 

// same as test\stest\stest
// \1 is test
// \2 is whitespace

string.match(regex); // ['test test test', 'test', ' ']
// match() returns array with the string it matches and all capture groups
```

```
let string = '42 42 42';

let regex = /^(\d+)(\s)\1\2\1$/'; // matches 42 only 3 times, since start and end are fixed

string.match(regex); // ['42 42 42', '42', ' ']

-----------------------------------------------------------------

let regex = /(\d+)(\s)\1\2\1/; // matches 42 any number of times > 3
```

## Remove whitespaces from start and end

```
let string = '   Hello World!   ';

let regex = /^\s+|\s+$/g;

string.replace(regex, '');   // 'Hello World!'
```