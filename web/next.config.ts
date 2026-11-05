import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lets a preview/dev server build into a separate folder (e.g. NEXT_DIST_DIR=.next-preview) without touching production's .next
  distDir: process.env.NEXT_DIST_DIR || ".next",
  // Serve /public images as-is. The vercel.json catch-all rewrite sends /_next/image to the app, where it 404s on Vercel.
  images: { unoptimized: true },
  // Admin forms upload photos up to 4 MB (lib/uploads.ts); server actions refuse bodies over 1 MB by default and the
  // page crashes. 4.5 MB is Vercel's request limit.
  experimental: { serverActions: { bodySizeLimit: "4.5mb" } },
  // Security headers on every response. Geolocation stays allowed for "Near me"; the site is never framed by others.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(self)" },
        ],
      },
    ];
  },
};

export default nextConfig;
