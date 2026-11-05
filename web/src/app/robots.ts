import type { MetadataRoute } from "next";

/** /robots.txt: public pages open to search engines, private ones (admin, account, payment, tickets) kept out; points to the sitemap. */
export default function robots(): MetadataRoute.Robots {
  const base = (process.env.APP_URL || "https://jaishreeshyamtravels.com").replace(/\/+$/, "");
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/admin", "/api/", "/my-bookings", "/booking/", "/pay/", "/invoice/", "/track/"] },
    sitemap: `${base}/sitemap.xml`,
  };
}
