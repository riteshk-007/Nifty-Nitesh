"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Users,
  TrendingUp,
  Target,
  Rocket,
  Shield,
  Star,
  BookOpen,
  Award,
  BarChart3,
  Zap,
  CheckCircle,
  Quote,
} from "lucide-react";
import { about } from "@/assets";

const AboutClient = () => {
  const achievements = [
    {
      icon: Users,
      number: "100+",
      label: "Traders Trained",
      description: "Across India",
      color: "text-emerald-400",
      bgColor: "from-emerald-500/10 to-green-500/10",
    },
    {
      icon: BookOpen,
      number: "100+",
      label: "Live Sessions",
      description: "Interactive Learning",
      color: "text-green-400",
      bgColor: "from-green-500/10 to-emerald-500/10",
    },
    {
      icon: TrendingUp,
      number: "6+",
      label: "Years Experience",
      description: "Real Market Trading",
      color: "text-emerald-500",
      bgColor: "from-emerald-600/10 to-green-600/10",
    },
    {
      icon: Star,
      number: "4.8★",
      label: "Avg Rating",
      description: "Verified Feedback",
      color: "text-green-500",
      bgColor: "from-green-600/10 to-emerald-600/10",
    },
  ];

  const coreValues = [
    {
      icon: Target,
      title: "Clarity Over Complexity",
      description:
        "We simplify trading concepts — no jargon, just pure market logic that actually works.",
      color: "text-emerald-400",
    },
    {
      icon: BarChart3,
      title: "Process First",
      description:
        "Our students learn to plan and execute trades with structure, not emotions or guesswork.",
      color: "text-green-400",
    },
    {
      icon: Shield,
      title: "Real Over Perfect",
      description:
        "No hype. No fake P&L screenshots. Just honest skill-building and market education.",
      color: "text-emerald-500",
    },
    {
      icon: Users,
      title: "Community-Driven",
      description:
        "Learning accelerates when traders support each other and share real experiences.",
      color: "text-green-500",
    },
  ];

  const testimonials = [
    {
      name: "Rajeev",
      location: "Delhi",
      text: "Nitesh sir taught me how to read charts like a story. No more relying on tips or signals.",
      rating: 5,
    },
    {
      name: "Kavita",
      location: "Pune",
      text: "Demand-Supply was just a buzzword until I joined. Now it's my core trading strategy.",
      rating: 5,
    },
    {
      name: "Amit",
      location: "Mumbai",
      text: "Finally learned to trade with logic instead of emotions. The mentorship is game-changing.",
      rating: 5,
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
    <div className="min-h-screen bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-emerald-600/5 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
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
              <Zap className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">
                About Nifty Nitesh
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="text-white">Real Trading. </span>
              <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                Real Learning.
              </span>
              <br />
              <span className="text-white">Real </span>
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Results.
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              A trader-led learning platform built to simplify stock market
              concepts and teach what actually works — like demand-supply,
              liquidity zones, and smart money concepts.
            </motion.p>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 text-lg px-4 py-2 hover:bg-emerald-500/30">
                No Fluff. No Fake Promises. Just Pure Market Logic.
              </Badge>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="relative max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-emerald-500/20 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-8">
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src={about}
                    alt="Nifty Nitesh - Trader-Led Education Platform"
                    width={1200}
                    height={600}
                    className="w-full h-96 object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <motion.div
                    className="absolute bottom-6 left-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                  >
                    <Badge className="bg-emerald-500/90 text-white text-lg px-4 py-2">
                      Built by a Trader, Not a Company
                    </Badge>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 mb-6">
                Our Journey
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                From <span className="text-emerald-400">WhatsApp Group</span> to
                Trusted Platform
              </h2>

              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  Nifty Nitesh started with one simple belief:{" "}
                  <span className="text-emerald-400 font-semibold">
                    &quot;Traders don&apos;t need more indicators — they need
                    real market understanding.&quot;
                  </span>
                </p>

                <p className="text-lg leading-relaxed">
                  After years of navigating market noise, Nitesh began sharing
                  his personal trading frameworks with a small community. Word
                  spread fast — and what started as a WhatsApp group turned into
                  a full-fledged trading education platform trusted by thousands
                  across India.
                </p>

                <p className="text-lg leading-relaxed">
                  Today, we help retail traders{" "}
                  <span className="text-green-400 font-semibold">
                    understand institutional price action
                  </span>
                  , master{" "}
                  <span className="text-emerald-400 font-semibold">
                    demand-supply concepts
                  </span>
                  , and trade with{" "}
                  <span className="text-green-400 font-semibold">
                    structure, not guesswork.
                  </span>
                </p>
              </div>

              <motion.div
                className="mt-8 p-6 bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-2xl"
                whileHover={{ scale: 1.02 }}
              >
                <Quote className="w-8 h-8 text-emerald-400 mb-4" />
                <p className="text-white font-semibold text-lg italic">
                  &quot;Help people trade like professionals — with process,
                  logic, and discipline.&quot;
                </p>
                <p className="text-gray-400 mt-2">— Nifty Nitesh, Founder</p>
              </motion.div>
            </motion.div>

            {/* Achievements Grid */}
            <motion.div
              className="grid grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card
                    className={`bg-gradient-to-br ${achievement.bgColor} border border-emerald-500/20 backdrop-blur-sm h-full`}
                  >
                    <CardContent className="p-6 text-center">
                      <motion.div
                        className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-emerald-500/30"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <achievement.icon
                          className={`w-8 h-8 ${achievement.color}`}
                        />
                      </motion.div>
                      <div
                        className={`text-3xl font-bold ${achievement.color} mb-2`}
                      >
                        {achievement.number}
                      </div>
                      <div className="text-white font-semibold mb-1">
                        {achievement.label}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {achievement.description}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900/20 to-black/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our <span className="text-emerald-400">Mission & Vision</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 backdrop-blur-sm h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/30">
                    <Target className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Our Mission
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    To teach Indian traders how to build a{" "}
                    <span className="text-emerald-400 font-semibold">
                      repeatable edge
                    </span>{" "}
                    using real concepts — not signals, shortcuts, or shiny apps.
                    We simplify complex trading ideas into actionable frameworks
                    that anyone can follow.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 backdrop-blur-sm h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6 border border-green-500/30">
                    <Rocket className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Our Vision
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    To become India&apos;s most trusted trader-led platform for{" "}
                    <span className="text-green-400 font-semibold">
                      demand-supply & price action learning
                    </span>{" "}
                    — and build a new generation of confident, self-reliant
                    retail traders.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Nitesh Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Meet <span className="text-emerald-400">Nifty Nitesh</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Founder | Full-Time Trader | Mentor
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-emerald-500/20 backdrop-blur-sm">
                <CardContent className="p-8 md:p-12">
                  <div className="grid md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-1">
                      <div className="relative">
                        <Image
                          src={about}
                          alt="Nifty Nitesh - Founder & Trading Mentor"
                          width={500}
                          height={500}
                          className="w-full h-80 object-cover rounded-2xl border-4 border-emerald-500/20"
                        />
                        <motion.div
                          className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center border-4 border-black"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Award className="w-8 h-8 text-white" />
                        </motion.div>
                      </div>
                    </div>

                    <div className="md:col-span-2 space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          Nifty Nitesh
                        </h3>
                        <p className="text-emerald-400 font-semibold mb-4">
                          Founder & Chief Trading Strategist
                        </p>
                      </div>

                      <div className="space-y-4 text-gray-300">
                        <p className="text-lg leading-relaxed">
                          Nitesh has spent the last{" "}
                          <span className="text-emerald-400 font-semibold">
                            6+ years
                          </span>{" "}
                          studying how markets really move — beyond indicators
                          and noise.
                        </p>

                        <p className="text-lg leading-relaxed">
                          He&apos;s known for breaking down{" "}
                          <span className="text-green-400 font-semibold">
                            smart money concepts
                          </span>
                          ,{" "}
                          <span className="text-emerald-400 font-semibold">
                            demand zones
                          </span>
                          , and{" "}
                          <span className="text-green-400 font-semibold">
                            institutional footprints
                          </span>{" "}
                          in a way that new traders actually understand and
                          apply.
                        </p>

                        <p className="text-lg leading-relaxed">
                          From trading live markets to mentoring{" "}
                          <span className="text-emerald-400 font-semibold">
                            500+ traders
                          </span>
                          , his focus remains the same: helping people trade
                          with process, logic, and discipline.
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                          6+ Years Trading
                        </Badge>
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                          500+ Students
                        </Badge>
                        <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                          Price Action Expert
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900/20 to-black/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our <span className="text-emerald-400">Core Values</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do and define who we are
              as a trader-led platform.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-emerald-500/10 hover:border-emerald-500/30 backdrop-blur-sm h-full transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-emerald-500/30"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <value.icon className={`w-8 h-8 ${value.color}`} />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What <span className="text-emerald-400">Traders Say</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Real feedback from traders who&apos;ve transformed their approach
              to the markets.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-emerald-500/20 backdrop-blur-sm h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-emerald-400 mb-4" />
                    <p className="text-gray-300 mb-6 italic">
                      &quot;{testimonial.text}&quot;
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">
                          {testimonial.name}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {testimonial.location}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-emerald-500/10 to-green-500/10">
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
                  Ready to Build Your{" "}
                  <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                    Trading Edge?
                  </span>
                </h2>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  Join 500+ Indian traders who&apos;ve simplified their strategy
                  and upgraded their mindset. Whether you&apos;re starting out
                  or stuck in analysis-paralysis — this platform helps you trade
                  with clarity, not confusion.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/courses">
                    <Button className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105">
                      Explore Courses
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 bg-transparent"
                    >
                      Book Strategy Call
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center justify-center gap-4 mt-8">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span className="text-gray-300 text-sm">
                      No Hype, Just Results
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300 text-sm">
                      Trader-Led Education
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutClient;
