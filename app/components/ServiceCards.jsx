"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    GraduationCap,
    Video,
    MessageCircle,
    Calendar,
    Users,
    Shield,
    Heart,
    Star,
    BookOpen,
    Clock,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Toaster } from "sonner";
import TradingCourseForm from "./TradingCourseForm";

const ServiceCards = () => {
    const [showSessionModal, setShowSessionModal] = useState(false);
    const [showCourseModal, setShowCourseModal] = useState(false);
    const [showMentorshipModal, setShowMentorshipModal] = useState(false);

    return (
        <section className="w-full py-20 relative overflow-hidden bg-gradient-to-b from-green-800/30 via-black to-black">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-500/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-emerald-600/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Choose Your <span className="text-emerald-400">Learning Path</span>
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Start with a personalized session, learn through our comprehensive course,
                        or get lifetime mentorship. All options designed to accelerate your trading journey.
                    </p>
                </motion.div>

                {/* Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {/* 1-on-1 Trading Session Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                        className="group"
                    >
                        <Card className="glass-effect bg-gradient-to-br from-gray-900/50 to-black/50 border border-emerald-500/20 backdrop-blur-sm hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-500 h-full">
                            <CardContent className="p-8">
                                <div className="text-center mb-8">
                                    <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <Video className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">
                                        1-on-1 Trading Session
                                    </h3>
                                    <div className="text-3xl font-bold text-emerald-400 mb-2">
                                        ₹199
                                    </div>
                                    <Badge className="bg-green-500 text-white mb-4">
                                        Personal Guidance
                                    </Badge>
                                    <p className="text-gray-300 text-sm">Individual sessions available</p>
                                </div>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center space-x-3 p-3 bg-emerald-500/10 rounded-lg">
                                        <Users className="w-5 h-5 text-emerald-400" />
                                        <span className="text-gray-300">Personalized Guidance</span>
                                    </div>
                                    <div className="flex items-center space-x-3 p-3 bg-emerald-500/10 rounded-lg">
                                        <Calendar className="w-5 h-5 text-emerald-400" />
                                        <span className="text-gray-300">Flexible Scheduling</span>
                                    </div>
                                    <div className="flex items-center space-x-3 p-3 bg-green-500/10 rounded-lg">
                                        <MessageCircle className="w-5 h-5 text-green-400" />
                                        <span className="text-gray-300">Direct Expert Access</span>
                                    </div>
                                    <div className="flex items-center space-x-3 p-3 bg-emerald-500/10 rounded-lg">
                                        <Clock className="w-5 h-5 text-emerald-400" />
                                        <span className="text-gray-300">1 Hour Session</span>
                                    </div>
                                </div>

                                <Button
                                    onClick={() => setShowSessionModal(true)}
                                    className="w-full bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold py-4 rounded-full hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
                                >
                                    <Calendar className="w-5 h-5 mr-2" />
                                    Book Session
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Complete Trading Course Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                        className="group relative"
                    >
                        {/* Popular Badge */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                            <Badge className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-4 py-2 text-sm font-bold rounded-full shadow-lg">
                                <Star className="w-4 h-4 mr-1" />
                                Most Popular
                            </Badge>
                        </div>

                        <Card className="glass-effect bg-gradient-to-br from-emerald-900/30 to-black/50 border border-emerald-500/40 backdrop-blur-sm hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-500 h-full">
                            <CardContent className="p-8 pt-12">
                                <div className="text-center mb-8">
                                    <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <GraduationCap className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">
                                        Complete Trading Course
                                    </h3>
                                    <div className="text-3xl font-bold text-emerald-400 mb-2">
                                        ₹11,999
                                    </div>
                                    <Badge className="bg-emerald-500 text-white mb-4">
                                        + Lifetime Mentorship FREE
                                    </Badge>
                                    <p className="text-gray-300 text-sm">Complete course with lifetime mentorship included</p>
                                </div>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center space-x-3 p-3 bg-emerald-500/10 rounded-lg">
                                        <BookOpen className="w-5 h-5 text-emerald-400" />
                                        <span className="text-gray-300">Complete Course Material</span>
                                    </div>
                                    <div className="flex items-center space-x-3 p-3 bg-green-500/10 rounded-lg">
                                        <Users className="w-5 h-5 text-green-400" />
                                        <span className="text-gray-300">Lifetime Mentorship FREE</span>
                                    </div>
                                    <div className="flex items-center space-x-3 p-3 bg-emerald-500/10 rounded-lg">
                                        <Video className="w-5 h-5 text-emerald-400" />
                                        <span className="text-gray-300">Live Trading Sessions</span>
                                    </div>
                                    <div className="flex items-center space-x-3 p-3 bg-green-500/10 rounded-lg">
                                        <Shield className="w-5 h-5 text-green-400" />
                                        <span className="text-gray-300">Risk Management</span>
                                    </div>
                                </div>

                                <div className="text-center mb-6">
                                    <p className="text-sm text-gray-300 mb-2">Payment Options:</p>
                                    <div className="space-y-1 text-xs text-emerald-400">
                                        <p>• One-time: ₹11,999 (Best Value)</p>
                                        <p>• 50-50%: ₹6,000 x 2</p>
                                        <p>• Three parts: ₹4,000 x 3</p>
                                    </div>
                                </div>

                                <Button
                                    onClick={() => setShowCourseModal(true)}
                                    className="w-full bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold py-4 rounded-full hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
                                >
                                    <GraduationCap className="w-5 h-5 mr-2" />
                                    Enroll Now
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Lifetime Mentorship Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                        // Ye col-span only small screen ke liye
                        className="group sm:col-span-2 lg:col-span-1"
                    >
                        <Card className="glass-effect bg-gradient-to-br from-gray-900/50 to-black/50 border border-purple-500/20 backdrop-blur-sm hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-500 h-full">
                            <CardContent className="p-8">
                                <div className="text-center mb-8">
                                    <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <Heart className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">
                                        Lifetime Mentorship
                                    </h3>
                                    <div className="text-3xl font-bold text-purple-400 mb-2">
                                        ₹13,999
                                    </div>
                                    <Badge className="bg-purple-500 text-white mb-4">
                                        Premium Support
                                    </Badge>
                                    <p className="text-gray-300 text-sm">Mentorship without course content</p>
                                </div>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center space-x-3 p-3 bg-purple-500/10 rounded-lg">
                                        <Users className="w-5 h-5 text-purple-400" />
                                        <span className="text-gray-300">Lifetime Mentor Access</span>
                                    </div>
                                    <div className="flex items-center space-x-3 p-3 bg-pink-500/10 rounded-lg">
                                        <MessageCircle className="w-5 h-5 text-pink-400" />
                                        <span className="text-gray-300">Priority Support</span>
                                    </div>
                                    <div className="flex items-center space-x-3 p-3 bg-purple-500/10 rounded-lg">
                                        <Video className="w-5 h-5 text-purple-400" />
                                        <span className="text-gray-300">Market Analysis</span>
                                    </div>
                                    <div className="flex items-center space-x-3 p-3 bg-pink-500/10 rounded-lg">
                                        <Shield className="w-5 h-5 text-pink-400" />
                                        <span className="text-gray-300">Personal Strategy</span>
                                    </div>
                                </div>

                                <Button
                                    onClick={() => setShowMentorshipModal(true)}
                                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                                >
                                    <Heart className="w-5 h-5 mr-2" />
                                    Get Mentorship
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>

            {/* Modals */}
            {showSessionModal && (
                <TradingCourseForm
                    courseType="session"
                    onClose={() => setShowSessionModal(false)}
                />
            )}

            {showCourseModal && (
                <TradingCourseForm
                    courseType="complete"
                    onClose={() => setShowCourseModal(false)}
                />
            )}

            {showMentorshipModal && (
                <TradingCourseForm
                    courseType="mentorship"
                    onClose={() => setShowMentorshipModal(false)}
                />
            )}

            <Toaster
                position="top-right"
                toastOptions={{
                    style: {
                        background: "#1f2937",
                        color: "#f3f4f6",
                        border: "1px solid #374151",
                    },
                }}
            />
        </section>
    );
};

export default ServiceCards;
