"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, AlertTriangle, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function PrivacyPolicy() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <main className="min-h-screen bg-black pt-24 pb-16">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500/20 to-green-500/20 border border-emerald-500/30 mb-6">
            <Shield className="w-10 h-10 text-emerald-400" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 bg-clip-text text-transparent mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we handle your information.
          </p>
          <p className="text-gray-500 text-sm mt-4">Last Updated: January 2026</p>
        </motion.div>

        {/* Educational Disclaimer Banner */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <GraduationCap className="w-8 h-8 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-amber-400 font-semibold text-lg mb-2">Educational Purpose Only</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Nifty Nitesh is an <strong className="text-white">educational platform</strong> that provides trading education and courses. 
                    We are <strong className="text-red-400">NOT registered with SEBI</strong> (Securities and Exchange Board of India) as an investment advisor. 
                    We do not provide any buy/sell recommendations, tips, or investment advice. All content is purely for educational and informational purposes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Content */}
        <motion.div
          className="max-w-4xl mx-auto space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Section 1 */}
          <motion.div variants={itemVariants}>
            <Card className="bg-gray-900/50 border border-emerald-500/20 backdrop-blur-sm">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <FileText className="w-6 h-6 text-emerald-400" />
                  <h2 className="text-xl md:text-2xl font-bold text-white">1. Information We Collect</h2>
                </div>
                <div className="text-gray-300 space-y-4 text-sm md:text-base leading-relaxed">
                  <p>When you register for our educational courses or interact with our platform, we may collect:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                    <li><strong className="text-white">Personal Information:</strong> Name, email address, phone number for course enrollment</li>
                    <li><strong className="text-white">Payment Information:</strong> Processed securely through third-party payment gateways</li>
                    <li><strong className="text-white">Usage Data:</strong> Course progress, login times, and platform interaction for improving your learning experience</li>
                    <li><strong className="text-white">Communication Data:</strong> Messages and queries you send to us for support</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Section 2 */}
          <motion.div variants={itemVariants}>
            <Card className="bg-gray-900/50 border border-emerald-500/20 backdrop-blur-sm">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Eye className="w-6 h-6 text-emerald-400" />
                  <h2 className="text-xl md:text-2xl font-bold text-white">2. How We Use Your Information</h2>
                </div>
                <div className="text-gray-300 space-y-4 text-sm md:text-base leading-relaxed">
                  <p>Your information is used exclusively for educational service delivery:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                    <li>To provide access to purchased educational courses and materials</li>
                    <li>To send course updates, schedule changes, and important announcements</li>
                    <li>To respond to your inquiries and provide customer support</li>
                    <li>To improve our educational content and platform functionality</li>
                    <li>To process payments for course enrollments</li>
                  </ul>
                  <p className="text-amber-400 font-medium mt-4">
                    Note: We do NOT use your information for providing any investment advice, stock tips, or trading recommendations.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Section 3 */}
          <motion.div variants={itemVariants}>
            <Card className="bg-gray-900/50 border border-emerald-500/20 backdrop-blur-sm">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Lock className="w-6 h-6 text-emerald-400" />
                  <h2 className="text-xl md:text-2xl font-bold text-white">3. Data Security</h2>
                </div>
                <div className="text-gray-300 space-y-4 text-sm md:text-base leading-relaxed">
                  <p>We implement appropriate security measures to protect your personal information:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                    <li>Encrypted data transmission using SSL/TLS protocols</li>
                    <li>Secure storage of personal data with access controls</li>
                    <li>Regular security audits and monitoring</li>
                    <li>Third-party payment processors handle all financial transactions securely</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Section 4 */}
          <motion.div variants={itemVariants}>
            <Card className="bg-gray-900/50 border border-emerald-500/20 backdrop-blur-sm">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="w-6 h-6 text-emerald-400" />
                  <h2 className="text-xl md:text-2xl font-bold text-white">4. Third-Party Sharing</h2>
                </div>
                <div className="text-gray-300 space-y-4 text-sm md:text-base leading-relaxed">
                  <p>We do not sell, trade, or rent your personal information to third parties. We may share information only:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                    <li>With payment processors to complete transactions</li>
                    <li>With service providers who assist in platform operations (under confidentiality agreements)</li>
                    <li>When required by law or to protect our legal rights</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Section 5 */}
          <motion.div variants={itemVariants}>
            <Card className="bg-gray-900/50 border border-emerald-500/20 backdrop-blur-sm">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-emerald-400" />
                  <h2 className="text-xl md:text-2xl font-bold text-white">5. Your Rights</h2>
                </div>
                <div className="text-gray-300 space-y-4 text-sm md:text-base leading-relaxed">
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                    <li>Access and review your personal information</li>
                    <li>Request correction of inaccurate data</li>
                    <li>Request deletion of your data (subject to legal requirements)</li>
                    <li>Opt-out of promotional communications</li>
                  </ul>
                  <p className="mt-4">
                    To exercise these rights, please contact us at{" "}
                    <a href="mailto:niftynitesh000@gmail.com" className="text-emerald-400 hover:text-emerald-300">
                      niftynitesh000@gmail.com
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <Card className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/30">
              <CardContent className="p-6 md:p-8 text-center">
                <h3 className="text-xl font-bold text-white mb-3">Questions About Privacy?</h3>
                <p className="text-gray-400 mb-4">
                  If you have any questions about this Privacy Policy, please contact us.
                </p>
                <a
                  href="mailto:niftynitesh000@gmail.com"
                  className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors"
                >
                  Contact Us
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
