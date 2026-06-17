import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://darak.com"),
  title: {
    default: "DARAK — Private Food Systems",
    template: "%s — DARAK",
  },
  description:
    "DARAK installs complete private food systems wherever you live, work or perform. French culinary excellence. Operational precision. Tailored anywhere.",
  keywords: [
    "private food systems",
    "private chef",
    "luxury culinary",
    "UAE",
    "performance nutrition",
    "DARAK",
  ],
  openGraph: {
    title: "DARAK — Private Food Systems",
    description:
      "French Excellence. Local Intelligence. Global Taste. We build kitchens that perform.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-warm-white text-charcoal">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
