<!-- 
Author : Kannan Jayachandran
Section : HTML 
-->

# HTML : HyperText Markup Language

**[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML) | [Awesome resource for HTML](https://htmlreference.io/)**

HTML (HyperText Markup Language) is the standard markup language for creating web pages. It provides the structure for content displayed on the web, including text, images, and links, while working in conjunction with CSS and JavaScript for styling and functionality.

## Essential Tags and their uses

- **`<html>`** - This root tag indicates the start of an HTML document. All other HTML elements must be placed within this tag.

  ```html
  <html>
    ...
  </html>
  ```

- **`<head>`** - Contains metadata (information about the document), links to external resources like stylesheets, and the `<title>` element.

  ```html
  <head>
    ...
  </head>
  ```

- **`<title>`** - Sets the title displayed on the browser tab or title bar.

  ```html
  <title>My Webpage</title>
  ```

- **`<body>`** - Contains the main content of the HTML document, such as text, images, and other HTML elements visible on the web page.

  ```html
  <body>
    ...
  </body>
  ```

- **Headings** - Heading tags from `<h1>` to `<h6>` define different levels of section headings, with `<h1>` being the most important and `<h6>` the least.

  ```html
  <h1>Main Heading</h1>
  <h2>Subheading</h2>
  ```

- **`<p>` (Paragraph)** - Used to structure text into paragraphs.

  ```html
  <p>This is a paragraph.</p>
  ```

- **`<a>` (Anchor)** - Creates hyperlinks to other web pages or within the same page. Include the `href` attribute to specify the URL.

  ```html
  <a href="https://example.com">Visit Example</a>
  ```

- **`<img>` (Image)** - Embeds images within the web page. Use the `src` attribute to specify the image source and the `alt` attribute for accessibility.

  ```html
  <img src="image.png" alt="A description of the image" height="100" width="100" />
  ```

- **Lists**

  - **`<ul>` (Unordered List)** - Creates a list with bullet points.
    ```html
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
    ```
  - **`<ol>` (Ordered List)** - Creates a numbered list.
    ```html
    <ol>
      <li>First Item</li>
      <li>Second Item</li>
    </ol>
    ```
  - **`<li>` (List Item)** - Represents individual items within lists.

- **`<form>`** - Collects user input through fields like text boxes, checkboxes, and buttons.

  ```html
  <form action="/submit">
    <input type="text" name="username" />
  </form>
  ```

- **`<button>`** - Creates a clickable button, often within forms or for interactive JavaScript functionality.

  ```html
  <button>Click Me</button>
  ```

- **`<script>`** - Embeds JavaScript for dynamic functionality. It’s often included at the end of the body for better load performance. (Two reasons: 1. It doesn't block the rendering of the page. 2. It ensures that the HTML content is loaded before the script runs.)

  ```html
  <script src="script.js"></script>
  ```

- **`<style>`** - Adds CSS styling directly within an HTML document.

  ```html
  <style>
    body {
      background-color: lightblue;
    }
  </style>
  ```

- **`<div>` (Division)** - Creates a block-level division for organizing content, often used with CSS for layout styling.

  ```html
  <div class="container">Content here</div>
  ```

- **`<span>`** - Defines an inline section of text within a larger block, often for styling specific parts of text.

  ```html
  <span style="color: red;">Important text</span>
  ```

- **`<meta>`** - Specifies metadata such as character encoding, viewport settings, and search engine instructions.

  ```html
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  ```

## General structure of an HTML document

```html
<!DOCTYPE html> <!-- Specifies the HTML version, ensuring the document is interpreted as HTML5 -->
<html lang="en"> <!-- Defines the language of the document, improving accessibility and SEO -->
  <head>
    <meta charset="UTF-8"> <!-- Sets character encoding, ensuring proper display of text -->
    <title>Page Title</title> <!-- Sets the page title displayed on the browser tab -->

    <!-- Additional meta tags (e.g., viewport settings for mobile) -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Link to CSS for styling and JS scripts if needed -->
    <link rel="stylesheet" href="styles.css">
    <script src="script.js" defer></script>
  </head>
  <body>
    <!-- The main content of the webpage goes here -->
  </body>
</html>
```

## Semantic HTML

Semantic HTML uses tags that clearly describe their meaning in a way that is both human- and machine-readable. This improves accessibility (by helping screen readers interpret content accurately) and boosts search engine optimization (_SEO_) by allowing search engines to better understand the page’s structure.

### Common Semantic HTML Tags and Their Uses

1. **`<header>`**: Defines the header of a document or section, often containing navigation links, logos, or introductory information.
   ```html
   <header>
     <h1>Website Title</h1>
     <nav>
       <a href="#home">Home</a>
       <a href="#about">About</a>
     </nav>
   </header>
   ```

2. **`<nav>`**: Contains a group of navigation links to other parts of the website or external pages.
   ```html
   <nav>
     <a href="#home">Home</a>
     <a href="#services">Services</a>
   </nav>
   ```

3. **`<main>`**: Represents the main content of the document. Only one `<main>` element should be used per page for better accessibility.
   ```html
   <main>
     <h2>Main Content Section</h2>
     <p>This is the primary content of the page.</p>
   </main>
   ```

4. **`<article>`**: Defines a self-contained piece of content that can stand independently, such as a blog post or news article.
   ```html
   <article>
     <h2>Blog Post Title</h2>
     <p>This is a blog post.</p>
   </article>
   ```

5. **`<section>`**: Organizes content into thematic sections within a document, often containing multiple `<article>` elements.  
   ```html
   <section>
     <h3>Section Title</h3>
     <p>Section content goes here.</p>
   </section>
   ```

6. **`<aside>`**: Represents content related to the main content but placed off to the side, such as sidebars with links or author information.
   ```html
   <aside>
     <h4>Related Links</h4>
     <p>Links to related articles.</p>
   </aside>
   ```

7. **`<footer>`**: Defines the footer for a document or section, often used for contact information, links, or copyright details.
   ```html
   <footer>
     <p>&copy; 2024 Your Website</p>
   </footer>
   ```

8. **`<figure>`**: Groups self-contained content like images or illustrations. Usually paired with `<figcaption>` to add captions to media.
   ```html
   <figure>
     <img src="image.jpg" alt="Description of image">
     <figcaption>Image Caption Here</figcaption>
   </figure>
   ```

9. **`<time>`**: Represents a specific date or time. Using the `datetime` attribute standardizes the format, improving accessibility and search engine readability.
   ```html
   <p>Event starts at <time datetime="2023-10-28T19:00">7:00 PM</time>.</p>
   ```

## Tables

Tables in HTML are primarily used to display tabular data, such as spreadsheets or data grids. In earlier web design, tables were used for page layout, but CSS is now preferred for layout purposes. Below is an example of a simple HTML table structure:

```html
<table>
  <caption>Sample Table Heading</caption>

  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
      <th>Header 3</th>
    </tr>
  </thead>

  <tbody>
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
  </tbody>

  <tfoot>
    <tr>
      <td colspan="3">Table Footer</td>
    </tr>
  </tfoot>
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


  <tr>
     <td colspan="2">Spanning Two Columns : This is a long text..</td>
   </tr>

</table>

1. **`<table>`**: Defines the overall table structure, containing rows and cells for data.

2. **`<caption>`**: Provides a caption for the table, usually displayed above or below the table depending on the browser.

3. **`<thead>`**: Groups header rows at the top of the table. Typically contains `<tr>` and `<th>` elements.

4. **`<tbody>`**: Groups the main rows of the table’s body, containing the actual data. This section often comes after `<thead>` and before `<tfoot>`.

5. **`<tfoot>`**: Groups rows at the bottom of the table, commonly used for summaries or totals. Placing `<tfoot>` before `<tbody>` in the HTML is recommended for enhanced compatibility with screen readers and certain older browsers.

6. **`<tr>`**: Defines a single row in the table, containing cells.

7. **`<th>`**: Creates a header cell within a row. Header cells are bold and centered by default and help organize the table’s structure.

8. **`<td>`**: Creates a standard data cell within a row. It supports the following attributes:
   - `colspan`: Specifies how many columns the cell should span.
   - `rowspan`: Specifies how many rows the cell should span.
   
   ```html
   <tr>
     <td colspan="2">Spanning Two Columns</td>
   </tr>
   ```
 
<!-- Edited till here -->

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

- `type` is an attribute of input, which defines the type of the input. Can be text, email, number, checkboxes, radio buttons, submit buttons

- The `name` attribute is the unique identifier for that input within the form. It allows the server to access each input's value when submitted.

- `Placeholder` is an attribute of input, which defines the placeholder text for the input.

- `required` is an attribute of input, which defines whether the input is required or not.

- The `<label>` tag is used to associate a label with a form element, making it easier for users to understand what information they should enter.

`fieldset` is used to defines a group of controls within a form.

```html
<form action="/subscribe" method="post">
  <fieldset>
    <legend>Subscribe to the Newsletter</legend>
    <input type="email" name="email" />
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

Accessibility refers to the design and development of websites, applications, and technology that are accessible to people with disabilities. Ensuring accessibility requires a combination of design and development techniques, such as using semantic HTML, providing alternative text for images, using ARIA (Accessible Rich Internet Applications) attributes, and testing with assistive technologies. I

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

<meta name="description" content="..." />: This tag specifies a description of
the website that may be used by search engines to display information about the
page.
```

**Next chapter: [CSS](../2_CSS/Readme.md)**
