import { Request, Response } from 'express';

/**
 * Return the parsed header object for a request.
 * @param req HTTP request
 * @param res HTTP response
 */
export function client (req: Request, res: Response) {
  // get IP address from header (first entry), or IP stack objects
  let ip;
  const header = req.headers['x-forwarded-for'];
  if (header) {
    const list = (Array.isArray (header)) ? header[0] : header;
    ip = list.split (',')[0];
  } else {
    ip = req.socket.remoteAddress;
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
