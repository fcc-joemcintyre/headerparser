# Request Header Parser Service

[![Build Status](https://travis-ci.org/fcc-joemcintyre/headerparser.svg?branch=master)](https://travis-ci.org/fcc-joemcintyre/headerparser)

This service returns a JSON object containing the information on the
system being used to access the service.

The API format is

    https://[hostname]/api/client</pre>

where [hostname] is the host name of the server hosting the service.

An instance of the service is available at https://headerparser-jm.herukoapp.com

The result is a JSON message with the format

    { "ip":"123.45.67.890", "language":"en-US" "os":"Windows NT 6.1; WOW64" }

If any elements are not available, null will be returned for those values.

## License
MIT
