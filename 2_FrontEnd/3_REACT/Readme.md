# React

React is a JavaScript library for building user interfaces. User interfaces built using react consists of `Components`. A component is a piece of the UI that has its own logic and appearance.

React was created to solve the problem of building large applications with data that changes over time. Re-rendering the entire dom whenever there is a small change is expensive. React solves this problem by only re-rendering the components that have changed. Some of the key features of react are:

- Declarative (We write what we want and react takes care of how to do it)
- Component Based (We can build encapsulated components that manage their own state)
- Unidirectional Data Flow (Data flows in one direction, from parent to child ~ Usually)
- Uses JSX and Virtual DOM (We can write HTML like syntax in our JavaScript code (JavaScript XML))

Let's see what happens when we write a react component.

```jsx
const element = (
    <p id="hello">
    Hello <em>World</em>
    </p>
);
```
This compiles down to the following JavaScript code.

```js
const element = React.createElement(
    'p',
    {id: 'hello'},
    'Hello ',
    React.createElement(
        'em',
        null,
        'World'
    )
);
```

The `React.createElement` function takes in the tag name, attributes and children of the element and returns a JavaScript object that represents the element. This object is called a `React Element`. The `React.createElement` function is used to create all the elements in the react application.

```js
React.createElement(TagName, attributes, children);
```

Once we create the react object, we use the `ReactDOM.render` function to render the react element to the DOM.

```js
ReactDOM.render(element, document.getElementById('root'));
```

```js
ReactDom.render(element, DomContainer);
```

Although we almost always use `JSX` to create elements, it is important to understand what happens under the hood.

## Functional Components

Functional components are the simplest way to create a component in react. They are just JavaScript functions that return a react element. They are also called `stateless components` because they do not have any state of their own.

```jsx
function Welcome(props) {
    return <h1>Hello, {prop.name}</h1>;
}

function App () {
    return (
        <div>
            <Welcome name="John Doe">
            <p> Welcome to React </p>
        </div>
    );
}
```

> Note that we use Pascal case for naming our components. This is because react treats components starting with lowercase letters as DOM tags or standard html tags and names starting with uppercase letters as custom components.

We can only return one element from a functional component. If we want to return multiple elements, we can either wrap them in a div or use react fragments.

```jsx
function App () {
    return (
        // This syntax does not support adding props 
        //    <>
        //     <Welcome name="John Doe">
        //     <p> Welcome to React </p>
        // </>

        
        // or

        // React.Fragment support adding props
        <React.Fragment>
            <Welcome name="John Doe">
            <p> Welcome to React </p>
        </React.Fragment>
    );
}
```