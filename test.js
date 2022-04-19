import formatHeaders from "./index.js";
let str = `accept-ranges: bytes
access-control-allow-origin: *
access-control-expose-headers: ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Used, X-RateLimit-Resource, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, X-GitHub-SSO, X-GitHub-Request-Id, Deprecation, Sunset
cache-control: public, max-age=60, s-maxage=60
content-encoding: gzip`

console.log(formatHeaders(str));