# TypeScript

Apart from primitive types, TS has objects. Object types can be declared with type aliases or interfaces. 
Both are almost the same, except for aliases are not extendable and cannot be changed after declaration.

Union types consist of multiple types in one, from which we can choose (this or this or this).
If we use union types in functions, we need to check for the type before applying methods (string and number methods do not intersect).
But if the method can be applied to all the types of union type, we can use it without type cheks (like .splice() in string and string[]).

Optional properties are marked with '?'.
If we are sure that method can be applied to the prop, but TS is not aware of it - we can use '!'.

Type assertion allows to specify more specific types
- (document.getElementById('id') as HTMLFormElement) or
- (<HTMLFormElement>document.getElementById('id'))


# Bootstrap

Bootstrap has 6 breakpoints.
Containers (.container, .container-fluid, .container-breakpoint) set width to 100% starting from different breakpoints.

To make the grid, .row should wrap .col classes. There are 12 columns, .col-3 means the column takes 3/12 of the width.
Columns can take different width starting from different breakpoints (.col-md-3).
.col-auto takes the width of the content