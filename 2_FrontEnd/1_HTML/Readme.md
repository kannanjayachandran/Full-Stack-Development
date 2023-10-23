<div align="center">

# HTML { HyperText Markup Language }

### [Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML)
### [Awesome resource - HTML Reference](https://htmlreference.io/)

</div>

## HTML Basics

HTML consists of a set of tags that define the structure of a web page. A basic HTML document has an opening and closing `<html>` tag, a `<head>` tag, and a `<body>` tag. The `<head>` tag contains information about the document, such as the title, author, and meta-data. The `<body>` tag contains the content that will be displayed on the web page.Almost all tags have attributes. HTML attributes provide additional information about the HTML elements.

## Essential Tags

There are many different HTML tags, but some of the most common ones are:

- `<html>` - This tag indicates the start of an HTML document and should be placed at the beginning of every HTML file.

- `<head>` - This tag is used to contain information about the HTML document, such as the page title, meta-data, and links to external resources such as stylesheets or scripts.

- `<title>` - This tag is used to specify the title of the HTML document, which appears in the browser's title bar.

- `<body>` - This tag is used to contain the content that appears on the web page, such as text, images, and other HTML tags.

- `<h1>, <h2>, <h3>, <h4>, <h5>, <h6>` - These tags are used to create headings of different levels, with `<h1>` being the highest level and `<h6>` being the lowest level.

- `<p>` - This tag is used to create paragraphs of text.

- `<a>` - This tag is used to create hyperlinks to other web pages or to specific locations on the same page.

- `<img>` - This tag is used to embed images into the web page.

- `<ul>` - This tag is used to create an unordered list, which is a list of items with bullet points.

- `<ol>` - This tag is used to create an ordered list, which is a list of items with numbered points.

- `<li>` - This tag is used to create individual list items for an unordered or ordered list.

- `<form>` - This tag is used to create a form for gathering input from users, such as text fields or checkboxes.

- `<button>` - This tag is used to create a button that can be clicked by the user.

- `<script>` - This tag is used to embed JavaScript code into the web page.

- `<style>` - This tag is used to embed CSS code into the web page.

- `<div>` - This tag is used to create a division or section in the web page.

- `<span>` - This tag is used to create a section of text within a larger block of text.

- `<meta>` - This tag is used to specify meta-data about the HTML document, such as the character encoding, viewport settings, and more.

**General structure of an HTML document**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Page Title</title>
    <!-- Other meta tags -->
    <!-- Add CSS and JavaScript links here -->
  </head>
  <body>
    <!-- Your content goes here -->
  </body>
</html>
```

## Semantic HTML

We can use HTML just for the purpose of representation, or we can use it to provide meaning to the content and its context. The latter is called semantic HTML. Semantic HTML is more accessible and understandable to both humans and machines. It also helps with search engine optimization (_SEO_). 

**Most importantly it helps screen readers to understand the content and provide better accessibility to the users.**

Some of the most common semantic HTML tags are `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`, `<figure>`, and `<figcaption>`. All these can be used instead of generic `<div>` and `<span>` tags.

1. `<article>` : Defines a self-contained block of content that can exist in any context. It can have its own header, footer, sections... Useful for a list of blog posts.

```html
<article>
  <header>
    <h3>
      <a href="/my-blog-post">My blog post</a>
    </h3>
  </header>
  <section>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>
  </section>
  <footer>
    <small>
      Posted on <time datetime="2017-04-29T19:00">Apr 29</time> in <a href="/category/code">Code</a>
    </small>
  </footer>
</article>
```

2. `<aside>` : Defines a block of content that is related to the main content. Displayed as a sidebar usually. Useful for a list of links to other articles or about the author kind of information.

3. `<figcaption>` : Defines a caption for a `<figure>` element. Useful for images, diagrams, illustrations, code snippets, etc.

```html
<figcaption>The caption for an image</figcaption>
```

4. `<figure>` : Defines self-contained content, such as images, diagrams, illustrations, code snippets, etc.

5. `<footer>` : Defines a footer for a document or section. Useful for a list of links to other articles or about the author kind of information.

```html
<figure>
  <img src="/images/html.png" alt="HTML logo">
</figure>
```

6. `<header>` : Defines a header for a document or section. Useful for a list of links to other articles or about the author kind of information.

```html
<header>
  <h1>HTML Reference</h1>
  <nav>
    <a>Home</a>
    <a>About</a>
    <a>Contact</a>
  </nav>
</header>
```

7. `<main>` : Defines the main content of a document. There should be only one *main* element in a document. Can be displayed with a sidebar.

```html
<main>
  <h1>My blog post</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>
  <p>etc.</p>
</main>

<aside>
  <h3>About the author</h3>
  <p>Frontend Designer from Bordeaux, currently working for Improbable in sunny London.</p>
</aside>
```

8. `<nav>` : Defines a set of navigation links. 

```html
<nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
  </nav>
```

9. `<section>` : Defines a section in a document. Useful for a list of blog posts.

10. `<time>` : Defines a date/time. 

```html
Time is  <time datetime="2016-04-29T19:00">19:00</time>.
```

## Tables

Prior to css, tables were used to layout web pages. Tables are still used to display tabular data.

```html
<table>
  <caption> Table Heading </caption>

  <thead>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
    <th>Header 3</th>
  </tr>
  </thead>
  
  <tr>
    <td>Row 1, Column 1</td>
    <td>Row 1, Column 2</td>
    <td>Row 1, Column 3</td>
  </tr>

  <tr>
    <td>Row 2, Column 1</td>
    <td>Row 2, Column 2</td>
    <td>Row 2, Column 3</td>
  </tr>

