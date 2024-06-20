// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "oaidalleapiprodscus.blob.core.windows.net",
      // Add other domains if needed
    ],
  },
  // env: {
  //   NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL
  // }
};

module.exports = nextConfig;
