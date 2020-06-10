/**
 * Return the parsed header object for a request.
 * @param {Object} req HTTP request
 * @param {Object} res HTTP response
 * @returns {void}
 */
export function client (req, res) {
  // get IP address from header (first entry), or IP stack objects
  let ip = req.headers['x-forwarded-for'];
  if (ip) {
    // if list, use first entry
    const comma = ip.indexOf (',');
    if (comma !== -1) {
      ip = ip.substring (0, comma);
    }
  } else {
    ip = req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress || null;
  }

  // get first language preference
  let language = req.headers['accept-language'] || null;
  if (language) {
    const comma = language.indexOf (',');
    const semicolon = language.indexOf (';');
    let index = language.length;
    if (comma !== -1) {
      if (semicolon === -1) {
        index = comma;
      } else {
        index = (comma < semicolon) ? comma : semicolon;
      }
    } else {
      if (semicolon !== -1) {
        index = semicolon;
      }
    }
    language = language.slice (0, index);
  }

  // get os portion of user agent information
  const ua = req.headers['user-agent'];
  const os = ua ? ua.substring (ua.indexOf ('(') + 1, ua.indexOf (')')) : 'Unknown';

  const result = { ip, language, os };
  res.status (200).json (result);
}
