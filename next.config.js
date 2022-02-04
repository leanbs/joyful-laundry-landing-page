/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa');

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    register: true,
    sw: 'service-worker.js',
    dest: 'public',
  },
});
