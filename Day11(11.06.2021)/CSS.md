# CSS Grid

## Properties applied to the parent

**display: grid** turns an element into a grid container

**grid-template-columns: 50px 50px** indicates the number of columns and their width

**grid-template-rows: 50px 50px** indicates the number of rows and their height

**grid-column-gap** specifies the gap between the columns

**grid-row-gap** specifies the gap between the rows

**grid-gap** shorthand for the 2 previous: first rows, then columns

**justify-items** allows to align the content's posiiton of all the items horizontally

`stretch` default, fits the whole width of the cell

`start` aligns the content at the left of the cell

`center` aligns the content in the center of the cell

`end` aligns the content at the right of the cell

**align-items** allows to align the content's posiiton of all the items vertically

`stretch` default, fits the whole height of the cell

`start` aligns the content at the top of the cell

`center` aligns the content in the center of the cell

`end` aligns the content at the bottom of the cell

**grid-template-areas** allows to group cells into areas with a custom name

```
grid-template-areas:
  "header header header"
  "advert content content"
  "footer footer footer";
```


## Properties applied to the item

**grid-column** allows to specify the number of columns an item is going to take (the property takes the numbers of lines from/until)

**grid-row** allows to specify the number of rows an item is going to take (lines from/until)

**justify-self** allows to align the content's position horizontally within a cell

`stretch` default, fits the whole width of the cell

`start` aligns the content at the left of the cell

`center` aligns the content in the center of the cell

`end` aligns the content at the right of the cell

**align-self** allows to align the content's position vertically within a cell

`stretch` default, fits the whole height of the cell

`start` aligns the content at the top of the cell

`center` aligns the content in the center of the cell

`end` aligns the content at the bottom of the cell

**grid-area** allows to place an item into custom area

*with* areas template on the parent

```
.item1 {
  grid-area: header;
}
```

*without* areas template on the parent

```
item1 { grid-area: 1/1/2/4; }
```
the code above means that:

```
grid-area: horizontal line to start at / vertical line to start at / horizontal line to end at / vertical line to end at;
```