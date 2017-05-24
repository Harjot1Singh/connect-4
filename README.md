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

## Development
``` bash
# Install dependencies
npm install

# Serve with webpack hot reload at localhost:8080
npm start

# Build for production with minification
npm run build
```

## Production
```
# Run in production mode
npm run start:prod

```

# Usage

All source files are in `src`. The application entry point is `src/main.js`.

Run `npm start` to start Webpack with hot-reloading. 

To build with minification, `npm run build`.

To run a production server, with minified assets, `npm run start:prod`.

## Host and Port

To change the host and/or port the app is accessible at, pass the `--host` and/or `--port` option to the command with --. E.g. to make the app visible at `my-local-hostname:5000`, run the following: `npm start -- --host my-local-hostname --port 5000`.