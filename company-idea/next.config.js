/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [

      {
        source: "/api/:path*",
        destination: "http://localhost:8080/api/:path*",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'steamcommunity-a.akamaihd.net',
        port: '',
        pathname: '/economy/image/**',
      },
      {
        protocol: 'http',
        hostname: 'cdn.steamcommunity.com',
        port: '',
        pathname: '/economy/image/**',
      },
    ],
  },
}
module.exports = {

}
module.exports = nextConfig;
