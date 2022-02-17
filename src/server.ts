import express from 'express';
import http from 'http';
import { homepage } from './homepage.js';
import { init } from './routes.js';

let server: http.Server;

/**
 * Start the server.
 * @param port HTTP port to listen to
 */
export function start (port: number) {
  console.log ('Starting Parsing server');

  // initialize and start server
  const app = express ();
  init (app);
  app.get ('*', (req, res) => res.status (200).send (homepage));

  server = http.createServer (app);
  server.listen (port, () => {
    console.log (`Parsing server listening on port ${port}`);
  });
}

/**
 * Stop the server
 */
export async function stop () {
  if (server) {
    await server.close ();
  }
}
