const listener = require ('./listener');

/**
 * Initialize routes.
 * @param {Object} app Express instance
 * @returns {void}
 */
function init (app) {
  app.get ('/api/client', listener.client);
}

exports.init = init;
