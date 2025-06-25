"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Video,
  Clock,
  TrendingUp,
  CheckCircle,
  MessageCircle,
  Sparkles,
  Crown,
  Calendar,
  Target,
  BarChart3,
  Shield,
  Instagram,
  Youtube,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const OnlineCourses = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    experience: "",
  });

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  // Course data directly in component
  const courseData = [
    {
      id: 1,
      title: "Foundation Trading Course",
      description:
        "Perfect for beginners who want to learn the fundamentals of stock market trading with proper risk management techniques.",
      image: "/placeholder.svg?height=300&width=400",
      price: "₹1,999",
      originalPrice: "₹3,999",
      duration: "3 Months Access",
      level: "Beginner",
      rating: 4.7,
      students: 2500,
      popular: false,
      category: "beginner",
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
      highlights: ["30+ Video Lessons", "Live Sessions", "Certificate"],
    },
    {
      id: 2,
      title: "Professional Trading Mastery",
      description:
        "Complete trading education with advanced strategies, personal mentorship, and lifetime community access for serious traders.",
      image: "/placeholder.svg?height=300&width=400",
      price: "₹2,999",
      originalPrice: "₹5,999",
      duration: "6 Months Access",
      level: "Advanced",
      rating: 4.9,
      students: 1800,
      popular: true,
      category: "advanced",
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
      highlights: [
        "100+ Video Lessons",
        "1-on-1 Mentorship",
        "Lifetime Access",
      ],
    },
    {
      id: 3,
      title: "Elite Video Library",
      description:
        "Lifetime access to our premium video content library with 300+ lessons covering all aspects of professional trading.",
      image: "/placeholder.svg?height=300&width=400",
      price: "₹7,999",
      originalPrice: "₹15,999",
      duration: "Lifetime Access",
      level: "All Levels",
      rating: 4.8,
      students: 950,
      popular: false,
      category: "premium",
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
      highlights: ["300+ Videos", "Lifetime Updates", "All Devices"],
    },
  ];

  const features = [
    {
      icon: GraduationCap,
      title: "Expert Training",
      description:
        "Learn from industry professionals with proven track records and years of experience",
      color: "text-emerald-400",
      bgColor: "from-emerald-500/10 to-green-500/10",
    },
    {
      icon: Video,
      title: "Live Sessions",
      description:
        "Real-time doubt clearing and market analysis sessions with interactive learning",
      color: "text-green-400",
      bgColor: "from-green-500/10 to-emerald-500/10",
    },
    {
      icon: Clock,
      title: "Flexible Learning",
      description:
        "Learn at your own pace with recorded sessions available 24/7 for your convenience",
      color: "text-emerald-500",
      bgColor: "from-emerald-600/10 to-green-600/10",
    },
    {
      icon: TrendingUp,
      title: "Practical Learning",
      description:
        "Hands-on experience with real market scenarios and live trading examples",
      color: "text-green-500",
      bgColor: "from-green-600/10 to-emerald-600/10",
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
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-emerald-600/5 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-6 py-2 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">
                Online Trading Education
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="text-white">Master </span>
              <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                Trading
              </span>
              <span className="text-white"> from Home</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Transform your trading skills with our comprehensive online
              courses. Learn demand-supply analysis and smart money concepts
              from expert traders.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className="bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold px-8 py-6 rounded-full hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
                  asChild
                >
                  <a
                    href="https://whatsapp.com/channel/0029VaS551C17En02ZJgld1V"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Join Now</span>
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <Card
                  className={`text-center bg-gradient-to-br ${feature.bgColor} border border-emerald-500/20 backdrop-blur-sm hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-500`}
                >
                  <CardContent className="p-6">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-emerald-500/20"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className={`w-8 h-8 ${feature.color}`} />
                    </motion.div>
                    <h3 className="text-lg font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              What You'll{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                Learn
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Master professional trading techniques that work across all
              markets
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Text Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {[
                "Demand-Supply Zone Identification",
                "Swing Trading Strategy (Multi-timeframe)",
                "Entry/Exit Confirmation",
                "Risk Management (Pro-Level)",
                "Works in Stocks, Crypto, Forex, Commodities",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 group"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-xl flex items-center justify-center border border-emerald-500/30 group-hover:shadow-lg group-hover:shadow-emerald-500/30 transition-all duration-300">
                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                  </div>
                  <span className="text-lg text-white font-medium group-hover:text-emerald-400 transition-colors duration-300">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Right Visual Content */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-3xl p-8 border border-emerald-500/20 backdrop-blur-sm">
                <motion.div
                  className="grid grid-cols-2 gap-6"
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 4,
                    ease: "easeInOut",
                  }}
                >
                  {[
                    { icon: Target, label: "Precision Entry" },
                    { icon: BarChart3, label: "Multi-Asset" },
                    { icon: Shield, label: "Risk Control" },
                    { icon: TrendingUp, label: "Swing Trading" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="text-center p-4 bg-black/20 rounded-2xl border border-emerald-500/10"
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    >
                      <item.icon className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                      <span className="text-sm text-gray-300 font-medium">
                        {item.label}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Structure Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-gray-900/20 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              📅 20 Days – Live{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                Online Sessions
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Platform: Google Meet (Evening Time Preferred)
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                days: "Day 1–3",
                title: "Foundation of Market Psychology",
                color: "from-red-500/20 to-orange-500/20",
              },
              {
                days: "Day 4–10",
                title: "Demand-Supply Mastery",
                color: "from-blue-500/20 to-cyan-500/20",
              },
              {
                days: "Day 11–15",
                title: "Trade Setup Live Examples",
                color: "from-purple-500/20 to-pink-500/20",
              },
              {
                days: "Day 16–20",
                title: "Real-Time Market Participation",
                color: "from-emerald-500/20 to-green-500/20",
              },
            ].map((phase, index) => (
              <motion.div
                key={index}
                className="relative mb-8 last:mb-0"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`bg-gradient-to-br ${phase.color} border border-emerald-500/20 backdrop-blur-sm hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-500`}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/30 to-green-500/30 rounded-2xl flex items-center justify-center border border-emerald-500/30">
                          <Calendar className="w-8 h-8 text-emerald-400" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {phase.days}
                          </h3>
                          <p className="text-gray-300 text-lg">{phase.title}</p>
                        </div>
                      </div>
                      <ChevronRight className="w-6 h-6 text-emerald-400" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Join Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Who Should{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                Join?
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: "📘",
                title: "Beginners looking to start trading",
                description: "Complete guidance from basics to advanced",
              },
              {
                icon: "📉",
                title: "Traders stuck with inconsistent results",
                description: "Transform your trading with proven strategies",
              },
              {
                icon: "🔁",
                title: "Traders shifting from indicators to price-action",
                description: "Learn pure price action techniques",
              },
              {
                icon: "🌎",
                title: "Anyone interested in multi-asset swing trading",
                description: "Works across all major financial markets",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-emerald-500/20 backdrop-blur-sm hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-500">
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Results & Mentorship Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-gray-900/20 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Student{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                Results
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                stat: "30+",
                label: "Students Trained",
                desc: "All with Lifetime Mentorship",
              },
              {
                stat: "97-98%",
                label: "Strategy Accuracy",
                desc: "Back-tested & Real-time",
              },
              {
                stat: "100%",
                label: "Success Rate",
                desc: "Students achieving profitability",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 backdrop-blur-sm text-center">
                  <CardContent className="p-8">
                    <motion.div
                      className="text-4xl md:text-5xl font-bold text-emerald-400 mb-4"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 2,
                      }}
                    >
                      {item.stat}
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.label}
                    </h3>
                    <p className="text-gray-300">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                feedback:
                  "Transformed my trading completely. The mentorship is invaluable!",
                profit: "+145%",
              },
              {
                name: "Priya Sharma",
                feedback:
                  "Best investment I made. Now trading confidently across multiple assets.",
                profit: "+230%",
              },
              {
                name: "Amit Singh",
                feedback:
                  "From losses to consistent profits. Nitesh sir's guidance is exceptional.",
                profit: "+180%",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border-2 border-emerald-500/30 backdrop-blur-sm hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-500">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-lg">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-white font-bold">
                          {testimonial.name}
                        </h4>
                        <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                          {testimonial.profit} Profit
                        </Badge>
                      </div>
                    </div>
                    <p className="text-gray-300 italic">
                      "{testimonial.feedback}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Pricing &{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                What's Included
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {[
              {
                title: "Standard",
                price: "₹4,999",
                originalPrice: "₹7,999",
                features: [
                  "20-Day Live Class Sessions",
                  "Complete Video Recordings",
                  "Course Materials & PDFs",
                  "Basic Q&A Support",
                  "Certificate of Completion",
                ],
                popular: false,
              },
              {
                title: "Mentorship+",
                price: "₹7,999",
                originalPrice: "₹12,999",
                features: [
                  "Everything in Standard",
                  "Lifetime Personal Mentorship",
                  "1-on-1 Doubt Clearing Sessions",
                  "WhatsApp Support Group",
                  "Trade Review & Analysis",
                  "Advanced Strategy Updates",
                  "Priority Support",
                ],
                popular: true,
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-4 py-2 shadow-lg">
                      <Crown className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <Card
                  className={`bg-gradient-to-br from-gray-900/50 to-black/50 border-2 ${
                    plan.popular
                      ? "border-emerald-500/50"
                      : "border-emerald-500/20"
                  } backdrop-blur-sm hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-500`}
                >
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4 text-center">
                      {plan.title}
                    </h3>

                    <div className="text-center mb-8">
                      <div className="flex items-baseline justify-center space-x-2">
                        <span className="text-4xl font-bold text-emerald-400">
                          {plan.price}
                        </span>
                        {plan.originalPrice && (
                          <span className="text-xl text-gray-400 line-through">
                            {plan.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full font-bold py-4 rounded-full transition-all duration-300 ${
                        plan.popular
                          ? "bg-gradient-to-r from-emerald-500 to-green-500 text-white hover:shadow-lg hover:shadow-emerald-500/30"
                          : "bg-transparent border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500/10"
                      }`}
                    >
                      Reserve Your Seat Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-gray-900/20 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Enroll{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                Today
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Limited seats available. Secure your spot now!
            </p>
          </motion.div>

          <motion.div
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 border border-emerald-500/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-emerald-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-emerald-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-emerald-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors"
                      placeholder="Enter WhatsApp number"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Trading Experience
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-emerald-500/20 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    >
                      <option value="">Select your experience</option>
                      <option value="beginner">Complete Beginner</option>
                      <option value="basic">Basic Knowledge</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="experienced">Experienced</option>
                    </select>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold py-4 rounded-full hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
                    >
                      <ArrowRight className="w-5 h-5 mr-2" />
                      Enroll Now
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Follow Us on{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                Social Media
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Stay updated with daily market insights and trading tips
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Youtube,
                platform: "YouTube",
                followers: "25K+",
                description: "Trading tutorials & market analysis",
                color: "from-red-500/20 to-red-600/20",
                link: "#",
              },
              {
                icon: Instagram,
                platform: "Instagram",
                followers: "15K+",
                description: "Daily market updates & tips",
                color: "from-pink-500/20 to-purple-500/20",
                link: "#",
              },
              {
                icon: MessageCircle,
                platform: "WhatsApp",
                followers: "Channel",
                description: "Real-time market alerts",
                color: "from-green-500/20 to-emerald-500/20",
                link: "https://whatsapp.com/channel/0029VaS551C17En02ZJgld1V",
              },
            ].map((social, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card
                  className={`bg-gradient-to-br ${social.color} border border-emerald-500/20 backdrop-blur-sm hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-500 cursor-pointer`}
                >
                  <CardContent className="p-8 text-center">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-emerald-500/30 to-green-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-emerald-500/30"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <social.icon className="w-8 h-8 text-emerald-400" />
                    </motion.div>

                    <h3 className="text-xl font-bold text-white mb-2">
                      {social.platform}
                    </h3>

                    <div className="text-2xl font-bold text-emerald-400 mb-2">
                      {social.followers}
                    </div>

                    <p className="text-gray-300 text-sm mb-4">
                      {social.description}
                    </p>

                    <Button
                      variant="outline"
                      className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10"
                      asChild
                    >
                      <a
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Follow Now
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnlineCourses;
