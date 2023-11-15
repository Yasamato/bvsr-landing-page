/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        domains: ['bvsr.space', 'www.bvsr.space'],
    },
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: '/liftoff',
                destination: 'https://bvsrliftoff.eventbrite.co.uk/',
                permanent: false,
            },
        ]
    }
}

module.exports = nextConfig
