<div align="center">

# HTML { HyperText Markup Language }

### [Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML)

</div>

## HTML Basics

HTML consists of a set of tags that define the structure of a web page. A basic HTML document has an opening and closing `<html>` tag, a `<head>` tag, and a `<body>` tag. The `<head>` tag contains information about the document, such as the title, author, and meta-data. The `<body>` tag contains the content that will be displayed on the web page.

HTML tags are used to define the content and structure of a web page. HTML attributes provide additional information about the HTML elements.

## Semantic HTML

We can use HTML just for the purpose of representation, or we can use it to provide meaning to the content and its context. The latter is called semantic HTML. Semantic HTML is more accessible and understandable to both humans and machines. It also helps with search engine optimization (SEO).

Some of the most common semantic HTML tags are `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`, `<figure>`, and `<figcaption>`.

All these can be used instead of generic `<div>` and `<span>` tags.

## Essential Tags

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

- `<table>` - This tag is used to create a table for displaying data.

- `<tr>` - This tag is used to create a row in a table.

- `<td>` - This tag is used to create a cell in a table.

- `<form>` - This tag is used to create a form for gathering input from users, such as text fields or checkboxes.

- `<input>` - This tag is used to create different types of form elements such as text boxes, radio buttons, checkboxes, submit buttons, and more.

- `<label>` - This tag is used to associate a label with a form element, making it easier for users to understand what information they should enter.

- `<button>` - This tag is used to create a button that can be clicked by the user.

- `<script>` - This tag is used to embed JavaScript code into the web page.

- `<style>` - This tag is used to embed CSS code into the web page.

- `<div>` - This tag is used to create a division or section in the web page.

- `<span>` - This tag is used to create a section of text within a larger block of text.

- `<meta>` - This tag is used to specify meta-data about the HTML document, such as the character encoding, viewport settings, and more.

## Tables

Prior to css tables were used to layout web pages. Tables are still used to display tabular data.

```html
<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
    <th>Header 3</th>
  </tr>
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

- We can use `<pre>` tag to display preformatted text. This tag preserves the white space and line breaks.

## Forms

Forms are an essential part of many web applications, allowing users to enter data and interact with the website.

- The `<form>` tag is used to define a form on a web page.

- The `<input>` tag is used to create different types of form elements such as text boxes, radio buttons, checkboxes, submit buttons, and more.

- The `<label>` tag is used to associate a label with a form element, making it easier for users to understand what information they should enter.

- The `"name"` attribute is used to identify each form element when the form is submitted. The `"value"` attribute is used to define the value of an input element.

- The `"action"` attribute is used to specify the URL of the server-side script that will process the form data when it is submitted.

- The `"method"` attribute is used to specify the HTTP method used to submit the form data. The two most common methods are `"GET"` and `"POST"`.

## Document Object Model

The **Document Object Model** (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. Essentially, it creates a structured representation of the HTML page that can be manipulated with programming languages such as JavaScript.

- The DOM provides a **hierarchical tree-like representation of a web page**, with each element represented as a node.

- The DOM can be manipulated using scripting languages such as JavaScript, allowing developers to dynamically update the page content, style, and structure.

- The DOM is designed to be platform- and language-independent, making it possible to use the same DOM API across different programming languages and platforms.

- The DOM provides a consistent interface for accessing and manipulating elements on a web page, regardless of how the page was created or how it is displayed.

- The DOM includes a range of methods and properties that allow developers to perform a wide range of tasks, such as adding and removing elements, modifying text and attributes, and responding to user events.

- The **DOM is updated in real-time** as the page is modified, which means that changes made to the DOM are immediately reflected in the web page.

## Accessibility

Accessibility refers to the design and development of websites, applications, and technology that are accessible to people with disabilities. The goal of accessibility is to ensure that everyone, regardless of their abilities or disabilities, can use and interact with digital content and technology in a meaningful and effective way.

Ensuring accessibility requires a combination of design and development techniques, such as using semantic HTML, providing alternative text for images, using ARIA (Accessible Rich Internet Applications) attributes, and testing with assistive technologies. In addition, accessibility guidelines and standards, such as the Web Content Accessibility Guidelines (WCAG), can be used to ensure that websites and applications meet the needs of people with disabilities.

## Meta Tags

Meta tags are HTML tags that provide metadata about a web page. This metadata is used by search engines, social media platforms, and other applications to understand and display information about the web page. Some examples are;

```html
<meta name="keywords" content="..." />: This tag specifies a list of keywords or
phrases that are relevant to the web page and may be used by search engines to
help rank the page.

<meta name="viewport" content="width=device-width, initial-scale=1.0" />: This
tag sets the viewport of the web page, which determines how the page is
displayed on different devices.

<meta name="robots" content="index, follow" />: This tag specifies whether
search engine robots should index the page and follow links on the page.
```

These are the basics of html, with these concepts we can move to next topics.
