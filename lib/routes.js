import { client } from './listener.js';

/**
 * Initialize routes.
 * @param {Object} app Express instance
 * @returns {void}
 */
export function init (app) {
  app.get ('/api/client', client);
}
