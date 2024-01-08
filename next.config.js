/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        pathname: "/*/**",
      },
      {
        protocol: "https",
        hostname: "i.dummyjson.com",
        pathname: "/*/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/*",
      },
    ],
  },
};

module.exports = nextConfig;
