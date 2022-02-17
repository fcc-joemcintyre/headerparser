import { Express } from 'express';
import { client } from './listener.js';

/**
 * Initialize routes.
 * @param app Express instance
 */
export function init (app: Express) {
  app.get ('/api/client', client);
}
