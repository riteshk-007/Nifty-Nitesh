"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Users,
  CandlestickChartIcon as Candlestick,
  MessageCircle,
  TrendingUp,
  Headphones,
  Target,
  Sparkles,
  Shield,
  Award,
  Zap,
  Star,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const FeaturesShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [counters, setCounters] = useState({
    traders: 0,
    volume: 0,
    success: 0,
    support: 24,
  });

  const [isVisible, setIsVisible] = useState(false);

  // Counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          startCountAnimation();
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("trust-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [isVisible]);

  const startCountAnimation = () => {
    const targets = {
      traders: 2500,
      volume: 95,
      success: 98,
      support: 24,
    };

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = Math.min(currentStep / steps, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCounters({
        traders: Math.floor(targets.traders * easeOutQuart),
        volume: Math.floor(targets.volume * easeOutQuart),
        success: Math.floor(targets.success * easeOutQuart),
        support: targets.support,
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  };

  const mainFeatures = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description:
        "AI-powered market analysis with real-time insights and predictive algorithms",
      color: "text-emerald-400",
      bgColor: "from-emerald-500/10 to-green-500/10",
      borderColor: "border-emerald-500/30",
      benefits: [
        "Real-time Data",
        "AI Predictions",
        "Custom Alerts",
        "Market Trends",
      ],
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description:
        "Personal guidance from professional traders with 10+ years experience",
      color: "text-green-400",
      bgColor: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/30",
      benefits: [
        "1-on-1 Sessions",
        "Group Calls",
        "Strategy Review",
        "Performance Analysis",
      ],
    },
    {
      icon: Candlestick,
      title: "Trading Platform",
      description:
        "Professional-grade platform with advanced charting and execution tools",
      color: "text-emerald-500",
      bgColor: "from-emerald-600/10 to-green-600/10",
      borderColor: "border-emerald-600/30",
      benefits: [
        "Advanced Charts",
        "Fast Execution",
        "Risk Management",
        "Mobile Access",
      ],
    },
    {
      icon: MessageCircle,
      title: "Signal Channel",
      description:
        "Premium trading signals with 95%+ accuracy and instant notifications",
      color: "text-green-500",
      bgColor: "from-green-600/10 to-emerald-600/10",
      borderColor: "border-green-600/30",
      benefits: [
        "High Accuracy",
        "Instant Alerts",
        "Entry/Exit Points",
        "Risk Levels",
      ],
    },
  ];

  const additionalFeatures = [
    {
      icon: TrendingUp,
      title: "Market Analysis",
      description: "Daily market insights and trading opportunities",
      color: "text-emerald-400",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock assistance and guidance",
      color: "text-green-400",
    },
    {
      icon: Target,
      title: "Goal Tracking",
      description: "Monitor your progress and achievements",
      color: "text-emerald-500",
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Advanced tools to protect your capital",
      color: "text-green-500",
    },
  ];

  const trustStats = [
    {
      number: counters.traders,
      suffix: "+",
      label: "Active Students",
      icon: Users,
      color: "text-emerald-400",
    },
    {
      number: counters.volume,
      suffix: "%",
      label: "Success Rate",
      icon: Award,
      color: "text-green-400",
    },
    {
      number: counters.success,
      suffix: "%",
      label: "Satisfaction",
      icon: Star,
      color: "text-emerald-500",
    },
    {
      number: counters.support,
      suffix: "/7",
      label: "Support",
      icon: Shield,
      color: "text-green-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full bg-black py-16 md:py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 md:w-96 h-64 md:h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 md:w-80 h-48 md:h-80 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-56 md:w-72 h-56 md:h-72 bg-emerald-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 md:px-6 py-2 mb-4 md:mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 font-semibold text-xs md:text-sm uppercase tracking-wider">
              Platform Features
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-white">Everything You Need to </span>
            <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
              Succeed
            </span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Comprehensive trading education platform with advanced tools, expert
            mentorship, and proven strategies
          </motion.p>
        </motion.div>

        {/* Main Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <Card
                className={`h-full bg-gradient-to-br ${feature.bgColor} border-2 ${feature.borderColor} backdrop-blur-sm hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-500`}
              >
                <CardContent className="p-6">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 border ${feature.borderColor}`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </motion.div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {feature.description}
                  </p>

                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-xs text-gray-400"
                      >
                        <CheckCircle className="w-3 h-3 text-emerald-500 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Content Section with Image */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center mb-16 md:mb-20">
          {/* Additional Features */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 mb-4">
                Additional Benefits
              </Badge>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Complete Trading{" "}
                <span className="text-emerald-400">Ecosystem</span>
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Our platform provides everything you need for successful
                trading, from education to execution, all in one place.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {additionalFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3 p-4 rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300"
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <motion.div
                    className="flex-shrink-0 p-2 bg-emerald-500/20 rounded-lg border border-emerald-500/30"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className={`w-5 h-5 ${feature.color}`} />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-white text-sm mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl shadow-emerald-500/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                width={600}
                height={400}
                src="/placeholder.svg?height=400&width=600"
                className="w-full h-auto object-cover"
                alt="Trading Platform Interface"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Overlay Badge */}
              <motion.div
                className="absolute top-4 left-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Badge className="bg-emerald-500/90 text-white">
                  Professional Platform
                </Badge>
              </motion.div>
            </motion.div>

            {/* Floating Stats */}
            <motion.div
              className="absolute -top-6 -right-6 hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="bg-gradient-to-br from-gray-900/90 to-black/90 border border-emerald-500/30 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-emerald-400 mb-1">
                    ₹10L+
                  </div>
                  <div className="text-xs text-gray-300">Avg. Portfolio</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6 hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="bg-gradient-to-br from-gray-900/90 to-black/90 border border-green-500/30 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <motion.div
                      className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Zap className="text-white w-5 h-5" />
                    </motion.div>
                    <div>
                      <div className="text-lg font-bold text-green-400">
                        Fast
                      </div>
                      <div className="text-xs text-gray-300">Execution</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="mb-12 md:mb-16"
          id="trust-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-emerald-500/20 backdrop-blur-sm">
            <CardContent className="p-6 md:p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Trusted by <span className="text-emerald-400">Thousands</span>
                </h3>
                <p className="text-gray-400">
                  Join our growing community of successful traders
                </p>
              </div>

              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {trustStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="text-center group"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      className="w-12 md:w-16 h-12 md:h-16 mx-auto mb-3 md:mb-4 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-2xl flex items-center justify-center border border-emerald-500/20"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <stat.icon
                        className={`w-6 md:w-8 h-6 md:h-8 ${stat.color}`}
                      />
                    </motion.div>
                    <motion.div
                      className={`text-2xl md:text-3xl font-bold ${stat.color} mb-1 md:mb-2`}
                      key={stat.number}
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {stat.number}
                      {stat.suffix}
                    </motion.div>
                    <div className="text-gray-400 text-xs md:text-sm font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="inline-block bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 backdrop-blur-sm">
            <CardContent className="px-6 md:px-8 py-4">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <motion.div
                  className="w-3 h-3 bg-emerald-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                />
                <span className="text-white font-medium text-sm md:text-base text-center">
                  Ready to start your trading journey?
                </span>
                <motion.div
                  className="w-3 h-3 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 2,
                    delay: 1,
                  }}
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;
