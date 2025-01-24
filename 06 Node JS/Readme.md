# Node JS

Node.js is an open source runtime environment that executes JavaScript code outside a web browser. It enables JavaScript to be used for server-side scripting and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. The default package manager for Node.js is `npm` (Node Package Manager). It is used to install Node.js programs from the npm registry, organizing the installation and management of third-party Node.js programs.

### The `Package.json` File

While the `node_modules` folder contains actual code, the `package.json` file holds all the metadata about a node.js project. Found in the project’s root, it must contain the project’s name and version; in addition, it can contain optional data, such as the project’s description, a license, scripts, and many more details. An example of a `package.json` file is shown below:

```json
{
  "name": "sample-express",
  "version": "1.0.0",
  "description": "Sample Express server",
  "main": "index.js",
  "scripts": {
    "run": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"

  },
  "author": "",
  "license": "MIT",
  "dependencies": {
    "express": "^4.17.1"
  }
}
```

## Creating a Node.js Project

- To create a new Node.js project, create a new directory and run;

```bash
npm init
```

- We can install the required dependencies using; 

```bash
npm install <package-name>
```

- We can install dev dependencies using;

```bash
npm install <package-name> --save-dev
```

- We can use the following command to inspect the local `package.json` file for any known vulnerabilities;

```bash
npm audit
```

> We can use the following command to fix any known vulnerabilities;

```bash
npm audit fix

npm audit fix --force
```

- We can use the following command to list all the installed packages in the project;

```bash
npm list
```

- We can use the following command to uninstall a package;

```bash
npm uninstall <package-name>
```

- We can use the following command to update a package;

```bash
npm update <package-name>
```

- We can use the following command to install a package globally;

```bash
npm install -g <package-name>
```

- We can use the following command to inspect the local package.json file, compare it to the local node_modules folder, and remove all unnecessary packages;

```bash
npm prune
```

- We can use the following command to install all the dependencies listed in the package.json file;

```bash
npm install
```
