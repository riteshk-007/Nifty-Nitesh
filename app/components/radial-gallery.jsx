"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { TrendingUp, BarChart3, Target, Zap } from "lucide-react";

const chartData = [
  {
    id: 1,
    title: "NIFTY 50 & BANK NIFTY",
    description: "Major Index Analysis",
    width: 280,
    img: "/chart/NIFTY50 & BANK NIFTY.png",
    category: "Indices",
    icon: TrendingUp,
  },
  {
    id: 2,
    title: "HDFC BANK",
    description: "Banking Sector Leader",
    width: 220,
    img: "/chart/HDFCBANK.png",
    category: "Banking",
    icon: BarChart3,
  },
  {
    id: 3,
    title: "ICICI BANK",
    description: "Private Sector Banking",
    width: 200,
    img: "/chart/ICICIBANK.png",
    category: "Banking",
    icon: BarChart3,
  },
  {
    id: 4,
    title: "TATA STEEL",
    description: "Metal & Mining Sector",
    width: 240,
    img: "/chart/TATASTEEL.png",
    category: "Metals",
    icon: Target,
  },
  {
    id: 5,
    title: "ACC",
    description: "Cement Industry",
    width: 180,
    img: "/chart/ACC.png",
    category: "Cement",
    icon: Zap,
  },
  {
    id: 6,
    title: "POWERGRID",
    description: "Power Sector",
    width: 200,
    img: "/chart/POWERGRID.png",
    category: "Power",
    icon: TrendingUp,
  },
  {
    id: 7,
    title: "SRF",
    description: "Chemical Industry",
    width: 190,
    img: "/chart/SRF.png",
    category: "Chemicals",
    icon: BarChart3,
  },
  {
    id: 8,
    title: "PIDILIT IND",
    description: "Paints & Chemicals",
    width: 210,
    img: "/chart/PIDILITIND.png",
    category: "Chemicals",
    icon: Target,
  },
];

