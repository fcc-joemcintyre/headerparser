# Request Header Parser Service

[![Build Status](https://travis-ci.org/fcc-joemcintyre/headerparser.svg?branch=master)](https://travis-ci.org/fcc-joemcintyre/headerparser)

This service returns a JSON object containing the information on the
system being used to access the service.

An instance of the service is available at https://headerparser-jm.herokuapp.com

To use the service, use the URL,

    https://headerparser-jm.herokuapp.com/api/client

The result is a JSON message with the format

    { "ip":"123.45.67.890", "language":"en-US" "os":"Windows NT 6.1; WOW64" }

If any elements are not available, null will be returned for those values.

## Installation

To use the application, first install the dependencies using npm.

```
npm ci
```

This will load the dependencies as defined in the *package-lock.json* file.

## Scripts

The following scripts are supported,

```
npm start
```

Run local instance of the server, serving requests at port 3000

```
npm test
```

Run test cases

```
npm run lint
```

Run lint against /src and /test directories

## License
MIT
