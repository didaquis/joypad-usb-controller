# Joypad-USB-controller

### Requirements

Node.js 14 or higher. Linux OS.

### Scripts

#### `npm run dev`

Starts the application in development using `nodemon` and `ts-node` to do hot reloading.

#### `npm run build`

Builds the app at `build`, cleaning the folder first.

#### `npm run start`

Starts the app in production by first building the project with `npm run build`, and then executing the compiled JavaScript at `build/index.js`.

#### `npm run lint`

This run the linter.

#### `npm run purgue`

Remove the folders: "build", "coverage" and "node_modules".

#### `npm run test`

Execute the test with coverage report.

#### `npm run test:watch`

Execute test using watch option.
