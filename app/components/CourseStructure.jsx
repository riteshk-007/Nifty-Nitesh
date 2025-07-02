"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  CheckCircle,
  ChevronRight,
  ChevronDown,
  Play,
  BookOpen,
  Target,
  Sparkles,
  Users,
  Award,
  TrendingUp,
} from "lucide-react";
import { useRef, useState } from "react";

const CourseStructure = ({ showTitle = true, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [expandedCard, setExpandedCard] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const courseStructure = [
    {
      class: "Class 01",
      title: "Foundation of Technical Analysis",
      topics: [
        "Candle Formation & Patterns",
        "Exciting & Base Candle Identification",
        "Normal, Strong, Very Strong Zones",
        "Market Structure Basics",
        "Price Action Fundamentals",
      ],
      icon: BookOpen,
    },
    {
      class: "Class 02",
      title: "Zone Analysis Deep Dive",
      topics: [
        "Normal, Strong, Very Strong Zones Classification",
        "SBIN Live Example Walkthrough",
        "Zone Strength Assessment",
        "Historical Zone Performance",
        "Zone Invalidation Rules",
      ],
      icon: Target,
    },
    {
      class: "Class 03",
      title: "Demand Zone Mastery",
      topics: [
        "How to Mark Perfect Demand Zones",
        "Multiple Timeframe Demand Analysis",
        "Demand Zone Entry Strategies",
        "Volume Confirmation Techniques",
        "Failed Demand Zone Recognition",
      ],
      icon: TrendingUp,
    },
    {
      class: "Class 04",
      title: "Supply Zone & Risk Management",
      topics: [
        "How to Mark Precise Supply Zones",
        "Entry and Stop Loss Placement",
        "Risk-Reward Ratio Optimization",
        "Position Sizing Strategies",
        "Trade Management Rules",
      ],
      icon: Award,
    },
    {
      class: "Class 05",
      title: "Advanced Zone Marking",
      topics: [
        "Exceptional Marking Techniques",
        "Complex Market Structure Analysis",
        "Multi-Touch Zone Validation",
        "Institutional Level Identification",
        "Advanced Pattern Recognition",
      ],
      icon: Sparkles,
    },
    {
      class: "Class 06",
      title: "Market Psychology & Power Analysis",
      topics: [
        "Wick to Wick Candle Breakdown",
        "Market Psychology Deep Dive",
        "Without Base – Which Time Frame is Powerful (PW)",
        "Institutional vs Retail Behavior",
        "Sentiment Analysis Techniques",
      ],
      icon: Users,
    },
    {
      class: "Class 07",
      title: "Trading Psychology Mastery",
      topics: [
        "Emotional Control Strategies",
        "Fear and Greed Management",
        "Discipline Development",
        "Psychological Biases in Trading",
        "Mental Preparation Techniques",
      ],
      icon: CheckCircle,
    },
    {
      class: "Class 08",
      title: "Advanced Market Concepts",
      topics: [
        "Closing Concepts & Market Sessions",
        "Significant Gap Analysis",
        "Pre-Market & After-Hours Trading",
        "Gap Fill Probability",
        "Session-Based Strategies",
      ],
      icon: CheckCircle,
    },
    {
      class: "Class 09",
      title: "Origin & Distribution Analysis",
      topics: [
        "Origin of Buy/Sell Pressure",
        "Distribution Phase Identification",
        "Garbage Area Recognition",
        "Accumulation vs Distribution",
        "Smart Money Tracking",
      ],
      icon: TrendingUp,
    },
    {
      class: "Class 10",
      title: "Multi-Timeframe Analysis",
      topics: [
        "Trend Analysis Across Timeframes",
        "Use of Multiple Time Frames",
        "Top-Down Analysis Approach",
        "Timeframe Correlation",
        "Optimal Entry Timing",
      ],
      icon: Target,
    },
    {
      class: "Class 11",
      title: "Trade Scoring & Strategy",
      topics: [
        "Trade Score Calculation System",
        "Mahabharat Analogy in Trading",
        "Strategic Decision Making",
        "Probability Assessment",
        "Trade Selection Criteria",
      ],
      icon: Award,
    },
    {
      class: "Class 12",
      title: "Emotional Control & Trading Styles",
      topics: [
        "How to Deal with Trading Emotions",
        "Entry Types & Methodologies",
        "Authenticity in Trading Approach",
        "Different Trading Styles",
        "Personal Style Development",
      ],
      icon: Users,
    },
    {
      class: "Class 13",
      title: "Risk Management Strategies",
      topics: [
        "Risk per Trade Calculation",
        "Aggressive & Conservative Trading Approaches",
        "Portfolio Risk Management",
        "Drawdown Management",
        "Capital Preservation Techniques",
      ],
      icon: CheckCircle,
    },
    {
      class: "Class 14",
      title: "Advanced Technical Indicators",
      topics: [
        "Golden & Death Crossover Strategies",
        "EMA 20 Support & Resistance",
        "Advanced Trend Analysis",
        "Indicator Confluence",
        "Custom Indicator Development",
      ],
      icon: TrendingUp,
    },
    {
      class: "Class 16",
      title: "Confirmation Entry Techniques",
      topics: [
        "Multiple Confirmation Strategies",
        "Entry Signal Validation",
        "False Signal Avoidance",
        "Confirmation Hierarchy",
        "Real-Time Decision Making",
      ],
      icon: CheckCircle,
    },
    {
      class: "Class 17",
      title: "Sector Analysis Fundamentals",
      topics: [
        "Sector Rotation Understanding",
        "Leading vs Lagging Sectors",
        "Sector Strength Analysis",
        "Economic Cycle Impact",
        "Sector-Based Stock Selection",
      ],
      icon: Target,
    },
    {
      class: "Class 18",
      title: "Advanced Sector & Pattern Analysis",
      topics: [
        "Sector Analysis Advanced Techniques",
        "Candlestick Pattern Mastery",
        "Pattern Reliability Assessment",
        "Sector Correlation Analysis",
        "Pattern-Based Trading Strategies",
      ],
      icon: Sparkles,
    },
    {
      class: "Class 19",
      title: "Gap Theory & Market Traps",
      topics: [
        "Comprehensive Gap Theory",
        "LOTL (Level of Trap Level) Analysis",
        "Market Trap Identification",
        "Gap Fill Strategies",
        "Trap Avoidance Techniques",
      ],
      icon: Award,
    },
    {
      class: "Class 20",
      title: "Complete Strategy Integration",
      topics: [
        "Putting It All Together",
        "Complete Revision of All Concepts",
        "Strategy Merge & Optimization",
        "Live Trading Simulation",
        "Final Assessment & Feedback",
      ],
      icon: TrendingUp,
    },
  ];

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  return (
    <section
      className={`py-20 relative z-10 min-h-screen bg-black ${className}`}
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 rounded-full px-8 py-4 mb-8 text-white"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-emerald-400" />
              </motion.div>
              <span className="text-emerald-400 font-bold text-lg uppercase tracking-wider">
                Complete Course Curriculum
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-white leading-tight "
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              🚀 20 Days Live{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Trading Mastery
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Platform: Google Meet (Evening Sessions) | From Beginner to Expert
              Level
              <br />
              <span className="text-emerald-400 font-semibold">
                Complete Trading Psychology & Technical Analysis
              </span>
            </motion.p>
          </motion.div>
        }

        <motion.div
          ref={ref}
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseStructure.map((classItem, index) => {
              const IconComponent = classItem.icon;
              const isExpanded = expandedCard === index;

              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 400, damping: 25 },
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative group cursor-pointer"
                  onClick={() => toggleCard(index)}
                >
                  {/* Enhanced Glow Effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${classItem.borderGradient} opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500`}
                    animate={{
                      scale: hoveredIndex === index ? [1, 1.05, 1] : 1,
                      opacity: hoveredIndex === index ? [0.5, 0.8, 0.5] : 0,
                    }}
                    transition={{
                      repeat: hoveredIndex === index ? Infinity : 0,
                      duration: 2,
                    }}
                  />

                  <Card
                    className={`relative bg-gradient-to-br from-gray-900/95 via-black to-gray-900/95 border-2 border-emerald-500/30 overflow-hidden group-hover:border-opacity-50 ${
                      isExpanded
                        ? "border-emerald-500/50 shadow-2xl shadow-emerald-500/20"
                        : ""
                    }`}
                    style={{
                      borderImage: `linear-gradient(135deg, from-emerald-500/5 via-blue-500/10 to-purple-500/5) 1`,
                    }}
                  >
                    {/* Animated Border Gradient */}
                    <div
                      className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500/5 via-blue-500/10 to-purple-500/5 opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
                      style={{ padding: "2px" }}
                    >
                      <div
                        className={`w-full h-full rounded-3xl bg-gradient-to-br from-gray-900/95 via-black to-gray-900/95`}
                      />
                    </div>

                    <CardContent className="relative p-8 z-10">
                      {/* Header Section */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <motion.div
                            className={`w-16 h-16 bg-gradient-to-br from-emerald-500/5 via-blue-500/10 to-purple-500/5 rounded-2xl flex items-center justify-center border-2 border-white/10 group-hover:border-white/20 transition-all duration-300 shadow-lg`}
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 25,
                            }}
                          >
                            <IconComponent className="w-8 h-8 text-white group-hover:text-white transition-colors duration-300" />
                          </motion.div>

                          <div>
                            <Badge className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 text-white border border-emerald-500/40 font-bold px-4 py-2 text-sm hover:from-emerald-400/30 hover:to-blue-400/30 transition-all duration-300">
                              ✅ {classItem.class}
                            </Badge>
                          </div>
                        </div>

                        <motion.div
                          animate={{ rotate: isExpanded ? 90 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col items-center gap-2"
                        >
                          <ChevronRight className="w-6 h-6 text-emerald-400/60 group-hover:text-emerald-400 transition-colors duration-300" />
                        </motion.div>
                      </div>

                      {/* Title */}
                      <motion.h3
                        className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-100 transition-colors duration-300 leading-tight"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.4 }}
                      >
                        {classItem.title}
                      </motion.h3>

                      {/* Topics Preview - Show only first topic when collapsed */}
                      <div className="space-y-3">
                        <motion.div
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.5 }}
                        >
                          <ChevronRight className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-300 text-sm leading-relaxed">
                            {classItem.topics[0]}
                          </span>
                        </motion.div>

                        {!isExpanded && classItem.topics.length > 1 && (
                          <div className="text-emerald-400 text-sm font-medium">
                            +{classItem.topics.length - 1} more topics...
                          </div>
                        )}
                      </div>

                      {/* Expanded Topics */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 space-y-3"
                          >
                            {classItem.topics
                              .slice(1)
                              .map((topic, topicIndex) => (
                                <motion.div
                                  key={topicIndex}
                                  className="flex items-start space-x-3 group/item"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: topicIndex * 0.1 }}
                                  whileHover={{ x: 4 }}
                                >
                                  <ChevronRight className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0 group-hover/item:text-emerald-300 transition-colors duration-200" />
                                  <span className="text-gray-300 text-sm leading-relaxed group-hover/item:text-gray-200 transition-colors duration-200">
                                    {topic}
                                  </span>
                                </motion.div>
                              ))}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Progress Indicator */}
                      <motion.div
                        className="mt-6 pt-4 border-t border-white/10"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: index * 0.1 + 0.8, duration: 0.5 }}
                      >
                        <div className="flex items-center justify-between text-xs text-emerald-400/80">
                          <span className="font-medium">
                            Class {index + 1} of 20
                          </span>
                          <motion.div
                            className="flex space-x-1"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 + 1 }}
                          >
                            {[...Array(3)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="w-2 h-2 bg-emerald-400/40 rounded-full"
                                animate={{
                                  scale:
                                    hoveredIndex === index ? [1, 1.3, 1] : 1,
                                  opacity:
                                    hoveredIndex === index
                                      ? [0.4, 1, 0.4]
                                      : 0.4,
                                }}
                                transition={{
                                  repeat: hoveredIndex === index ? Infinity : 0,
                                  duration: 1,
                                  delay: i * 0.2,
                                }}
                              />
                            ))}
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* Click Hint */}
                      <motion.div
                        className="mt-4 text-center text-xs text-gray-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isExpanded ? 0 : 1 }}
                        transition={{ delay: 2 }}
                      >
                        Click to see all topics
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Enhanced Summary Card */}
          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="relative bg-gradient-to-br from-gray-900/95 via-black to-gray-900/95 border-2 border-emerald-500/30 overflow-hidden">
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-blue-500/10 to-purple-500/5"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ backgroundSize: "200% 100%" }}
              />

              <CardContent className="relative p-12 text-center z-10">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="mb-8"
                >
                  <Calendar className="w-24 h-24 text-emerald-400 mx-auto" />
                </motion.div>

                <motion.h3
                  className="text-4xl md:text-5xl font-bold text-white mb-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  Complete Trading Mastery in{" "}
                  <span className="bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    20 Days
                  </span>
                </motion.h3>

                <motion.p
                  className="text-gray-300 text-lg md:text-xl max-w-5xl mx-auto leading-relaxed mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  From basic candle formation to advanced sector analysis, this
                  comprehensive curriculum covers everything you need to become
                  a profitable trader. Each class builds upon the previous one,
                  ensuring a structured learning experience with real market
                  examples, psychological insights, and hands-on practice
                  sessions.
                </motion.p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                  {[
                    {
                      icon: Play,
                      text: "20 Live Sessions",
                      subtitle: "Interactive Learning",
                      delay: 0.1,
                    },
                    {
                      icon: BookOpen,
                      text: "Complete Curriculum",
                      subtitle: "Beginner to Expert",
                      delay: 0.2,
                    },
                    {
                      icon: Target,
                      text: "Real Examples",
                      subtitle: "Live Market Analysis",
                      delay: 0.3,
                    },
                    {
                      icon: Users,
                      text: "Psychology Focus",
                      subtitle: "Mental Edge Training",
                      delay: 0.4,
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: item.delay, duration: 0.6 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 rounded-2xl p-6 text-center hover:border-emerald-500/40 transition-all duration-300"
                    >
                      <item.icon className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                      <h4 className="text-white font-bold text-lg mb-2">
                        {item.text}
                      </h4>
                      <p className="text-gray-400 text-sm">{item.subtitle}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  {[
                    {
                      text: "✨ Google Meet Sessions & Zoom Sessions",
                      color:
                        "from-emerald-500/20 to-green-500/20 border-emerald-500/40 text-black",
                    },
                    {
                      text: "🎯 Real-Time Market Analysis",
                      color:
                        "from-emerald-500/20 to-green-500/20 border-emerald-500/40 text-black",
                    },
                    {
                      text: "📊 Advanced Technical Analysis",
                      color:
                        "from-emerald-500/20 to-green-500/20 border-emerald-500/40 text-black",
                    },
                    {
                      text: "🧠 Trading Psychology Mastery",
                      color:
                        "from-emerald-500/20 to-green-500/20 border-emerald-500/40 text-black",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <Badge
                        className={`bg-gradient-to-r ${item.color} px-6 py-3 text-sm font-medium border transition-all duration-300 hover:shadow-lg`}
                      >
                        {item.text}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseStructure;
