// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     output: 'export',
//     distDir: 'dist',
//     trailingSlash: true,
//     images: {
//         unoptimized: true,
//     },
//     typescript: {
//         ignoreBuildErrors: false,
//     },
//     eslint: {
//         ignoreDuringBuilds: false,
//     },
//     reactStrictMode: true,
//     swcMinify: true,
// }

// module.exports = nextConfig 

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  distDir: 'dist',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