</table>
```

<table>
  <caption> Table Heading </caption>

  <thead>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
    <th>Header 3</th>
  </tr>
  </thead>
  
  <tr>
    <td>Row 1, Column 1</td>
    <td>Row 1, Column 2</td>
    <td>Row 1, Column 3</td>
  </tr>

  <tr>
    <td>Row 2, Column 1</td>
    <td>Row 2, Column 2</td>
    <td>Row 2, Column 3</td>
  </tr>

</table>

1. `<table>` : Defines a table.

2. `<caption>` : Defines a caption for a table.

3. `<thead>` : Defines a group of table rows at the top of the table.

3. `<tbody>` : Defines a group of rows in a table.

4. `<tr>` : Defines a row in a table.

5. `<th>` : Defines a header cell in a table. Must be a direct child of `<tr>`.

6. `<td>` : Defines a cell in a table. Must be a direct child of `<tr>`. It has the following attributes:
    - `colspan` : Specifies the number of columns a cell should span.
    - `rowspan` : Specifies the number of rows a cell should span.

7. `<tfoot>` : Defines a group of table rows at the end of the table.

## Forms

```html
<form action="https://www.google.com/search" method="GET">

  <input type="text" name="q" placeholder="Cartoon Network" />
  <input type="submit" value="Search" />

</form>
```

<form action="https://www.google.com/search" method="GET">
  <input type="text" name="q" placeholder="Cartoon Network" />
  <input type="submit" value="Search" />
</form>

Forms are an essential part of many web applications, allowing users to enter data and interact with the website.

- The `<form>` tag is used to define a form on a web page.

- The `action` attribute defines which URL the form's information is sent to when submitted.

- The `method` Defines the HTTP method used when submitting the form. The two most common methods are `GET` and `POST`.

- The `<input>` tag is used to create different types of form elements such as text boxes, radio buttons, checkboxes, submit buttons, and more. It defines an interactive control within a web form.

- `type` is an attribute of input, which defines the type of the input. Can be text, email, number,  checkboxes, radio buttons, submit buttons

- The `name` attribute is the unique identifier for that input within the form. It allows the server to access each input's value when submitted.

- `Placeholder` is an attribute of input, which defines the placeholder text for the input.

- `required` is an attribute of input, which defines whether the input is required or not.

- The `<label>` tag is used to associate a label with a form element, making it easier for users to understand what information they should enter.

`fieldset` is used to defines a group of controls within a form.

```html
<form action="/subscribe" method="post">
  <fieldset>
    <legend>Subscribe to the Newsletter</legend>
    <input type="email" name="email">
    <button>Subscribe</button>
  </fieldset>
</form>
```

<form action="/subscribe" method="post">
  <fieldset>
    <legend>Sign in to the Newsletter</legend>
    <input type="email" name="email">
    <button>Subscribe</button>
  </fieldset>
</form>

- We can use `<pre>` tag to display preformatted text. This tag preserves the white space and line breaks.

## Accessibility

Accessibility refers to the design and development of websites, applications, and technology that are accessible to people with disabilities. The goal of accessibility is to ensure that everyone, regardless of their abilities or disabilities, can use and interact with digital content and technology in a meaningful and effective way.

Ensuring accessibility requires a combination of design and development techniques, such as using semantic HTML, providing alternative text for images, using ARIA (Accessible Rich Internet Applications) attributes, and testing with assistive technologies. In addition, accessibility guidelines and standards, such as the Web Content Accessibility Guidelines (WCAG), can be used to ensure that websites and applications meet the needs of people with disabilities.

## Meta Tags

Meta tags are HTML tags that provide metadata about a web page. This metadata is used by search engines, social media platforms, and other applications to understand and display information about the web page. Some examples are;

```html
<meta name="keywords" content="..." />: This tag specifies a list of keywords or
phrases that are relevant to the web page and may be used by search engines to
help rank the page {Not used by Google anymore}.

<meta name="viewport" content="width=device-width, initial-scale=1.0" />: This
tag sets the viewport of the web page, which determines how the page is
displayed on different devices.

<meta name="robots" content="index, follow" />: This tag specifies whether
search engine robots should index the page and follow links on the page.

<meta name="description" content="..." />: This tag specifies a description of the website that may be used by search engines to display information about the page.
```
## Document Object Model

The **Document Object Model** (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. Essentially, it creates a structured representation of the HTML page that can be manipulated with programming languages such as JavaScript.

- The DOM provides a **hierarchical tree-like representation of a web page**, with each element represented as a node.

- The DOM can be manipulated using scripting languages such as JavaScript, allowing developers to dynamically update the page content, style, and structure.

- The DOM is designed to be platform- and language-independent, making it possible to use the same DOM API across different programming languages and platforms.

- The DOM provides a consistent interface for accessing and manipulating elements on a web page, regardless of how the page was created or how it is displayed.

- The DOM includes a range of methods and properties that allow developers to perform a wide range of tasks, such as adding and removing elements, modifying text and attributes, and responding to user events.

- The **DOM is updated in real-time** as the page is modified, which means that changes made to the DOM are immediately reflected in the web page.
