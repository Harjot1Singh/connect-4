# connect-4

> A Connect Four Web App built with React.js, built on top of react-boilerplate (dev)

# Features

- Click button to start new game
- Play against human or (dumb) AI
- Color choice
- Board size choice

Development: 
 - Webpack hot-reloading
 - Webpack production bundling
 - React + React-Router
 - Styled Components

# Running

Note that npm 3+ and Node 4+ should be installed.

## Development/Running
``` bash
# Install dependencies
npm install

# Serve with webpack hot reload at localhost:3000
# Only run this is if you plan on developing
npm start

# Build for production with minification
npm run build

# Run in production mode
npm run start:prod -- --port 8080

```

# Usage

All source files are in `src`. The application entry point is `src/main.js`.

Run `npm start` to start Webpack with hot-reloading. 

To build with minification, `npm run build`.

To run a production server, with minified assets, `npm run start:prod`.


`docker-compose up` can also be used for systems with Docker installed, bringing it up on port `3000` by default.

## Host and Port

To change the host and/or port the app is accessible at, pass the `--host` and/or `--port` option to the command with --. E.g. to make the app visible at `my-local-hostname:5000`, run the following: `npm start -- --host my-local-hostname --port 5000`.