const RadialGallery = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  // Handle ESC key to close modal
  React.useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        setActiveItem(null);
      }
    };

    if (activeItem) {
      document.addEventListener("keydown", handleEscKey);
      return () => document.removeEventListener("keydown", handleEscKey);
    }
  }, [activeItem]);

  // Safe close function
  const handleClose = () => {
    setActiveItem(null);
  };

  // Handle small chart click
  const handleSmallChartClick = (item) => {
    if (activeItem) {
      setActiveItem(item);
    }
  };

  return (
    <section className="w-full py-20 bg-gradient-to-b from-black to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-full px-8 py-4 mb-8 text-white"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <TrendingUp className="w-6 h-6 text-emerald-400" />
            </motion.div>
            <span className="text-emerald-400 font-bold text-lg uppercase tracking-wider">
              Live Chart Analysis
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-600 bg-clip-text text-transparent">
              Market Charts
            </span>
            <br />
            <span className="text-white">Gallery</span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Explore our comprehensive chart analysis covering major indices,
            banking stocks, and sector leaders. Click on any chart to view
            detailed analysis.
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="h-full w-full flex flex-col gap-8 relative">
          <motion.div
            className={cn("flex flex-col gap-8")}
            layout
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/* First Row */}
            <motion.div
              className={cn("flex items-center justify-center gap-6 flex-wrap")}
              animate={{
                opacity: activeItem !== null ? 0 : 1,
              }}
            >
              {chartData.slice(0, 3).map((item, index) => (
                <ChartCard
                  item={item}
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  index={index}
                />
              ))}
            </motion.div>

            {/* Second Row */}
            <motion.div
              className={cn("flex items-center justify-center gap-6 flex-wrap")}
              animate={{
                opacity: activeItem !== null ? 0 : 1,
              }}
            >
              {chartData.slice(3, 6).map((item, index) => (
                <ChartCard
                  item={item}
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  index={index + 3}
                />
              ))}
            </motion.div>

            {/* Third Row */}
            <motion.div
              className={cn("flex items-center justify-center gap-6 flex-wrap")}
              animate={{
                opacity: activeItem !== null ? 0 : 1,
              }}
            >
              {chartData.slice(6, 8).map((item, index) => (
                <ChartCard
                  item={item}
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  index={index + 6}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Active Item Overlay */}
          {activeItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full overflow-hidden bg-black/95 backdrop-blur-sm"
            >
              {/* Modal Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-6 right-6 z-50 w-14 h-14 bg-black/60 hover:bg-red-500/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:border-red-400/50 transition-all duration-300 group/close"
                title="Close (ESC)"
                style={{ pointerEvents: "auto" }}
              >
                <svg
                  className="w-7 h-7 text-white group-hover/close:text-white transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>

                {/* Tooltip */}
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover/close:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Close (ESC)
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/80 rotate-45"></div>
                </div>
              </button>

              {/* Background Click to Close */}
              <div
                className="absolute inset-0 z-10"
                onClick={handleClose}
                style={{ pointerEvents: "auto" }}
              ></div>

              <AnimatePresence mode="popLayout">
                <motion.div
                  key={activeItem.id}
                  className="w-full h-full max-h-min flex flex-col lg:flex-row items-center justify-center gap-8 p-6 relative z-20"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  layout
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Main Chart */}
                  <motion.div
                    layoutId={`card-${activeItem.id}`}
                    className="w-full max-w-2xl h-[500px] rounded-3xl overflow-hidden z-10 relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-3xl"></div>
                    <img
                      src={activeItem.img}
                      alt={activeItem.title}
                      className="w-full h-full object-cover rounded-3xl"
                    />

                    {/* Close Button */}
                    <motion.button
                      onClick={handleClose}
                      className="absolute top-4 right-4 w-12 h-12 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:border-emerald-400/50 transition-all duration-300 group/close"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg
                        className="w-6 h-6 text-white group-hover/close:text-emerald-400 transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </motion.button>
                  </motion.div>

                  {/* Chart Info */}
                  <motion.div
                    className="flex flex-col gap-6 justify-center items-start max-w-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.15 }}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-xl flex items-center justify-center border border-emerald-500/30">
                          <activeItem.icon className="w-6 h-6 text-emerald-400" />
                        </div>
                        <div>
                          <div className="text-emerald-400 text-sm font-semibold uppercase tracking-wider">
                            {activeItem.category}
                          </div>
                          <div className="text-white text-2xl font-bold">
                            {activeItem.title}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 text-lg leading-relaxed">
                        {activeItem.description}
                      </p>

                      <div className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-xl p-4">
                        <h4 className="text-emerald-400 font-semibold mb-2">
                          Technical Analysis
                        </h4>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• Support & Resistance Levels</li>
                          <li>• Trend Analysis & Patterns</li>
                          <li>• Volume & Price Action</li>
                          <li>• Risk Management Zones</li>
                        </ul>
                      </div>
                    </div>

                    {/* Other Charts */}
                    <div className="w-full">
                      <h4 className="text-white font-semibold mb-4">
                        Other Charts
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {chartData
                          .filter((item) => item.id !== activeItem.id)
                          .slice(0, 4)
                          .map((item) => (
                            <ChartCard
                              key={item.id}
                              item={item}
                              onClick={() => handleSmallChartClick(item)}
                              isSmall
                            />
                          ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

const ChartCard = ({ item, onClick, isSmall = false, index = 0 }) => {
  const IconComponent = item.icon;

  return (
    <motion.div
      style={{
        width: isSmall ? 120 : item.width,
        height: isSmall ? 80 : 200,
      }}
      className={cn(
        "rounded-2xl cursor-pointer overflow-hidden relative group",
        "bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50",
        "hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/20",
        "transition-all duration-300"
      )}
      layoutId={isSmall ? undefined : `card-${item.id}`}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.05,
        y: -5,
        transition: { duration: 0.3 },
      }}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Chart Image */}
      <motion.img
        src={item.img}
        alt={item.title}
        className="w-full h-full object-cover rounded-2xl"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-2 mb-2">
            <IconComponent className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              {item.category}
            </span>
          </div>
          <h3 className="text-white font-bold text-sm leading-tight">
            {item.title}
          </h3>
          <p className="text-gray-300 text-xs mt-1">{item.description}</p>
        </div>
      </div>

      {/* Click Indicator */}
      <div className="absolute top-3 right-3 w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
      </div>
    </motion.div>
  );
};

export default RadialGallery;
