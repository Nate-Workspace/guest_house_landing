import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { WhatsAppFab } from "@/components/conversion";
import { Footer, Navbar, StickyBookBar } from "@/components/layout";
import { siteConfig } from "@/config/site";
import { getSiteUrl } from "@/lib/seo";
import { cn } from "@/lib/utils";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: siteConfig.seo.defaultTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.seo.description,
  openGraph: {
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.description,
    images: [{ url: siteConfig.seo.ogImage }],
    type: "website",
    siteName: siteConfig.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.description,
    images: [siteConfig.seo.ogImage],
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
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">
        <Navbar />
        <main
          className={cn(
            "flex-1",
            siteConfig.features.stickyBookBar && "pb-24 md:pb-0",
          )}
        >
          {children}
        </main>
        <Footer />
        <StickyBookBar />
        <WhatsAppFab />
      </body>
    </html>
  );
}
