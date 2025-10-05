"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock, User, Calendar, TrendingUp, BarChart3, Target, DollarSign, BookOpen, ChevronRight, Search, Filter, Star } from 'lucide-react';

"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock, User, Calendar, TrendingUp, BarChart3, Target, DollarSign, BookOpen, ChevronRight, Search, Filter, Star } from 'lucide-react';

// Mock blog data - आप इसे API से replace कर सकते हैं
const blogPosts = [
  {
    id: 1,
    slug: "technical-analysis-beginners-guide",
    title: "Technical Analysis Complete Guide for Beginners",
    excerpt: "Learn the fundamentals of technical analysis, chart patterns, and how to read market trends like a professional trader.",
    content: "Technical analysis is the study of market action, primarily through the use of charts, for the purpose of forecasting future price trends...",
    author: "Nifty Nitesh",
    publishedAt: "2024-10-01",
    readTime: "8 min read",
    category: "Technical Analysis",
    tags: ["technical analysis", "charts", "patterns", "beginners"],
    image: "/course/img1.png",
    featured: true,
    views: 1250,
  },
  {
    id: 2,
    slug: "demand-supply-zones-trading",
    title: "Understanding Demand and Supply Zones in Trading",
    excerpt: "Master the concept of demand and supply zones to identify high-probability trading setups and improve your trading accuracy.",
    content: "Demand and supply zones are areas on a price chart where the price has moved away sharply from these levels...",
    author: "Nifty Nitesh",
    publishedAt: "2024-09-28",
    readTime: "6 min read",
    category: "Trading Strategy",
    tags: ["demand supply", "zones", "trading", "strategy"],
    image: "/course/img2.png",
    featured: true,
    views: 980,
  },
  {
    id: 3,
    slug: "smart-money-concepts-explained",
    title: "Smart Money Concepts: How Institutions Trade",
    excerpt: "Discover how institutional traders think and operate. Learn to follow smart money and improve your trading decisions.",
    content: "Smart Money Concepts (SMC) is a trading methodology that focuses on understanding how institutional traders operate...",
    author: "Nifty Nitesh",
    publishedAt: "2024-09-25",
    readTime: "10 min read",
    category: "Advanced Trading",
    tags: ["smart money", "institutions", "advanced", "concepts"],
    image: "/course/img3.png",
    featured: false,
    views: 1450,
  },
  {
    id: 4,
    slug: "risk-management-trading-psychology",
    title: "Risk Management and Trading Psychology",
    excerpt: "Learn essential risk management techniques and develop the right trading psychology for consistent profitability.",
    content: "Risk management is the most important aspect of trading that separates successful traders from unsuccessful ones...",
    author: "Nifty Nitesh",
    publishedAt: "2024-09-22",
    readTime: "7 min read",
    category: "Risk Management",
    tags: ["risk management", "psychology", "trading", "mindset"],
    image: "/chart/NIFTY50 & BANK NIFTY.png",
    featured: false,
    views: 890,
  },
  {
    id: 5,
    slug: "nifty-bank-nifty-analysis",
    title: "Weekly Nifty and Bank Nifty Technical Analysis",
    excerpt: "Get detailed technical analysis of Nifty 50 and Bank Nifty with key levels, support, resistance and trading opportunities.",
    content: "This week's analysis of Nifty 50 shows strong bullish momentum with key resistance at 19800 levels...",
    author: "Nifty Nitesh",
    publishedAt: "2024-09-20",
    readTime: "5 min read",
    category: "Market Analysis",
    tags: ["nifty", "bank nifty", "analysis", "levels"],
    image: "/chart/HDFCBANK.png",
    featured: false,
    views: 1120,
  },
  {
    id: 6,
    slug: "options-trading-strategies",
    title: "Options Trading Strategies for Beginners",
    excerpt: "Understand different options trading strategies, when to use them, and how to manage risk in options trading.",
    content: "Options trading offers flexibility and numerous strategies for different market conditions...",
    author: "Nifty Nitesh",
    publishedAt: "2024-09-18",
    readTime: "9 min read",
    category: "Options Trading",
    tags: ["options", "strategies", "derivatives", "trading"],
    image: "/chart/ICICIBANK.png",
    featured: false,
    views: 750,
  },
  {
    id: 7,
    slug: "swing-trading-techniques",
    title: "Swing Trading Techniques and Setups",
    excerpt: "Learn effective swing trading techniques, chart setups, and how to hold positions for multiple days to weeks.",
    content: "Swing trading is a style of trading that attempts to capture gains in a stock within a few days to several weeks...",
    author: "Nifty Nitesh",
    publishedAt: "2024-09-15",
    readTime: "8 min read",
    category: "Trading Strategy",
    tags: ["swing trading", "setups", "techniques", "positions"],
    image: "/chart/TATASTEEL.png",
    featured: false,
    views: 920,
  },
  {
    id: 8,
    slug: "intraday-trading-tips",
    title: "Intraday Trading Tips and Best Practices",
    excerpt: "Essential intraday trading tips, time frames to watch, and best practices for day trading success.",
    content: "Intraday trading requires discipline, quick decision-making, and proper risk management...",
    author: "Nifty Nitesh",
    publishedAt: "2024-09-12",
    readTime: "6 min read",
    category: "Intraday Trading",
    tags: ["intraday", "day trading", "tips", "practices"],
    image: "/chart/POWERGRID.png",
    featured: false,
    views: 1080,
  },
  {
    id: 9,
    slug: "fundamental-analysis-basics",
    title: "Fundamental Analysis: Company Research Methods",
    excerpt: "Learn how to research companies using fundamental analysis, financial ratios, and valuation techniques.",
    content: "Fundamental analysis involves evaluating a company's financial health and business prospects...",
    author: "Nifty Nitesh",
    publishedAt: "2024-09-10",
    readTime: "12 min read",
    category: "Fundamental Analysis",
    tags: ["fundamental", "analysis", "research", "valuation"],
    image: "/chart/PNB.png",
    featured: false,
    views: 680,
  },
  {
    id: 10,
    slug: "market-psychology-crowd-behavior",
    title: "Market Psychology and Crowd Behavior",
    excerpt: "Understand market psychology, crowd behavior patterns, and how emotions drive market movements.",
    content: "Market psychology plays a crucial role in price movements and trading decisions...",
    author: "Nifty Nitesh",
    publishedAt: "2024-09-08",
    readTime: "7 min read",
    category: "Psychology",
    tags: ["psychology", "crowd", "behavior", "emotions"],
    image: "/chart/SRF.png",
    featured: false,
    views: 540,
  },
  {
    id: 11,
    slug: "crypto-trading-guide",
    title: "Cryptocurrency Trading: A Beginner's Guide",
    excerpt: "Introduction to cryptocurrency trading, major coins analysis, and crypto market dynamics.",
    content: "Cryptocurrency trading has gained massive popularity in recent years...",
    author: "Nifty Nitesh",
    publishedAt: "2024-09-05",
    readTime: "9 min read",
    category: "Cryptocurrency",
    tags: ["crypto", "bitcoin", "trading", "blockchain"],
    image: "/chart/UBL.png",
    featured: false,
    views: 1350,
  },
  {
    id: 12,
    slug: "portfolio-management-diversification",
    title: "Portfolio Management and Diversification",
    excerpt: "Learn effective portfolio management techniques, asset allocation, and diversification strategies.",
    content: "Portfolio management is the art and science of making decisions about investment mix and policy...",
    author: "Nifty Nitesh",
    publishedAt: "2024-09-03",
    readTime: "10 min read",
    category: "Portfolio Management",
    tags: ["portfolio", "diversification", "allocation", "management"],
    image: "/chart/BANKBARODA.png",
    featured: false,
    views: 720,
  },
];

