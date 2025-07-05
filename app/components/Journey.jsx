"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Crown,
  CheckCircle,
  MessageCircle,
  ArrowRight,
  Target,
  BarChart3,
  Shield,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CourseStructure from "./CourseStructure";

const Journey = () => {
  const [activeStep, setActiveStep] = useState(0);

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
      title: "Live Trading Experience",
      description:
        "Join real-time trading sessions with expert guidance and community support",
      icon: BarChart3,
      color: "from-emerald-600 to-green-700",
      features: ["Real-time Analysis", "Risk Management", "Portfolio Building"],
      stats: "100+ Live Sessions",
    },
    {
      step: "03",
      title: "Achieve Mastery",
      description:
        "Transform into a confident, profitable trader with ongoing mentorship",
      icon: Shield,
      color: "from-green-700 to-emerald-800",
      features: ["1-on-1 Mentoring", "Advanced Strategies", "Success Tracking"],
      stats: "95% Success Rate",
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
    <div className="min-h-screen bg-black text-white relative overflow-hidden py-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-emerald-600/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Your Trading{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Follow our proven 3-step process to transform from a beginner to a
            confident, profitable trader with expert guidance at every stage.
          </p>
        </motion.div>

        {/* Journey Steps */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative ${
                activeStep === index ? "scale-105" : ""
              } transition-transform duration-500`}
              onMouseEnter={() => setActiveStep(index)}
            >
              <Card
                className={`bg-gradient-to-br from-gray-900/50 to-black/50 border-2 ${
                  activeStep === index
                    ? "border-emerald-500/50 shadow-lg shadow-emerald-500/20"
                    : "border-emerald-500/20"
                } backdrop-blur-sm hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-500`}
              >
                <CardContent className="p-8 text-center">
                  {/* Step Number */}
                  <div className="text-emerald-400 text-lg font-bold mb-4">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-emerald-500/20"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <step.icon className="w-8 h-8 text-emerald-400" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {step.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-center space-x-2"
                      >
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                    {step.stats}
                  </Badge>
                </CardContent>
              </Card>

              {/* Arrow Connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-emerald-400/60" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Course Structure Timeline */}
        <CourseStructure showTitle={false} />
      </div>
    </div>
  );
};

export default Journey;
