"use client";

import { useState, useEffect } from "react";
import {
  TrendingUp,
  Star,
  Award,
  Shield,
  Target,
  CheckCircle,
  Brain,
  Search,
  BarChart3,
  MessageSquare,
} from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

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

    const element = document.getElementById("about-stats");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [isVisible]);

  const startCountAnimation = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  };

  const features = [
    {
      icon: TrendingUp,
      title: "Built by a Full-Time Trader",
      description:
        "Not an institute or marketing team. Real trading experience with live market exposure and practical knowledge.",
      color: "text-emerald-400",
      bgColor: "from-emerald-500/10 to-green-500/10",
      iconBg: "bg-emerald-500/20",
      class: "col-span-1"
    },
    {
      icon: Brain,
      title: "Smart Money Concepts",
      description:
        "Learn how institutional players move the market and trap retail traders. Understand liquidity zones and footprints.",
      color: "text-green-400",
      bgColor: "from-green-500/10 to-emerald-500/10",
      iconBg: "bg-green-500/20",
      class: "col-span-1"
    },
    {
      icon: Target,
      title: "Trade Planning + Risk Management",
      description:
        "Systematic approach to trading with proper risk management. No gambling, just structured and logical trading.",
      color: "text-emerald-500",
      bgColor: "from-emerald-600/10 to-green-600/10",
      iconBg: "bg-emerald-600/20",
      class: "col-span-2 md:col-span-1"
    },
  ];

  const tradingConcepts = [
    {
      icon: Search,
      concept: "Demand-Supply Zones",
      description: "Core of price action and entries",
      color: "text-emerald-400",
    },
    {
      icon: Brain,
      concept: "Smart Money Concepts",
      description: "Understand how big players trap retail",
      color: "text-green-400",
    },
    {
      icon: Shield,
      concept: "Risk Management",
      description: "Protect your capital with systemized exits",
      color: "text-green-500",
    },
    {
      icon: BarChart3,
      concept: "Institutional Price Levels",
      description: "Trade where volume actually matters",
      color: "text-emerald-600",
    },
  ];

  const testimonials = [
    {
      text: "Earlier I used to trade blindly. Nitesh bhai made me see charts differently — now I plan like a pro.",
      author: "Arjun K.",
      location: "Delhi",
      role: "Trader",
    },
    {
      text: "No fake income screenshots, just logic and skill. Best learning experience for real traders.",
      author: "Priya R.",
      location: "Pune",
      role: "Professional Trader",
    },
  ];

  const trustBadges = [
    { icon: Shield, text: "Real Trader", color: "text-emerald-400" },
    { icon: Award, text: "No Fake Promises", color: "text-green-400" },
    { icon: CheckCircle, text: "Proven Concepts", color: "text-emerald-500" },
  ];

  return (
    <div className="w-full bg-black py-12 sm:py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 sm:w-96 h-72 sm:h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-60 sm:w-80 h-60 sm:h-80 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-48 sm:w-72 h-48 sm:h-72 bg-emerald-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6 hover:scale-105 transition-transform duration-300">
            <Target className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Learn from a Real Trader
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 px-2">
            <span className="text-white">Learn </span>
            <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
              Demand-Supply Trading
            </span>
            <span className="text-white block sm:inline">
              {" "}
              from a Full-Time Trader
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto px-4">
            Build your trading edge with real market concepts like Smart Money,
            Liquidity Zones, and Institutional Footprints. No fluff. No false
            promises. Just what works.
          </p>
        </div>

        {/* About Me Section */}
        <div className="mb-12 sm:mb-20">
          <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300">
            <div className="text-center mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-emerald-400 mb-4 flex items-center justify-center flex-wrap gap-2">
                <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8" />
                About This Platform
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed text-center">
                &quot;This platform is built by a trader, for traders. After
                years of struggling with fake tips, confusing strategies, and
                YouTube noise — I built a space where real concepts matter. My
                name is{" "}
                <span className="text-emerald-400 font-semibold">
                  Nifty Nitesh
                </span>
                , and I trade demand-supply &amp; smart money concepts
                full-time. Here, you&apos;ll learn what actually works — with
                logic, risk management, and structure. No paid calls. Just real
                trading.&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-emerald-500/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center justify-center flex-wrap gap-2">
              <Target className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400" />
              Our Mission
            </h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-4xl mx-auto">
              To make trading simple, structured, and stress-free — by teaching
              concepts that real traders use. No hype. No unrealistic profits.
              Just practical learning that builds confidence in your own
              process.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center mb-16 sm:mb-20">
          {/* Features Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">
              Why Choose{" "}
              <span className="text-emerald-400">This Platform?</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${feature.bgColor} border border-emerald-500/20 backdrop-blur-sm hover:shadow-lg hover:shadow-emerald-500/10 hover:scale-[1.02] hover:translate-x-1 transition-all duration-300 rounded-xl p-4 sm:p-6 group ${feature.class}`}
                >
                  <div className="flex items-start space-x-3 sm:space-x-4 flex-col md:flex-row">
                    <div
                      className={`flex-shrink-0 p-2 sm:p-3 ${feature.iconBg} rounded md:rounded-xl border border-emerald-500/20 group-hover:rotate-12 transition-transform duration-300 mx-auto md:mx-0 my-2 md:my-0`}
                    >
                      <feature.icon
                        className={`w- h-4 sm:w-6 sm:h-6 ${feature.color}`}
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2 text-sm sm:text-lg group-hover:text-emerald-400 transition-colors duration-300 text-center md:text-left">
                        {feature.title}
                      </h4>
                      <p className="text-xs sm:text-base text-gray-300 leading-relaxed text-center md:text-left">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trading Concepts */}
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">
              <span className="text-emerald-400">Learn These Concepts</span>{" "}
              Inside
            </h3>

            <div className=" grid grid-cols-2 md:grid-cols-1 gap-4">
              {tradingConcepts.map((concept, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-gray-900/50 to-black/50 border border-emerald-500/20 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:scale-[1.02] hover:border-emerald-400/40 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <concept.icon
                      className={`w- h-4 sm:w-6 sm:h-6 ${concept.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                    <div>
                      <h4 className="font-semibold text-white text-sm sm:text-base mb-1 group-hover:text-emerald-400 transition-colors duration-300">
                        {concept.concept}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-400">
                        {concept.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16 sm:mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
            What <span className="text-emerald-400">Students Say</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 hover:scale-[1.02] hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-4">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300"
                        style={{ transitionDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed italic">
                    &quot;{testimonial.text}&quot;
                  </p>
                </div>
                <div className="border-t border-emerald-500/20 pt-4">
                  <p className="text-emerald-400 font-semibold text-sm sm:text-base group-hover:text-emerald-300 transition-colors duration-300">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    {testimonial.role}, {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 backdrop-blur-sm rounded-2xl px-6 sm:px-8 py-4">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
              {trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 hover:scale-110 transition-transform duration-300"
                >
                  <div
                    className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-500 rounded-full animate-pulse"
                    style={{
                      animationDelay: `${index * 0.5}s`,
                      animationDuration: "2s",
                    }}
                  />
                  <badge.icon
                    className={`w-3 h-3 sm:w-4 sm:h-4 ${badge.color}`}
                  />
                  <span className="text-gray-300 font-medium text-xs sm:text-sm">
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
