# Flexbox

## Properties applied to the parent

**display: flex** turns an element into a flex container

**flex-direction** allows to align any children of that element into rows or columns

```
flex-direction: row;             a b
flex-direction: column;          a
                                 b
flex-direction: row-reverse;     b a
flex-direction: column-reverse;  b
                                 a
```

**justify-content** allows to align elements along the main axis

```
justify-content: flex-start;    all to the left, default
justify-content: center;        all to the center
justify-content: flex-end;      all to the right

justify-content: space-between; first and last are at the edges, extra space between the items

justify-content: space-around;  first and last are not locked at the edges with space between the items, half space at the edges

justify-content: space-evenly;  full space at the edges, space between items is even
``` 

**align-items** allows to align elements along the cross axis

`flex-start` for rows: all to the top, for columns: all to the left

`flex-end` for rows: all to the bottom, for columns: all to the right

`center` for rows: equal space above and below, for columns: equal space to left and right

`stretch` default, for rows: stretches items to fill the container from top to bottom, for columns: from left to right

`baseline` - the line that the letters sit on


**flex-wrap** splits a flex container into miltiple rows (columns), by default all items fit together 

`nowrap` default, all fit together

`wrap` multiple lines for rows, multiple columns for columns

`wrap-reverse` multiple lines from bottom to top, multiple columns from right to left


## Properties appled to the item

**flex-shrink** allows to shrink if the flex container is too small

the higher the number, the more an item will shrink compared to other items

**flex-grow** controls the growth of items when the flex container is too big

the higher the number, the more an item will grow compared to other items

**flex-basis** specifies the intitial size of the item before adjustments with flex-shrink or flex-grow

**order** sets the order of how flex items appear in the container, numbers are used

**align-self** same as align-items but for each item, overrides align-items