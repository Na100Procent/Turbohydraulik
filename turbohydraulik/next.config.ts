/** @type {import('next').NextConfig} */

const nextConfig = {
  trailingSlash: true,
  output: "export",
  basePath: "/Turbohydraulik",
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
