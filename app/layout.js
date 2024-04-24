import { Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "./footer";
import SocialLinks from "./components/SocialLinks";
import { Analytics } from "@vercel/analytics/react";
import DemoBtn from "./components/DemoBtn/DemoBtn";

const inter = Quicksand({ subsets: ["latin"] });

export const metadata = {
  manifest: "/manifest.json",
  title: "Nifty Nitesh - Share Market Classes Near You",
  description:
    "Learn share market, stock trading, fundamental analysis, and technical analysis with Nifty Nitesh's online and offline classes in Rajapuri, Uttam Nagar, and New Delhi.",
  keywords: [
    "share market class",
    "stock market class",
    "online share market class",
    "share market class near me",
    "share market class in rajapuri",
    "stock trading courses",
    "fundamental analysis",
    "technical analysis course",
    "learn stock market",
    "share trading",
    "financial markets",
  ],
  openGraph: {
    title: "Nifty Nitesh - Share Market Classes Near You",
    description:
      "Learn share market, stock trading, fundamental analysis, and technical analysis with Nifty Nitesh's online and offline classes in Rajapuri, Uttam Nagar, and New Delhi.",
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
    title: "Nifty Nitesh - Share Market Classes Near You",
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
      </body>
    </html>
  );
}
