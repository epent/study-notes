# Applied Visual Design

## Relative Positioning

more examples in `positioning.js`

allows to specify how you should position this element *relative* to the *normal flow*. 
Other elements still continue to behave as if this element was in normal flow.

*Normal flow* - default layout, where inline elements display from left to right and block elements display from top to bottom. 

The code below means "10px away from the bottom" (goes up):

```
p {
    position: relative,
    bottom: 10px;
}
```


## Absolute Positioning

more examples in `positioning.js`

locks the element in place relative to its closest *positioned* ancestor. Need to add relative positioning to the ancestor against which we are positioning our element. Removes the element from the normal flow, other elements ignore it like it does not exist (and they take its place).

The code below means "10px away from the bottom" (goes up):

```
section {
    position: relative;
}
p {
    position: absolute;
    bottom: 10px;
}
```


## Fixed Positioning

more examples in `positioning.js`

type of absolute positioning that locks the element relative to the browser window. Removes the element from the normal flow, other elements ignore it like it does not exist.
Fixed element will not move when the user scrolls.


## z-index

specifies the order of the elements to cover each other. The higher the number, the higher in the stack an element appears (covers those with lower numbers).


## Transform scale

`tranform.js`

changes the scale of the element. Number inside the "scale()" indicates by what amount multiply the original size:

```
#ball {
    transform: scale(2);
}
```

When used with pseudo-classes it adds interactivity to the elements:

```
p:hover {
    transform: scale(1.5);
}
```


## Transform skew

`tranform.js`

skewX() - skews the element along x-axis by a given degree;

10deg - bottom part moves to the right;

-10deg - bottom part moves to the left;

```
rectangle {
    transform: skewX(-20deg);
}
```

skewY() - skews the element along y-axis by a given degree;

30deg - left part moves up;

-30deg - left part moves down


## Transform rotate

rotates the element by (deg) 

```
.element {
    transform: rotate(-20deg);
}
```


## float property

floating elements are removed from the normal flow and are pushed to left or right side of their containing parent element. Commonly used with 'width'.

```
p {
    float: right;
    width: 40%;
}
```


## Subtle pattern as a background image

```
body {
    background: url('https://cdn-media-1.freecodecamp.org/imgr/MJAkxbh.png);
}
```
