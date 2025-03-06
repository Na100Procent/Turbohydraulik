/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
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
        issuer: RegExp;
        use: { loader: string; options: { svgo: boolean } }[];
      }[];
    };
  }) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: false,
          },
        },
      ],
    });
    return config;
  },
};

module.exports = nextConfig;
