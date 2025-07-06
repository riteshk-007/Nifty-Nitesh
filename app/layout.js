import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./footer";
import SocialLinks from "./components/SocialLinks";
import ReferralPopup from "./components/ReferralPopup";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  manifest: "/manifest.json",
  title: "Best Share Market & Stock Trading Classes in Delhi - Nifty Nitesh",
  description:
    "Join Nifty Nitesh for expert-led share market and stock trading classes in Delhi. Learn technical analysis, fundamental analysis, demand and supply trading, and smart money concepts. Available in Rajapuri, Uttam Nagar, and nearby areas.",
  keywords: [
    "share market",
    "stock market",
    "stock market classes",
    "share market classes",
    "share market class",
    "stock market class",
    "share market class near me",
    "stock market class near me",
    "share market class Rajapuri",
    "stock market class Rajapuri",
    "demand supply",
    "5 star setup",
    "institution footprint",
    "basic share market",
    "advance share market",
    "basic stock market",
    "advance stock market",
    "demand supply trading",
    "smart money concept",
    "trading strategies",
    "financial education",
    "Delhi stock market classes",
    "share market class in new delhi for sale",
    "share market class in new delhi deals",
    "share market class in new delhi discounts",
    "buy share market class in new delhi",
    "cheap share market class in new delhi",
    "share market class in new delhi offers",
    "best share market class in new delhi deals",
    "affordable share market class in new delhi",
    "share market class in new delhi promotions",
    "shop for share market class in new delhi",
    "share market class in new delhi coupons",
    "share market class in new delhi on sale",
    "discounted share market class in new delhi",
    "lowest prices for share market class in new delhi",
    "share market class in new delhi price drops",
    "save on share market class in new delhi",
    "share market class in new delhi clearance",
    "special offers on share market class in new delhi",
    "get share market class in new delhi for less",
    "top share market class in new delhi deals",
    "share market class in new delhi sale",
    "exclusive share market class in new delhi deals",
    "best prices for share market class in new delhi",
    "share market class in new delhi special deals",
  ],
  openGraph: {
    title: "Best Share Market & Stock Trading Classes in Delhi - Nifty Nitesh",
    description:
      "Join Nifty Nitesh for expert-led share market and stock trading classes in Delhi. Learn technical analysis, fundamental analysis, demand and supply trading, and smart money concepts. Available in Rajapuri, Uttam Nagar, and nearby areas.",
    url: "https://niftynitesh.com",
    siteName: "Nifty Nitesh",
    images: [
      {
        url: "https://www.niftynitesh.com/opengraph-image.png",
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
    title: "Nifty Nitesh - Share Market & Stock Trading Classes in Delhi",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
  metadataBase: "https://niftynitesh.com/",
  schema: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nifty Nitesh",
    url: "https://niftynitesh.com",
    logo: "https://www.niftynitesh.com/favicon.ico",
    contactPoint: {
      "@type": "ContactPoint",
      email: "niftynitesh000@gmail.com",
      contactType: "Customer Service",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
    sameAs: [
      "https://www.facebook.com/niftynitesh",
      "https://www.twitter.com/niftynitesh",
      "https://www.instagram.com/niftynitesh",
    ],
    description:
      "Nifty Nitesh offers comprehensive share market and stock trading courses in Delhi. Learn from industry experts about technical analysis, fundamental analysis, and demand and supply trading strategies.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rajapuri, Uttam Nagar",
      addressLocality: "New Delhi",
      postalCode: "110059",
      addressCountry: "IN",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "128",
    },
    offers: {
      "@type": "Online Classes",
      availability: "https://schema.org/InStock",
    },
    course: [
      {
        "@type": "Course",
        name: "Basic Share Market Course",
        description:
          "An introductory course to understand the basics of share market trading.",
        provider: {
          "@type": "Organization",
          name: "Nifty Nitesh",
          sameAs: "https://niftynitesh.com",
        },
      },
      {
        "@type": "Course",
        name: "Advanced Share Market Course",
        description:
          "An advanced course covering technical analysis, fundamental analysis, and trading strategies.",
        provider: {
          "@type": "Organization",
          name: "Nifty Nitesh",
          sameAs: "https://niftynitesh.com",
        },
      },
    ],
  },
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <SocialLinks />
        <ReferralPopup />

        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
