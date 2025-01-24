# Node JS - Introduction

Since we are not running code in the browser, we do not have access to most of the globals like `windows`, `document`, etc., inside node but we have some globals, which are very useful.

## Modules

Node has a simple module system. Files and modules are in one-to-one correspondence. As an example, a file `server.js` is a module and it can be loaded into another file using `require('server.js')`. 

Node JS uses the commonJS standard to define how modules and dependencies are handled. This includes:

- Using `require` to import modules.

```js
const http = require('http');
```

- Using `module.exports` and `exports` to export modules.

```js
module.exports = {
  name: 'John Doe'
}
```

## Modern JS

While working with modules we should use modern JS syntax like `import` and `export` instead of `require` and `module.exports`. There are two types of export: `default` and `named`. Default export require us to define new function names on import. For example:

```js
// export.js
const helloFoo =  function() {
  return 'Hello World';
};

export default helloFoo;

// import.js
import myFunction from './export.js';
myFunction();
```

For named exports, renaming is optional and is done with the `as` statement. For example:

```js
// export.js
export function myFunction() {
  console.log('Hello World');
}

// import.js
import { myFunction as myNewFunction } from './export.js';
myNewFunction();
```

<details>

<summary> Default export or Named export 🤔</summary>

- It’s considered a best practice to use named exports over default exports, because named exports define a clear and unique interface for the module’s functionality. When we use default exports, the user risks importing the same function under different names.

</details>