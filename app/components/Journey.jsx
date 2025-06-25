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
            Follow our proven 4-step process to transform from a beginner to a
            confident, profitable trader with expert guidance at every stage.
          </p>
        </motion.div>

        {/* Journey Steps */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
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
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              📅 20 Days – Live{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                Training Program
              </span>
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Platform: Google Meet (Evening Time Preferred)
            </p>
          </div>

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
                          <h4 className="text-2xl font-bold text-white mb-2">
                            {phase.days}
                          </h4>
                          <p className="text-gray-300 text-lg">{phase.title}</p>
                        </div>
                      </div>
                      <ArrowRight className="w-6 h-6 text-emerald-400" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-3xl p-12 border border-emerald-500/20 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h4 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h4>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of successful traders who have transformed their
            financial future with our comprehensive courses and expert
            mentorship.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="bg-transparent border-2 border-emerald-500 text-emerald-400 font-bold px-8 py-6 rounded-full hover:bg-emerald-500/10 transition-all duration-300"
                asChild
              >
                <a
                  href="/online-classes"
                  className="flex items-center space-x-3"
                >
                  <GraduationCap className="w-5 h-5" />
                  <span>View Courses</span>
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Journey;
