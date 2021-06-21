# Accessibility

## Text alternative to img (alt)

for visual impairments images should have a description indicated in the `alt='photo of a cat'`

if the image is already described with the text content or does not add meaning to the page, the alt text should be left blank: `alt=''`

## Headings as hierarchical relationships

it is important for the heading tags in your markup to have semantic meaning and relate to each other, not be picked merely for their size values

h2 should not be followed by h4 tags because of their size, instaed h3 should be used as subsection of h2 (and size can be set with CSS)

## Article, content, div - difference

`div` groups content with no relationshup

`section` groups thematically related content 

`article` groups independent, standalone content


## Figure tag for charts

to improve acessibility of charts, their content can be wrapped in `figure` tags, caption should be in `figcaption`