/**
 * Copyright (c) Joe McIntyre, 2016
 * license: MIT (https://github.com/fcc-joemcintyre/headerparser/LICENSE.txt)
 */
"use strict";

/**
 * Return homepage with service usage instructions.
 */
function homepage (req, res) {
  let html =
    `<h1>Request Header Parser Service</h1>
     <p>This service returns a JSON object containing the information on the
     system being used to access the service.<p>
     <p>The API format is</p>
     <pre>  https://[hostname]/api/client</pre>
     <p>where [hostname] is the host name of the server hosting the service.
     <p>The result is a JSON message with the format</p>
     <pre>  { "ip":"123.45.67.890", "language":"en-US" "os":"Windows NT 6.1; WOW64" }</pre>`;
  res.status (200).send (html);
}

/**
 * Return the parsed header object for a request.
 */
function client (req, res) {
  // get IP address from header (first entry), or IP stack objects
  let ip = req.headers["x-forwarded-for"];
  if (ip !== undefined) {
    let comma = ip.indexOf (",");
    if (comma !== -1) {
      ip = ip.substring (0, comma);
    }
  } else {
    ip = req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
  }

  let language = req.headers["accept-language"];
  if (language !== undefined) {
    language = language.substring (0, language.indexOf (","));
  }

  let ua = req.headers["user-agent"];
  if (ua !== undefined) {
    ua = ua.substring (ua.indexOf ("(") + 1);
    ua = ua.substring (0, ua.indexOf (")"));
  }

  let result = {
    ip: null,
    language: language,
    os: ua
  };
  res.status (200).json (result);
}

exports.homepage = homepage;
exports.client = client;
