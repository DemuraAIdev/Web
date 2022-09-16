/* eslint-disable prettier/prettier */
import { NextResponse } from 'next/server'
export function middleware(req, ev) {
  const response = NextResponse.next()
  const csp = `
    default-src 'self';
    script-src 'self' *.twitter.com 'unsafe-eval' 'unsafe-inline' data: giscus.app umami.vahryiskandar.my.id;
    child-src *.youtube.com *.google.com *.twitter.com https://cdpn.io https://codepen.io https://dbdiagram.io;
    style-src 'self' *.googleapis.com 'unsafe-inline' 'unsafe-eval';
    img-src 'self' data: https: blob: https://www.googletagmanager.com;
    worker-src 'self' *.youtube.com *.google.com *.twitter.com;
    connect-src *;
    object-src 'none';
    frame-ancestors 'none';
    base-uri 'none';
    frame-src giscus.app;
  `
  response.headers.set('Content-Security-Policy', csp.replace(/\n/g, ''))

  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Access-Control-Allow-Origin', 'https://umami.vahryiskandar.my.id')
  response.headers.set('X-DNS-Prefetch-Control', 'on')
  response.headers.set('Permissions-Policy', 'geolocation=(self), microphone=()')

  return response
}
