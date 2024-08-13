/** @type {import('next').NextConfig} */
const nextConfig = {
  env: { API: process.env.API },
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "quickchart.io",
        port: "",
        pathname: "/qr",
      },
    ],
  },
};

export default nextConfig;
