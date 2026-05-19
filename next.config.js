const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        formats: ['image/webp', 'image/avif'],
    },
}

module.exports = withBundleAnalyzer(nextConfig)
