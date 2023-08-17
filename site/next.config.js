/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Cooey Club',
    description: 'FIPs and not Hot Dog, I mean FIPs Compliant Images',
    icon: '/img/logo.png',
    listUrl: 'https://p2x3yz.github.io/kasm-registry/',
    contactUrl: 'https://github.com/p2x3yz/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
