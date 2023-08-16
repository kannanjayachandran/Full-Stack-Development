- npm local dependency : `npm i <package name>`

- global dependency :` npm i -g <package name>`

- package.json : Manifest file {The file that contains important info about project/package}
- There are 3 ways we can create the package.json file

- 1. Manually : Create package.json file manually in the root and then add properties.
- 2. `npm init` : step by step, can customize
- 3. `npm init -y` : Everything default

- Nodemon : monitors your project directory and automatically restarts your node application when it detects any changes.

- No need to restart the server whenever we make any changes. `npm i nodemon -D` {Not usually used in production}, it is a **dev-dependency** { Something we need during development but not in production}

- package.json usually include Testing packages, linting, formatting, etc. {All the dev-dependencies}

- Inside the package.Json file we have the dependency section. we also have the script section, its here where we usually set up commands.
- like an alias for a command.

- npx : A package runner tool that comes with npm 5.2+, basically we can run packages wihtout installing it globally. `npx <package name>` : runs the package without installing it globally.

After creating the package.json file, we can install all the dependencies by running `npm i` or `npm install`.
Then we can run the script by `npm run <script name>`
