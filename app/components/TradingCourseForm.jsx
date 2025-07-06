"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import {
  GraduationCap,
  CreditCard,
  Upload,
  CheckCircle,
  X,
  Clock,
  Phone,
  Mail,
  User,
  Briefcase,
  TrendingUp,
  QrCode,
  Camera,
  ArrowRight,
  Loader2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import imageCompression from "browser-image-compression";
import Image from "next/image";

const CLOUDINARY_URL = process.env.NEXT_PUBLIC_CLOUDINARY_URL;
const CLOUDINARY_UPLOAD_PRESET =
  process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

const TradingCourseForm = () => {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1); // 1: Form, 2: Payment, 3: Screenshot, 4: Success
  const [loading, setLoading] = useState(false);
  const [qrCodeData, setQrCodeData] = useState(null);
  const [paymentAmount, setPaymentAmount] = useState(9999);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    occupation: "",
    experience: "",
    paymentPlan: "one-time",
  });
  const [errors, setErrors] = useState({});
  const [paymentScreenshot, setPaymentScreenshot] = useState(null);
  const [submissionId, setSubmissionId] = useState(null);
  const [cloudinaryUrl, setCloudinaryUrl] = useState("");
  const [compressing, setCompressing] = useState(false);
  const [cloudinaryUploading, setCloudinaryUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");

  // Handle URL parameters for direct enrollment flow
  useEffect(() => {
    const urlStep = searchParams.get("step");
    const urlSubmissionId = searchParams.get("submissionId");
    const urlQrCode = searchParams.get("qrCode");
    const urlAmount = searchParams.get("amount");
    const urlName = searchParams.get("name");
    const urlPaymentPlan = searchParams.get("paymentPlan");

    if (urlStep && urlSubmissionId && urlQrCode) {
      setStep(parseInt(urlStep));
      setSubmissionId(urlSubmissionId);
      setQrCodeData(decodeURIComponent(urlQrCode));
      if (urlAmount) {
        setPaymentAmount(parseInt(urlAmount));
      }

      // Set form data from URL parameters
      setFormData((prevData) => ({
        ...prevData,
        name: urlName || "",
        paymentPlan: urlPaymentPlan || "one-time",
      }));

      // Find the payment plan based on amount
      if (urlAmount) {
        const amount = parseInt(urlAmount);
        const plan = paymentPlans.find(
          (p) => p.amount === amount || p.installmentAmount === amount
        );
        if (plan) {
          setFormData((prevData) => ({
            ...prevData,
            paymentPlan: plan.id,
          }));
        }
      }
    }
  }, [searchParams]);

  const paymentPlans = [
    {
      id: "one-time",
      name: "One-Time Payment",
      amount: 9999,
      installments: 1,
      description: "Pay once, get lifetime access",
      badge: "Popular",
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
      badge: "Flexible",
    },
    {
      id: "three-parts",
      name: "Three-Part Payment",
      amount: 9999,
      installments: 3,
      installmentAmount: 3333,
      description: "Pay ₹3,333 now, ₹3,333 after 7 days, ₹3,333 after 14 days",
      badge: "Most Flexible",
    },
  ];

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters long";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit Indian phone number";
    }

    // WhatsApp validation (only if provided)
    if (formData.whatsapp.trim() && !/^[6-9]\d{9}$/.test(formData.whatsapp)) {
      newErrors.whatsapp = "Please enter a valid 10-digit Indian phone number";
    }

    // Occupation validation
    if (!formData.occupation) {
      newErrors.occupation = "Please select your occupation";
    }

    // Experience validation
    if (!formData.experience) {
      newErrors.experience = "Please select your experience level";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      // If WhatsApp is empty and phone is being changed, use phone number for WhatsApp
      whatsapp: name === "phone" && !prev.whatsapp ? value : prev.whatsapp,
    }));

    // Clear error for the field being changed
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/submit-enrollment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          // If WhatsApp is empty, use phone number
          whatsapp: formData.whatsapp || formData.phone,
          timestamp: new Date().toISOString(),
        }),
      });

      const result = await response.json();

      if (result.success) {
        setQrCodeData(result.qrCode);
        setSubmissionId(result.submissionId);
        setStep(2);
      } else {
        if (result.details) {
          // Set field-specific errors from API
          setErrors(result.details);
        } else {
          setErrors({ submit: result.error || "Error submitting form" });
        }
      }
    } catch (error) {
      console.error("Error:", error);
      setErrors({ submit: "Error submitting form. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploadError("");
    setCloudinaryUrl("");
    setPaymentScreenshot(null);
    setCompressing(true);
    try {
      // Compress the image
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
        fileType: "image/jpeg",
      };
      const compressedFile = await imageCompression(file, options);
      setPaymentScreenshot(compressedFile);
      setCompressing(false);
      // Upload to Cloudinary (try server-side first, then fallback to client-side)
      setCloudinaryUploading(true);

      try {
        // Try server-side upload first
        const serverFormData = new FormData();
        serverFormData.append("file", compressedFile);

        const serverRes = await fetch("/api/upload-to-cloudinary", {
          method: "POST",
          body: serverFormData,
        });

        const serverData = await serverRes.json();
        console.log("Server-side upload response:", serverData);

        if (serverData.success && serverData.secure_url) {
          setCloudinaryUrl(serverData.secure_url);
        } else {
          throw new Error("Server-side upload failed");
        }
      } catch (serverError) {
        console.log(
          "Server-side upload failed, trying client-side:",
          serverError
        );

        // Fallback to client-side upload
        const formData = new FormData();
        formData.append("file", compressedFile);
        formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

        console.log("Uploading to:", CLOUDINARY_URL);
        console.log("Upload preset:", CLOUDINARY_UPLOAD_PRESET);

        const res = await fetch(CLOUDINARY_URL, {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        console.log("Cloudinary Response:", data);
        if (data.secure_url) {
          setCloudinaryUrl(data.secure_url);
        } else {
          console.error("Cloudinary Error:", data);
          setUploadError(
            "Failed to upload image to Cloudinary: " +
              (data.error?.message || "Unknown error")
          );
        }
      }
    } catch (err) {
      setUploadError("Image compression or upload failed");
    } finally {
      setCompressing(false);
      setCloudinaryUploading(false);
    }
  };

  const handleScreenshotSubmit = async () => {
    if (!cloudinaryUrl) {
      alert("Please select and upload a screenshot first");
      return;
    }

    // Validate required fields
    if (!submissionId) {
      alert("Missing submission ID. Please try again or contact support.");
      return;
    }

    if (!selectedPlan?.amount) {
      alert("Missing payment amount. Please select a payment plan.");
      return;
    }

    if (!formData.name) {
      alert("Missing name. Please fill in your name.");
      return;
    }

    if (!formData.paymentPlan) {
      alert("Missing payment plan. Please select a payment plan.");
      return;
    }

    setLoading(true);
    try {
      const uploadFormData = new FormData();
      uploadFormData.append("screenshotUrl", cloudinaryUrl);
      uploadFormData.append("submissionId", submissionId);
      uploadFormData.append("amount", selectedPlan.amount.toString());
      uploadFormData.append("name", formData.name);
      uploadFormData.append("paymentPlan", formData.paymentPlan);

      // Debug logs
      console.log("Submitting screenshot with data:", {
        screenshotUrl: cloudinaryUrl,
        submissionId,
        amount: selectedPlan.amount,
        name: formData.name,
        paymentPlan: formData.paymentPlan,
      });

      const response = await fetch("/api/upload-screenshot", {
        method: "POST",
        body: uploadFormData,
      });
      const result = await response.json();

      // Debug log for API response
      console.log("API Response:", result);

      if (result.success) {
        setStep(4);
        setPaymentScreenshot(null);
        setCloudinaryUrl("");
        const fileInput = document.getElementById("screenshot-upload");
        if (fileInput) fileInput.value = "";
      } else {
        alert(
          "Error uploading screenshot: " + (result.error || result.details)
        );
      }
    } catch (error) {
      console.error("Error uploading screenshot:", error);
      alert("Error uploading screenshot. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const selectedPlan = paymentPlans.find(
    (plan) => plan.id === formData.paymentPlan
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Join <span className="text-emerald-400">Nifty Nitesh</span> Trading
            Course
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Master the art of trading with our comprehensive course and
            personalized guidance
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            {[1, 2, 3, 4].map((stepNum) => (
              <div key={stepNum} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= stepNum
                      ? "bg-emerald-500 text-white"
                      : "bg-gray-600 text-gray-400"
                  }`}
                >
                  {stepNum}
                </div>
                {stepNum < 4 && (
                  <div
                    className={`w-8 h-0.5 ${
                      step > stepNum ? "bg-emerald-500" : "bg-gray-600"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: Form */}
        {step === 1 && (
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-2 text-emerald-400" />
                Enrollment Details
              </h2>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                {/* Form Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      className={`w-full px-4 py-3 bg-gray-700/50 border ${
                        errors.name ? "border-red-500" : "border-gray-600"
                      } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors`}
                      placeholder="Enter your full name"
                      required
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      className={`w-full px-4 py-3 bg-gray-700/50 border ${
                        errors.email ? "border-red-500" : "border-gray-600"
                      } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors`}
                      placeholder="Enter your email address"
                      required
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      className={`w-full px-4 py-3 bg-gray-700/50 border ${
                        errors.phone ? "border-red-500" : "border-gray-600"
                      } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors`}
                      placeholder="Enter your phone number"
                      required
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleFormChange}
                      className={`w-full px-4 py-3 bg-gray-700/50 border ${
                        errors.whatsapp ? "border-red-500" : "border-gray-600"
                      } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors`}
                      placeholder="Enter your WhatsApp number (optional)"
                    />
                    <p className="text-gray-400 text-xs mt-1">
                      Leave empty to use phone number
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <Briefcase className="w-4 h-4 inline mr-2" />
                      Occupation *
                    </label>
                    <select
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleFormChange}
                      className={`w-full px-4 py-3 bg-gray-700/50 border ${
                        errors.occupation ? "border-red-500" : "border-gray-600"
                      } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors`}
                      required
                    >
                      <option value="">Select your occupation</option>
                      <option value="student">Student</option>
                      <option value="employed">Employed</option>
                      <option value="business">Business Owner</option>
                      <option value="trader">Full-time Trader</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.occupation && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.occupation}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <TrendingUp className="w-4 h-4 inline mr-2" />
                      Trading Experience *
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleFormChange}
                      className={`w-full px-4 py-3 bg-gray-700/50 border ${
                        errors.experience ? "border-red-500" : "border-gray-600"
                      } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors`}
                      required
                    >
                      <option value="">Select your experience level</option>
                      <option value="beginner">Beginner (0-1 year)</option>
                      <option value="intermediate">
                        Intermediate (1-3 years)
                      </option>
                      <option value="experienced">
                        Experienced (3+ years)
                      </option>
                    </select>
                    {errors.experience && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.experience}
                      </p>
                    )}
                  </div>
                </div>

                {errors.submit && (
                  <div className="mt-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <p className="text-red-500 text-sm">{errors.submit}</p>
                  </div>
                )}

                {/* Payment Plans */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-4">
                    <CreditCard className="w-4 h-4 inline mr-2" />
                    Choose Payment Plan *
                  </label>
                  <div className="grid gap-4">
                    {paymentPlans.map((plan) => (
                      <div key={plan.id} className="relative">
                        <input
                          type="radio"
                          name="paymentPlan"
                          value={plan.id}
                          checked={formData.paymentPlan === plan.id}
                          onChange={handleFormChange}
                          className="sr-only"
                        />
                        <div
                          className={`p-4 rounded-lg border cursor-pointer transition-all ${
                            formData.paymentPlan === plan.id
                              ? "border-emerald-500 bg-emerald-500/10"
                              : "border-gray-600 bg-gray-700/30"
                          }`}
                          onClick={() =>
                            setFormData({ ...formData, paymentPlan: plan.id })
                          }
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="font-semibold text-white">
                                  {plan.name}
                                </h3>
                                {plan.badge && (
                                  <span
                                    className={`px-2 py-1 rounded-full text-xs ${
                                      plan.popular
                                        ? "bg-emerald-500 text-white"
                                        : "bg-gray-600 text-gray-300"
                                    }`}
                                  >
                                    {plan.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-gray-400 text-sm mt-1">
                                {plan.description}
                              </p>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-emerald-400">
                                ₹
                                {plan.installmentAmount
                                  ? plan.installmentAmount.toLocaleString()
                                  : plan.amount.toLocaleString()}
                              </div>
                              {plan.installmentAmount && (
                                <div className="text-sm text-gray-400">
                                  per installment
                                </div>
                              )}
                              <div className="text-sm text-gray-400">
                                Total: ₹{plan.amount.toLocaleString()}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold py-4 rounded-full hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 mt-6"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Proceed to Payment
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Payment */}
        {step === 2 && (
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <QrCode className="w-6 h-6 mr-2 text-emerald-400" />
                Payment Details
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Payment Information
                  </h3>
                  <div className="bg-gray-700/30 rounded-lg p-4 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Course:</span>
                      <span className="text-white">
                        Complete Trading Course
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Plan:</span>
                      <span className="text-white">{selectedPlan?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Amount:</span>
                      <span className="text-emerald-400 font-bold text-lg">
                        ₹{paymentAmount.toLocaleString()}
                      </span>
                    </div>
                    {selectedPlan?.installmentAmount && (
                      <div className="text-sm text-gray-400 border-t border-gray-600 pt-2">
                        This is the first installment. Total course fee: ₹
                        {selectedPlan.amount.toLocaleString()}
                      </div>
                    )}
                  </div>

                  <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                    <h4 className="font-semibold text-emerald-400 mb-2">
                      Payment Instructions:
                    </h4>
                    <ol className="text-gray-300 text-sm space-y-1 list-decimal list-inside">
                      <li>Scan the QR code with any UPI app</li>
                      <li>Enter the amount shown above</li>
                      <li>Complete the payment</li>
                      <li>Take a screenshot of the payment confirmation</li>
                      <li>Upload the screenshot in the next step</li>
                    </ol>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Scan QR Code
                  </h3>
                  {qrCodeData && (
                    <div className="bg-white p-4 rounded-lg inline-block mb-4">
                      <Image
                        src={qrCodeData}
                        alt="Payment QR Code"
                        width={256}
                        height={256}
                        className="w-64 h-64 object-contain"
                      />
                    </div>
                  )}
                  <p className="text-gray-400 mt-4 text-sm">
                    UPI ID: niftynitesh@yesg
                  </p>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <Button
                  onClick={() => setStep(3)}
                  className="bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold py-3 px-8 rounded-lg hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
                >
                  I&apos;ve Made the Payment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Screenshot Upload */}
        {step === 3 && (
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Camera className="w-6 h-6 mr-2 text-emerald-400" />
                Upload Payment Screenshot
              </h2>

              <div className="text-center">
                {compressing ? (
                  <div>
                    <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-emerald-400">Compressing image...</p>
                  </div>
                ) : cloudinaryUploading ? (
                  <div>
                    <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-emerald-400">
                      Uploading image to Cloudinary...
                    </p>
                  </div>
                ) : cloudinaryUrl ? (
                  <div>
                    <Image
                      src={cloudinaryUrl}
                      alt="Payment Screenshot Preview"
                      width={600}
                      height={300}
                      className="max-w-full h-auto max-h-64 mx-auto rounded-lg mb-4"
                    />
                    <p className="text-emerald-400 mt-4">
                      Image uploaded successfully
                    </p>
                    <Button
                      onClick={() => {
                        setPaymentScreenshot(null);
                        setCloudinaryUrl("");
                        const fileInput =
                          document.getElementById("screenshot-upload");
                        if (fileInput) fileInput.value = "";
                      }}
                      variant="outline"
                      className="border-red-500/30 text-red-400 hover:bg-red-500/10"
                    >
                      Remove File
                    </Button>
                  </div>
                ) : (
                  <div>
                    <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-400 mb-4">
                      Click to upload your payment screenshot
                    </p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="screenshot-upload"
                    />
                    <label
                      htmlFor="screenshot-upload"
                      className="inline-block bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg cursor-pointer transition-colors"
                    >
                      Choose File
                    </label>
                  </div>
                )}
              </div>

              <div className="flex justify-center gap-4">
                <Button
                  onClick={() => setStep(2)}
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700"
                >
                  Back
                </Button>
                <Button
                  onClick={handleScreenshotSubmit}
                  disabled={!cloudinaryUrl || loading}
                  className="bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold py-3 px-8 rounded-lg hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit & Complete
                      <CheckCircle className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 4: Success */}
        {step === 4 && (
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <CheckCircle className="w-20 h-20 text-emerald-400 mx-auto mb-6" />
              </motion.div>

              <h2 className="text-3xl font-bold text-white mb-4">
                Enrollment Successful!
              </h2>

              <p className="text-gray-300 text-lg mb-6">
                Thank you for joining Nifty Nitesh Trading Course. Your
                enrollment has been submitted successfully.
              </p>

              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-emerald-400 mb-3">
                  What&apos;s Next?
                </h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Our team will verify your payment within 24 hours</li>
                  <li>• You&apos;ll receive course access details via email</li>
                  <li>• You&apos;ll get access to exclusive content</li>
                  <li>• Join our exclusive student community</li>
                </ul>
              </div>

              <div className="text-gray-400 text-sm">
                <p>Submission ID: {submissionId}</p>
                <p>For any queries, contact us at: niftynitesh000@gmail.com</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default TradingCourseForm;
