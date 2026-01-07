"use client";

import { motion } from "framer-motion";
import { RefreshCcw, AlertCircle, Clock, GraduationCap, XCircle, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function RefundPolicy() {
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
                        <RefreshCcw className="w-10 h-10 text-emerald-400" />
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 bg-clip-text text-transparent mb-4">
                        Refund Policy
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Please read our refund policy carefully before enrolling in our courses.
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
                                        Nifty Nitesh provides <strong className="text-white">educational courses and training sessions</strong>.
                                        We are <strong className="text-red-400">NOT registered with SEBI</strong>.
                                        We do not provide any buy/sell recommendations or investment advice. All content is for educational purposes only.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* No Refund Notice */}
                <motion.div
                    className="mb-10"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <Card className="bg-gradient-to-r from-red-500/10 to-rose-500/10 border border-red-500/30">
                        <CardContent className="p-6 md:p-8">
                            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center">
                                        <XCircle className="w-8 h-8 text-red-400" />
                                    </div>
                                </div>
                                <div className="text-center md:text-left">
                                    <h3 className="text-red-400 font-bold text-xl md:text-2xl mb-3">No Refund Policy</h3>
                                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                        All course fees paid are <strong className="text-white">non-refundable</strong>.
                                        Since we offer <strong className="text-white">live educational classes and training sessions</strong>,
                                        once you enroll and payment is processed, no refunds will be issued under any circumstances.
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
                                    <Info className="w-6 h-6 text-emerald-400" />
                                    <h2 className="text-xl md:text-2xl font-bold text-white">Why No Refunds?</h2>
                                </div>
                                <div className="text-gray-300 space-y-4 text-sm md:text-base leading-relaxed">
                                    <p>Our refund policy is based on the nature of our educational services:</p>
                                    <ul className="list-disc list-inside space-y-3 text-gray-400 ml-4">
                                        <li>
                                            <strong className="text-white">Live Classes:</strong> Our courses consist of live training sessions where the educator dedicates time and effort specifically for each batch
                                        </li>
                                        <li>
                                            <strong className="text-white">Immediate Access:</strong> Upon enrollment, you immediately receive access to course materials and scheduled class sessions
                                        </li>
                                        <li>
                                            <strong className="text-white">Limited Seats:</strong> Each batch has limited seats, and your enrollment reserves a spot that cannot be given to another student after confirmation
                                        </li>
                                        <li>
                                            <strong className="text-white">Resource Allocation:</strong> Resources, session time, and educational materials are allocated based on enrolled students
                                        </li>
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
                                    <Clock className="w-6 h-6 text-emerald-400" />
                                    <h2 className="text-xl md:text-2xl font-bold text-white">Before You Enroll</h2>
                                </div>
                                <div className="text-gray-300 space-y-4 text-sm md:text-base leading-relaxed">
                                    <p>We strongly recommend that before making any payment:</p>
                                    <ul className="list-disc list-inside space-y-3 text-gray-400 ml-4">
                                        <li>Review the complete course curriculum and syllabus carefully</li>
                                        <li>Understand the course schedule and your availability</li>
                                        <li>Watch any free preview content or demo sessions available</li>
                                        <li>Reach out to us via WhatsApp or email for any clarifications</li>
                                        <li>Ensure you have stable internet for attending live sessions</li>
                                        <li>Confirm you understand this is educational training, not investment advice</li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Section 3 */}
                    <motion.div variants={itemVariants}>
                        <Card className="bg-gray-900/50 border border-emerald-500/20 backdrop-blur-sm">
                            <CardContent className="p-6 md:p-8">
                                <div className="flex items-center space-x-3 mb-4">
                                    <AlertCircle className="w-6 h-6 text-emerald-400" />
                                    <h2 className="text-xl md:text-2xl font-bold text-white">Important Clarifications</h2>
                                </div>
                                <div className="text-gray-300 space-y-4 text-sm md:text-base leading-relaxed">
                                    <div className="space-y-4">
                                        <div className="bg-gray-800/50 rounded-lg p-4">
                                            <p className="text-white font-semibold mb-2">Missed Classes</p>
                                            <p className="text-gray-400 text-sm">
                                                If you miss scheduled live classes, recordings (if available) will be provided. No refunds for missed sessions.
                                            </p>
                                        </div>
                                        <div className="bg-gray-800/50 rounded-lg p-4">
                                            <p className="text-white font-semibold mb-2">Technical Issues</p>
                                            <p className="text-gray-400 text-sm">
                                                We are not responsible for technical issues from your end (internet, device problems). Ensure you have proper setup before enrolling.
                                            </p>
                                        </div>
                                        <div className="bg-gray-800/50 rounded-lg p-4">
                                            <p className="text-white font-semibold mb-2">Dissatisfaction</p>
                                            <p className="text-gray-400 text-sm">
                                                Personal dissatisfaction with course content or teaching style is not grounds for refund. Please research thoroughly before enrolling.
                                            </p>
                                        </div>
                                        <div className="bg-gray-800/50 rounded-lg p-4">
                                            <p className="text-white font-semibold mb-2">Trading Losses</p>
                                            <p className="text-gray-400 text-sm">
                                                This is education, not advice. Any losses in your personal trading are your responsibility. No refunds based on trading performance.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Section 4 */}
                    <motion.div variants={itemVariants}>
                        <Card className="bg-gray-900/50 border border-emerald-500/20 backdrop-blur-sm">
                            <CardContent className="p-6 md:p-8">
                                <div className="flex items-center space-x-3 mb-4">
                                    <RefreshCcw className="w-6 h-6 text-emerald-400" />
                                    <h2 className="text-xl md:text-2xl font-bold text-white">Exceptional Circumstances</h2>
                                </div>
                                <div className="text-gray-300 space-y-4 text-sm md:text-base leading-relaxed">
                                    <p>
                                        In rare and exceptional cases, such as if we are unable to deliver the course due to reasons on our end,
                                        we may offer course rescheduling or credit towards future courses at our sole discretion.
                                    </p>
                                    <p className="text-amber-400">
                                        Note: This does not constitute a refund guarantee and is entirely at the discretion of Nifty Nitesh management.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Contact */}
                    <motion.div variants={itemVariants}>
                        <Card className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/30">
                            <CardContent className="p-6 md:p-8 text-center">
                                <h3 className="text-xl font-bold text-white mb-3">Have Questions Before Enrolling?</h3>
                                <p className="text-gray-400 mb-4">
                                    We encourage you to reach out and clarify all doubts before making a payment decision.
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
