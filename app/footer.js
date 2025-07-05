"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Mail,
  Twitter,
  Youtube,
  GraduationCap,
  TrendingUp,
  Users,
  ExternalLink,
  Sparkles,
  Clock,
  Shield,
  Award,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { newlogo } from "@/assets";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/", icon: Users },
    { name: "About Us", href: "/about", icon: Award },
    { name: "Courses", href: "/online-classes", icon: GraduationCap },
    { name: "FAQ", href: "/faq", icon: Shield },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  const courseCategories = [
    {
      name: "Premium Content",
      href: "/online-classes",
      description: "Exclusive Content",
    },
    {
      name: "Personal Mentorship",
      href: "/contact",
      description: "Personal Mentorship",
    },
  ];

  const socialLinks = [
    {
      name: "WhatsApp",
      href: "https://whatsapp.com/channel/0029VaS551C17En02ZJgld1V",
      icon: MessageCircle,
      color: "hover:text-green-400",
      bgColor: "hover:bg-green-500/20",
    },
    {
      name: "Twitter",
      href: "https://x.com/Nifty_Nitesh",
      icon: Twitter,
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-500/20",
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@nifty-nitesh?si=G5jZMtS7GexTpwjN",
      icon: Youtube,
      color: "hover:text-red-400",
      bgColor: "hover:bg-red-500/20",
    },
    {
      name: "TradingView",
      href: "https://in.tradingview.com/u/nksharma_000/#published-charts",
      icon: TrendingUp,
      color: "hover:text-emerald-400",
      bgColor: "hover:bg-emerald-500/20",
    },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Refund Policy", href: "/refund" },
    { name: "Disclaimer", href: "/disclaimer" },
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className="bg-black border-t border-emerald-500/20 relative overflow-hidden py-10 md:py-0">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-500/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-1 space-y-6"
            variants={itemVariants}
          >
            <div>
              <motion.div
                className="flex items-center space-x-3 mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Image
                  src={newlogo}
                  alt="Nifty Nitesh"
                  width={100}
                  height={100}
                  className="w-24 h-24 filter brightness-0 invert"
                />

                <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                  Nifty Nitesh
                </span>
              </motion.div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Transform your trading journey with expert-led courses. Master
                advanced market analysis and institutional strategies for
                consistent profitability.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-4 flex items-center">
                <Mail className="w-4 h-4 text-emerald-400 mr-2" />
                Contact Us
              </h4>
              <div className="space-y-3">
                <motion.a
                  href="mailto:niftynitesh000@gmail.com"
                  className="flex items-center space-x-3 text-gray-400 hover:text-emerald-400 transition-colors text-sm group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <span>niftynitesh000@gmail.com</span>
                </motion.a>
                <motion.a
                  href="https://whatsapp.com/channel/0029VaS551C17En02ZJgld1V"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-400 hover:text-green-400 transition-colors text-sm group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <MessageCircle className="w-4 h-4 text-green-400" />
                  <span>WhatsApp Channel</span>
                </motion.a>
              </div>
            </div>

            {/* Developer Credit */}
            <motion.div
              className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-xl p-4 border border-emerald-500/20"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <p className="text-gray-400 text-xs mb-2">
                Developed & Designed by:
              </p>
              <motion.a
                href="https://linktr.ee/riteshk_007"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors group"
                whileHover={{ x: 3 }}
              >
                <span className="font-semibold">Ritesh</span>
                <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <p className="text-gray-400 text-xs mt-1">
                Full Stack Developer 🧑🏼‍💻
              </p>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Users className="w-5 h-5 text-emerald-400 mr-2" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-400 transition-colors text-sm flex items-center group"
                  >
                    <link.icon className="w-4 h-4 mr-3 text-emerald-500/50 group-hover:text-emerald-400 transition-colors" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Course Categories */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <GraduationCap className="w-5 h-5 text-emerald-400 mr-2" />
              Our Courses
            </h3>
            <ul className="space-y-4">
              {courseCategories.map((category, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link href={category.href} className="block group">
                    <div className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                      <div className="font-medium">{category.name}</div>
                      <div className="text-xs text-gray-500 group-hover:text-emerald-500 transition-colors">
                        {category.description}
                      </div>
                    </div>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources & Social */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Shield className="w-5 h-5 text-emerald-400 mr-2" />
              Resources
            </h3>
            <ul className="space-y-3 mb-8">
              {legalLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-400 transition-colors text-sm flex items-center"
                  >
                    <span className="w-1 h-1 bg-emerald-500 rounded-full mr-3"></span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4 flex items-center">
                <Sparkles className="w-4 h-4 text-emerald-400 mr-2" />
                Follow Us
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 p-3 bg-gray-900/50 rounded-lg border border-emerald-500/20 ${social.bgColor} ${social.color} transition-all duration-300 group`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.name}
                  >
                    <social.icon className="w-4 h-4" />
                    <span className="text-xs font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-emerald-500/20 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear}{" "}
              <Link
                href="/"
                className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
              >
                Nifty Nitesh™
              </Link>
              . All Rights Reserved.
            </div>

            <div className="flex items-center space-x-6">
              <Badge
                variant="outline"
                className="border-emerald-500/30 text-emerald-400"
              >
                <Sparkles className="w-3 h-3 mr-1" />
                Start Your Journey Today! 🚀
              </Badge>
            </div>
          </div>
        </motion.div>

        {/* Floating CTA */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="inline-block bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 backdrop-blur-sm">
            <CardContent className="px-6 py-3">
              <div className="flex items-center space-x-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 3,
                    ease: "linear",
                  }}
                >
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                </motion.div>
                <span className="text-white font-medium">
                  Ready to transform your trading career?
                </span>
                <motion.div
                  className="w-2 h-2 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 1.5,
                  }}
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
