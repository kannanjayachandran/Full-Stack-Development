# CSS

CSS is vast and it takes time to master it. Here I want to lay some sort of foundational knowledge on core CSS concepts and ultimately move on to CSS frameworks. The following topis will be covered:

1. CSS Fundamentals and core concepts
2. CSS Frameworks {Tailwind}
3. CSS Pre-processors {SASS}

## CSS Fundamentals

Cascading Style Sheet is simply a document that defines the style and layout of a website. The word cascading refers to the order of which the browser decides between various stylesheets. They are;

1. User-Agent Stylesheet {Default stylesheets that come with the browser}
2. User Stylesheet {Stylesheets that are defined by the user, the user preferences}
3. Author Stylesheet {Stylesheets that are defined by the developer}

Usually the precedence is from bottom to top. The author stylesheet has the highest precedence and the user-agent stylesheet has the lowest precedence. This may change depending on the use of `!important` keyword. 

CSS is simply a collection of declarations.

```css
selector {
  property: value;
}
```

### CSS Selectors

**Universal Selector**

They are used when we want to apply a style to all elements of the document.

```css

* {
  property: value;
}

/* eg. */

* {
  margin: 0;
  padding: 0;
  background-color: #4d4d4d;
}
```

**Type Selector**

They are used when we want to apply a style to all elements of a particular HTML type.

```css

type {
  property: value;
}

/* eg. */

p {
  color: #fff;
  font-size: 1.5rem;
}
```

**Class Selector**

When we want to apply a style to a particular class, It is denoted by the `.` symbol.

```css

.class-name {
  property: value;
}

/* eg. */

.container {
  width: 100%;
  height: 100vh;
  background-color: #4d4d4d;
}
```

**ID Selector**

When we want to apply a style to a particular ID, It is denoted by the `#` symbol.

```css

#id-name {
  property: value;
}

/* eg. */

#container {
  width: 100%;
  height: 100vh;
  background-color: #4d4d4d;
}
```

**Attribute Selector**

When we want to apply a style to a particular attribute, It is denoted by the `[]` symbol.

```css

[attribute-name] {
  property: value;
}

/* eg. */

/* <a> elements with a title attribute */
a[title] {
  color: cyan;
}

/* <a> elements with an href matching "https://example.org" */
a[href="https://example.org"]
{
  color: green;
}

/* <a> elements with an href containing "example" */
a[href*="example"] {
  font-size: 2em;
}

/* <a> elements with an href ending ".org", case-insensitive */
a[href$=".org" i] {
  font-style: italic;
}

/* <a> elements whose class attribute contains the word "logo" */
a[class~="logo"] {
  padding: 2px;
}

/* <a> elements that start with same domain */
a[href^="www.google.com"] {
  color: brown;
}
```

**Pseudo-class Selector**

When we want to apply a style to a particular state of an element, Pseudo-classes are ways for us to select elements based on their state. It is denoted by the `:` symbol. [More on pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)

While using pseudo-classes, we need to be careful about the order of the selectors. _LVHA_ rule is a good way to remember the order. Some of the elements we commonly use pseudo-class selectors are:

- Links
- Forms

```css

selector:pseudo-class {
  property: value;
}

/* eg. */

/* unvisited links */

a:link {
  color: #fff;
}

/* mouse over links */

a:hover {
  color: #fff;
}

/*:first-of-type is a pseudo selector that would select the first appearing tag of the defined type. */

p:first-of-type {
  color: #fff;
}

/*:nth-of-type is a pseudo selector that would select the nth appearing tag of the defined type. */

p:nth-of-type(2n-1) {
  color: #fff;
}

/*:nth-child is a pseudo selector that would select the nth child of the parent. */

p:nth-child(2n-1) {
  color: #fff;
}
```

**Pseudo-element Selector**

When we want to apply a style to a particular part of an element. It is denoted by the `::` symbol. [More on pseudo-elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)

```css

selector::pseudo-element {
  property: value;
}

/* eg. */

/* The first line of a <p> element */

p::first-line {
  color: #fff;
}

/* before and after pseudo elements are used to add content before and after an element. */

p::before {
  content: "before";
}

p::after {
  content: "after";
}
```

**Selector Specificity**

Browser would always prefer the more specific selector. The specificity of a selectors goes something like this:

![specificity precedence image](image.png)

Inline style -> ID -> Class -> Pseudo-classes -> Attributes -> Elements -> Pseudo-elements

> <picture>
>   <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/Mqxx/GitHub-Markdown/main/blockquotes/badge/light-theme/warning.svg">
>   <img alt="Warning" src="https://raw.githubusercontent.com/Mqxx/GitHub-Markdown/main/blockquotes/badge/dark-theme/warning.svg">
> </picture><br>
>
> Although not a used extensively we have `!important` tag that can be used to override the specificity precedence.

**Selector Combination**

We can combine selectors to create more specific selectors. There are three ways to combine selectors:

1. Descendant Combinator
2. Child Combinator
3. Adjacent Sibling Combinator

```css
/* 1. Child selector - Direct child*/
section>h2 {
  color: rgb(41, 207, 41);
}

/* 2. Descendant selector - Any child */
section h2 {
  color: rgb(41, 207, 41);
}



/* 3. Sibling selector */
h2~p {
  color: darkorchid;
}

/* 4. Adjacent sibling selector */
h2+a {
  color: deepskyblue;
}
```

