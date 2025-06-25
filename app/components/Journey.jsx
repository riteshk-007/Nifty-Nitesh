"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Crown,
  CheckCircle,
  Star,
  MessageCircle,
  ArrowRight,
  UserCheck,
  PlayCircle,
  Trophy,
  Sparkles,
  Target,
  BarChart3,
  Shield,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Journey = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [activePackage, setActivePackage] = useState(1);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Auto-advance steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      step: "01",
      title: "Make Your Decision",
      description:
        "Take the leap into financial independence with our proven trading methodology",
      icon: Target,
      color: "from-emerald-400 to-green-500",
      features: ["Goal Setting", "Path Selection", "Mindset Preparation"],
      stats: "2.5K+ Started",
    },
    {
      step: "02",
      title: "Master the Fundamentals",
      description:
        "Deep dive into technical analysis, market psychology, and risk management",
      icon: GraduationCap,
      color: "from-green-500 to-emerald-600",
      features: ["Live Sessions", "Video Library", "Practice Tools"],
      stats: "300+ Hours Content",
    },
    {
      step: "03",
      title: "Live Trading Experience",
      description:
        "Join real-time trading sessions with expert guidance and community support",
      icon: BarChart3,
      color: "from-emerald-600 to-green-700",
      features: ["Real-time Analysis", "Risk Management", "Portfolio Building"],
      stats: "100+ Live Sessions",
    },
    {
      step: "04",
      title: "Achieve Mastery",
      description:
        "Transform into a confident, profitable trader with ongoing mentorship",
      icon: Trophy,
      color: "from-green-700 to-emerald-800",
      features: ["1-on-1 Mentoring", "Advanced Strategies", "Success Tracking"],
      stats: "95% Success Rate",
    },
  ];

  const packages = [
    {
      id: 0,
      name: "Foundation",
      title: "Trading Basics",
      price: "₹1,999",
      originalPrice: "₹3,999",
      duration: "/month",
      popular: false,
      icon: Shield,
      description: "Perfect foundation for aspiring traders",
      features: [
        "Basic Technical Analysis",
        "Risk Management Fundamentals",
        "Live Q&A Sessions",
        "Trading Psychology Basics",
        "Chart Pattern Recognition",
        "Email Support",
        "Mobile App Access",
        "Community Forum Access",
      ],
      stats: { students: "2.5K+", rating: "4.7", duration: "3 Months" },
      gradient: "from-slate-900 to-emerald-900",
      border: "border-emerald-500/30",
    },
    {
      id: 1,
      name: "Professional",
      title: "Complete Mastery",
      price: "₹2,999",
      originalPrice: "₹5,999",
      duration: "/month",
      popular: true,
      icon: Crown,
      description: "Complete trading education with advanced strategies",
      features: [
        "Advanced Technical Analysis",
        "Fundamental Analysis Mastery",
        "Advanced Trading Psychology",
        "Live Market Analysis",
        "Options & Derivatives",
        "Portfolio Management",
        "Advanced Risk Management",
        "Personal Mentorship",
        "WhatsApp Support Group",
        "Lifetime Community Access",
        "All Platform Access",
        "Weekly Live Sessions",
      ],
      stats: { students: "1.8K+", rating: "4.9", duration: "6 Months" },
      gradient: "from-emerald-900 to-green-900",
      border: "border-emerald-400/50",
    },
    {
      id: 2,
      name: "Elite",
      title: "Lifetime Access",
      price: "₹7,999",
      originalPrice: "₹15,999",
      duration: " one-time",
      popular: false,
      icon: Zap,
      description: "Lifetime access to premium content library",
      features: [
        "300+ Premium Video Lessons",
        "Advanced Chart Analysis",
        "Real Trading Case Studies",
        "Market Psychology Deep Dive",
        "Sector Analysis Masterclass",
        "Economic Calendar Training",
        "Downloadable Resources",
        "Lifetime Updates",
        "Priority Support",
        "All Device Access",
        "Offline Download",
        "Completion Certificate",
      ],
      stats: { students: "950+", rating: "4.8", duration: "Lifetime" },
      gradient: "from-green-900 to-emerald-900",
      border: "border-green-500/30",
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-emerald-950/20 to-black" />
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -0.02,
            y: mousePosition.y * -0.02,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-6 py-2 mb-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">
              Step by Step Process
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Your Trading{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
              Journey
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Transform from complete beginner to confident, profitable trader
            with our proven 4-step methodology
          </motion.p>
        </motion.div>

        {/* Steps Section */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group cursor-pointer"
              onMouseEnter={() => setActiveStep(index)}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-emerald-500/50 to-transparent z-0"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                />
              )}

              <Card
                className={`relative bg-gradient-to-br from-gray-900/50 to-black/50 border-2 transition-all duration-500 backdrop-blur-sm ${
                  activeStep === index
                    ? "border-emerald-500/50 shadow-lg shadow-emerald-500/20"
                    : "border-gray-800/50"
                }`}
              >
                <CardContent className="p-6">
                  {/* Step Number */}
                  <motion.div
                    className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {step.step}
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.color}/20 flex items-center justify-center border border-emerald-500/20`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <step.icon className="w-8 h-8 text-emerald-400" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-center group-hover:text-emerald-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 text-center">
                    {step.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {step.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center justify-center text-xs text-gray-400"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <CheckCircle className="w-3 h-3 text-emerald-500 mr-2" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="text-center">
                    <Badge
                      variant="outline"
                      className="border-emerald-500/30 text-emerald-400"
                    >
                      {step.stats}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          className="bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              Why Students Choose{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                Our Process
              </span>
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: UserCheck,
                value: "2.5K+",
                label: "Active Students",
                color: "text-emerald-400",
              },
              {
                icon: Trophy,
                value: "95%",
                label: "Success Rate",
                color: "text-green-400",
              },
              {
                icon: PlayCircle,
                value: "300+",
                label: "Video Lessons",
                color: "text-emerald-500",
              },
              {
                icon: Sparkles,
                value: "24/7",
                label: "Support",
                color: "text-green-500",
              },
            ].map((metric, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-full flex items-center justify-center border border-emerald-500/30"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <metric.icon className={`w-8 h-8 ${metric.color}`} />
                </motion.div>
                <motion.div
                  className={`text-3xl font-bold mb-2 ${metric.color}`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    delay: index * 0.1 + 0.3,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  {metric.value}
                </motion.div>
                <div className="text-gray-400 text-sm">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Packages Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge
            variant="outline"
            className="border-emerald-500/30 text-emerald-400 mb-6"
          >
            Choose Your Plan
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent">
            Trading{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
              Packages
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Select the perfect package that matches your learning style and
            trading goals
          </p>
        </motion.div>

        {/* Package Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              variants={itemVariants}
              className={`relative group cursor-pointer ${
                pkg.popular ? "md:-translate-y-4" : ""
              }`}
              onMouseEnter={() => setActivePackage(index)}
              whileHover={{ y: pkg.popular ? -20 : -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                >
                  <Badge className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-6 py-2 shadow-lg">
                    <Crown className="w-4 h-4 mr-2" />
                    Most Popular
                  </Badge>
                </motion.div>
              )}

              <Card
                className={`relative bg-gradient-to-br ${pkg.gradient} border-2 ${pkg.border} hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-500 backdrop-blur-sm`}
              >
                <CardContent className="p-8">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <motion.div
                      className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 flex items-center justify-center border-2 ${pkg.border}`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <pkg.icon className="w-10 h-10 text-emerald-400" />
                    </motion.div>

                    <Badge
                      variant="outline"
                      className="border-emerald-500/30 text-emerald-400 mb-2"
                    >
                      {pkg.name}
                    </Badge>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {pkg.title}
                    </h3>

                    <div className="mb-4">
                      <div className="flex items-center justify-center space-x-2">
                        <motion.span
                          className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent"
                          whileHover={{ scale: 1.1 }}
                        >
                          {pkg.price}
                        </motion.span>
                        <div className="text-left">
                          <div className="text-gray-400 line-through text-sm">
                            {pkg.originalPrice}
                          </div>
                          <div className="text-gray-400 text-sm">
                            {pkg.duration}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm">{pkg.description}</p>
                  </div>

                  {/* Stats */}
                  <div className="flex justify-between items-center mb-6 p-4 bg-black/30 rounded-xl border border-emerald-500/10">
                    <div className="text-center">
                      <div className="text-emerald-400 font-bold">
                        {pkg.stats.students}
                      </div>
                      <div className="text-gray-400 text-xs">Students</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center text-yellow-400">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        <span className="font-bold">{pkg.stats.rating}</span>
                      </div>
                      <div className="text-gray-400 text-xs">Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-emerald-400 font-bold">
                        {pkg.stats.duration}
                      </div>
                      <div className="text-gray-400 text-xs">Access</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      className={`w-full py-6 rounded-full font-bold transition-all duration-300 ${
                        pkg.popular
                          ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white hover:shadow-lg hover:shadow-emerald-500/30"
                          : "bg-transparent border-2 border-emerald-500 text-white  hover:bg-emerald-500/10"
                      }`}
                      asChild
                    >
                      <a
                        href="mailto:niftynitesh000@gmail.com?subject=Course%20Interest"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-3"
                      >
                        <MessageCircle className="w-5 h-5" />
                        <span>Get Started Now</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-3 text-gray-400">
            <motion.div
              className="w-2 h-2 bg-emerald-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            />
            <span>Ready to transform your trading journey?</span>
            <motion.div
              className="w-2 h-2 bg-emerald-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                delay: 1,
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Journey;
