/**
 * Copyright (c) Joe McIntyre, 2016
 * license: MIT (https://github.com/fcc-joemcintyre/headerparser/LICENSE.txt)
 */
"use strict";
const express = require ("express");
const routes = require ("./routes");
const listener = require ("./listener");

/**
 * Start the server.
 */
function start (port) {
  console.log ("Starting Parsing server");

  // initialize and start server
  let app = express ();
  routes.init (app, listener);
  app.listen (port);

  console.log ("Parsing server listening on port " + port);
}

exports.start = start;
