"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Video,
  TrendingUp,
  CheckCircle,
  MessageCircle,
  Sparkles,
  Calendar,
  Target,
  Shield,
  ArrowRight,
  Users,
  BookOpen,
  Star,
  Phone,
  X,
  Clock,
  MapPin,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import CourseStructure from "./course-structure";
import ReferralOffer from "../../components/ReferralOffer";

const CoursePage = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showEnrollmentModal, setShowEnrollmentModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    experience: "",
  });
  const [enrollmentData, setEnrollmentData] = useState({
    name: "",
    phone: "",
    experience: "",
    occupation: "",
  });

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEnrollmentChange = (e) => {
    setEnrollmentData({
      ...enrollmentData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const message = `Hi! I want to book a 1-on-1 trading session.

Name: ${formData.name}
Phone: ${formData.phone}
Experience: ${formData.experience}

Please confirm my slot for Saturday session.`;

    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
    setShowBookingModal(false);
  };

  const handleEnrollmentSubmit = (e) => {
    e.preventDefault();
    const message = `Hi! I want to enroll in the Complete Trading Course (₹9,999).

Name: ${enrollmentData.name}
Phone: ${enrollmentData.phone}
Experience: ${enrollmentData.experience}
Occupation: ${enrollmentData.occupation}

Please share the enrollment details and payment information.`;

    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
    setShowEnrollmentModal(false);
  };

  const keyBenefits = [
    {
      icon: Target,
      title: "Real Strategies",
      description:
        "Learn how to trade using real market logic — not indicators or tips.",
      color: "text-emerald-400",
    },
    {
      icon: Users,
      title: "Lifetime Mentorship",
      description: "Get unlimited support even after course completion.",
      color: "text-green-400",
    },
    {
      icon: MessageCircle,
      title: "Active Trading Community",
      description:
        "Discuss setups, trade reviews, and stay updated with other traders.",
      color: "text-emerald-500",
    },
  ];

  const curriculum = [
    "Understanding Market Structure",
    "Demand-Supply Zones: How to Mark & Trade",
    "Smart Money Concepts: Footprints ",
    "Multi-Timeframe Setup Building",
    "Risk Management & Capital Protection",
    "Trade Planning Process (Before – During – After)",
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
        <div className="max-w-7xl mx-auto px-4 md:px-6">
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
                Demand-Supply Trading Course
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
                Demand-Supply Trading
              </span>
              <br />
              <span className="text-white">with </span>
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Expert Mentorship
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Learn institutional trading strategies, smart money concepts, and
              risk-managed execution — in a structured way. Perfect for
              beginners, working professionals, and serious traders across
              India.
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
                  onClick={() => setShowEnrollmentModal(true)}
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Enroll Now
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 px-8 py-6 rounded-full bg-transparent"
                  onClick={() => setShowBookingModal(true)}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Book 1-on-1 Session
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Referral Offer Section */}
      <section className="py-20 relative z-10">
        <ReferralOffer />
      </section>

      {/* 1-on-1 Session Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900/20 to-black/20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 mb-6">
                Personal Guidance
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                💬 Book a{" "}
                <span className="text-emerald-400">1-on-1 Trading Session</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Get direct personal guidance from Nifty Nitesh — perfect for
                traders looking to improve their edge.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "1-on-1 session  – ₹250 only",
                  "Only for non-enrolled traders",
                  "Current students get it 100% FREE",
                  "Available only on Saturdays ",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className="bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold px-8 py-4 rounded-full hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
                  onClick={() => setShowBookingModal(true)}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Now
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Personal Session
                    </h3>
                    <p className="text-gray-300">Direct guidance from Nitesh</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-black/20 rounded-xl">
                      <span className="text-gray-300">Price</span>
                      <span className="text-emerald-400 font-semibold">
                        ₹250 only
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-black/20 rounded-xl">
                      <span className="text-gray-300">Schedule</span>
                      <span className="text-emerald-400 font-semibold">
                        Saturdays
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                      <span className="text-gray-300">For Students</span>
                      <span className="text-emerald-400 font-bold">
                        100% FREE
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Complete Course Overview */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              📘 Complete Trading Course –{" "}
              <span className="text-emerald-400">Expert Mentorship</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Get complete access to the Nifty Nitesh trading method — from
              basic to institutional level trading. Designed for Indian traders
              who want long-term consistency.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                {[
                  {
                    icon: CheckCircle,
                    text: "One-Time Fee: ₹9,999",
                    highlight: true,
                  },
                  {
                    icon: CheckCircle,
                    text: "Complete Access to Content & Community",
                  },
                  { icon: CheckCircle, text: "Learn Multi-Timeframe Analysis" },
                  {
                    icon: CheckCircle,
                    text: "Smart Money Concepts ",
                  },
                  { icon: CheckCircle, text: "Market Breakdown Videos" },
                  {
                    icon: CheckCircle,
                    text: "Direct Support from Fellow Traders",
                  },
                  { icon: CheckCircle, text: "Pro-Level Trade Planning" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center space-x-4 p-4 rounded-xl ${
                      item.highlight
                        ? "bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20"
                        : "bg-gray-900/20"
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <item.icon
                      className={`w-6 h-6 ${
                        item.highlight ? "text-emerald-400" : "text-green-400"
                      } flex-shrink-0`}
                    />
                    <span
                      className={`text-lg ${
                        item.highlight
                          ? "text-emerald-400 font-semibold"
                          : "text-gray-300"
                      }`}
                    >
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    className="bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold px-8 py-4 rounded-full hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
                    onClick={() => setShowEnrollmentModal(true)}
                  >
                    🚀 Enroll Now
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-emerald-500/20 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <GraduationCap className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Complete Course
                    </h3>
                    <div className="text-4xl font-bold text-emerald-400 mb-2">
                      ₹9,999
                    </div>
                    <p className="text-gray-300">
                      One-time payment • Complete access
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-emerald-500/10 rounded-lg">
                      <Users className="w-5 h-5 text-emerald-400" />
                      <span className="text-gray-300">Expert Mentorship</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-green-500/10 rounded-lg">
                      <MessageCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Community Access</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-emerald-500/10 rounded-lg">
                      <Video className="w-5 h-5 text-emerald-400" />
                      <span className="text-gray-300">
                        Market Analysis Videos
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-green-500/10 rounded-lg">
                      <Shield className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">
                        Risk Management Training
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900/20 to-black/20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Complete Trading{" "}
              <span className="text-emerald-400">Ecosystem</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Our platform provides everything you need for successful trading,
              from education to execution, all in one place.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {keyBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-emerald-500/20 backdrop-blur-sm hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-500 h-full">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-emerald-500/30"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Course Curriculum Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              🧠 What You&apos;ll{" "}
              <span className="text-emerald-400">Learn</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Master the same methods used by institutions. Learn real concepts,
              not theory.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {curriculum.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-emerald-500/10 hover:border-emerald-500/30 backdrop-blur-sm transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white font-bold text-sm">
                            {index + 1}
                          </span>
                        </div>
                        <div>
                          <p className="text-white font-medium leading-relaxed">
                            {item}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Structure */}
      <CourseStructure />

      {/* Student Success Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900/20 to-black/20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Built by a Trader,{" "}
              <span className="text-emerald-400">Not a Company</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Join our growing community of traders learning real demand-supply
              concepts and institutional price action strategies.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Users,
                number: "500+",
                label: "Traders Trained",
                description: "Across India",
                color: "text-emerald-400",
              },
              {
                icon: BookOpen,
                number: "100+",
                label: "Live Sessions",
                description: "Interactive Learning",
                color: "text-green-400",
              },
              {
                icon: TrendingUp,
                number: "6+",
                label: "Years Experience",
                description: "Real Market Trading",
                color: "text-emerald-500",
              },
              {
                icon: Star,
                number: "4.8★",
                label: "Avg Rating",
                description: "Verified Feedback",
                color: "text-green-500",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <Card className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 backdrop-blur-sm text-center">
                  <CardContent className="p-8">
                    <motion.div
                      className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-emerald-500/30"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <stat.icon className={`w-8 h-8 ${stat.color}`} />
                    </motion.div>
                    <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                      {stat.number}
                    </div>
                    <div className="text-white font-semibold mb-1">
                      {stat.label}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {stat.description}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-emerald-500/20 backdrop-blur-sm max-w-4xl mx-auto">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Start Your{" "}
                  <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                    Trading Journey?
                  </span>
                </h2>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  Learn the same methods used by institutions. Train with Nifty
                  Nitesh and join hundreds of traders transforming the way they
                  trade.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      className="bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold px-8 py-4 rounded-full hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
                      onClick={() => setShowEnrollmentModal(true)}
                    >
                      📘 Enroll in Course
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 px-8 py-4 rounded-full bg-transparent"
                      onClick={() => setShowBookingModal(true)}
                    >
                      📅 Book 1-on-1 Session
                    </Button>
                  </motion.div>
                </div>

                <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>No Hype, Just Results</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Expert Mentorship</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Real Market Concepts</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-gradient-to-br from-gray-900 to-black border border-emerald-500/20 rounded-2xl p-8 max-w-md w-full relative"
          >
            <button
              onClick={() => setShowBookingModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Book Your Session
              </h3>
              <p className="text-gray-300">
                Fill in your details to book a 1-on-1 trading session
              </p>
            </div>

            <form onSubmit={handleBookingSubmit} className="space-y-4">
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
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-emerald-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors"
                  placeholder="Enter your phone number"
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

              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4 space-y-2">
                <div className="flex items-center gap-2 text-sm text-emerald-400">
                  <Clock className="w-4 h-4" />
                  <span>Duration: 30 minutes</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-emerald-400">
                  <MapPin className="w-4 h-4" />
                  <span>Available: Saturdays </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-emerald-400">
                  <CheckCircle className="w-4 h-4" />
                  <span>Price: ₹250 (FREE for students)</span>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold py-4 rounded-full hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Book via WhatsApp
              </Button>
            </form>
          </motion.div>
        </div>
      )}

      {/* Course Enrollment Modal */}
      {showEnrollmentModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-gradient-to-br from-gray-900 to-black border border-emerald-500/20 rounded-2xl p-6 max-w-2xl w-full relative"
          >
            <button
              onClick={() => setShowEnrollmentModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Enroll in Complete Course
              </h3>
              <p className="text-gray-300">
                Join hundreds of traders learning real market concepts
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Left Column - Form */}
              <div>
                <form onSubmit={handleEnrollmentSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={enrollmentData.name}
                      onChange={handleEnrollmentChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-emerald-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={enrollmentData.phone}
                      onChange={handleEnrollmentChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-emerald-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Trading Experience
                    </label>
                    <select
                      name="experience"
                      value={enrollmentData.experience}
                      onChange={handleEnrollmentChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-emerald-500/20 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    >
                      <option value="">Select your experience</option>
                      <option value="beginner">Complete Beginner</option>
                      <option value="basic">Basic Knowledge</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="experienced">Experienced</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Occupation
                    </label>
                    <select
                      name="occupation"
                      value={enrollmentData.occupation}
                      onChange={handleEnrollmentChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-emerald-500/20 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    >
                      <option value="">Select your occupation</option>
                      <option value="student">Student</option>
                      <option value="professional">Working Professional</option>
                      <option value="business">Business Owner</option>
                      <option value="homemaker">Homemaker</option>
                      <option value="retired">Retired</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold py-4 rounded-full hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 mt-6"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Enroll via WhatsApp
                  </Button>
                </form>
              </div>

              {/* Right Column - Course Details */}
              <div className="flex flex-col justify-center">
                <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-xl p-6">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-emerald-400 mb-2">
                      ₹9,999
                    </div>
                    <div className="text-gray-300 mb-4">
                      One-time payment • Complete access
                    </div>
                    <div className="w-full h-px bg-emerald-500/20 mb-4"></div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                      </div>
                      <span className="text-white font-medium">
                        Lifetime Access to Content
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                      </div>
                      <span className="text-white font-medium">
                        Expert Mentorship & Community
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                      </div>
                      <span className="text-white font-medium">
                        Real Market Analysis Videos
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                      </div>
                      <span className="text-white font-medium">
                        FREE 1-on-1 Sessions
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                      </div>
                      <span className="text-white font-medium">
                        Risk Management Training
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default CoursePage;
