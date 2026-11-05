import type { Metadata, Viewport } from "next";
import { Noto_Sans_Devanagari, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PublicChrome from "@/components/PublicChrome";

const brand = process.env.NEXT_PUBLIC_BRAND_NAME || "Jai Shree Shyam Tour & Travels";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });
const deva = Noto_Sans_Devanagari({ subsets: ["devanagari"], weight: ["500", "700"], variable: "--font-deva", display: "swap", preload: false });

const site = (process.env.APP_URL || "https://jaishreeshyamtravels.com").replace(/\/+$/, "");
const description =
  "Jai Shree Shyam Tour & Travels, Khatima (Jai Shri Shyam Travels): daily shared taxi Khatima to Delhi and Haridwar, one-way and round-trip cabs, and trips to Nainital, Mussoorie, Rishikesh and Auli. Service day and night.";

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: { default: `${brand} Khatima – Taxi to Delhi & Haridwar, Cab Hire`, template: `%s | ${brand}` },
  description,
  applicationName: brand,
  // Link previews on WhatsApp, Facebook and X.
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: brand,
    title: `${brand} Khatima – Taxi to Delhi & Haridwar`,
    description,
    images: [{ url: "/images/hero-highway.webp", width: 1280, height: 720, alt: brand }],
  },
  twitter: { card: "summary_large_image" },
  // Google Search Console ownership (with public/google9fd1bdae2742977e.html). Keep both, even after verifying.
  verification: { google: "J7yQo2s54hjia192u8F0bo-UJahRa9Ri90zNC3Foj5I" },
};

export const viewport: Viewport = { themeColor: "#0f2a75" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${deva.variable}`}>
      <body className="flex min-h-screen flex-col">
        <PublicChrome>
          <Header />
        </PublicChrome>
        <main className="flex-1">{children}</main>
        <PublicChrome>
          <Footer />
        </PublicChrome>
      </body>
    </html>
  );
}
