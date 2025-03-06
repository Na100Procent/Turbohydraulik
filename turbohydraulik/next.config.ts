/** @type {import('next').NextConfig} */

const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "user-attachments.githubusercontent.com",
      },
    ],
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "/Turbohydraulik/" : "",
  basePath: process.env.NODE_ENV === "production" ? "/Turbohydraulik" : "",
  webpack(config: {
    module: {
      rules: {
        test: RegExp;
        use: string[];
      }[];
    };
  }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;
