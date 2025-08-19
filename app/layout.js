import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./footer";
import SocialLinks from "./components/SocialLinks";
import ReferralPopup from "./components/ReferralPopup";
import { Analytics } from "@vercel/analytics/react";
import FloatingWhatsAppButton from "./components/floating-whatsapp-button";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title:
    "Best Share Market & Stock Trading Classes in Delhi India 2025 - Nifty Nitesh | Online Offline Course",
  description:
    "Join Nifty Nitesh for expert-led share market and stock trading classes in Delhi, Mumbai, Pune, Dubai, USA. Learn technical analysis, fundamental analysis, demand supply trading, smart money concepts. Available online & offline in Rajapuri, Uttam Nagar, Dwarka. Low price guaranteed! Batch starting soon.",
  // Enhanced keywords array with comprehensive options trading terms
  keywords: [
    // Core Keywords
    "share market classes",
    "stock market classes",
    "share market course",
    "stock market course",
    "trading classes",
    "stock market training",
    "share market training",
    "nifty trading course",
    "online trading classes",
    "offline trading classes",

    // Options Trading Core Keywords
    "options trading classes",
    "options trading course",
    "options trading training",
    "options trading education",
    "options trading academy",
    "options trading institute",
    "options trading coaching",
    "options trading mentorship",
    "options trading masterclass",
    "options trading workshop",
    "options trading bootcamp",
    "options trading certification",
    "options trading diploma",
    "options trading program",
    "options trading tutorial",
    "options trading guide",
    "options trading strategy",
    "options trading techniques",
    "options trading methods",
    "options trading system",

    // Location-Based Options Trading Keywords
    "options trading classes in Delhi",
    "options trading course in Delhi",
    "options trading training in Delhi",
    "options trading classes in Mumbai",
    "options trading course in Mumbai",
    "options trading classes in Pune",
    "options trading course in Pune",
    "options trading classes in Bangalore",
    "options trading classes in Hyderabad",
    "options trading classes in Chennai",
    "options trading classes in Ahmedabad",
    "options trading classes in Kolkata",
    "options trading classes in Rajapuri",
    "options trading classes in Uttam Nagar",
    "options trading classes in Dwarka",
    "options trading classes near me",
    "best options trading classes in India",
    "top options trading course in India",
    "options trading institute in Delhi",
    "options trading academy in Mumbai",

    // Options Trading Strategies Keywords
    "call option trading",
    "put option trading",
    "covered call strategy",
    "protective put strategy",
    "bull call spread",
    "bear put spread",
    "iron condor strategy",
    "butterfly spread",
    "straddle strategy",
    "strangle strategy",
    "collar strategy",
    "calendar spread",
    "diagonal spread",
    "ratio spread",
    "synthetic options",
    "long call strategy",
    "long put strategy",
    "short call strategy",
    "short put strategy",
    "naked options trading",
    "covered options trading",
    "cash secured put",
    "married put strategy",
    "conversion strategy",
    "reversal strategy",
    "box spread strategy",
    "condor spread",
    "albatross spread",
    "jade lizard strategy",
    "big lizard strategy",
    "iron butterfly",
    "broken wing butterfly",
    "unbalanced butterfly",
    "christmas tree spread",
    "seagull strategy",
    "risk reversal strategy",

    // Options Greeks Keywords
    "options delta trading",
    "options gamma trading",
    "options theta trading",
    "options vega trading",
    "options rho trading",
    "delta neutral trading",
    "gamma scalping",
    "theta decay strategy",
    "vega hedging",
    "implied volatility trading",
    "historical volatility",
    "volatility smile",
    "volatility skew",
    "time decay trading",
    "options sensitivity",
    "portfolio delta",
    "portfolio gamma",
    "portfolio theta",
    "portfolio vega",
    "options risk management",

    // Options Pricing & Valuation Keywords
    "black scholes model",
    "binomial model options",
    "monte carlo options pricing",
    "options fair value",
    "intrinsic value options",
    "time value options",
    "options premium calculation",
    "strike price selection",
    "expiry date selection",
    "options moneyness",
    "in the money options",
    "out of money options",
    "at the money options",
    "deep in money options",
    "deep out money options",
    "options exercise",
    "options assignment",
    "early exercise",
    "american options",
    "european options",
    "options settlement",
    "cash settlement options",
    "physical settlement options",

    // Advanced Options Trading Keywords
    "algorithmic options trading",
    "systematic options trading",
    "quantitative options trading",
    "options market making",
    "options arbitrage",
    "statistical arbitrage options",
    "volatility arbitrage",
    "calendar arbitrage",
    "conversion arbitrage",
    "pin risk options",
    "assignment risk",
    "early assignment",
    "dividend risk options",
    "earnings trading options",
    "event driven options",
    "news trading options",
    "swing trading options",
    "day trading options",
    "scalping options",
    "position trading options",
    "options portfolio management",
    "options risk control",
    "options position sizing",
    "options money management",

    // Nifty & Index Options Keywords
    "nifty options trading",
    "nifty 50 options",
    "bank nifty options",
    "nifty weekly options",
    "nifty monthly options",
    "nifty call options",
    "nifty put options",
    "sensex options trading",
    "index options trading",
    "nifty options strategy",
    "bank nifty strategy",
    "nifty options chain",
    "bank nifty options chain",
    "nifty options premium",
    "bank nifty premium",
    "nifty options calculator",
    "bank nifty calculator",
    "nifty options analysis",
    "bank nifty analysis",
    "nifty options signals",
    "bank nifty signals",
    "nifty options tips",
    "bank nifty tips",
    "nifty options recommendation",

    // Currency Options Keywords
    "currency options trading",
    "forex options trading",
    "usdinr options",
    "eurinr options",
    "gbpinr options",
    "jpyinr options",
    "currency derivatives",
    "fx options trading",
    "currency hedging options",
    "export hedging options",
    "import hedging options",

    // Commodity Options Keywords
    "commodity options trading",
    "gold options trading",
    "silver options trading",
    "crude oil options",
    "natural gas options",
    "copper options trading",
    "agricultural options",
    "mcx options trading",
    "commodity derivatives",

    // Options Analysis & Tools Keywords
    "options chain analysis",
    "options flow analysis",
    "open interest analysis",
    "put call ratio",
    "max pain theory",
    "options volume analysis",
    "unusual options activity",
    "options scanner",
    "options screener",
    "options calculator",
    "options simulator",
    "options backtesting",
    "options paper trading",
    "virtual options trading",
    "options trading platform",
    "options trading software",
    "options trading app",
    "options trading tools",
    "options charting",
    "options technical analysis",

    // Beginner Options Trading Keywords
    "options trading for beginners",
    "basic options trading",
    "options trading basics",
    "how to trade options",
    "learn options trading",
    "options trading tutorial",
    "options trading step by step",
    "simple options strategies",
    "easy options trading",
    "options trading made simple",
    "options trading fundamentals",
    "options trading introduction",
    "options trading 101",
    "options trading explained",
    "options trading course for beginners",
    "beginner options strategies",
    "first time options trading",
    "options trading starter guide",

    // Advanced Options Trading Keywords
    "advanced options strategies",
    "professional options trading",
    "expert options trading",
    "institutional options trading",
    "complex options strategies",
    "multi leg options",
    "exotic options trading",
    "structured options products",
    "options combination strategies",
    "custom options strategies",
    "proprietary options trading",
    "hedge fund options strategies",
    "market maker options",
    "options trading psychology",
    "options trading discipline",
    "options trading mindset",

    // Options Trading Education Keywords
    "options trading course online",
    "options trading course offline",
    "live options trading class",
    "recorded options training",
    "options trading webinar",
    "options trading seminar",
    "options trading conference",
    "options trading book",
    "options trading ebook",
    "options trading pdf",
    "options trading video course",
    "options trading mentoring",
    "one on one options coaching",
    "group options training",
    "corporate options training",
    "options trading certification course",
    "SEBI options course",
    "NSE options course",
    "NISM options certification",

    // Price & Value Keywords for Options
    "low price options course",
    "affordable options training",
    "cheap options trading course",
    "budget options classes",
    "discount options course",
    "best price options training",
    "value options education",
    "cost effective options course",
    "reasonable options classes",
    "economical options training",
    "free options trading course",
    "options trading course deals",
    "options course offers",
    "options training discount",
    "options course coupons",

    // Problem-Solution Options Keywords
    "options trading losses",
    "options trading mistakes",
    "avoid options trading losses",
    "options risk management",
    "options trading discipline",
    "options trading plan",
    "consistent options trading",
    "profitable options trading",
    "successful options strategies",
    "options trading success",
    "options trading profits",
    "monthly income options",
    "options trading income",
    "passive income options",
    "retirement options trading",

    // Options Trading Market Keywords
    "options market analysis",
    "options market outlook",
    "options market trends",
    "options market news",
    "options market data",
    "options market hours",
    "options market makers",
    "options liquidity",
    "options bid ask spread",
    "options market depth",
    "options order types",
    "options execution",
    "options brokerage",
    "options commissions",
    "options trading fees",
    "options margin requirements",
    "options account opening",

    // Weekly & Monthly Options Keywords
    "weekly options trading",
    "monthly options trading",
    "weekly expiry options",
    "monthly expiry options",
    "short term options",
    "long term options",
    "quarterly options",
    "annual options",
    "mini options",
    "standard options",
    "jumbo options",

    // Options Trading Timing Keywords
    "morning options trading",
    "evening options trading",
    "after market options",
    "pre market options",
    "intraday options trading",
    "overnight options",
    "weekend options trading",
    "holiday options trading",
    "expiry day trading",
    "last day options",

    // Location-Based Keywords
    "share market classes in Delhi",
    "stock market classes in Delhi",
    "share market classes in Mumbai",
    "stock market classes in Mumbai",
    "share market classes in Pune",
    "stock market classes in Pune",
    "share market classes in Dubai",
    "stock market classes in USA",
    "share market classes near me",
    "stock market classes near me",
    "trading classes in Delhi",
    "trading classes in Mumbai",
    "trading classes in Pune",

    // Specific Location Keywords
    "share market classes in Rajapuri",
    "stock market classes in Rajapuri",
    "share market classes in Uttam Nagar",
    "stock market classes in Uttam Nagar",
    "share market classes in Dwarka",
    "stock market classes in Dwarka",
    "share market classes in West Delhi",
    "share market classes in South Delhi",
    "share market classes in North Delhi",
    "share market classes in East Delhi",
    "share market classes in Central Delhi",
    "share market classes in New Delhi",
    "stock market classes in New Delhi",

    // Pan India Keywords
    "best share market classes in India",
    "top stock market classes in India",
    "share market classes all India",
    "stock market classes all India",
    "share market training India",
    "stock market training India",
    "share market institute India",
    "stock market institute India",

    // Course Type Keywords
    "basic share market course",
    "advance share market course",
    "basic stock market course",
    "advance stock market course",
    "beginner share market course",
    "professional stock market course",
    "share market batch",
    "stock market batch",
    "trading batch",
    "nifty batch",
    "options trading course",
    "futures trading course",
    "intraday trading course",
    "swing trading course",
    "positional trading course",

    // Technical Keywords
    "technical analysis course",
    "fundamental analysis course",
    "demand supply trading",
    "smart money concept",
    "price action trading",
    "candlestick pattern course",
    "chart pattern course",
    "5 star setup",
    "institution footprint",
    "market structure",
    "support resistance",
    "fibonacci trading",
    "elliott wave theory",
    "volume profile trading",
    "order flow trading",
    "algorithmic trading",
    "quantitative trading",

    // Price & Value Keywords
    "low price share market course",
    "affordable stock market classes",
    "cheap share market course",
    "budget stock market classes",
    "discount share market course",
    "best price stock market classes",
    "value for money trading course",
    "cost effective share market course",
    "reasonable stock market classes",
    "economical trading course",

    // Online/Offline Keywords
    "online share market classes",
    "offline share market classes",
    "online stock market course",
    "offline stock market course",
    "live trading classes",
    "recorded trading classes",
    "virtual trading classes",
    "classroom trading course",
    "home based trading course",
    "flexible trading classes",

    // Trending SEO Keywords 2025
    "share market coaching 2025",
    "stock market mentorship 2025",
    "trading education 2025",
    "financial literacy course",
    "investment education",
    "wealth creation course",
    "retirement planning course",
    "passive income course",
    "dividend investing course",
    "value investing course",
    "growth investing course",

    // Commercial Keywords
    "share market classes for sale",
    "stock market course deals",
    "trading classes discount",
    "share market course offers",
    "stock market classes promotion",
    "trading course coupons",
    "share market course booking",
    "stock market classes enrollment",
    "trading course registration",
    "share market course admission",

    // Long-tail Keywords
    "how to learn share market trading",
    "best way to learn stock market",
    "share market trading strategies",
    "stock market investment tips",
    "learn share market from scratch",
    "stock market for beginners",
    "share market tutorial",
    "stock market guide",
    "trading psychology course",
    "risk management in trading",
    "money management in trading",
    "portfolio management course",

    // Brand Keywords
    "Nifty Nitesh",
    "Nifty Nitesh classes",
    "Nifty Nitesh course",
    "Nifty Nitesh training",
    "Nifty Nitesh Delhi",
    "Nifty Nitesh Rajapuri",
    "Nifty Nitesh Uttam Nagar",

    // Additional High-Volume Keywords
    "stock market crash course",
    "share market weekend classes",
    "stock market evening classes",
    "share market morning classes",
    "part time trading course",
    "full time trading course",
    "share market certification",
    "stock market diploma",
    "trading license course",
    "SEBI certified course",
    "NSE certified course",
    "BSE certified course",
    "NISM certified course",
    "NCFM certified course",

    // AI & ChatGPT Related Keywords for Share Market & Options
    "ChatGPT share market analysis",
    "AI stock market predictions",
    "chatgpt trading strategies",
    "artificial intelligence stock trading",
    "AI powered trading course",
    "machine learning stock market",
    "chatgpt stock recommendations",
    "AI trading signals",
    "automated trading with AI",
    "chatgpt financial advice",
    "AI stock market course",
    "chatgpt trading tips",
    "artificial intelligence investment",
    "AI market analysis",
    "chatgpt portfolio management",
    "AI trading algorithms",
    "chatgpt stock analysis",
    "AI driven investment strategies",
    "chatgpt market predictions",
    "AI stock screener",
    "chatgpt technical analysis",
    "AI trading bot course",
    "chatgpt investment advice",
    "AI market research",
    "chatgpt day trading",
    "AI swing trading",
    "chatgpt options trading",
    "AI futures trading",
    "chatgpt crypto trading",
    "AI risk management",
    "chatgpt backtesting",
    "AI sentiment analysis",
    "chatgpt earnings predictions",
    "AI dividend analysis",
    "chatgpt value investing",
    "AI growth investing",
    "chatgpt momentum trading",
    "AI arbitrage trading",
    "chatgpt scalping strategies",
    "AI high frequency trading",
    "chatgpt forex trading",
    "AI commodity trading",
    "chatgpt ETF analysis",
    "AI mutual fund selection",
    "chatgpt REIT analysis",
    "AI bond trading",
    "chatgpt derivatives trading",
    "AI quantitative analysis",
    "chatgpt statistical arbitrage",
    "AI pairs trading",
    "chatgpt mean reversion",
    "AI trend following",
    "chatgpt breakout strategies",
    "AI support resistance",
    "chatgpt candlestick patterns",
    "AI chart pattern recognition",
    "chatgpt elliott wave",
    "AI fibonacci retracement",
    "chatgpt volume analysis",
    "AI order flow analysis",
    "chatgpt market microstructure",
    "AI dark pool trading",
    "chatgpt institutional trading",
    "AI smart money tracking",
    "chatgpt retail sentiment",
    "AI fear greed index",
    "chatgpt volatility trading",
    "AI options strategies",
    "chatgpt covered calls",
    "AI protective puts",
    "chatgpt iron condors",
    "AI butterfly spreads",
    "chatgpt straddles strangles",
    "AI gamma scalping",
    "chatgpt theta decay",
    "AI vega hedging",
    "chatgpt delta neutral",
    "AI rho sensitivity",
    "chatgpt implied volatility",
    "AI historical volatility",
    "chatgpt volatility smile",
    "AI black scholes model",
    "chatgpt monte carlo simulation",
    "AI value at risk",
    "chatgpt sharpe ratio",
    "AI sortino ratio",
    "chatgpt maximum drawdown",
    "AI correlation analysis",
    "chatgpt beta calculation",
    "AI alpha generation",
    "chatgpt factor models",
    "AI regression analysis",
    "chatgpt time series analysis",
    "AI ARIMA models",
    "chatgpt GARCH models",
    "AI neural networks trading",
    "chatgpt deep learning",
    "AI reinforcement learning",
    "chatgpt natural language processing",
    "AI sentiment analysis stocks",
    "chatgpt news trading",
    "AI earnings call analysis",
    "chatgpt social media sentiment",
    "AI twitter sentiment",
    "chatgpt reddit sentiment",
    "AI alternative data",
    "chatgpt satellite data",
    "AI credit card transactions",
    "chatgpt web scraping",
    "AI economic indicators",
    "chatgpt macro trading",
    "AI central bank policy",
    "chatgpt inflation trading",
    "AI interest rate forecasting",
    "chatgpt yield curve",
    "AI currency trading",
    "chatgpt carry trade",
    "AI purchasing power parity",
    "chatgpt exchange rates",

    // Specific AI Tool Keywords
    "GPT-4 stock market",
    "Claude AI trading",
    "Bard stock analysis",
    "Bing Chat trading",
    "Perplexity AI stocks",
    "Character AI trading",
    "Jasper AI finance",
    "Copy AI stock content",
    "Writesonic trading",
    "ChatSonic stock market",
    "YouChat trading tips",
    "Poe AI stock analysis",
    "Replika trading chat",
    "Socratic AI stocks",
    "Codewhisperer trading",
    "GitHub Copilot finance",
    "Tabnine trading code",

    // AI Learning & Education Keywords
    "AI trading education",
    "machine learning trading course",
    "AI stock market bootcamp",
    "chatgpt trading masterclass",
    "AI investment certification",
    "automated trading course",
    "AI trading academy",
    "chatgpt finance course",
    "AI trading workshop",
    "machine learning finance",
    "AI trading mentorship",
    "chatgpt trading community",
    "AI trading forum",
    "automated investing course",
    "AI portfolio optimization",
    "chatgpt risk assessment",
    "AI trading psychology",
    "machine learning backtesting",
    "AI trading simulation",
    "chatgpt paper trading",

    // Voice Search & Conversational Keywords
    "ask AI about stock market",
    "best AI for stock trading",
    "which AI helps with trading",
    "AI stock market assistant",
    "conversational AI trading",
    "voice trading with AI",
    "AI trading chatbot",
    "virtual trading assistant",
    "AI financial advisor",
    "smart trading assistant",
    "AI investment helper",
    "automated financial advice",
    "AI trading mentor",
    "digital trading coach",
    "AI market guide",

    // Problem-Solution Keywords for AI
    "AI solve trading problems",
    "AI trading mistakes",
    "AI market timing",
    "AI stock selection",
    "AI trading discipline",
    "AI emotional trading",
    "AI overtrading solution",
    "AI loss prevention",
    "AI profit maximization",
    "AI trading efficiency",
    "AI market volatility",
    "AI trading automation",
    "AI decision making",
    "AI trade execution",
    "AI market analysis speed",

    // Future & Innovation Keywords
    "future of AI trading",
    "next generation trading AI",
    "advanced AI trading systems",
    "AI trading revolution",
    "smart trading technology",
    "AI trading innovation",
    "cutting edge trading AI",
    "AI trading disruption",
    "intelligent trading systems",
    "AI powered finance",
    "autonomous trading",
    "AI trading evolution",
    "smart investment AI",
    "AI trading transformation",
    "digital trading future",
  ],
  openGraph: {
    title:
      "Best Share Market & Stock Trading Classes in Delhi India 2025 - Nifty Nitesh | Online Offline Course",
    description:
      "Join Nifty Nitesh for expert-led share market and stock trading classes in Delhi, Mumbai, Pune, Dubai, USA. Learn technical analysis, fundamental analysis, demand supply trading, smart money concepts. Available online & offline in Rajapuri, Uttam Nagar, Dwarka. Low price guaranteed! Batch starting soon.",
    url: "https://niftynitesh.com",
    siteName: "Nifty Nitesh - Best Share Market Classes in Delhi",
    images: [
      {
        url: "https://www.niftynitesh.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Nifty Nitesh Share Market Classes Delhi - Best Stock Trading Course",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@niftynitesh",
    creator: "@niftynitesh",
    title:
      "Best Share Market & Stock Trading Classes in Delhi India 2025 - Nifty Nitesh | Online Offline Course",
    description:
      "Join Nifty Nitesh for expert-led share market and stock trading classes in Delhi, Mumbai, Pune, Dubai, USA. Learn technical analysis, fundamental analysis, demand supply trading, smart money concepts. Available online & offline in Rajapuri, Uttam Nagar, Dwarka. Low price guaranteed! Batch starting soon.",
    images: [
      {
        url: "https://www.niftynitesh.com/opengraph-image.png",
        alt: "Nifty Nitesh Share Market Classes Delhi - Best Stock Trading Course",
      },
    ],
  },
  facebook: {
    appId: "your-facebook-app-id", // Replace with your Facebook App ID
    pages: "niftynitesh",
    title:
      "Best Share Market & Stock Trading Classes in Delhi India 2025 - Nifty Nitesh | Online Offline Course",
    description:
      "Join Nifty Nitesh for expert-led share market and stock trading classes in Delhi, Mumbai, Pune, Dubai, USA. Learn technical analysis, fundamental analysis, demand supply trading, smart money concepts. Available online & offline in Rajapuri, Uttam Nagar, Dwarka. Low price guaranteed! Batch starting soon.",
    image: "https://www.niftynitesh.com/opengraph-image.png",
  },
  instagram: {
    site: "@niftynitesh",
    title:
      "Best Share Market & Stock Trading Classes in Delhi India 2025 - Nifty Nitesh | Online Offline Course",
    description:
      "Join Nifty Nitesh for expert-led share market and stock trading classes in Delhi, Mumbai, Pune, Dubai, USA. Learn technical analysis, fundamental analysis, demand supply trading, smart money concepts. Available online & offline in Rajapuri, Uttam Nagar, Dwarka. Low price guaranteed! Batch starting soon.",
    image: "https://www.niftynitesh.com/opengraph-image.png",
  },
  linkedin: {
    site: "niftynitesh",
    title:
      "Best Share Market & Stock Trading Classes in Delhi India 2025 - Nifty Nitesh | Online Offline Course",
    description:
      "Join Nifty Nitesh for expert-led share market and stock trading classes in Delhi, Mumbai, Pune, Dubai, USA. Learn technical analysis, fundamental analysis, demand supply trading, smart money concepts. Available online & offline in Rajapuri, Uttam Nagar, Dwarka. Low price guaranteed! Batch starting soon.",
    image: "https://www.niftynitesh.com/opengraph-image.png",
  },
  whatsapp: {
    title:
      "Best Share Market & Stock Trading Classes in Delhi India 2025 - Nifty Nitesh | Online Offline Course",
    description:
      "Join Nifty Nitesh for expert-led share market and stock trading classes in Delhi, Mumbai, Pune, Dubai, USA. Learn technical analysis, fundamental analysis, demand supply trading, smart money concepts. Available online & offline in Rajapuri, Uttam Nagar, Dwarka. Low price guaranteed! Batch starting soon.",
    image: "https://www.niftynitesh.com/opengraph-image.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://niftynitesh.com"),
  alternates: {
    canonical: "https://niftynitesh.com",
    languages: {
      "en-US": "https://niftynitesh.com",
      "hi-IN": "https://niftynitesh.com/hi",
    },
  },
  other: {
    "google-site-verification": "zB7XcsivFWdDucQhN3bPwdXoSbNSUUCpbmnh9vQbW-0",
    // "msvalidate.01": "your-bing-verification-code", // Add your Bing verification code
    // "yandex-verification": "your-yandex-verification-code", // Add your Yandex verification code
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Nifty Nitesh - Best Share Market Classes in Delhi",
    alternateName: "Nifty Nitesh Trading Academy",
    url: "https://niftynitesh.com",
    logo: "https://www.niftynitesh.com/favicon.ico",
    image: "https://www.niftynitesh.com/opengraph-image.png",
    description:
      "Nifty Nitesh offers comprehensive share market and stock trading courses in Delhi, Mumbai, Pune, Dubai, USA. Learn from industry experts about technical analysis, fundamental analysis, demand supply trading, smart money concepts. Available online & offline with low price guarantee.",
    foundingDate: "2020",
    founder: {
      "@type": "Person",
      name: "Nifty Nitesh",
      jobTitle: "Stock Market Expert & Trainer",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        // telephone: "+91-9999999999", // Add your phone number
        email: "niftynitesh000@gmail.com",
        contactType: "Customer Service",
        areaServed: ["IN", "US", "AE"],
        availableLanguage: ["en", "hi"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "09:00",
          closes: "21:00",
        },
      },
    ],
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "Rajapuri, Uttam Nagar",
        addressLocality: "New Delhi",
        addressRegion: "Delhi",
        postalCode: "110059",
        addressCountry: "IN",
      },
    ],
    sameAs: [
      "https://x.com/Nifty_Nitesh",
      "https://www.instagram.com/nifty_nitesh/?igsh=ZzhlbmIwdnc5czBl#",
      "https://www.youtube.com/@Nifty-Nitesh",
      "https://www.whatsapp.com/channel/0029VaS551C17En02ZJgld1V",
      "https://www.facebook.com/share/1LgGQ57pby/?mibextid=qi2Omg",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "256",
      bestRating: "5",
      worstRating: "1",
    },
    priceRange: "₹₹",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Stock Market Courses",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Basic Share Market Course",
            description:
              "Learn share market basics, stock selection, portfolio management",
            provider: {
              "@type": "Organization",
              name: "Nifty Nitesh",
              sameAs: "https://niftynitesh.com",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Advanced Technical Analysis Course",
            description:
              "Master technical analysis, chart patterns, indicators, trading strategies",
            provider: {
              "@type": "Organization",
              name: "Nifty Nitesh",
              sameAs: "https://niftynitesh.com",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Demand Supply Trading Course",
            description:
              "Learn demand supply zones, smart money concepts, institutional trading",
            provider: {
              "@type": "Organization",
              name: "Nifty Nitesh",
              sameAs: "https://niftynitesh.com",
            },
          },
        },
      ],
    },
    areaServed: [
      {
        "@type": "City",
        name: "Delhi",
        containedInPlace: {
          "@type": "Country",
          name: "India",
        },
      },
      {
        "@type": "City",
        name: "Mumbai",
        containedInPlace: {
          "@type": "Country",
          name: "India",
        },
      },
      {
        "@type": "City",
        name: "Pune",
        containedInPlace: {
          "@type": "Country",
          name: "India",
        },
      },
      {
        "@type": "City",
        name: "Dubai",
        containedInPlace: {
          "@type": "Country",
          name: "United Arab Emirates",
        },
      },
      {
        "@type": "Country",
        name: "United States",
      },
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 28.6139,
        longitude: 77.209,
      },
      geoRadius: "50000",
    },
    offers: {
      "@type": "Offer",
      description: "Online and Offline Share Market Classes",
      availability: "https://schema.org/InStock",
      priceRange: "₹₹",
      validThrough: "2025-12-31",
    },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "SEBI Certified",
        credentialCategory: "Financial Market Certification",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "NSE Certified",
        credentialCategory: "Stock Market Certification",
      },
    ],
  },
};

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" prefix="og: https://ogp.me/ns#">
      <head>
        {/* Additional Meta Tags for Better SEO */}
        <meta name="author" content="Nifty Nitesh" />
        <meta name="publisher" content="Nifty Nitesh" />
        <meta name="copyright" content="Nifty Nitesh" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Delhi" />
        <meta name="geo.position" content="28.6139;77.2090" />
        <meta name="ICBM" content="28.6139, 77.2090" />

        {/* Mobile Optimization */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Nifty Nitesh" />
        <meta name="application-name" content="Nifty Nitesh" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
        <meta name="theme-color" content="#000000" />

        {/* Rich Snippets */}
        <meta
          itemProp="name"
          content="Best Share Market & Stock Trading Classes in Delhi India 2025 - Nifty Nitesh"
        />
        <meta
          itemProp="description"
          content="Join Nifty Nitesh for expert-led share market and stock trading classes in Delhi, Mumbai, Pune, Dubai, USA. Learn technical analysis, fundamental analysis, demand supply trading, smart money concepts. Available online & offline in Rajapuri, Uttam Nagar, Dwarka. Low price guaranteed!"
        />
        <meta
          itemProp="image"
          content="https://www.niftynitesh.com/opengraph-image.png"
        />

        {/* Additional Social Media Meta Tags */}
        <meta property="fb:app_id" content="your-facebook-app-id" />
        <meta property="fb:pages" content="niftynitesh" />
        <meta
          property="article:author"
          content="https://www.facebook.com/share/1LgGQ57pby/?mibextid=qi2Omg"
        />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/share/1LgGQ57pby/?mibextid=qi2Omg"
        />
        <meta
          property="business:contact_data:street_address"
          content="Rajapuri, Uttam Nagar"
        />
        <meta property="business:contact_data:locality" content="New Delhi" />
        <meta property="business:contact_data:region" content="Delhi" />
        <meta property="business:contact_data:postal_code" content="110059" />
        <meta property="business:contact_data:country_name" content="India" />
        <meta
          property="business:contact_data:email"
          content="niftynitesh000@gmail.com"
        />
        <meta
          property="business:contact_data:website"
          content="https://niftynitesh.com"
        />

        {/* WhatsApp Meta Tags */}
        <meta
          property="og:image:alt"
          content="Nifty Nitesh Share Market Classes Delhi - Best Stock Trading Course"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Additional Twitter Cards */}
        <meta name="twitter:domain" content="niftynitesh.com" />
        <meta name="twitter:url" content="https://niftynitesh.com" />
        <meta name="twitter:label1" content="Course Duration" />
        <meta name="twitter:data1" content="3-6 Months" />
        <meta name="twitter:label2" content="Mode" />
        <meta name="twitter:data2" content="Online & Offline" />

        {/* LinkedIn Meta Tags */}
        <meta
          property="og:site_name"
          content="Nifty Nitesh - Best Share Market Classes in Delhi"
        />
        <meta property="og:updated_time" content="2025-07-08T00:00:00+00:00" />

        {/* Additional Schema.org markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Nifty Nitesh",
              image: "https://www.niftynitesh.com/opengraph-image.png",
              "@id": "https://niftynitesh.com",
              url: "https://niftynitesh.com",
              // telephone: "+91-9999999999",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Rajapuri, Uttam Nagar",
                addressLocality: "New Delhi",
                postalCode: "110059",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 28.6139,
                longitude: 77.209,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "09:00",
                closes: "21:00",
              },
              sameAs: [
                "https://www.facebook.com/share/1LgGQ57pby/?mibextid=qi2Omg",
                "https://x.com/Nifty_Nitesh",
                "https://www.instagram.com/nifty_nitesh/?igsh=ZzhlbmIwdnc5czBl#",
              ],
            }),
          }}
        />

        {/* Preload important resources */}
        <link
          rel="preload"
          href="/fonts/inter.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="preload" href="/opengraph-image.png" as="image" />

        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://niftynitesh.com" />

        {/* Alternate languages */}
        <link rel="alternate" hrefLang="en" href="https://niftynitesh.com" />
        <link rel="alternate" hrefLang="hi" href="https://niftynitesh.com/hi" />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://niftynitesh.com"
        />

        {/* RSS Feed */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Nifty Nitesh Blog RSS Feed"
          href="https://niftynitesh.com/rss.xml"
        />

        {/* Sitemap */}
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="https://niftynitesh.com/sitemap.xml"
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <SocialLinks />
        <ReferralPopup />
        {children}
        <FloatingWhatsAppButton />
        <Analytics />
        <Footer />

        {/* Google Analytics tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-B658YHF4FR"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-B658YHF4FR');
            `,
          }}
        />

        {/* Google Ads tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17470353644"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17470353644');
            `,
          }}
        />
      </body>
    </html>
  );
}
