"use client";

import { motion } from "framer-motion";
import { FileText, CheckCircle, XCircle, AlertTriangle, GraduationCap, Scale } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function TermsOfService() {
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
                        <Scale className="w-10 h-10 text-emerald-400" />
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 bg-clip-text text-transparent mb-4">
                        Terms of Service
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Please read these terms carefully before using our educational services.
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
                                        Nifty Nitesh is an <strong className="text-white">educational platform</strong> providing trading education and courses.
                                        We are <strong className="text-red-400">NOT registered with SEBI</strong> (Securities and Exchange Board of India).
                                        We do NOT provide any buy/sell recommendations, investment tips, or trading signals.
                                        All content shared is purely for <strong className="text-white">educational and informational purposes only</strong>.
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
                                    <h2 className="text-xl md:text-2xl font-bold text-white">1. Acceptance of Terms</h2>
                                </div>
                                <div className="text-gray-300 space-y-4 text-sm md:text-base leading-relaxed">
                                    <p>
                                        By accessing and using the Nifty Nitesh platform and enrolling in our educational courses, you agree to be bound by these Terms of Service.
                                        If you do not agree to these terms, please do not use our services.
                                    </p>
                                    <p>
                                        These terms govern your use of our educational content, courses, and platform. We reserve the right to modify these terms at any time,
                                        and your continued use constitutes acceptance of any changes.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Section 2 */}
                    <motion.div variants={itemVariants}>
                        <Card className="bg-gray-900/50 border border-emerald-500/20 backdrop-blur-sm">
                            <CardContent className="p-6 md:p-8">
                                <div className="flex items-center space-x-3 mb-4">
                                    <GraduationCap className="w-6 h-6 text-emerald-400" />
                                    <h2 className="text-xl md:text-2xl font-bold text-white">2. Nature of Services</h2>
                                </div>
                                <div className="text-gray-300 space-y-4 text-sm md:text-base leading-relaxed">
                                    <p className="font-semibold text-white">We Provide ONLY Educational Services:</p>
                                    <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                                        <li>Trading education courses and training sessions</li>
                                        <li>Technical analysis education and chart reading skills</li>
                                        <li>Risk management and trading psychology education</li>
                                        <li>Market structure and price action concepts</li>
                                    </ul>

                                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mt-6">
                                        <p className="font-semibold text-red-400 mb-2">We Do NOT Provide:</p>
                                        <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                                            <li>Investment advice or portfolio management</li>
                                            <li>Buy/Sell recommendations or stock tips</li>
                                            <li>Trading signals or calls</li>
                                            <li>Guaranteed returns or profit promises</li>
                                            <li>Any SEBI-regulated advisory services</li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Section 3 */}
                    <motion.div variants={itemVariants}>
                        <Card className="bg-gray-900/50 border border-emerald-500/20 backdrop-blur-sm">
                            <CardContent className="p-6 md:p-8">
                                <div className="flex items-center space-x-3 mb-4">
                                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                                    <h2 className="text-xl md:text-2xl font-bold text-white">3. Course Enrollment & Access</h2>
                                </div>
                                <div className="text-gray-300 space-y-4 text-sm md:text-base leading-relaxed">
                                    <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                                        <li>Upon payment, you will receive access to the purchased educational course(s)</li>
                                        <li>Access duration varies by course and will be specified at the time of purchase</li>
                                        <li>Course content is for personal use only and cannot be shared or redistributed</li>
                                        <li>We reserve the right to update or modify course content for improvement</li>
                                        <li>Class schedules will be communicated in advance; you are responsible for attending</li>
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
                                    <XCircle className="w-6 h-6 text-emerald-400" />
                                    <h2 className="text-xl md:text-2xl font-bold text-white">4. Prohibited Activities</h2>
                                </div>
                                <div className="text-gray-300 space-y-4 text-sm md:text-base leading-relaxed">
                                    <p>You agree NOT to:</p>
                                    <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                                        <li>Share, copy, or distribute course materials to third parties</li>
                                        <li>Record, screenshot, or reproduce paid course content</li>
                                        <li>Share login credentials with others</li>
                                        <li>Use our content for commercial purposes without permission</li>
                                        <li>Misrepresent our educational content as investment advice</li>
                                        <li>Claim that we have provided any buy/sell recommendations</li>
                                    </ul>
                                    <p className="text-amber-400 mt-4">
                                        Violation of these terms may result in immediate termination of access without refund.
                                    </p>
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
                                    <h2 className="text-xl md:text-2xl font-bold text-white">5. Disclaimer of Liability</h2>
                                </div>
                                <div className="text-gray-300 space-y-4 text-sm md:text-base leading-relaxed">
                                    <p>
                                        Trading in financial markets involves substantial risk and may not be suitable for everyone.
                                        Past performance is not indicative of future results.
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                                        <li>We are not responsible for any trading losses incurred by students</li>
                                        <li>Educational content should not be construed as financial advice</li>
                                        <li>You are solely responsible for your trading decisions</li>
                                        <li>Consult a SEBI-registered advisor for investment decisions</li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Section 6 */}
                    <motion.div variants={itemVariants}>
                        <Card className="bg-gray-900/50 border border-emerald-500/20 backdrop-blur-sm">
                            <CardContent className="p-6 md:p-8">
                                <div className="flex items-center space-x-3 mb-4">
                                    <Scale className="w-6 h-6 text-emerald-400" />
                                    <h2 className="text-xl md:text-2xl font-bold text-white">6. Intellectual Property</h2>
                                </div>
                                <div className="text-gray-300 space-y-4 text-sm md:text-base leading-relaxed">
                                    <p>
                                        All course content, videos, materials, and resources are the intellectual property of Nifty Nitesh.
                                        Unauthorized use, reproduction, or distribution is strictly prohibited and may result in legal action.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Contact */}
                    <motion.div variants={itemVariants}>
                        <Card className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/30">
                            <CardContent className="p-6 md:p-8 text-center">
                                <h3 className="text-xl font-bold text-white mb-3">Questions About Terms?</h3>
                                <p className="text-gray-400 mb-4">
                                    If you have any questions about these Terms of Service, please contact us.
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
