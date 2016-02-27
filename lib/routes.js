/**
 * Copyright (c) Joe McIntyre, 2016
 * license: MIT (https://github.com/fcc-joemcintyre/headerparser/LICENSE.txt)
 */
"use strict";

/**
 * Initialize routes.
 */
function init (app, listener) {
  app.get ("/", listener.homepage);
  app.get ("/api/client", listener.client);
  app.use (listener.homepage);
}

exports.init = init;
