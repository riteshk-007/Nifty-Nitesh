"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Users,
  GraduationCap,
  TrendingUp,
  Clock,
  CheckCircle,
  Target,
  Shield,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ModernStats = () => {
  const [counters, setCounters] = useState({
    students: 0,
    courses: 0,
    experience: 0,
    success: 0,
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

    const element = document.getElementById("stats-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [isVisible]);

  const startCountAnimation = () => {
    const targets = {
      students: 2500,
      courses: 30,
      experience: 8,
      success: 95,
    };

    const duration = 2500;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = Math.min(currentStep / steps, 1);

      // Easing function for smoother animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCounters({
        students: Math.floor(targets.students * easeOutQuart),
        courses: Math.floor(targets.courses * easeOutQuart),
        experience: Math.floor(targets.experience * easeOutQuart),
        success: Math.floor(targets.success * easeOutQuart),
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
      icon: Users,
      number: counters.students,
      suffix: "+",
      label: "Happy Students",
      description: "Active traders learning with us",
      color: "text-emerald-400",
      bgColor: "from-emerald-500/20 to-green-500/20",
      borderColor: "border-emerald-500/30",
    },
    {
      icon: GraduationCap,
      number: counters.courses,
      suffix: "+",
      label: "Courses Available",
      description: "Comprehensive trading programs",
      color: "text-green-400",
      bgColor: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
    },
    {
      icon: Clock,
      number: counters.experience,
      suffix: " Years",
      label: "Market Experience",
      description: "Professional trading expertise",
      color: "text-emerald-500",
      bgColor: "from-emerald-600/20 to-green-600/20",
      borderColor: "border-emerald-600/30",
    },
    {
      icon: Award,
      number: counters.success,
      suffix: "%",
      label: "Success Rate",
      description: "Student satisfaction & results",
      color: "text-green-500",
      bgColor: "from-green-600/20 to-emerald-600/20",
      borderColor: "border-green-600/30",
    },
  ];

  const features = [
    {
      icon: TrendingUp,
      title: "Live Market Analysis",
      description:
        "Real-time technical analysis and market insights shared daily with actionable trading signals",
      color: "text-emerald-400",
      bgColor: "from-emerald-500/10 to-green-500/10",
      iconBg: "bg-emerald-500/20",
    },
    {
      icon: Target,
      title: "Premium Video Library",
      description:
        "300+ step-by-step video tutorials with practical examples and proven trading strategies",
      color: "text-green-400",
      bgColor: "from-green-500/10 to-emerald-500/10",
      iconBg: "bg-green-500/20",
    },
    {
      icon: CheckCircle,
      title: "Complete Study Materials",
      description:
        "Comprehensive guides, charts, templates and trading resources for all skill levels",
      color: "text-emerald-500",
      bgColor: "from-emerald-600/10 to-green-600/10",
      iconBg: "bg-emerald-600/20",
    },
    {
      icon: Shield,
      title: "Personal Mentorship",
      description:
        "Direct access to expert mentors with 1-on-1 guidance and doubt clearing sessions",
      color: "text-green-500",
      bgColor: "from-green-600/10 to-emerald-600/10",
      iconBg: "bg-green-600/20",
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
    <div className="w-full bg-black py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-600/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10" id="stats-section">
        {/* Header */}
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
              Impact
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Join thousands of successful traders who have transformed their
            financial future with our proven methods and expert guidance.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <Card
                className={`bg-gradient-to-br ${stat.bgColor} border ${stat.borderColor} backdrop-blur-sm hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-500 text-center`}
              >
                <CardContent className="p-8">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-emerald-500/20"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </motion.div>

                  <motion.div
                    className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}
                    animate={isVisible ? { scale: [1, 1.1, 1] } : {}}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                    }}
                  >
                    {stat.number}
                    {stat.suffix}
                  </motion.div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            What Makes Us{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
              Different
            </span>
          </h3>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Experience comprehensive trading education with hands-on learning
            and continuous support from industry experts.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <Card
                className={`bg-gradient-to-br ${feature.bgColor} border border-emerald-500/20 backdrop-blur-sm hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-500`}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <motion.div
                      className={`w-12 h-12 ${feature.iconBg} rounded-xl flex items-center justify-center border border-emerald-500/20 flex-shrink-0`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className={`w-6 h-6 ${feature.color}`} />
                    </motion.div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-3">
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

        {/* CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-3xl p-12 border border-emerald-500/20 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h4 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Trading?
          </h4>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Join our comprehensive trading programs and start your journey
            towards financial independence with expert guidance and proven
            strategies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold px-8 py-4 rounded-full hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
                asChild
              >
                <a
                  href="https://whatsapp.com/channel/0029VaS551C17En02ZJgld1V"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3"
                >
                  <span>Start Learning Today</span>
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ModernStats;
