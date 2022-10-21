/* eslint-disable @typescript-eslint/no-var-requires */
const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa')({
  disable: process.env.NODE_ENV === 'development',
  register: true,
  runtimeCaching,
});

const nextConfig = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
});

module.exports = nextConfig;
