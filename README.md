# Request Header Parser Service

This service returns a JSON object containing the information on the
system being used to access the service.

An instance of the service is available at https://headerparser-jm.onrender.com

To use the service, use the URL,

    https://headerparser-jm.onrender.com/api/client

The result is a JSON message with the format

    { "ip":"123.45.67.890", "language":"en-US" "os":"Windows NT 6.1; WOW64" }

If any elements are not available, null will be returned for those values.

## Installation

To use the application, first install the dependencies using npm.

```
npm ci
```

This will load the dependencies as defined in the *package-lock.json* file.

## Package Scripts

The following scripts are defined in this package

*Development Build and Run (use in separate terminals)*

```
npm run dev:build
```

```
npm run dev:start
```

*Production Build and Run*

Build

```
npm run build
```

```
npm run start
```

*Other commands*

Run ESLint against lib and test directories

```
npm run lint
```

Typecheck

```
npm run typecheck
```

Run unit tests

```
npm test
```

## License
MIT
