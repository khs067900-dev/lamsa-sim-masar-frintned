import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://sc-static.net https://analytics.tiktok.com",
              "connect-src 'self' https://tr.snapchat.com https://sc-static.net https://analytics.tiktok.com",
              "img-src 'self' data: blob: https://tr.snapchat.com https:",
              "style-src 'self' 'unsafe-inline'",
              "font-src 'self' data: https://fonts.gstatic.com",
              "frame-src 'none'",
            ].join("; "),
          },
        ],
      },
    ];
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/sitemap.xml", destination: "/sitemap.xml" },
        { source: "/robots.txt", destination: "/robots.txt" },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
  images: {
    qualities: [75, 80, 85, 90, 100],
    remotePatterns: [
      { hostname: "ibb.co" },
      { hostname: "i.ibb.co" },
      { protocol: "http", hostname: "localhost", port: "5000" },
      { protocol: "http", hostname: "localhost", port: "3000" },
      { protocol: "https", hostname: "**.vercel.app" },
      { protocol: "https", hostname: "**.railway.app" },
      { protocol: "https", hostname: "**.render.com" },
      { protocol: "https", hostname: "**.onrender.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "cloudinary.com" },
    ],
  },
};

export default nextConfig;
