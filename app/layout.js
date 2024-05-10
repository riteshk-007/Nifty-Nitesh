import { Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "./footer";
import SocialLinks from "./components/SocialLinks";
import { Analytics } from "@vercel/analytics/react";
import DemoBtn from "./components/DemoBtn/DemoBtn";
import Head from "next/head";
import { schema } from "./schema";

const inter = Quicksand({ subsets: ["latin"] });

export const metadata = {
  manifest: "/manifest.json",
  title: "Learn Share Market, Stock Trading, Demand & Supply Analysis in Delhi",
  description:
    "Nifty Nitesh offers comprehensive share market and stock trading courses covering technical analysis, fundamental analysis, demand and supply dynamics taught by industry experts. Gain in-depth knowledge and trading strategies. Find classes near you in Delhi, Rajapuri & Uttam Nagar.",
  keywords: [
    "share market class",
    "stock trading classes",
    "technical analysis course",
    "fundamental analysis training",
    "demand and supply analysis",
    "learn stock market",
    "share trading education",
    "financial markets training",
    "Delhi",
    "Rajapuri",
    "Uttam Nagar",
  ],
  openGraph: {
    title:
      "Learn Share Market, Stock Trading, Demand & Supply Analysis in Delhi",
    description:
      "Nifty Nitesh offers comprehensive share market and stock trading courses covering technical analysis, fundamental analysis, demand and supply dynamics taught by industry experts. Gain in-depth knowledge and trading strategies. Find classes near you in Delhi, Rajapuri & Uttam Nagar.",
    url: "https://niftynitesh.com",
    siteName: "Nifty Nitesh",
    images: [
      {
        url: "https://www.niftynitesh.com/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nifty Nitesh Share Market Classes",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Nifty Nitesh - Share Market, Demand & Supply Classes in Delhi",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
  metadataBase: "https://niftynitesh.com/",
};

export const viewport = {
  themeColor: "#000000",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Navbar />
          <SocialLinks />
          <DemoBtn />
          {children}
          <Analytics />
          <Footer />
        </ThemeProvider>
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        </Head>
      </body>
    </html>
  );
}
