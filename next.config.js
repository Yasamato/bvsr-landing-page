const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n,
    async headers() {
        let ContentSecurityPolicy = `
            default-src 'self';
            script-src 'self' 'unsafe-inline';
            style-src 'self' 'unsafe-inline';
            img-src 'self' data:;
            connect-src 'self' ws:;
        `
        if (process.env.NODE_ENV !== 'production') {
            console.log("This server is running in DEV MODE!!!")
            ContentSecurityPolicy = `
                default-src 'self';
                script-src 'self' 'unsafe-inline' 'unsafe-eval';
                style-src 'self' 'unsafe-inline';
                img-src 'self' data:;
                connect-src 'self' ws:;
            `
        }

        return [
            {
                // Apply these headers to all routes in your application.
                source: '/:path*',
                headers: [
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on'
                    }, {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block'
                    }, {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN'
                    }, {
                        key: 'Referrer-Policy',
                        value: 'no-referrer-when-downgrade'
                    }, {
                        key: 'Permissions-Policy',
                        value: ''
                    }, {
                        key: 'Content-Security-Policy',
                        value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
                    }
                ]
            }
        ]
    },
    output: 'standalone',
    reactStrictMode: true
}

module.exports = nextConfig
