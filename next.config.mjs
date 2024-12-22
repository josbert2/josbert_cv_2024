/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    domains: ['https://www.jopcmelo.dev/'],
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.glsl/,
      type: 'asset/source',
    });
    return config;
  },
};

export default nextConfig;
