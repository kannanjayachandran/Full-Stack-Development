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

React offers class components as well, but modern react applications are built using functional components. We will mostly be using functional components.

## Props

Props are used to pass data from parent to child components. They are read-only and cannot be modified by the child component. Props are passed to the component as an object. Think of them as arguments to a function.

```jsx
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
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

If we want to create a wrapper component that renders the children, we can use the `children` prop.

```jsx
function Wrapper(props) {
    return <div>{props.children}</div>;
}

function App () {
    return (
        <Wrapper>
            <Welcome name="John Doe">
            <p> Welcome to React </p>
        </Wrapper>
    );
}
```

we can do something called composition of props. This is where we pass props from a parent component to a child component.

```jsx
function Comment({userName, time, children}) {
    return (
        <section>
        <p>{userName} commented at {time}</p>
        {children}
        </section>
    )
}

function App () {
    return (
        <Comment Username="Tennyson" time={(new Date()).toString()}>
        <h1> Hello World </h1>
        <p> A paragraph </p>
        </Comment>
    );
}
```

## State

State is used to store data that changes over time. State is mutable and can be changed by the component. We use the `useState` hook to add state to a functional component. In react a `hook` is a function that lets you use state and other react features in a functional component. useState returns an array with two elements. The first element is the current state and the second element is a function that lets you update the state. We cannot call the `hook` statements conditionally, because internally react uses the order of hooks to determine the state of the component.

```jsx
import {useState} from 'react';

export default function App() {
    const [count, setCounting] = useState(0);

    return (
        <>
            <button onClick={() => setCounting(count+1)}>Increment</button>
            <p>Count: {count}</p>
        </>
    );
}
```

Additional to values, we can also pass in function to useState. This function will be called only once, when the component is first rendered. So, if we have something computationally expensive, we can pass in a function to calculate the initial value.

```jsx
const [count, setCounting] = useState(() => {
    const initialCount = 0;
    return initialCount;
});

// or

const [count, setCounting] = useState(veryExpensiveComputation);

// Where veryExpensiveComputation is a function that returns the initial value
```

```jsx
// useReducer
const [state, dispatch] = useReducer(reducer,{count: 0});



// reducer function; which is a function that takes in the current state and an action and returns the new state.
function reducer(state, action) {
    switch(action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            throw new Error('Unknown action type');
    }
}

// dispatch function; which is a function that takes in an action and calls the reducer function with the current state and the action.
dispatch({type: 'increment'});
```

- Most of time we use `useState` hook to manage the state of the component. But in some cases, we need to manage the state of the component in a more complex way. In those cases, we can use the `useReducer` hook. The `useReducer` hook is similar to the `useState` hook, but it uses a reducer function to manage the state of the component. The `useReducer` hook takes in two arguments, the reducer function and the initial state of the component. The reducer function is a function that takes in the current state and an action and returns the new state. The `useReducer` hook returns an array with two elements, the current state and a dispatch function. The dispatch function is a function that takes in an action and calls the reducer function with the current state and the action.

## Effect Hook

The `useEffect` hook is used to perform side effects in a functional component. Side effects are things like data fetching, setting up subscriptions, and manually changing the DOM. The `useEffect` hook takes in two arguments, a function that performs the side effect and an array of dependencies. The function that performs the side effect is called the effect function. The effect function is called after the component is rendered to the DOM. The array of dependencies is used to tell react when to run the effect function. If the array of dependencies is empty, the effect function is called only once after the component is rendered to the DOM. If the array of dependencies is not empty, the effect function is called whenever one of the dependencies changes.

```jsx
import {useEffect} from 'react';

export default function App() {
    useEffect(() => {
        console.log('Component rendered');
    }, []);
    return <h1>Hello World</h1>;
}
```

```jsx



