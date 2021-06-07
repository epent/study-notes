# Responsiveness

**Responsive Web Design** allows to suit different screen sizes, orientations, resolutions and looks good on all devices

## Viewport - meta tag

Viewport is the area visible by the users.

This meta tag gives the browser instructions on how to control the page's dimensions and scaling.

```
<head>
    <meta 
        name='viewport' 
        content='width=device-width, initial-scale=1'
    >
</head>
```

`width = device-width` sets the width of the viewport to the width of the device

`initial-scale = 1` sets the initial zoom level when the user visits the page



## Images

To make the image change its size depending on the width of the screen and never cause horizontal scrolling, use the following:

```
img {
    max-width: 100%;
    display: block
}
```

## Layout 

Content should not rely on a particular viewport width to render well.
Instead percentages for width should be used.

**Flexbox, Grid Layout, Multiple-column layout** techniques make it easier to create responsive layout.


## CSS Media queries
filters that can be applied to CSS styles