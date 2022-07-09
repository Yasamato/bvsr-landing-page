/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                // Apply these headers to all routes in your application.
                source: '/:path*',
                headers: [
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on'
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block'
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN'
                    },
                    {
                        key: 'Content-Security-Policy',
                        value: 'default-src \'self\';'
                    }
                ]
            }
        ]
    },
    experimental: {
        outputStandalone: true
    },
    reactStrictMode: true
}

module.exports = nextConfig
