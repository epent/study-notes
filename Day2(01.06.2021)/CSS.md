# Applied Visual Design

## Animation Properties

8 properties that control how the animation behaves inside the @keyframes

**@keyframes** specifies what should be done during the animation:

0% - beginning of the animation

100% - ending of the animation

any% in between - between start and end of the animation

**animation-name** sets the name of the animation

**animation-duration** sets the length time of the animation

**animation-delay** sets delay bwfore starting the animation

**animation-direction** sets the direction of the animation: normal (forwards), reverse (backwards), alternate (forwards -> backwards), alternate-reverse (backwards -> forwards)

**animation-fill-mode** sets the style applied to the element after the animation has finished

**animation-iteration-count** sets how many times to loop through the animation

**animation-timing-function** sets the acceleration of the element during animation:

- ease: slow-fast-slow
- ease-out: fast-slow
- ease-in: slow-fast
- linear: constant speed

```
.button {
    animation-name: changeColor;
    animation-duration: 4s;
    animation-delay: 2s;
    animation-fill-mode: none/forwards/backwards/both;
    animation-iteration-count: 3/infinite;
}
@keyframes changeColor {
    0% {
        background-color: blue;
    }
    20% {
        background-color: green;
    }
    100% {
        background-color: pink;
    }
}
```