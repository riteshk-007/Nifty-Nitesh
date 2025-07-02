"use client";
import React, { useState, useEffect } from "react";
import { HiStar, HiSparkles } from "react-icons/hi2";
import {
  FaChartLine,
  FaTrophy,
  FaRocket,
  FaEye,
  FaFire,
  FaBolt,
  FaArrowTrendUp,
} from "react-icons/fa6";

export const ProductCard = ({ product, index, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`group relative flex-shrink-0 w-80 h-96 transform transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-green-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

      <div className="relative h-full w-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700 group-hover:border-gray-500 transition-all duration-300 group-hover:scale-105">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

        {/* Floating Icon */}
        <div className="absolute top-6 right-6 z-10">
          <div className="w-12 h-12 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <FaChartLine className="text-blue-400 w-5 h-5" />
          </div>
        </div>

        {/* Status Indicator */}
        <div className="absolute top-6 left-6 z-10">
          <div className="flex items-center space-x-2 bg-green-500/20 rounded-full px-3 py-1 border border-green-500/30">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-xs font-semibold">LIVE</span>
          </div>
        </div>

        {/* Mock Chart Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <svg
            width="300"
            height="200"
            viewBox="0 0 300 200"
            className="text-blue-400"
          >
            <path
              d="M10,150 Q50,100 100,120 T200,80 T290,60"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
            />
            <path
              d="M10,180 Q60,140 120,160 T220,120 T290,100"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              opacity="0.5"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <div
            className={`transform transition-all duration-300 ${
              isHovered ? "translate-y-0" : "translate-y-4"
            }`}
          >
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
              {product.title}
            </h3>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <FaArrowTrendUp className="text-green-400 w-4 h-4" />
                <span className="text-green-400 text-sm font-semibold">
                  +15.2%
                </span>
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <HiStar key={i} className="text-yellow-400 w-3 h-3" />
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-3 text-gray-400 text-sm">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span>Real-time</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Active</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-4 h-1 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-400 to-green-400 transition-all duration-1000"
                style={{ width: isHovered ? "85%" : "0%" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Hover Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        ></div>
      </div>
    </div>
  );
};

export const Header = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const stats = [
    {
      icon: <FaChartLine />,
      text: "₹50L+ Monthly Volume",
      color: "text-blue-400",
    },
    { icon: <FaTrophy />, text: "95% Success Rate", color: "text-yellow-400" },
    {
      icon: <HiSparkles />,
      text: "500+ Active Traders",
      color: "text-green-400",
    },
    { icon: <FaRocket />, text: "24/7 Live Support", color: "text-purple-400" },
  ];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [stats.length]);

  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-32 px-6 w-full">
      <div className="text-center relative z-10">
        {/* Floating Elements */}
        <div className="absolute -top-20 left-1/4 w-4 h-4 bg-blue-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute -top-10 right-1/3 w-3 h-3 bg-green-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-32 left-1/6 w-2 h-2 bg-yellow-400 rounded-full animate-bounce opacity-60"></div>

        {/* Animated Badge */}
        <div
          className={`inline-flex items-center space-x-3 bg-white/5 backdrop-blur-xl rounded-full px-8 py-4 border border-white/10 mb-12 transform transition-all duration-1000 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative">
            <HiStar className="text-yellow-400 w-5 h-5" />
            <div className="absolute inset-0 bg-yellow-400 rounded-full blur-md opacity-30 animate-pulse"></div>
          </div>
          <span className="text-white text-sm font-semibold tracking-wide">
            PROVEN TRADING RESULTS
          </span>
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <HiStar key={i} className="text-yellow-400 w-3 h-3" />
            ))}
          </div>
        </div>

        {/* Main Heading */}
        <div
          className={`transform transition-all duration-1000 delay-300 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black mb-8 leading-tight">
            <div className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
                Global Markets
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 rounded-lg blur-lg opacity-20 animate-pulse"></div>
            </div>
            <br />
            <span className="text-white">In Your</span>
            <br />
            <span className="relative">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Hands
              </span>
              <FaBolt className="inline-block ml-4 text-yellow-400 animate-bounce" />
            </span>
          </h1>
        </div>

        {/* Enhanced Subheading */}
        <div
          className={`transform transition-all duration-1000 delay-500 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="max-w-4xl mx-auto text-xl md:text-2xl text-gray-300 leading-relaxed mb-16 font-light">
            Master the art of trading with our proven demand-supply strategies.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
              Get real-time market insights and professional-grade analysis
              tools
            </span>
            <br />
            used by institutional traders worldwide.
          </p>
        </div>

        {/* Dynamic Stats Carousel */}
        <div
          className={`transform transition-all duration-1000 delay-700 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`flex items-center space-x-3 px-6 py-4 rounded-2xl backdrop-blur-xl border transition-all duration-500 ${
                  currentStat === index
                    ? "bg-white/10 border-white/30 scale-110"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                }`}
              >
                <div
                  className={`${
                    stat.color
                  } text-2xl transition-transform duration-300 ${
                    currentStat === index ? "scale-125" : ""
                  }`}
                >
                  {stat.icon}
                </div>
                <span className="text-white font-semibold text-lg">
                  {stat.text}
                </span>
                {currentStat === index && (
                  <div className="flex space-x-1">
                    <div className="w-1 h-1 bg-current rounded-full animate-bounce"></div>
                    <div className="w-1 h-1 bg-current rounded-full animate-bounce"></div>
                    <div className="w-1 h-1 bg-current rounded-full animate-bounce"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Trust Indicators */}
        <div
          className={`transform transition-all duration-1000 delay-900 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex flex-wrap justify-center gap-8 text-gray-400">
            {[
              {
                icon: <FaBolt />,
                text: "NSE Certified",
                color: "text-blue-400",
              },
              {
                icon: <FaFire />,
                text: "Professional Traders",
                color: "text-red-400",
              },
              {
                icon: <FaEye />,
                text: "24/7 Live Monitoring",
                color: "text-green-400",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 group cursor-pointer"
              >
                <div
                  className={`${item.color} transition-transform group-hover:scale-125`}
                >
                  {item.icon}
                </div>
                <span className="group-hover:text-white transition-colors">
                  {item.text}
                </span>
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full animate-pulse opacity-60"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HeroParallax = ({ products = [] }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    setIsVisible(true);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mock products if none provided
  const mockProducts = [
    {
      title: "NSE Live Charts",
      thumbnail: "/api/placeholder/400/300",
      link: "#",
    },
    {
      title: "Options Analysis",
      thumbnail: "/api/placeholder/400/300",
      link: "#",
    },
    {
      title: "Futures Trading",
      thumbnail: "/api/placeholder/400/300",
      link: "#",
    },
    {
      title: "Swing Strategies",
      thumbnail: "/api/placeholder/400/300",
      link: "#",
    },
    {
      title: "Intraday Signals",
      thumbnail: "/api/placeholder/400/300",
      link: "#",
    },
    {
      title: "Risk Management",
      thumbnail: "/api/placeholder/400/300",
      link: "#",
    },
    {
      title: "Portfolio Tracker",
      thumbnail: "/api/placeholder/400/300",
      link: "#",
    },
    {
      title: "Market Scanner",
      thumbnail: "/api/placeholder/400/300",
      link: "#",
    },
    {
      title: "News Analytics",
      thumbnail: "/api/placeholder/400/300",
      link: "#",
    },
    { title: "Price Alerts", thumbnail: "/api/placeholder/400/300", link: "#" },
    {
      title: "Backtesting Tool",
      thumbnail: "/api/placeholder/400/300",
      link: "#",
    },
    {
      title: "Social Trading",
      thumbnail: "/api/placeholder/400/300",
      link: "#",
    },
    {
      title: "AI Predictions",
      thumbnail: "/api/placeholder/400/300",
      link: "#",
    },
    {
      title: "Market Heat Map",
      thumbnail: "/api/placeholder/400/300",
      link: "#",
    },
    {
      title: "Trading Journal",
      thumbnail: "/api/placeholder/400/300",
      link: "#",
    },
  ];

  const displayProducts = products.length > 0 ? products : mockProducts;
  const displayFirstRow = displayProducts.slice(0, 5);
  const displaySecondRow = displayProducts.slice(5, 10);
  const displayThirdRow = displayProducts.slice(10, 15);

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-gradient-to-r from-yellow-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <Header />

      {/* Parallax Cards Section */}
      <div className="relative z-10 pb-20">
        {/* First Row */}
        <div
          className="flex space-x-8 mb-12 px-8"
          style={{
            transform: `translateX(${scrollY * 0.5}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          {displayFirstRow.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              index={index}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Second Row - Reverse */}
        <div
          className="flex space-x-8 mb-12 px-8"
          style={{
            transform: `translateX(${-scrollY * 0.3}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          {displaySecondRow.map((product, index) => (
            <ProductCard
              key={index + 5}
              product={product}
              index={index + 5}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Third Row */}
        <div
          className="flex space-x-8 px-8"
          style={{
            transform: `translateX(${scrollY * 0.4}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          {displayThirdRow.map((product, index) => (
            <ProductCard
              key={index + 10}
              product={product}
              index={index + 10}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroParallax;
