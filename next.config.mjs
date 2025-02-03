/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    domains: ['https://www.jopcmelo.dev/', 'framerusercontent.com'],
  },
  experimental: {
    reactCompiler: true,
  },
};

export default nextConfig;
