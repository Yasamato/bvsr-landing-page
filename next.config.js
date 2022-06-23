/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        outputStandalone: true,
        images: {
            layoutRaw: true
        }
    },
    reactStrictMode: true,
}

module.exports = nextConfig
