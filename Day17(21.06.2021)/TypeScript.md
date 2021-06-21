# TypeScript

## Index Properties

gives flexibility in defining properties when we do not know in advance how many properties will there be. We just need to decide on their types.

```
interface ErrorContainer {
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email!'
}
```

## Optional Chaining

add '?' after the properties which we are not sure if they exist or not 

(for example when fetching data from the server)

if `job` property does not exist in `fetchedUserData`, `title` will be never accessed, hence there will be no runtime error

```
console.log(fetchedUserData.job?.title?);
```

## Nullish Coalescing

`??` operator checks for the previous property to be null/undefined; if it is null/undefined - we use the fallback

```
const userInput = '';

const storedData = userInput ?? 'DEFAULT';

console.log(storedData); // ''
```

```
const userInput = null;

const storedData = userInput ?? 'DEFAULT';

console.log(storedData); // 'DEFAULT'
```