const categories = [
  "All",
  "Technical Analysis",
  "Trading Strategy", 
  "Risk Management",
  "Market Analysis",
  "Options Trading",
  "Intraday Trading",
  "Fundamental Analysis",
  "Psychology",
  "Cryptocurrency",
  "Portfolio Management",
  "Advanced Trading"
];

export default function BlogsClient() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const postsPerPage = 12;

  // Filter posts based on category and search
  useEffect(() => {
    let filtered = blogPosts;

    if (selectedCategory !== "All") {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    setFilteredPosts(filtered);
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  const featuredPosts = filteredPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden py-16">
        {/* Animated Grid Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f0a] via-[#032d20] to-[#0a0f0a]" />
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Trading <span className="gradient-text">Insights</span> & Blogs
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-text-secondary max-w-3xl mx-auto">
              Expert insights, trading tips, and market analysis to help you become a successful trader
            </p>
            
            {/* Search Bar */}
            <motion.div 
              className="max-w-md mx-auto relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-muted h-5 w-5" />
              <input
                type="text"
                placeholder="Search trading insights..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-bg-card border border-border-primary focus:border-accent-green focus:ring-2 focus:ring-accent-green/20 focus:outline-none text-text-primary placeholder-text-muted backdrop-blur-sm"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
const blogPosts = [
  {
    id: 1,
    slug: "technical-analysis-beginners-guide",
    title: "Technical Analysis Complete Guide for Beginners",
    excerpt: "Learn the fundamentals of technical analysis, chart patterns, and how to read market trends like a professional trader.",
    content: "Technical analysis is the study of market action, primarily through the use of charts, for the purpose of forecasting future price trends...",
    author: "Nifty Nitesh",
    publishedAt: "2024-10-01",
    readTime: "8 min read",
    category: "Technical Analysis",
    tags: ["technical analysis", "charts", "patterns", "beginners"],
    image: "/course/img1.png",
    featured: true,
    views: 1250,
  },
  {
    id: 2,
    slug: "demand-supply-zones-trading",
    title: "Understanding Demand and Supply Zones in Trading",
    excerpt: "Master the concept of demand and supply zones to identify high-probability trading setups and improve your trading accuracy.",
    content: "Demand and supply zones are areas on a price chart where the price has moved away sharply from these levels...",
    author: "Nifty Nitesh",
    publishedAt: "2024-09-28",
    readTime: "6 min read",
    category: "Trading Strategy",
    tags: ["demand supply", "zones", "trading", "strategy"],
    image: "/course/img2.png",
    featured: true,
    views: 980,
  },
  {
    id: 3,
    slug: "smart-money-concepts-explained",
    title: "Smart Money Concepts: How Institutions Trade",
    excerpt: "Discover how institutional traders think and operate. Learn to follow smart money and improve your trading decisions.",
    content: "Smart Money Concepts (SMC) is a trading methodology that focuses on understanding how institutional traders operate...",
    author: "Nifty Nitesh",
    publishedAt: "2024-09-25",
    readTime: "10 min read",
    category: "Advanced Trading",
    tags: ["smart money", "institutions", "advanced", "concepts"],
    image: "/course/img3.png",
    featured: false,
    views: 1450,
  },
  {
    id: 4,
    slug: "risk-management-trading-psychology",
    title: "Risk Management and Trading Psychology",
    excerpt: "Learn essential risk management techniques and develop the right trading psychology for consistent profitability.",
    content: "Risk management is the most important aspect of trading that separates successful traders from unsuccessful ones...",
    author: "Nifty Nitesh",
    publishedAt: "2024-09-22",
    readTime: "7 min read",
    category: "Risk Management",
    tags: ["risk management", "psychology", "trading", "mindset"],
    image: "/chart/NIFTY50 & BANK NIFTY.png",
    featured: false,
    views: 890,
  },
  {
    id: 5,
    slug: "nifty-bank-nifty-analysis",
    title: "Weekly Nifty and Bank Nifty Technical Analysis",
    excerpt: "Get detailed technical analysis of Nifty 50 and Bank Nifty with key levels, support, resistance and trading opportunities.",
    content: "This week's analysis of Nifty 50 shows strong bullish momentum with key resistance at 19800 levels...",
    author: "Nifty Nitesh",
    publishedAt: "2024-09-20",
    readTime: "5 min read",
    category: "Market Analysis",
    tags: ["nifty", "bank nifty", "analysis", "levels"],
    image: "/chart/HDFCBANK.png",
    featured: false,
    views: 1120,
  },
  {
    id: 6,
    slug: "options-trading-strategies",
    title: "Options Trading Strategies for Beginners",
    excerpt: "Understand different options trading strategies, when to use them, and how to manage risk in options trading.",
    content: "Options trading offers flexibility and numerous strategies for different market conditions...",
    author: "Nifty Nitesh",
    publishedAt: "2024-09-18",
    readTime: "9 min read",
    category: "Options Trading",
    tags: ["options", "strategies", "derivatives", "trading"],
    image: "/chart/ICICIBANK.png",
    featured: false,
    views: 750,
  },
  {
    id: 7,
    slug: "swing-trading-techniques",
    title: "Swing Trading Techniques and Setups",
    excerpt: "Learn effective swing trading techniques, chart setups, and how to hold positions for multiple days to weeks.",
    content: "Swing trading is a style of trading that attempts to capture gains in a stock within a few days to several weeks...",
    author: "Nifty Nitesh",
    publishedAt: "2024-09-15",
    readTime: "8 min read",
    category: "Trading Strategy",
    tags: ["swing trading", "setups", "techniques", "positions"],
    image: "/chart/TATASTEEL.png",
    featured: false,
    views: 920,
  },
  {
    id: 8,
    slug: "intraday-trading-tips",
    title: "Intraday Trading Tips and Best Practices",
    excerpt: "Essential intraday trading tips, time frames to watch, and best practices for day trading success.",
    content: "Intraday trading requires discipline, quick decision-making, and proper risk management...",
    author: "Nifty Nitesh",
    publishedAt: "2024-09-12",
    readTime: "6 min read",
    category: "Intraday Trading",
    tags: ["intraday", "day trading", "tips", "practices"],
    image: "/chart/POWERGRID.png",
    featured: false,
    views: 1080,
  },
  {
    id: 9,
    slug: "fundamental-analysis-basics",
    title: "Fundamental Analysis: Company Research Methods",
    excerpt: "Learn how to research companies using fundamental analysis, financial ratios, and valuation techniques.",
    content: "Fundamental analysis involves evaluating a company's financial health and business prospects...",
    author: "Nifty Nitesh",
    publishedAt: "2024-09-10",
    readTime: "12 min read",
    category: "Fundamental Analysis",
    tags: ["fundamental", "analysis", "research", "valuation"],
    image: "/chart/PNB.png",
    featured: false,
    views: 680,
  },
  {
    id: 10,
    slug: "market-psychology-crowd-behavior",
    title: "Market Psychology and Crowd Behavior",
    excerpt: "Understand market psychology, crowd behavior patterns, and how emotions drive market movements.",
    content: "Market psychology plays a crucial role in price movements and trading decisions...",
    author: "Nifty Nitesh",
    publishedAt: "2024-09-08",
    readTime: "7 min read",
    category: "Psychology",
    tags: ["psychology", "crowd", "behavior", "emotions"],
    image: "/chart/SRF.png",
    featured: false,
    views: 540,
  },
  {
    id: 11,
    slug: "crypto-trading-guide",
    title: "Cryptocurrency Trading: A Beginner's Guide",
    excerpt: "Introduction to cryptocurrency trading, major coins analysis, and crypto market dynamics.",
    content: "Cryptocurrency trading has gained massive popularity in recent years...",
    author: "Nifty Nitesh",
    publishedAt: "2024-09-05",
    readTime: "9 min read",
    category: "Cryptocurrency",
    tags: ["crypto", "bitcoin", "trading", "blockchain"],
    image: "/chart/UBL.png",
    featured: false,
    views: 1350,
  },
  {
    id: 12,
    slug: "portfolio-management-diversification",
    title: "Portfolio Management and Diversification",
    excerpt: "Learn effective portfolio management techniques, asset allocation, and diversification strategies.",
    content: "Portfolio management is the art and science of making decisions about investment mix and policy...",
    author: "Nifty Nitesh",
    publishedAt: "2024-09-03",
    readTime: "10 min read",
    category: "Portfolio Management",
    tags: ["portfolio", "diversification", "allocation", "management"],
    image: "/chart/BANKBARODA.png",
    featured: false,
    views: 720,
  },
];

const categories = [
  "All",
  "Technical Analysis",
  "Trading Strategy", 
  "Risk Management",
  "Market Analysis",
  "Options Trading",
  "Intraday Trading",
  "Fundamental Analysis",
  "Psychology",
  "Cryptocurrency",
  "Portfolio Management",
  "Advanced Trading"
];

export default function BlogsClient() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const postsPerPage = 12;

  // Filter posts based on category and search
  useEffect(() => {
    let filtered = blogPosts;

    if (selectedCategory !== "All") {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    setFilteredPosts(filtered);
    setCurrentPage(1); // Reset to first page when filtering
  }, [selectedCategory, searchQuery]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  const featuredPosts = filteredPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden py-16">
        {/* Animated Grid Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f0a] via-[#032d20] to-[#0a0f0a]" />
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Trading <span className="gradient-text">Insights</span> & Blogs
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-text-secondary max-w-3xl mx-auto">
              Expert insights, trading tips, and market analysis to help you become a successful trader
            </p>
            
            {/* Search Bar */}
            <motion.div 
              className="max-w-md mx-auto relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-muted h-5 w-5" />
              <input
                type="text"
                placeholder="Search trading insights..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-bg-card border border-border-primary focus:border-accent-green focus:ring-2 focus:ring-accent-green/20 focus:outline-none text-text-primary placeholder-text-muted backdrop-blur-sm"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
                Featured <span className="gradient-text">Articles</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.slice(0, 2).map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link href={`/blogs/${post.slug}`} className="group">
                      <article className="bg-bg-card border border-border-primary rounded-2xl overflow-hidden hover:border-accent-green transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm">
                        <div className="relative h-64 overflow-hidden">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="bg-accent-green text-bg-primary px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                              <Star className="h-3 w-3" />
                              Featured
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-4 text-sm text-text-muted mb-3">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {new Date(post.publishedAt).toLocaleDateString()}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {post.readTime}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent-green transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-text-secondary mb-4">{post.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-accent-green font-medium flex items-center gap-1">
                              Read More <ChevronRight className="h-4 w-4" />
                            </span>
                            <span className="text-sm text-text-muted">{post.views} views</span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Filter className="h-5 w-5 text-accent-green" />
            <h3 className="text-lg font-semibold text-text-primary">Filter by Category</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-accent-green text-bg-primary shadow-lg'
                    : 'bg-bg-card border border-border-primary text-text-secondary hover:bg-bg-secondary hover:border-accent-green hover:text-accent-green'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory === "All" ? "All Articles" : selectedCategory}
            </h2>
            <span className="text-gray-500">
              Showing {startIndex + 1}-{Math.min(endIndex, filteredPosts.length)} of {filteredPosts.length} articles
            </span>
          </div>

          {currentPosts.length === 0 ? (
            <div className="text-center py-16">
              <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPosts.map((post) => (
                <Link key={post.id} href={`/blogs/${post.slug}`} className="group">
                  <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-white/90 text-gray-800 px-2 py-1 rounded-lg text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.publishedAt).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-blue-600 font-medium text-sm flex items-center gap-1">
                          Read More <ChevronRight className="h-4 w-4" />
                        </span>
                        <span className="text-xs text-gray-500">{post.views} views</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2 mt-12">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg border border-border-primary bg-bg-card text-text-secondary hover:bg-bg-secondary hover:border-accent-green disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Previous
              </button>
              
              {[...Array(totalPages)].map((_, index) => {
                const page = index + 1;
                const isActive = page === currentPage;
                const shouldShow = page === 1 || page === totalPages || Math.abs(page - currentPage) <= 2;
                
                if (!shouldShow) {
                  if (page === currentPage - 3 || page === currentPage + 3) {
                    return <span key={page} className="px-2 text-text-muted">...</span>;
                  }
                  return null;
                }
                
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      isActive
                        ? 'bg-accent-green text-bg-primary'
                        : 'border border-border-primary bg-bg-card text-text-secondary hover:bg-bg-secondary hover:border-accent-green'
                    }`}
                  >
                    {page}
                  </button>
                );
              })}
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg border border-border-primary bg-bg-card text-text-secondary hover:bg-bg-secondary hover:border-accent-green disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-accent-green/10 to-accent-green/5 border-t border-border-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Stay <span className="gradient-text">Updated</span>
            </h2>
            <p className="text-text-secondary mb-8">
              Get the latest trading insights and market analysis delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-bg-card border border-border-primary focus:border-accent-green focus:ring-2 focus:ring-accent-green/20 focus:outline-none text-text-primary placeholder-text-muted backdrop-blur-sm"
              />
              <button className="px-6 py-3 bg-accent-green text-bg-primary font-semibold rounded-lg hover:bg-accent-green/90 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}