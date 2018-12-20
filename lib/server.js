const express = require ('express');
const http = require ('http');
const homepage = require ('./homepage').homepage;
const routes = require ('./routes');

let server;

/**
 * Start the server.
 * @param {number} port HTTP port to listen to
 * @returns {void}
 */
function start (port) {
  console.log ('Starting Parsing server');

  // initialize and start server
  const app = express ();
  routes.init (app);
  app.get ('*', (req, res) => res.status (200).send (homepage));

  server = http.createServer (app);
  server.listen (port, () => {
    console.log (`Parsing server listening on port ${port}`);
  });
}

async function stop () {
  if (server) {
    await server.close ();
  }
}

exports.start = start;
exports.stop = stop;