### Units in CSS

There are two types of units in CSS:

1. Absolute Units
2. Relative Units

**Absolute Units**

Absolute units are fixed units. They are not relative to anything. They are:

- `px` - Pixels
- `pt` - Points
- `pc` - Picas
- `in` - Inches
- `cm` - Centimeters
- `mm` - Millimeters

**Relative Units**

Relative units are relative to something. They are:

- `em` - Relative to the font-size of the element
- `rem` - Relative to the font-size of the root element
- `vw` - Relative to 1% of the width of the viewport
- `vh` - Relative to 1% of the height of the viewport
- `vmin` - Relative to 1% of viewport's smaller dimension
- `vmax` - Relative to 1% of viewport's larger dimension
- `%` - Relative to the parent element

### CSS Box Model

Everything displayed by CSS is a box. So understanding this box model is very important. The box model is made up of the following:

![Box model diagram](./boxModel.png)

1. Content - This is the actual content of the box, it can be text, image, video etc.

2. Padding - This is the space between the content and the border of the box.

3. Border - This is the border of the box, it can be solid, dashed, dotted etc.

4. Margin - This is the space between the border of the box and the next element.

> <picture>
>   <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/Mqxx/GitHub-Markdown/main/blockquotes/badge/light-theme/tip.svg">
>   <img alt="Tip" src="https://raw.githubusercontent.com/Mqxx/GitHub-Markdown/main/blockquotes/badge/dark-theme/tip.svg">
> </picture><br>
>
> One way to center a box is to set the width and the margin to `auto`.
>
>```css
>.box {
>  width: 50%;
>  margin: auto;
>}
>```

**Box-sizing**

The `box-sizing` property is used to tell the browser what the box model should include. The default value is `content-box`, which means that the width and height of the box does not include the padding and border. The other value is `border-box`. When we use `border-box` the padding and border are included in the width and height of the box.

```css
selector {
  box-sizing: value;
}

/* eg. */

* {
  box-sizing: border-box;
}
```

**Positioning**

The `position` property is used to position an element. They essentially help us to move an element from its default position. It has the following values:

1. `static` - This is the default value. It means that the element is positioned according to the normal flow of the document. It cannot be moved using the top, bottom, left, right properties.

```css
selector {
  position: static;
}

/* eg. */
.box {
  position: static;
}
```

2. `relative` - This means that the element is positioned relative to its normal position. It can be moved using the top, bottom, left, right properties.

```css
selector {
  position: relative;
}

/* eg. */
.box {
  position: relative;
  top: 10px;
  left: 10px;
}
```

3. `fixed` - This means that the element is positioned relative to the viewport. It can be moved using the top, bottom, left, right properties.

```css
selector {
  position: fixed;
}

/* eg. */
.box {
  position: fixed;
  top: 10px;
  left: 10px;
}
```

4. `absolute` - This means that the element is positioned relative to its first positioned ancestor. It can be moved using the top, bottom, left, right properties.

```css
selector {
  position: absolute;
}

/* eg. */
.box {
  position: absolute;
  top: 10px;
  left: 10px;
}
```

5. `sticky` - This means that the element is positioned based on the user's scroll position. It can be moved using the top, bottom, left, right properties.

```css
selector {
  position: sticky;
}

/* eg. */
.box {
  position: sticky;
  top: 10px;
  left: 10px;
}
```

- Inline elements does not have any effect on vertical padding and margin.

- When the content is too big for the container / box it is in, we call this `overflow`. We can use the `overflow` property to manage how an element handles overflow content. The values are `visible`, `hidden`, `scroll` and `auto`. The default value is `visible`.

- While margin can have negative values, padding cannot.

- The `display` property is used to change the display behavior of an element. The values are `block`, `inline`, `inline-block`, `flex`, `grid` and `none`. The default value is `block`.

- The `float` property is used to float an element to the left or right. The values are `left`, `right` and `none`. The default value is `none`.

- The `clear` property is used to specify which sides of an element where other floating elements are not allowed. The values are `left`, `right`, `both` and `none`. The default value is `none`.

### Flexbox

Flexbox is a layout mechanism designed for laying out groups of items in one dimension. Learn how to use it in this module. It can have the following features;

- They can display as a row, or a column.

- They respect the writing mode of the document.

- They are single line by default, but can be asked to wrap onto multiple lines.

- Items in the layout can be visually reordered, away from their order in the DOM.

- Space can be distributed inside the items, so they become bigger and smaller according to the space available in their parent.
- Space can be distributed around the items and flex lines in a wrapped layout, using the Box Alignment properties.

- The items themselves can be aligned on the cross axis.

![Flex box image](image-1.png)

The main axis is set by the `flex-direction` property. If that is `row` your main axis is along the row, if it is `column` your main axis is along the column. The cross axis is perpendicular to the main axis. If your main axis is along the row, your cross axis is along the column and vice versa.

- Creating a flex container

```html
<div class="container" id="container">
  <div>One</div>
  <div>Item two</div>
  <div>The item we will refer to as three</div>
</div>
```

```css
.container {
  display: flex;
}
```

This will give as a block level box, with flex item children. These flex items will behave according to the initial values, which are;

* Items display as a row, They do not wrap, They do not grow to fill the container, They line up at the start of the container.