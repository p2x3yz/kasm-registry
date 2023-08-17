/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Cooey Club',
    description: 'FIPs and not Hot Dog, I mean FIPs Compliant Images',
    icon: 'https://i.imgur.com/589XLop.png',
    listUrl: 'https://p2x3yz.github.io/kasm-registry/',
    contactUrl: 'https://github.com/p2x3yz/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
