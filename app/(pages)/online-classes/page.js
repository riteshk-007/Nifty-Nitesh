"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Video,
  Clock,
  TrendingUp,
  Star,
  CheckCircle,
  MessageCircle,
  Users,
  Sparkles,
  Crown,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const OnlineCourses = () => {
  const [activeFilter, setActiveFilter] = useState("all");

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

  const filters = [
    { id: "all", label: "All Courses", count: courseData.length },
    {
      id: "beginner",
      label: "Beginner",
      count: courseData.filter((c) => c.category === "beginner").length,
    },
    {
      id: "advanced",
      label: "Advanced",
      count: courseData.filter((c) => c.category === "advanced").length,
    },
    {
      id: "premium",
      label: "Premium",
      count: courseData.filter((c) => c.category === "premium").length,
    },
  ];

  const filteredCourses =
    activeFilter === "all"
      ? courseData
      : courseData.filter((c) => c.category === activeFilter);

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

      {/* Courses Section */}
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
              Our{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                Trading Courses
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Choose the perfect course for your trading journey. All courses
              include lifetime access and ongoing support.
            </p>
          </motion.div>

          {/* Course Filters */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg shadow-emerald-500/30"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-emerald-500/20"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.label} ({filter.count})
              </motion.button>
            ))}
          </motion.div>

          {/* Course Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            key={activeFilter} // Re-trigger animation on filter change
          >
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative"
              >
                {/* Popular Badge */}
                {course.popular && (
                  <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  >
                    <Badge className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-4 py-2 shadow-lg">
                      <Crown className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </motion.div>
                )}

                <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-emerald-500/20 backdrop-blur-sm hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-500 overflow-hidden">
                  {/* Course Image */}
                  <div className="relative overflow-hidden h-48">
                    <Image
                      width={400}
                      height={300}
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

                    {/* Course Level */}
                    <div className="absolute bottom-4 left-4">
                      <Badge
                        variant="outline"
                        className="border-emerald-500/30 text-emerald-400 bg-black/50 backdrop-blur-sm"
                      >
                        {course.level}
                      </Badge>
                    </div>

                    {/* Rating */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-white text-sm font-medium">
                          {course.rating}
                        </span>
                      </div>
                    </div>

                    {/* Students Count */}
                    <div className="absolute top-4 left-4">
                      <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                        <Users className="w-3 h-3 text-emerald-400" />
                        <span className="text-white text-sm font-medium">
                          {course.students}+
                        </span>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {course.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {course.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {course.highlights.map((highlight, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="border-emerald-500/30 text-emerald-400"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline space-x-2">
                        <span className="text-3xl font-bold text-emerald-400">
                          {course.price}
                        </span>
                        {course.originalPrice && (
                          <span className="text-lg text-gray-400 line-through">
                            {course.originalPrice}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-400 text-sm mt-1">
                        {course.duration}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3 mb-8">
                      {course.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                      {course.features.length > 4 && (
                        <div className="text-emerald-400 text-sm font-medium">
                          +{course.features.length - 4} more features
                        </div>
                      )}
                    </div>

                    {/* CTA Button */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        className="w-full bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold py-4 rounded-full hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
                        asChild
                      >
                        <a
                          href="mailto:niftynitesh000@gmail.com?subject=Course%20Interest"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-3"
                        >
                          <MessageCircle className="w-5 h-5" />
                          <span>Enroll Now</span>
                        </a>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA Section */}
          <motion.div
            className="text-center bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-3xl p-12 border border-emerald-500/20 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-6"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            >
              <Zap className="w-6 h-6 text-emerald-400" />
              <span className="text-2xl">🚀</span>
            </motion.div>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Trading Journey?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of successful traders who have transformed their
              financial future with our comprehensive courses.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
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
                    <span>Get Started Today</span>
                  </a>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="bg-transparent border-2 border-emerald-500 text-emerald-400 font-bold px-8 py-6 rounded-full hover:bg-emerald-500/10 transition-all duration-300"
                  asChild
                >
                  <Link href="/contact" className="flex items-center space-x-3">
                    <Users className="w-5 h-5" />
                    <span>Contact Us</span>
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OnlineCourses;
