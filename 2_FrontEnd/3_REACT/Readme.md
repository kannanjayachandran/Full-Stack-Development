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

The `useEffect` hook is used to perform side effects in a functional component. Side effects are things like data fetching, setting up subscriptions, and manually changing the DOM. The `useEffect` hook takes in two arguments, a function that performs the side effect and an array of dependencies. The function that performs the side effect is called the effect function. The effect function is called after the component is rendered to the DOM. The array of dependencies is used to tell react when to run the effect function. If the array of dependencies is empty, the effect function is called only once after the component is rendered to the DOM. If the array of dependencies is not empty, the effect function is called whenever one of the dependencies changes. we dont pass `async` function to `useEffect` directly, instead we create a function inside `useEffect` and call it.

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
import {useEffect} from 'react';

export default function App() {
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://api.example.com/data');
            const data = await response.json();
            console.log(data);
        };
        fetchData();
    }, []);
    return <h1>Hello World</h1>;
}
```

- We have something called `useLayoutEffect` which is similar to `useEffect` but it runs synchronously after the DOM has been updated. This is useful when we need to run some code without flickering the UI (due to fact that rendering is asynchronous; but the code may take some time to run).

```jsx
import {useLayoutEffect} from 'react';

export default function App() {
    useLayoutEffect(() => {
        console.log('Component rendered');
    }, []);
    return <h1>Hello World</h1>;
}
```
Avoid using `useLayoutEffect` because it cause issues as it runs synchronously after the DOM has been updated.

## Ref Hook

The `useRef` hook is used to create a reference to a DOM element or a value that persists between renders. The `useRef` hook returns an object with a `current` property that holds the value of the reference. The `useRef` hook is useful when we need to access a DOM element directly or when we need to store a value that persists between renders. It essentially helps us to avoid re-rendering the component when the value changes and avoid unnecessary re-renders.

```jsx
import {useState ,useRef} from 'react';

export default function App() {
    const timerId = useRef(null);
    const [seconds, setSeconds] = useState(0);

    const startTimer = () => {
        timerId.current = setInterval(() => {
            setSeconds(currSeconds => currSeconds + 1);
        }, 1000);

    const stopTimer = () => {
        clearInterval(timerId.current);
    };

    return (
        <>
            <button onClick={startTimer}>Start Timer</button>
            <button onClick={stopTimer}>Stop Timer</button>
            <p>Seconds: {seconds}</p>
        </>
    );
}
```

- While `Refs` are this specific functionality within react; we can really think of them as just a syntactic sugar around this idea of passing in an object to State and never calling the setter function. This primary purpose this is that the value is going to persist accross renders; but changing the value is never going to cause a re-render. One of the general usecse of `Refs` 

- We can use a `forwardRef` to pass a ref to a child component. This is useful when we need to access a child component directly.

```jsx
import {forwardRef, useRef, useImperativeHandle} from 'react';

const Child = forwardRef((props, ref) => {
    const inputRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        }
    }));

    return <input ref={inputRef} />;
});

export default function App() {
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
    };

    return (
        <>
            <Child ref={inputRef} />
            <button onClick={handleClick}>Focus Input</button>
        </>
    );
}
```

- We can use `useImperativeHandle` to customize the instance value that is exposed to the parent component when using `forwardRef`. This is useful when we want to expose only a subset of the child component's instance value to the parent component.

## Context

Context provides a way to pass data through the component tree without having to pass props down manually at every level. Context is designed to share data that can be considered "global" for a tree of react components. Context is useful when we have data that needs to be accessed by many components at different levels of the component tree. Context is created using the `createContext` function. The `createContext` function returns an object with a `Provider` and a `Consumer` property. The `Provider` component is used to provide the data to the component tree. The `Consumer` component is used to consume the data from the component tree. We can use the `useContext` hook to consume the data from the context.

```jsx
import {createContext, useContext} from 'react';

const ThemeContext = createContext('light');

export default function App() {
    return (
        <ThemeContext.Provider value="dark">
            <Toolbar />
        </ThemeContext.Provider>
    );
}

function Toolbar() {
    const theme = useContext(ThemeContext);
    return <div>Theme: {theme}</div>;
}
```

- `useContext` can be used to manage the theme of a site based on user or to manage the access to the data; based on signed in user.

## Improving performance 

The way we can improve the performance of our react application is minimizing the number of renders and by making sure that the renders are as fast as possible. We can use the following techniques to improve the performance of our react application.

### Memoization

Memoization is a technique used to optimize the performance of a function by caching the result of the function based on its arguments. Memoization is useful when we have a function that takes a long time to compute and we want to avoid recomputing the result if the arguments are the same. We can use the `useMemo` hook to memoize the result of a function. The `useMemo` hook takes in a function and an array of dependencies. The function is called only when one of the dependencies changes. The result of the function is cached and returned when the dependencies do not change.

```jsx
import {useMemo} from 'react';

export default function App() {
    const result = useMemo(() => {
        return veryExpensiveComputation();
    }, [dependency1, dependency2]);

    return <div>{result}</div>;
}
```

We can also use `React.memo` to memoize the result of a functional component. `React.memo` is a higher order component that memoizes the result of a functional component based on its props. The result of the functional component is cached and returned when the props do not change.

```jsx
import {memo} from 'react';

const MyComponent = memo(function MyComponent(props) {
    return <div>{props.value}</div>;
});
```

The `useMemo` hook memoises the value of a function based on its dependencies, whhile `React.memo` memoises the result of a functional component based on its props. We can also use something called `useCallback` to memoise the function itself.

### Lazy Loading

Lazy loading is a technique used to defer the loading of a component until it is needed. Lazy loading is useful when we have a component that is not needed immediately and we want to improve the performance of the application by loading the component only when it is needed. We can use the `React.lazy` function to lazy load a component. The `React.lazy` function takes in a function that imports the component and returns a promise. The component is loaded only when it is needed.

```jsx
import {lazy, Suspense} from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

export default function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
        </Suspense>
    );
}
```
