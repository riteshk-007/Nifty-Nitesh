import { Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "./footer";
import SocialLinks from "./components/SocialLinks";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import DemoBtn from "./components/DemoBtn/DemoBtn";

const inter = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "Nifty Nitesh - Share Market, Finance, and Investing Classes",
  description:
    "Providing online and offline classes on share market, finance, and investing",
  keywords: [
    "Share Market",
    "Finance",
    "Investing",
    "Online Classes",
    "Offline Classes",
    "Nifty Nitesh",
    "stock market",
  ],
  twitter: {
    card: "summary_large_image",
    image: "/opengraph-image.png",
  },
  facebook: {
    card: "summary_large_image",
    image: "/opengraph-image.png",
  },
  metadataBase: "https://niftynitesh.com/",
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
