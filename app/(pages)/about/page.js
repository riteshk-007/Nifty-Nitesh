import AboutClient from "./AboutClient";

export const metadata = {
  title: "About Nifty Nitesh - Leading Online Trading Education Platform",
  description:
    "Learn about Nifty Nitesh, a premier online trading education platform offering comprehensive courses on technical analysis, fundamental analysis, and trading strategies. Transform your trading journey with expert guidance.",
  keywords: [
    "online trading education",
    "stock market courses online",
    "trading institute",
    "technical analysis training",
    "fundamental analysis courses",
    "trading mentorship",
    "stock market education platform",
    "professional trading courses",
    "nifty nitesh about",
    "trading expert",
  ],
  openGraph: {
    title: "About Nifty Nitesh - Leading Online Trading Education Platform",
    description:
      "Learn about Nifty Nitesh, a premier online trading education platform offering comprehensive courses on technical analysis, fundamental analysis, and trading strategies.",
    images: [
      {
        url: "/about.jpeg",
        width: 1200,
        height: 630,
        alt: "About Nifty Nitesh",
      },
    ],
  },
};

const AboutPage = () => {
  return <AboutClient />;
};

export default AboutPage;
