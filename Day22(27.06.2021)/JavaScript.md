# Browser events

## event.stopPropagation()

makes sure that the event does not bubble up (does not continue up to the ancestor elements)

## changing propagation order

in case you want the parent event to trigger before the child event (when clicking on the child) you should set the third param on parent listener to `true`

```
let inner = document.querySelector("#inner");
let outer = document.querySelector("#outer");

inner.addEventListener('click', innerListener);

function innerListener(event) {
  console.log('Inner clicked');
}

outer.addEventListener('click', outerListener, true); // here

function outerListener() {
  console.log('Outer clicked')
}
```

## event.bubbles

`true` if the event bubbles up

## event.target

gives you the object on which the event happened ('div')

## event.clientX / event.clientY

gives you the coordinates of the position of the cursor

## event.type

'click'

## event.currentTarget

element that handled an event {'HTMLInputElement'}