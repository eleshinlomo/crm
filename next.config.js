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
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
 
};

module.exports = nextConfig;
