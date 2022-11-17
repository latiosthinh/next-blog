/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['firebasestorage.googleapis.com', 'toquoc.mediacdn.vn', 'kenh14cdn.com', 'genk.mediacdn.vn'],
  },
}

module.exports = nextConfig
