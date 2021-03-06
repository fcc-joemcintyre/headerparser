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

## Package Scripts

The following scripts are defined in this package

Run unit tests

```
npm test
```

Start local server instance

```
npm start
```

Run ESLint against lib and test directories

```
npm run lint
```

Check types using Typescript compiler (type checking mode only). Note, this will
use the globally installed Typescript package. If not installed, it can be installed
using: *npm i -g typescript*

```
npm run typecheck
```

## License
MIT
