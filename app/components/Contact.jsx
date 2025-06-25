"use client";
import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaClock,
  FaHeadset,
  FaGlobe,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xpzvljeg");
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const courses = [
    "Beginner Trading Course",
    "Advanced Trading Mastery",
    "Premium Video Library",
    "Personal Mentorship",
    "Custom Training Program",
  ];

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }
  }, [state.succeeded]);

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email Support",
      info: "niftynitesh000@gmail.com",
      description: "We'll respond within 24 hours",
      action: "mailto:niftynitesh000@gmail.com",
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp Channel",
      info: "Quick Updates",
      description: "Join for trading updates and tips",
      action: "https://whatsapp.com/channel/0029VaS551C17En02ZJgld1V",
    },
    {
      icon: FaGlobe,
      title: "Online Platform",
      info: "Learn from Anywhere",
      description: "Comprehensive online trading education",
      action: null,
    },
  ];

  const responseInfo = [
    {
      icon: FaClock,
      title: "Quick Response",
      description:
        "We respond to all inquiries within 2-4 hours during business days",
    },
    {
      icon: FaHeadset,
      title: "Expert Support",
      description: "Get guidance from experienced trading professionals",
    },
    {
      icon: FaCheckCircle,
      title: "Personalized Consultation",
      description: "Free consultation to understand your trading goals",
    },
  ];

  if (showSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-primary">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card p-12 text-center max-w-md mx-auto"
        >
          <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaCheckCircle className="w-10 h-10 text-accent" />
          </div>
          <h3 className="text-2xl font-bold text-text-primary mb-4">
            Message Sent Successfully!
          </h3>
          <p className="text-text-secondary mb-6">
            Thank you for reaching out. We'll get back to you within 24 hours.
          </p>
          <button onClick={() => setShowSuccess(false)} className="btn-primary">
            Send Another Message
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-primary">
      {/* Hero Section */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-accent font-semibold mb-4 uppercase tracking-wider text-sm">
              GET IN TOUCH
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Start Your <span className="gradient-text">Trading Journey</span>{" "}
              Today
            </h1>
            <p className="text-text-secondary text-xl max-w-3xl mx-auto text-balance">
              Ready to transform your financial future? Connect with our expert
              team and get personalized guidance for your trading education.
            </p>
          </motion.div>

          {/* Main Contact Section */}
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="glass-card p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-text-primary mb-4">
                    Send us a Message
                  </h2>
                  <p className="text-text-secondary">
                    Fill out the form below and we'll get back to you with a
                    personalized response.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-text-primary text-sm font-semibold mb-3">
                        Full Name *
                      </label>
                      <input
                        className="form-input"
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        required
                      />
                      <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                        className="text-red-400 text-sm mt-1"
                      />
                    </div>

                    <div>
                      <label className="block text-text-primary text-sm font-semibold mb-3">
                        Email Address *
                      </label>
                      <input
                        className="form-input"
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        required
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                        className="text-red-400 text-sm mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-text-primary text-sm font-semibold mb-3">
                      Course Interest
                    </label>
                    <select
                      className="form-input"
                      name="course"
                      value={selectedCourse}
                      onChange={(e) => setSelectedCourse(e.target.value)}
                    >
                      <option value="">Select a course</option>
                      {courses.map((course, index) => (
                        <option key={index} value={course}>
                          {course}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-text-primary text-sm font-semibold mb-3">
                      Message *
                    </label>
                    <textarea
                      className="form-input resize-none"
                      rows={6}
                      name="message"
                      placeholder="Tell us about your trading experience, goals, and how we can help you..."
                      required
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                      className="text-red-400 text-sm mt-1"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="btn-primary w-full md:w-auto px-8 py-4 flex items-center justify-center space-x-2"
                  >
                    {state.submitting ? (
                      <>
                        <div className="spinner"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <FaArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold text-text-primary mb-6">
                  Contact Information
                </h3>

                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <motion.div
                      key={index}
                      className="group cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      onClick={() =>
                        contact.action && window.open(contact.action, "_blank")
                      }
                    >
                      <div className="flex items-start space-x-4 p-4 rounded-xl border border-border-secondary group-hover:border-accent/50 transition-all">
                        <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                          <contact.icon className="w-4 h-4 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-text-primary font-semibold text-sm">
                            {contact.title}
                          </h4>
                          <p className="text-accent font-medium text-sm">
                            {contact.info}
                          </p>
                          <p className="text-text-muted text-xs">
                            {contact.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Response Time Information */}
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold text-text-primary mb-6">
                  What to Expect
                </h3>

                <div className="space-y-4">
                  {responseInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <info.icon className="w-3 h-3 text-accent" />
                      </div>
                      <div>
                        <h4 className="text-text-primary font-semibold text-sm mb-1">
                          {info.title}
                        </h4>
                        <p className="text-text-secondary text-xs leading-relaxed">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Action Button */}
              <div className="glass-card p-6">
                <h3 className="text-lg font-bold text-text-primary mb-4">
                  Need Immediate Help?
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  Get instant support via WhatsApp for quick queries.
                </p>
                <a
                  href="https://whatsapp.com/channel/0029VaS551C17En02ZJgld1V"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full justify-center"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>WhatsApp Now</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Hours Section */}
      <section className="section-sm bg-bg-secondary">
        <div className="container">
          <div className="glass-card p-8 text-center">
            <h3 className="text-2xl font-bold text-text-primary mb-6">
              Office Hours & <span className="gradient-text">Support</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaClock className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-text-primary font-semibold mb-2">
                  Support Hours
                </h4>
                <p className="text-text-secondary text-sm">
                  Monday - Friday
                  <br />
                  9:00 AM - 6:00 PM IST
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaWhatsapp className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-text-primary font-semibold mb-2">
                  WhatsApp Support
                </h4>
                <p className="text-text-secondary text-sm">
                  Available 24/7
                  <br />
                  For urgent queries
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaEnvelope className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-text-primary font-semibold mb-2">
                  Email Response
                </h4>
                <p className="text-text-secondary text-sm">
                  Within 24 hours
                  <br />
                  Detailed responses
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
