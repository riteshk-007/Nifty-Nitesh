"use client";

import { motion } from "framer-motion";
import { AlertTriangle, ShieldAlert, TrendingUp, GraduationCap, XOctagon, FileWarning, Ban } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Disclaimer() {
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
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 mb-6">
                        <AlertTriangle className="w-10 h-10 text-amber-400" />
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent mb-4">
                        Disclaimer
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Important information you must read and understand before using our platform.
                    </p>
                    <p className="text-gray-500 text-sm mt-4">Last Updated: January 2026</p>
                </motion.div>

                {/* Main Disclaimer Banner */}
                <motion.div
                    className="mb-10"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Card className="bg-gradient-to-r from-red-500/15 to-rose-500/15 border-2 border-red-500/40">
                        <CardContent className="p-6 md:p-8">
                            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                                <div className="flex-shrink-0">
                                    <div className="w-20 h-20 rounded-full bg-red-500/20 flex items-center justify-center animate-pulse">
                                        <XOctagon className="w-10 h-10 text-red-400" />
                                    </div>
                                </div>
                                <div className="text-center md:text-left">
                                    <h3 className="text-red-400 font-bold text-xl md:text-2xl mb-3">⚠️ IMPORTANT DISCLAIMER</h3>
                                    <div className="space-y-3 text-sm md:text-base">
                                        <p className="text-gray-200 leading-relaxed">
                                            <strong className="text-white">Nifty Nitesh</strong> is a platform providing{" "}
                                            <strong className="text-emerald-400">EDUCATIONAL CONTENT ONLY</strong>.
                                        </p>
                                        <p className="text-red-300 font-semibold">
                                            We are NOT registered with SEBI (Securities and Exchange Board of India) as an Investment Advisor,
                                            Research Analyst, or in any other capacity.
                                        </p>
                                        <p className="text-gray-300">
                                            We do NOT provide any buy/sell recommendations, stock tips, investment advice, or trading signals.
                                            All content is purely for <strong className="text-white">educational and informational purposes</strong>.
                                        </p>
                                    </div>
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
                    {/* Educational Purpose */}
                    <motion.div variants={itemVariants}>
                        <Card className="bg-gray-900/50 border border-emerald-500/20 backdrop-blur-sm">
                            <CardContent className="p-6 md:p-8">
                                <div className="flex items-center space-x-3 mb-4">
                                    <GraduationCap className="w-6 h-6 text-emerald-400" />
                                    <h2 className="text-xl md:text-2xl font-bold text-white">Educational Purpose Only</h2>
                                </div>
                                <div className="text-gray-300 space-y-4 text-sm md:text-base leading-relaxed">
                                    <p>
                                        All content, courses, videos, articles, charts, and materials provided by Nifty Nitesh are for{" "}
                                        <strong className="text-white">educational and informational purposes only</strong>.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                                            <h4 className="text-emerald-400 font-semibold mb-2">✓ What We Provide</h4>
                                            <ul className="text-gray-400 text-sm space-y-1">
                                                <li>• Trading education & concepts</li>
                                                <li>• Technical analysis training</li>
                                                <li>• Chart reading skills</li>
                                                <li>• Risk management education</li>
                                                <li>• Trading psychology insights</li>
                                            </ul>
                                        </div>
                                        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                                            <h4 className="text-red-400 font-semibold mb-2">✗ What We Do NOT Provide</h4>
                                            <ul className="text-gray-400 text-sm space-y-1">
                                                <li>• Investment advice</li>
                                                <li>• Buy/Sell recommendations</li>
                                                <li>• Stock tips or calls</li>
                                                <li>• Trading signals</li>
                                                <li>• Portfolio management</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Not SEBI Registered */}
                    <motion.div variants={itemVariants}>
                        <Card className="bg-gray-900/50 border border-red-500/30 backdrop-blur-sm">
                            <CardContent className="p-6 md:p-8">
                                <div className="flex items-center space-x-3 mb-4">
                                    <Ban className="w-6 h-6 text-red-400" />
                                    <h2 className="text-xl md:text-2xl font-bold text-white">NOT a SEBI Registered Entity</h2>
                                </div>
                                <div className="text-gray-300 space-y-4 text-sm md:text-base leading-relaxed">
                                    <p>
                                        <strong className="text-red-400">Nifty Nitesh is NOT registered with SEBI</strong> (Securities and Exchange Board of India)
                                        as an Investment Advisor, Research Analyst, Stock Broker, Portfolio Manager, or in any other regulated capacity.
                                    </p>
                                    <p>
                                        We are purely an <strong className="text-white">educational service provider</strong> offering trading education
                                        and courses to help individuals understand the financial markets.
                                    </p>
                                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 mt-4">
                                        <p className="text-amber-400 font-medium text-sm">
                                            For investment advice, please consult a SEBI-registered Investment Advisor or Research Analyst.
                                            You can verify SEBI registration at{" "}
                                            <a
                                                href="https://www.sebi.gov.in"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="underline hover:text-amber-300"
                                            >
                                                www.sebi.gov.in
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Risk Warning */}
                    <motion.div variants={itemVariants}>
                        <Card className="bg-gray-900/50 border border-amber-500/30 backdrop-blur-sm">
                            <CardContent className="p-6 md:p-8">
                                <div className="flex items-center space-x-3 mb-4">
                                    <TrendingUp className="w-6 h-6 text-amber-400" />
                                    <h2 className="text-xl md:text-2xl font-bold text-white">Trading Risk Warning</h2>
                                </div>
                                <div className="text-gray-300 space-y-4 text-sm md:text-base leading-relaxed">
                                    <p className="text-amber-400 font-semibold">
                                        Trading and investing in financial markets involves substantial risk of loss and is not suitable for every investor.
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                                        <li>Past performance is not indicative of future results</li>
                                        <li>You may lose some or all of your invested capital</li>
                                        <li>Never trade with money you cannot afford to lose</li>
                                        <li>Consider your investment objectives and risk tolerance</li>
                                        <li>Seek independent financial advice if needed</li>
                                    </ul>
                                    <p className="mt-4">
                                        The examples, charts, and discussions in our educational content are for learning purposes.
                                        They should not be interpreted as trading signals or recommendations.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* No Liability */}
                    <motion.div variants={itemVariants}>
                        <Card className="bg-gray-900/50 border border-emerald-500/20 backdrop-blur-sm">
                            <CardContent className="p-6 md:p-8">
                                <div className="flex items-center space-x-3 mb-4">
                                    <ShieldAlert className="w-6 h-6 text-emerald-400" />
                                    <h2 className="text-xl md:text-2xl font-bold text-white">Limitation of Liability</h2>
                                </div>
                                <div className="text-gray-300 space-y-4 text-sm md:text-base leading-relaxed">
                                    <p>
                                        Nifty Nitesh, its owner, instructors, and affiliates shall NOT be held liable for:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                                        <li>Any trading losses or financial damages incurred by students</li>
                                        <li>Decisions made based on educational content</li>
                                        <li>Any investment outcomes or market performance</li>
                                        <li>Any direct, indirect, incidental, or consequential damages</li>
                                        <li>Technical issues or interruptions in service</li>
                                    </ul>
                                    <p className="text-white font-medium mt-4">
                                        You acknowledge that all trading decisions are made at your own risk and discretion.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* User Responsibility */}
                    <motion.div variants={itemVariants}>
                        <Card className="bg-gray-900/50 border border-emerald-500/20 backdrop-blur-sm">
                            <CardContent className="p-6 md:p-8">
                                <div className="flex items-center space-x-3 mb-4">
                                    <FileWarning className="w-6 h-6 text-emerald-400" />
                                    <h2 className="text-xl md:text-2xl font-bold text-white">Your Responsibility</h2>
                                </div>
                                <div className="text-gray-300 space-y-4 text-sm md:text-base leading-relaxed">
                                    <p>By using our platform and enrolling in our courses, you acknowledge and agree that:</p>
                                    <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                                        <li>You are solely responsible for your trading and investment decisions</li>
                                        <li>You will not construe any educational content as financial advice</li>
                                        <li>You will conduct your own research before making any trades</li>
                                        <li>You understand trading involves significant risk of loss</li>
                                        <li>You will consult SEBI-registered professionals for investment advice</li>
                                        <li>You are aware that no refunds will be provided for course fees</li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Final Statement */}
                    <motion.div variants={itemVariants}>
                        <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700">
                            <CardContent className="p-6 md:p-8 text-center">
                                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                    By accessing and using the Nifty Nitesh platform, you confirm that you have read, understood,
                                    and agree to this Disclaimer in its entirety. If you do not agree with any part of this Disclaimer,
                                    please do not use our services.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Contact */}
                    <motion.div variants={itemVariants}>
                        <Card className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/30">
                            <CardContent className="p-6 md:p-8 text-center">
                                <h3 className="text-xl font-bold text-white mb-3">Have Questions?</h3>
                                <p className="text-gray-400 mb-4">
                                    If you have any questions about this Disclaimer, please contact us.
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
