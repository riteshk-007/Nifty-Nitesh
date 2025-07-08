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
  CheckCircle,
  X,
  MapPin,
  CreditCard,
  ChevronDown,
  ChevronUp,
  Gift,
  Heart,
  Star,
  Send,
  Loader2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Toaster } from "sonner";
import { useRouter } from "next/navigation";

const ServiceCards = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showEnrollmentModal, setShowEnrollmentModal] = useState(false);
  const [selectedPaymentPlan, setSelectedPaymentPlan] = useState("one-time");
  const [showPaymentPlans, setShowPaymentPlans] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    experience: "",
    email: "",
  });
  const [enrollmentData, setEnrollmentData] = useState({
    name: "",
    phone: "",
    experience: "",
    occupation: "",
    email: "",
    whatsapp: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const paymentPlans = [
    {
      id: "one-time",
      name: "One-Time Payment",
      amount: 9999,
      installments: 1,
      description: "Pay once, get lifetime access",
      savings: "Best Value",
      popular: true,
    },
    {
      id: "two-parts",
      name: "Two-Part Payment",
      amount: 9999,
      installments: 2,
      installmentAmount: 4999,
      description: "Pay ₹4,999 now, ₹4,999 after 10 days",
      savings: "Flexible",
    },
    {
      id: "three-parts",
      name: "Three-Part Payment",
      amount: 9999,
      installments: 3,
      installmentAmount: 3333,
      description: "Pay ₹3,333 now, ₹3,333 after 7 days, ₹3,333 after 14 days",
      savings: "Most Flexible",
    },
  ];

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEnrollmentChange = (e) => {
    setEnrollmentData({
      ...enrollmentData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/submit-session-booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success(
          "Session booked successfully! We'll contact you shortly.",
          {
            description: "Check your email for confirmation details.",
          }
        );
        setFormData({ name: "", phone: "", experience: "", email: "" });
        setTimeout(() => {
          setShowBookingModal(false);
        }, 2000);
      } else {
        if (result.details) {
          // Show field-specific validation errors
          Object.entries(result.details).forEach(([field, error]) => {
            toast.error(`${error}`, {
              description: `Please check the ${field} field`,
            });
          });
        } else {
          toast.error("Error submitting booking", {
            description: result.error || "Please try again",
          });
        }
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error submitting booking", {
        description: "Please try again later",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleEnrollmentSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/submit-enrollment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: enrollmentData.name,
          email: enrollmentData.email,
          phone: enrollmentData.phone,
          whatsapp: enrollmentData.whatsapp,
          occupation: enrollmentData.occupation,
          experience: enrollmentData.experience,
          paymentPlan: selectedPaymentPlan,
          timestamp: new Date().toISOString(),
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Enrollment submitted successfully!", {
          description: "Redirecting to payment...",
        });
        // Redirect to dedicated enrollment page with payment flow
        window.location.href = `/enrollment?step=2&submissionId=${
          result.submissionId
        }&qrCode=${encodeURIComponent(result.qrCode)}&amount=${
          result.paymentAmount
        }&name=${encodeURIComponent(
          enrollmentData.name
        )}&paymentPlan=${encodeURIComponent(selectedPaymentPlan)}`;
      } else {
        if (result.details) {
          // Show field-specific errors
          Object.entries(result.details).forEach(([field, error]) => {
            toast.error(`${field}: ${error}`);
          });
        } else {
          toast.error("Error submitting enrollment", {
            description: result.error || "Please try again",
          });
        }
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error submitting enrollment", {
        description: "Please try again later",
      });
    } finally {
      setLoading(false);
    }
  };

  const selectedPlan = paymentPlans.find(
    (plan) => plan.id === selectedPaymentPlan
  );

  return (
    <section className="w-full  py-20 relative overflow-hidden bg-gradient-to-b from-green-800/30 via-black to-black">
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
            Start with a personalized session or dive deep into our
            comprehensive course. Both options designed to accelerate your
            trading journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Session Booking Card */}
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
                    ₹250
                  </div>
                  <Badge className="bg-green-500 text-white mb-4">
                    FREE for Students
                  </Badge>
                  <p className="text-gray-300 text-sm">Saturday sessions</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3 p-3 bg-emerald-500/10 rounded-lg">
                    <Users className="w-5 h-5 text-emerald-400" />
                    <span className="text-gray-300">Personalized Guidance</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-emerald-500/10 rounded-lg">
                    <Calendar className="w-5 h-5 text-emerald-400" />
                    <span className="text-gray-300">Saturday Availability</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-500/10 rounded-lg">
                    <MessageCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Direct Expert Access</span>
                  </div>
                </div>

                <Button
                  onClick={() => setShowBookingModal(true)}
                  className="w-full bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold py-4 rounded-full hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Session
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Course Enrollment Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group"
          >
            <Card className="glass-effect bg-gradient-to-br from-gray-900/50 to-black/50 border border-emerald-500/20 backdrop-blur-sm hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-500 h-full">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Complete Trading Course
                  </h3>
                  <div className="text-3xl font-bold text-emerald-400 mb-2">
                    ₹9,999
                  </div>
                  <Badge className="bg-emerald-500 text-white mb-4">
                    Popular Choice
                  </Badge>
                  <p className="text-gray-300 text-sm mb-6">
                    Choose your payment plan • 20-day intensive course
                  </p>
                </div>

                {/* Payment Plans Dropdown */}
                <div className="mb-8">
                  <div
                    className="relative cursor-pointer rounded-lg border-2 border-emerald-500 bg-emerald-500/10 p-4 transition-all duration-300 hover:border-emerald-500/60"
                    onClick={() => setShowPaymentPlans(!showPaymentPlans)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full border-2 border-emerald-500 bg-emerald-500/20"></div>
                        <div>
                          {showPaymentPlans ? (
                            <>
                              <div className="flex items-center gap-2">
                                <span className="text-white font-semibold">
                                  {selectedPlan.name}
                                </span>
                                {selectedPlan.popular && (
                                  <Badge className="bg-emerald-500 text-white text-xs">
                                    Popular
                                  </Badge>
                                )}
                              </div>
                              <p className="text-gray-300 text-sm mt-1">
                                {selectedPlan.description}
                              </p>
                              {selectedPlan.installments > 1 && (
                                <p className="text-emerald-400 text-sm font-medium mt-1">
                                  ₹
                                  {selectedPlan.installmentAmount.toLocaleString()}{" "}
                                  per installment
                                </p>
                              )}
                            </>
                          ) : (
                            <>
                              <span className="text-white font-semibold">
                                Choose Payment Plan
                              </span>
                              <p className="text-gray-300 text-sm mt-1">
                                3 flexible payment options available
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {showPaymentPlans ? (
                          <div className="text-right">
                            <div className="text-lg font-bold text-emerald-400">
                              ₹{selectedPlan.amount.toLocaleString()}
                            </div>
                            <div className="text-xs text-gray-400">
                              {selectedPlan.savings}
                            </div>
                          </div>
                        ) : (
                          <div className="text-right">
                            <div className="text-sm font-medium text-emerald-400">
                              View Options
                            </div>
                          </div>
                        )}
                        {showPaymentPlans ? (
                          <ChevronUp className="w-5 h-5 text-emerald-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-emerald-400" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Dropdown Options */}
                  {showPaymentPlans && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 space-y-2"
                    >
                      {paymentPlans.map((plan) => (
                        <motion.div
                          key={plan.id}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`relative cursor-pointer rounded-lg border-2 transition-all duration-300 ${
                            selectedPaymentPlan === plan.id
                              ? "border-emerald-500 bg-emerald-500/10"
                              : "border-emerald-500/20 bg-emerald-500/5 hover:border-emerald-500/40"
                          }`}
                          onClick={() => {
                            setSelectedPaymentPlan(plan.id);
                            setShowPaymentPlans(false);
                          }}
                        >
                          <div className="p-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div
                                  className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${
                                    selectedPaymentPlan === plan.id
                                      ? "border-emerald-500 bg-emerald-500"
                                      : "border-emerald-500/40 bg-transparent"
                                  }`}
                                >
                                  {selectedPaymentPlan === plan.id && (
                                    <div className="w-full h-full rounded-full bg-white scale-50"></div>
                                  )}
                                </div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="text-white font-semibold text-sm">
                                      {plan.name}
                                    </span>
                                    {plan.popular && (
                                      <Badge className="bg-emerald-500 text-white text-xs">
                                        Popular
                                      </Badge>
                                    )}
                                  </div>
                                  <p className="text-gray-300 text-xs mt-1">
                                    {plan.description}
                                  </p>
                                  {plan.installments > 1 && (
                                    <p className="text-emerald-400 text-xs font-medium mt-1">
                                      ₹{plan.installmentAmount.toLocaleString()}{" "}
                                      per installment
                                    </p>
                                  )}
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-bold text-emerald-400">
                                  ₹{plan.amount.toLocaleString()}
                                </div>
                                <div className="text-xs text-gray-400">
                                  {plan.savings}
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3 p-3 bg-emerald-500/10 rounded-lg">
                    <Users className="w-5 h-5 text-emerald-400" />
                    <span className="text-gray-300">Expert Mentorship</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-500/10 rounded-lg">
                    <MessageCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Community Access</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-emerald-500/10 rounded-lg">
                    <Video className="w-5 h-5 text-emerald-400" />
                    <span className="text-gray-300">
                      Market Analysis Videos
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-500/10 rounded-lg">
                    <Shield className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Risk Management</span>
                  </div>
                </div>

                <Button
                  onClick={() => setShowEnrollmentModal(true)}
                  className="w-full bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold py-4 rounded-full hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
                >
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Referral Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group"
          >
            <Card className="glass-effect bg-gradient-to-br from-gray-900/50 to-black/50 border border-emerald-500/20 backdrop-blur-sm hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-500 h-full">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Refer a Friend
                  </h3>
                  <div className="text-3xl font-bold text-emerald-400 mb-2">
                    🎁 Limited Time Offer
                  </div>
                  <Badge className="bg-gradient-to-r from-emerald-500 to-green-500 text-white mb-4">
                    Share & Save 25%
                  </Badge>
                  <p className="text-gray-300 text-sm mb-6">
                    Help friends discover trading • Get rewards when they join
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3 p-3 bg-emerald-500/10 rounded-lg">
                    <Gift className="w-5 h-5 text-emerald-400" />
                    <span className="text-gray-300">You get 15% discount</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-500/10 rounded-lg">
                    <Heart className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Friend gets 10% off</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-emerald-500/10 rounded-lg">
                    <Star className="w-5 h-5 text-emerald-400" />
                    <span className="text-gray-300">
                      Study together & stay motivated
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-500/10 rounded-lg">
                    <Send className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">
                      Lifetime access for both
                    </span>
                  </div>
                </div>

                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4 mb-6">
                  <div className="text-center">
                    <div className="text-emerald-400 font-semibold mb-2">
                      🎉 Total 25% Savings!
                    </div>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• You save 15% as referrer</li>
                      <li>• Friend saves 10% as new student</li>
                      <li>• Learn together & grow</li>
                      <li>• Build a trading community</li>
                    </ul>
                  </div>
                </div>

                <Button
                  onClick={() => router.push("/refer")}
                  className="w-full bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold py-4 rounded-full hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Refer Friends
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Session Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[1000] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-gradient-to-br from-gray-900 to-black border border-emerald-500/20 rounded-2xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto relative"
          >
            <button
              onClick={() => setShowBookingModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Book 1-on-1 Session
              </h3>
              <p className="text-gray-300">
                Get personalized trading guidance from our experts
              </p>
            </div>

            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-emerald-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-emerald-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-emerald-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Trading Experience
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-emerald-500/20 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-colors"
                >
                  <option value="">Select your experience</option>
                  <option value="beginner">Complete Beginner</option>
                  <option value="basic">Basic Knowledge</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="experienced">Experienced</option>
                </select>
              </div>

              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-2 text-sm text-emerald-400 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>Available: Saturdays</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-emerald-400">
                  <CheckCircle className="w-4 h-4" />
                  <span>Price: ₹250 (FREE for students)</span>
                </div>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold py-4 rounded-full hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                ) : (
                  <MessageCircle className="w-5 h-5 mr-2" />
                )}
                {loading ? "Processing..." : "Enroll Now"}
              </Button>
            </form>
          </motion.div>
        </div>
      )}

      {/* Course Enrollment Modal */}
      {showEnrollmentModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[1000] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-gradient-to-br from-gray-900 to-black border border-emerald-500/20 rounded-2xl p-4 sm:p-6 w-full max-w-6xl max-h-[95vh] overflow-y-auto relative"
          >
            <button
              onClick={() => setShowEnrollmentModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Enroll in Complete Course
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Join hundreds of traders learning real market concepts
              </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {/* Left Column - Form */}
              <div className="order-2 xl:order-1">
                <form onSubmit={handleEnrollmentSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={enrollmentData.name}
                      onChange={handleEnrollmentChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-emerald-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={enrollmentData.email}
                      onChange={handleEnrollmentChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-emerald-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={enrollmentData.phone}
                      onChange={handleEnrollmentChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-emerald-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Trading Experience
                    </label>
                    <select
                      name="experience"
                      value={enrollmentData.experience}
                      onChange={handleEnrollmentChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-emerald-500/20 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    >
                      <option value="">Select your experience</option>
                      <option value="beginner">Complete Beginner</option>
                      <option value="basic">Basic Knowledge</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="experienced">Experienced</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Occupation *
                    </label>
                    <select
                      name="occupation"
                      value={enrollmentData.occupation}
                      onChange={handleEnrollmentChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-emerald-500/20 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-colors"
                      required
                    >
                      <option value="">Select your occupation</option>
                      <option value="student">Student</option>
                      <option value="professional">Working Professional</option>
                      <option value="business">Business Owner</option>
                      <option value="homemaker">Homemaker</option>
                      <option value="retired">Retired</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Payment Plan Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Choose Payment Plan *
                    </label>
                    <div className="space-y-3">
                      {paymentPlans.map((plan) => (
                        <motion.label
                          key={plan.id}
                          htmlFor={`modal-${plan.id}`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`relative cursor-pointer rounded-lg border-2 transition-all duration-300 block ${
                            selectedPaymentPlan === plan.id
                              ? "border-emerald-500 bg-emerald-500/10"
                              : "border-emerald-500/20 bg-emerald-500/5 hover:border-emerald-500/40"
                          }`}
                        >
                          <div className="p-3">
                            <div className="flex items-center justify-between mb-1">
                              <div className="flex items-center gap-3">
                                <input
                                  type="radio"
                                  id={`modal-${plan.id}`}
                                  name="modalPaymentPlan"
                                  value={plan.id}
                                  checked={selectedPaymentPlan === plan.id}
                                  onChange={(e) =>
                                    setSelectedPaymentPlan(e.target.value)
                                  }
                                  className="w-4 h-4 text-emerald-500 bg-gray-800 border-emerald-500 focus:ring-emerald-500 focus:ring-2"
                                />
                                <span className="text-white font-semibold text-sm">
                                  {plan.name}
                                </span>
                              </div>
                              {plan.popular && (
                                <Badge className="bg-emerald-500 text-white text-xs">
                                  Popular
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="ml-7">
                                <p className="text-gray-300 text-xs">
                                  {plan.description}
                                </p>
                                {plan.installments > 1 && (
                                  <p className="text-emerald-400 text-xs font-medium mt-1">
                                    ₹{plan.installmentAmount.toLocaleString()}{" "}
                                    per installment
                                  </p>
                                )}
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-bold text-emerald-400">
                                  ₹{plan.amount.toLocaleString()}
                                </div>
                                <div className="text-xs text-gray-400">
                                  {plan.savings}
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.label>
                      ))}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold py-4 rounded-full hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 mt-6"
                  >
                    {loading ? (
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    ) : (
                      <MessageCircle className="w-5 h-5 mr-2" />
                    )}
                    Enroll Now
                  </Button>
                </form>
              </div>

              {/* Right Column - Course Details */}
              <div className="order-1 xl:order-2">
                <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-xl p-4 sm:p-6 sticky top-4">
                  <div className="text-center mb-6">
                    <div className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-2">
                      ₹{selectedPlan?.amount.toLocaleString() || "9,999"}
                    </div>
                    <div className="text-gray-300 mb-2 text-sm sm:text-base">
                      {selectedPlan?.name || "One-time payment"} • Complete
                      access
                    </div>
                    {selectedPaymentPlan !== "one-time" && (
                      <div className="text-emerald-400 text-sm font-medium mb-2">
                        ₹{selectedPlan?.installmentAmount.toLocaleString()} per
                        installment
                      </div>
                    )}
                    <div className="w-full h-px bg-emerald-500/20 mb-4"></div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                      </div>
                      <span className="text-white font-medium text-sm sm:text-base">
                        Lifetime Access to Content
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                      </div>
                      <span className="text-white font-medium text-sm sm:text-base">
                        Expert Mentorship & Community
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                      </div>
                      <span className="text-white font-medium text-sm sm:text-base">
                        Real Market Analysis Videos
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                      </div>
                      <span className="text-white font-medium text-sm sm:text-base">
                        FREE 1-on-1 Sessions
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                      </div>
                      <span className="text-white font-medium text-sm sm:text-base">
                        Risk Management Training
                      </span>
                    </div>

                    {/* Payment Plan Summary */}
                    <div className="mt-6 p-4 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                      <div className="flex items-center gap-2 mb-2">
                        <CreditCard className="w-5 h-5 text-emerald-400" />
                        <span className="text-white font-semibold text-sm sm:text-base">
                          Selected Plan
                        </span>
                      </div>
                      <div className="text-sm text-gray-300">
                        <div className="font-medium text-emerald-400">
                          {selectedPlan?.name}
                        </div>
                        <div className="text-xs mt-1">
                          {selectedPlan?.description}
                        </div>
                        {selectedPaymentPlan !== "one-time" && (
                          <div className="text-xs text-emerald-400 mt-1">
                            Next payment: ₹
                            {selectedPlan?.installmentAmount.toLocaleString()}{" "}
                            in{" "}
                            {selectedPaymentPlan === "two-parts" ? "10" : "7"}{" "}
                            days
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <Toaster richColors position="top-center" />
    </section>
  );
};

export default ServiceCards;
