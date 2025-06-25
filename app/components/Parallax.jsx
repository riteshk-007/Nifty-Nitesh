"use client";
import { useState, useEffect } from "react";
import { FaExternalLinkAlt, FaChartLine, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

export function HeroParallaxDemo() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const charts = [
    {
      title: "NIFTY50 & BANK NIFTY",
      subtitle: "Index Analysis",
      link: "https://in.tradingview.com/chart/",
      image: "/chart/NIFTY50 & BANK NIFTY.png",
    },
    {
      title: "ICICI BANK",
      subtitle: "Banking Sector",
      link: "https://in.tradingview.com/chart/",
      image: "/chart/ICICIBANK.png",
    },
    {
      title: "HDFC BANK",
      subtitle: "Technical Analysis",
      link: "https://in.tradingview.com/chart/",
      image: "/chart/HDFCBANK.png",
    },
    {
      title: "TATA STEEL",
      subtitle: "Metal Sector",
      link: "https://in.tradingview.com/chart/",
      image: "/chart/TATASTEEL.png",
    },
    {
      title: "ACC LIMITED",
      subtitle: "Cement Sector",
      link: "https://in.tradingview.com/chart/",
      image: "/chart/ACC.png",
    },
    {
      title: "POWER GRID",
      subtitle: "Power Sector",
      link: "https://in.tradingview.com/chart/",
      image: "/chart/POWERGRID.png",
    },
    {
      title: "MANAPPURAM",
      subtitle: "Financial Services",
      link: "https://in.tradingview.com/chart/",
      image: "/chart/MANAPPURAM.png",
    },
    {
      title: "BANK OF BARODA",
      subtitle: "PSU Banking",
      link: "https://in.tradingview.com/chart/",
      image: "/chart/BANKBARODA.png",
    },
    {
      title: "MFSL",
      subtitle: "Financial Services",
      link: "https://in.tradingview.com/chart/",
      image: "/chart/MFSL.png",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-semibold mb-4 uppercase tracking-wider text-sm">
            PROFESSIONAL ANALYSIS
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-text-primary">
            Chart <span className="gradient-text">Analysis</span> Gallery
          </h2>
          <p className="text-text-secondary text-xl max-w-3xl mx-auto">
            Explore our comprehensive technical analysis and market insights
            across various sectors
          </p>
        </div>

        {/* Charts Grid with Parallax Effect */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        >
          {charts.map((chart, index) => (
            <div
              key={index}
              className="group relative glass-card p-0 border border-border-primary overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-accent/20"
              style={{
                transform: `translateY(${scrollY * (0.05 * (index % 3))}px)`,
              }}
            >
              {/* Chart Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={chart.image}
                  alt={chart.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Chart Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-accent/20 backdrop-blur-md rounded-full flex items-center justify-center border border-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <FaChartLine className="w-5 h-5 text-accent" />
                </div>

                {/* External Link Button */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <a
                    href={chart.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors duration-300"
                  >
                    <FaExternalLinkAlt className="w-4 h-4 text-primary-dark" />
                  </a>
                </div>
              </div>

              {/* Chart Info */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-accent text-sm font-semibold uppercase tracking-wider">
                    {chart.subtitle}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                  {chart.title}
                </h3>

                {/* Action Button */}
                <a
                  href={chart.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors duration-300"
                >
                  <span className="font-semibold">View Analysis</span>
                  <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
