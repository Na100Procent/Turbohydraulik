/** @type {import('next').NextConfig} */
module.exports = {
  output: "export",
  distDir: "dist",
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
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
  webpack(config: {
    module: {
      rules: {
        test: RegExp;
        use: { loader: string; options: { svgo: boolean } }[];
      }[];
    };
  }) {
    config.module.rules.push({
      test: /\.svg$/,
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
