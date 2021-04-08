import { client } from './listener.js';

/**
 * Initialize routes.
 * @param {object} app Express instance
 * @returns {void}
 */
export function init (app) {
  app.get ('/api/client', client);
}
