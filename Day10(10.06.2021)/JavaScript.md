# Browser events

Event handlers can be used to handle user input, user actions, and browser actions:

- onchange
- onclick
- onmouseover
- onmouseout
- onkeydown
- onload


## Bubbling

When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors. *Almost* all events have bubbling.

**Stopping bubbling**

`event.stopPropagation()` to stop propagation to ancestors (all other events of this element will still be executed)

```
<body onclick="alert(this is not reached)">
    <button onclick=""event.stoppropagation()>Click me</button>
</body>
```

`event.stopImmediatePropagation()` to stop bubbling and prevent other handlers even on the same element

! Bubbling should not be stopped as it creates hidden pitfalls that may become problems later.



# Promises (continue)

## async/await

*async* keyword makes a function always return a promise and allows to use await inside of it

*await* keyword before the promise makes JavaScript wait until the promise settles and then returns its result (or throws an error)

```
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait until the promise resolves 

  console.log(result); // "done!"
}

f();
```


