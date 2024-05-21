/** @type {import('next').NextConfig} */
const config = {
  images: {
    remotePatterns: [
      { hostname: "bvsr.space" },
      { hostname: "www.bvsr.space" },
    ],
  },
  reactStrictMode: true,
};
export default config;
