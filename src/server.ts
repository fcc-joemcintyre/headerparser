import express from 'express';
import http from 'http';
import { homepage } from './homepage.js';
import { init } from './routes.js';

let server: http.Server;

/**
 * Start the server.
 * @param port HTTP port to listen to
 */
export async function start (port: number) {
  console.log ('Starting Parsing server');

  // initialize and start server
  const app = express ();
  init (app);
  app.get ('*', (req, res) => res.status (200).send (homepage));

  server = http.createServer (app);
  await listenAsync (server, port);
  console.log (`Parsing server listening on port ${port}`);
}

/**
 * Stop the server
 */
export async function stop () {
  if (server) {
    await server.close ();
  }
}

/**
 * Async / await support for http.Server.listen
 * @param s http.Server instance
 * @param port port number
 * @returns Promise to await server.listen on
 */
function listenAsync (s: http.Server, port: number) {
  return new Promise ((resolve) => {
    s.listen (port, () => { resolve (true); });
  });
}
