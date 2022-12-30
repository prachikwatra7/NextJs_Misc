/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: "/about",
        destination: "/",
        permanent: true, // for true status is 308: premannent redirect, for false status is 307: temporary r edirect
      },
    ];
  },
};

module.exports = nextConfig;
