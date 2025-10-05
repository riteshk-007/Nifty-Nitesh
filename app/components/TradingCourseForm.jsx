"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  X,
  Phone,
  Mail,
  User,
  Briefcase,
  Loader2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const TradingCourseForm = ({ courseType = "complete", onClose }) => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    occupation: courseType === "session" ? "" : "",
    experience: courseType === "session" ? "" : "",
    paymentPlan: courseType === "complete" ? "one-time" : "single",
  });
  const [errors, setErrors] = useState({});
  const courseDetails = {
    session: {
      title: "1-on-1 Trading Session",
      price: "₹199",
      description: "Personal guidance session with expert trader",
    },
    complete: {
      title: "Complete Trading Course",
      price: "₹9,999",
      description: "Full course with lifetime mentorship",
    },
    mentorship: {
      title: "Lifetime Mentorship",
      price: "₹12,999",
      description: "Lifetime mentorship without course",
    },
  };

  const paymentPlans = {
    complete: [
      {
        id: "one-time",
        name: "One-Time Payment",
        amount: 9999,
        description: "Pay ₹9,999 once - Best Value",
        badge: "Most Popular",
      },
      {
        id: "two-parts",
        name: "50-50% Payment",
        amount: "₹4,999 x 2",
        description: "Pay in 2 installments of ₹4,999",
        badge: "Flexible",
      },
      {
        id: "three-parts",
        name: "Three-Part Payment",
        amount: "₹3,333 x 3",
        description: "Pay in 3 installments of ₹3,333",
        badge: "Most Flexible",
      },
    ],
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters long";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    // Only validate occupation and experience for complete course and mentorship
    if (courseType !== "session") {
      if (!formData.occupation.trim()) {
        newErrors.occupation = "Occupation is required";
      }

      if (!formData.experience.trim()) {
        newErrors.experience = "Trading experience is required";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill all required fields correctly");
      return;
    }

    setLoading(true);

    try {
      let apiEndpoint;
      let submitData = {
        ...formData,
        courseType,
        courseTitle: courseDetails[courseType].title,
        coursePrice: courseDetails[courseType].price,
        submittedAt: new Date().toISOString(),
        // Set whatsapp to phone for backward compatibility with API
        whatsapp: formData.phone,
      };

      // Determine API endpoint based on course type
      if (courseType === "session") {
        apiEndpoint = "/api/submit-session-booking";
      } else {
        apiEndpoint = "/api/submit-form";
      }

      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        toast.success("Form submitted successfully! We'll contact you soon.");
      } else {
        throw new Error(result.message || "Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      >
        <Card className="bg-gradient-to-br from-gray-900 to-black border border-emerald-500/30 max-w-md w-full">
          <CardContent className="p-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-10 h-10 text-white" />
            </motion.div>

            <h3 className="text-2xl font-bold text-white mb-4">
              Form Submitted Successfully!
            </h3>

            <p className="text-gray-300 mb-6">
              Thank you for your interest in {courseDetails[courseType].title}.
              We&apos;ll contact you soon on your provided number.
            </p>                        <Button
              onClick={onClose}
              className="w-full bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold py-3 rounded-full hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
            >
              Close
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    >
      <Card className="bg-gradient-to-br from-gray-900 to-black border border-emerald-500/30 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <CardContent className="p-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                {courseDetails[courseType].title}
              </h2>
              <p className="text-emerald-400 text-xl font-bold">
                {courseDetails[courseType].price}
              </p>
              <p className="text-gray-300 text-sm">
                {courseDetails[courseType].description}
              </p>
            </div>
            <Button
              onClick={onClose}
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Payment Plan Selection for Complete Course */}
          {courseType === "complete" && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">Choose Payment Plan</h3>
              <div className="grid gap-4">
                {paymentPlans.complete.map((plan) => (
                  <motion.div
                    key={plan.id}
                    whileHover={{ scale: 1.02 }}
                    className={`p-4 rounded-lg border cursor-pointer transition-all ${formData.paymentPlan === plan.id
                      ? "border-emerald-500 bg-emerald-500/10"
                      : "border-gray-600 bg-gray-800/50 hover:border-emerald-500/50"
                      }`}
                    onClick={() => handleInputChange({ target: { name: "paymentPlan", value: plan.id } })}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-white">{plan.name}</h4>
                          {plan.badge && (
                            <span className="px-2 py-1 bg-emerald-500 text-white text-xs rounded-full">
                              {plan.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-gray-300 text-sm">{plan.description}</p>
                      </div>
                      <div className="text-emerald-400 font-bold text-lg">
                        {plan.amount}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 flex items-center">
                <User className="w-4 h-4 mr-2 text-emerald-400" />
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full p-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${errors.name ? "border-red-500" : "border-gray-600"
                  }`}
                placeholder="Enter your full name"
              />
              {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 flex items-center">
                <Mail className="w-4 h-4 mr-2 text-emerald-400" />
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full p-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${errors.email ? "border-red-500" : "border-gray-600"
                  }`}
                placeholder="Enter your email address"
              />
              {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
            </div>

            {/* Phone Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 flex items-center">
                <Phone className="w-4 h-4 mr-2 text-emerald-400" />
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full p-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${errors.phone ? "border-red-500" : "border-gray-600"
                  }`}
                placeholder="Enter your phone number"
              />
              {errors.phone && <p className="text-red-400 text-sm">{errors.phone}</p>}
            </div>

            {/* Conditional Fields for Complete Course and Mentorship */}
            {courseType !== "session" && (
              <>
                {/* Occupation Field */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 flex items-center">
                    <Briefcase className="w-4 h-4 mr-2 text-emerald-400" />
                    Occupation *
                  </label>
                  <select
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleInputChange}
                    className={`w-full p-3 bg-gray-800/50 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${errors.occupation ? "border-red-500" : "border-gray-600"
                      }`}
                  >
                    <option value="">Select your occupation</option>
                    <option value="student">Student</option>
                    <option value="employee">Employee</option>
                    <option value="business">Business Owner</option>
                    <option value="freelancer">Freelancer</option>
                    <option value="retired">Retired</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.occupation && <p className="text-red-400 text-sm">{errors.occupation}</p>}
                </div>

                {/* Experience Field */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Trading Experience *
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className={`w-full p-3 bg-gray-800/50 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${errors.experience ? "border-red-500" : "border-gray-600"
                      }`}
                  >
                    <option value="">Select your experience level</option>
                    <option value="beginner">Beginner (0-6 months)</option>
                    <option value="intermediate">Intermediate (6 months - 2 years)</option>
                    <option value="advanced">Advanced (2+ years)</option>
                    <option value="no-experience">No Experience</option>
                  </select>
                  {errors.experience && <p className="text-red-400 text-sm">{errors.experience}</p>}
                </div>
              </>
            )}

            {/* Submit Button */}
            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                onClick={onClose}
                variant="outline"
                className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={loading}
                className="flex-1 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Form"
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TradingCourseForm;