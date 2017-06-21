export function getFullHostname(req) {
  return req.protocol + '://' + req.get('host');
}

export function getFullUrl(req) {
  return req.protocol + '://' + req.get('host') + req.originalUrl;
}

export function getReferer(req) {
  return req.get('referer') || getFullHostname(req);
}

