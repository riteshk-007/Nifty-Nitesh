"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Users,
  GraduationCap,
  TrendingUp,
  Handshake,
  Star,
  Sparkles,
  Award,
  Shield,
  Target,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  const [counters, setCounters] = useState({
    students: 0,
    success: 0,
    experience: 0,
    rating: 0,
  });

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
    const targets = {
      students: 2500,
      success: 95,
      experience: 8,
      rating: 4.9,
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
        students: Math.floor(targets.students * easeOutQuart),
        success: Math.floor(targets.success * easeOutQuart),
        experience: Math.floor(targets.experience * easeOutQuart),
        rating: Number.parseFloat((targets.rating * easeOutQuart).toFixed(1)),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  };

  const stats = [
    {
      number: counters.students,
      suffix: "+",
      label: "Students Trained",
      icon: Users,
      color: "text-emerald-400",
      bgColor: "from-emerald-500/20 to-green-500/20",
    },
    {
      number: counters.success,
      suffix: "%",
      label: "Success Rate",
      icon: TrendingUp,
      color: "text-green-400",
      bgColor: "from-green-500/20 to-emerald-500/20",
    },
    {
      number: counters.experience,
      suffix: "+",
      label: "Years Experience",
      icon: GraduationCap,
      color: "text-emerald-500",
      bgColor: "from-emerald-600/20 to-green-600/20",
    },
    {
      number: counters.rating,
      suffix: "",
      label: "Average Rating",
      icon: Star,
      color: "text-green-500",
      bgColor: "from-green-600/20 to-emerald-600/20",
    },
  ];

  const features = [
    {
      icon: TrendingUp,
      title: "Expert Market Analysis",
      description:
        "Master advanced technical and fundamental analysis with real-time market insights from industry professionals",
      color: "text-emerald-400",
      bgColor: "from-emerald-500/10 to-green-500/10",
      iconBg: "bg-emerald-500/20",
    },
    {
      icon: Handshake,
      title: "Lifetime Mentorship",
      description:
        "Get continuous guidance and support throughout your entire trading journey with dedicated mentor access",
      color: "text-green-400",
      bgColor: "from-green-500/10 to-emerald-500/10",
      iconBg: "bg-green-500/20",
    },
    {
      icon: Target,
      title: "Proven Trading Strategies",
      description:
        "Learn demand-supply concepts and smart money strategies that consistently deliver profitable results",
      color: "text-emerald-500",
      bgColor: "from-emerald-600/10 to-green-600/10",
      iconBg: "bg-emerald-600/20",
    },
  ];

  const trustBadges = [
    { icon: Shield, text: "NSE Certified", color: "text-emerald-400" },
    { icon: Award, text: "Expert Mentors", color: "text-green-400" },
    { icon: CheckCircle, text: "Proven Results", color: "text-emerald-500" },
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
    <div className="w-full bg-black py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-emerald-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-6 py-2 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-white">Leading </span>
            <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
              Trading Institute
            </span>
            <span className="text-white"> in India</span>
          </motion.h1>

          <motion.div
            className="max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <motion.h2
                  className="text-2xl font-semibold text-emerald-400 mb-4 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <Sparkles className="mr-3 w-6 h-6" />
                  Our Mission
                </motion.h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Our mission is to democratize stock market education and
                  empower individuals with the knowledge and skills needed to
                  achieve financial independence through intelligent trading and
                  investment strategies.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
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
                alt="Trading Institute"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Overlay Content */}
              <div className="absolute bottom-6 left-6 right-6">
                <Badge className="bg-emerald-500/90 text-white mb-2">
                  Professional Trading Education
                </Badge>
                <p className="text-white text-sm">
                  Transforming traders since 2016
                </p>
              </div>
            </motion.div>

            {/* Floating Stats Card */}
            <motion.div
              className="absolute -bottom-8 -right-8 hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="bg-gradient-to-br from-gray-900/90 to-black/90 border border-emerald-500/30 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">
                    ₹5L+
                  </div>
                  <div className="text-sm text-gray-300">
                    Average Monthly Returns
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Why Choose{" "}
                <span className="text-emerald-400">Our Platform?</span>
              </h3>

              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Welcome to India&apos;s premier stock market institute. We offer
                comprehensive courses designed for sustainable growth, providing
                deep knowledge of stock market trading with current strategies
                and proven methodologies.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Our focus on{" "}
                <span className="text-emerald-400 font-semibold">
                  demand-supply concepts
                </span>{" "}
                and{" "}
                <span className="text-emerald-400 font-semibold">
                  smart money strategies
                </span>{" "}
                with proper risk management sets us apart from traditional
                trading institutes.
              </p>
            </div>

            {/* Features Grid */}
            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <Card
                    className={`bg-gradient-to-br ${feature.bgColor} border border-emerald-500/20 backdrop-blur-sm hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <motion.div
                          className={`flex-shrink-0 p-3 ${feature.iconBg} rounded-xl border border-emerald-500/20`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <feature.icon
                            className={`w-6 h-6 ${feature.color}`}
                          />
                        </motion.div>
                        <div>
                          <h4 className="font-semibold text-white mb-2 text-lg">
                            {feature.title}
                          </h4>
                          <p className="text-gray-300 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              className="pt-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                className="bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold px-8 py-6 rounded-full hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
                asChild
              >
                <Link href="/about" className="flex items-center space-x-3">
                  <span>Learn More About Us</span>
                  <Sparkles className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mb-16"
          id="about-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-emerald-500/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="text-center group"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${stat.bgColor} rounded-2xl flex items-center justify-center border border-emerald-500/20`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <stat.icon className={`w-8 h-8 ${stat.color}`} />
                    </motion.div>
                    <motion.div
                      className={`text-3xl font-bold ${stat.color} mb-2`}
                      key={stat.number}
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {stat.number}
                      {stat.suffix}
                    </motion.div>
                    <div className="text-gray-400 text-sm font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="inline-block bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 backdrop-blur-sm">
            <CardContent className="px-8 py-4">
              <div className="flex flex-wrap items-center justify-center gap-8">
                {trustBadges.map((badge, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <motion.div
                      className="w-3 h-3 bg-emerald-500 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 2,
                        delay: index * 0.5,
                      }}
                    />
                    <badge.icon className={`w-4 h-4 ${badge.color}`} />
                    <span className="text-gray-300 font-medium">
                      {badge.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
