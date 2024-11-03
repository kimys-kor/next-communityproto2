/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    config.cache = false;
    return config;
  },
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
  output: "standalone",
};

export default nextConfig;
