"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaChartLine, FaTrophy, FaUsers, FaWhatsapp } from "react-icons/fa";
import { HiStar } from "react-icons/hi2";

const Hero = () => {
  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f0a] via-[#003d2b] to-[#0a0f0a]" />
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 136, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 136, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent-green rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 glass-effect rounded-full px-6 py-3 border border-accent/20 mb-8"
        >
          <HiStar className="text-accent w-4 h-4" />
          <span className="text-text-secondary text-sm font-medium">
            India&apos;s Leading Trading Institute
          </span>
          <HiStar className="text-accent w-4 h-4" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
        >
          <motion.span
            className="gradient-text block"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              background: "linear-gradient(45deg, #00ff88, #39ff14, #00ff88)",
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Master Trading
          </motion.span>
          <span className="text-text-primary block mt-2">
            With <span className="text-accent">Confidence</span>
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto text-lg md:text-xl text-text-secondary leading-relaxed mb-12"
        >
          Learn professional trading strategies, technical analysis, and risk
          management from industry experts. Join thousands of successful traders
          who transformed their financial future with our proven methods.
        </motion.p>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-8 mb-12"
        >
          <motion.div
            className="flex items-center space-x-3 group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="p-3 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors">
              <FaChartLine className="text-accent w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-text-primary font-bold text-lg">100+</div>
              <div className="text-text-secondary text-sm">
                Students Trained
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center space-x-3 group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="p-3 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors">
              <FaTrophy className="text-accent w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-text-primary font-bold text-lg">95%</div>
              <div className="text-text-secondary text-sm">Success Rate</div>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center space-x-3 group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="p-3 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors">
              <FaUsers className="text-accent w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-text-primary font-bold text-lg">500+</div>
              <div className="text-text-secondary text-sm">Active Traders</div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href="https://whatsapp.com/channel/0029VaS551C17En02ZJgld1V"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary flex items-center space-x-3 px-8 py-4 text-lg font-semibold"
          >
            <FaWhatsapp className="w-5 h-5" />
            <span>Start Learning Today</span>
          </motion.a>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/faq"
              className="btn-secondary px-8 py-4 text-lg font-semibold"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-wrap justify-center gap-8 text-text-secondary text-sm"
        >
          <div className="flex items-center space-x-2">
            <motion.div
              className="w-2 h-2 bg-accent rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span>NSE Certified Training</span>
          </div>
          <div className="flex items-center space-x-2">
            <motion.div
              className="w-2 h-2 bg-accent rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            />
            <span>Expert Mentorship</span>
          </div>
          <div className="flex items-center space-x-2">
            <motion.div
              className="w-2 h-2 bg-accent rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            />
            <span>Lifetime Support</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20" />
    </section>
  );
};

export default Hero;
