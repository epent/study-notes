# Summary for today:

After watching a tutorial on TypeScript last week, today I dived into documentation of TypeScript.
TypeScript is kind of superstructure on JavaScript - it adds type-checking features that allow to avoid multiple bugs (typos, uncalled functions, basic logic errors).
The basic types are:
- string
- number (no int or floats)
- boolean (true or false)
- arrays (string[], number[], Array<`number`>)
- any (`noImplicitAny` flag does not allow any)

Type inference allows not to indicate types evrywhere - TS is very good at finding out the type from the context.