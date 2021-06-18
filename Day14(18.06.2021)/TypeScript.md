# TypeScript

## Type Aliases

create your custom types with the 'type' keyword:

```
type Combinable = number | string;

function combine(input1: Combinable, input2: Combinable) {
    return +input1 + +input2;
}
```

## Type Void

function `printResult` does not return anything, it just logs the output, so its type is 'void'

```
function add(n1: number, n2:number) {
    return n1 + n2;
}

function printResult(num: number) {
    console.log('Result: ' + num)
}

printResult(add(5, 12));
```

## Type Function

we can specify that a value should hold a function with the indicated number and types of inputs and outputs

```
function add(n1: number, n2:number) {
    return n1 + n2;
}

// specify the function with 2 number inputs and a numeric output
let combinedValues: (a: number, b: number) => number;

combinedValues = add;

console.log(combinedValues(10,5));
```

## TypeScript Compiler

1) Compile one file: watch mode - no need to rerun `tsc app-name.ts`, instead 

`tsc app-name.ts -w` || `tsc app-name.ts --watch` recompiles each time the file is saved

2) Compile the entire project

`tsc --init` tells TS that all these files are one project 

`tsc` can be used without filename, all .ts files are compiled

after that `tsc -w` || `tsc --watch` will watch for all .ts files and recompile them upon saving

## Exclude files from compilation

the excluded files are not compiled, .js files are not created for them

in `tsconfig.json` after all the `CompilerOptions` :

```
"exclude": [
    "fileName.ts"
  ]
```

"node-modules" are excluded by default; if we need to exclude smth else, "node-modules" should be indicated specifically, otherwise they will be not

## Include files in compilation

specifically tell TS which files should be compiled, other files will not be compiled

```
"include": [
    "fileName.ts"
  ]
```

## Compiler Options

- "sourceMap" creates a file that works as a bridge between TS and a browser; useful in case you want to debug .ts code in the browser

- "outDir" redirects and saves compiled .js files in the specified folder; in case you want to store .ts and .js files in separate folders

- "rootDir" specify directory for input files to make sure that compiler does not search in other directories

- "removeComments" does not includes any comment lines into the .js files

- "noEmit" does not create any output .js files; useful when you want TS compiler only to check your files and report errors

- "noEmitOnError" does not create output files if any of the .ts files has an error

- "noUnusedLocals" makes sure that all declared locally variables are used afterwards

- "noUnusedParameters" same as above, but with parameters

- "noImplicitReturns" makes sure there are no functions that sometimes return smth and sometimes they do not