/* eslint-disable @typescript-eslint/no-var-requires */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
};

const withPWA = require('next-pwa')({
  disable: process.env.NODE_ENV === 'development',
  register: true,
  sw: 'service-worker.js',
  dest: 'public',
});

module.exports = withPWA(nextConfig);
