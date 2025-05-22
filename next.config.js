/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        pathname: '/uxpilot-auth.appspot.com/**',
      },
    ],
  },
};
module.exports = nextConfig;