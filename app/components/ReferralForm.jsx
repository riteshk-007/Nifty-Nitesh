"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import {
  Users,
  Mail,
  Phone,
  User,
  MessageSquare,
  Send,
  CheckCircle,
  X,
  Gift,
  Heart,
  Star,
  Loader2,
  CreditCard,
  Upload,
  QrCode,
  Camera,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import imageCompression from "browser-image-compression";

const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/riteshk/image/upload";
const CLOUDINARY_UPLOAD_PRESET = "nifty_unsigned";

const ReferralForm = ({ isModal = false, onClose = null }) => {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1); // 1: Form, 2: Payment, 3: Screenshot, 4: Success
  const [loading, setLoading] = useState(false);
  const [qrCodeData, setQrCodeData] = useState(null);
  const [paymentAmount, setPaymentAmount] = useState(9999);
  const [submissionId, setSubmissionId] = useState(null);
  const [cloudinaryUrl, setCloudinaryUrl] = useState("");
  const [compressing, setCompressing] = useState(false);
  const [cloudinaryUploading, setCloudinaryUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [paymentScreenshot, setPaymentScreenshot] = useState(null);

  const [formData, setFormData] = useState({
    // Referrer Details
    referrerName: "",
    referrerEmail: "",
    referrerPhone: "",

    // Friend Details
    friendName: "",
    friendEmail: "",
    friendPhone: "",

    // Referral Details
    interestedIn: "course", // session or course
    message: "",
    relationshipType: "",

    // Payment Details
    paymentPlan: "one-time",
  });

  // Handle URL parameters for direct enrollment flow
  useEffect(() => {
    const urlStep = searchParams.get("step");
    const urlSubmissionId = searchParams.get("submissionId");
    const urlQrCode = searchParams.get("qrCode");
    const urlAmount = searchParams.get("amount");

    if (urlStep && urlSubmissionId && urlQrCode) {
      setStep(parseInt(urlStep));
      setSubmissionId(urlSubmissionId);
      setQrCodeData(decodeURIComponent(urlQrCode));
      if (urlAmount) {
        setPaymentAmount(parseInt(urlAmount));
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

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // If interested in course, proceed to payment
    if (formData.interestedIn === "course") {
      setLoading(true);

      try {
        const response = await fetch("/api/submit-enrollment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.referrerName,
            email: formData.referrerEmail,
            phone: formData.referrerPhone,
            whatsapp: formData.referrerPhone,
            occupation: "Referred by " + formData.friendName,
            experience: "Beginner",
            paymentPlan: formData.paymentPlan,
            timestamp: new Date().toISOString(),
          }),
        });

        const result = await response.json();

        if (result.success) {
          setQrCodeData(result.qrCode);
          setSubmissionId(result.submissionId);
          setPaymentAmount(result.paymentAmount);
          setStep(2);
        } else {
          alert("Error submitting form: " + result.error);
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Error submitting form. Please try again.");
      } finally {
        setLoading(false);
      }
    } else {
      // For session booking, use existing referral API
      setLoading(true);

      try {
        const response = await fetch("/api/submit-referral", {
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
          setStep(4); // Success step
        } else {
          alert("Error submitting referral: " + result.error);
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Error submitting referral. Please try again.");
      } finally {
        setLoading(false);
      }
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
        formData.append("upload_preset", "nifty_unsigned");

        console.log("Uploading to:", CLOUDINARY_URL);
        console.log("Upload preset:", "nifty_unsigned");

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
    setLoading(true);

    try {
      const uploadFormData = new FormData();
      uploadFormData.append("screenshotUrl", cloudinaryUrl);
      uploadFormData.append("submissionId", submissionId);
      uploadFormData.append("amount", selectedPlan?.amount || "");
      uploadFormData.append("name", formData.referrerName || "");
      uploadFormData.append("paymentPlan", formData.paymentPlan || "");

      const response = await fetch("/api/upload-screenshot", {
        method: "POST",
        body: uploadFormData,
      });

      const result = await response.json();

      if (result.success) {
        setStep(4); // Success step
      } else {
        alert("Error uploading screenshot: " + result.error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error uploading screenshot. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const selectedPlan = paymentPlans.find(
    (plan) => plan.id === formData.paymentPlan
  );

  // Step 1: Form
  if (step === 1) {
    return (
      <div
        className={
          isModal
            ? ""
            : "min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 p-4"
        }
      >
        <div className={isModal ? "" : "max-w-4xl mx-auto"}>
          {/* Header */}
          {!isModal && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Refer a <span className="text-emerald-400">Friend</span>
              </h1>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Share the gift of trading knowledge with your friends and help
                them start their trading journey
              </p>
            </motion.div>
          )}

          <Card
            className={`${
              isModal ? "" : "bg-gray-800/50"
            } border-gray-700 backdrop-blur-sm`}
          >
            <CardContent className="p-8">
              {isModal && (
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gift className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Refer a Friend
                  </h2>
                  <p className="text-gray-300">
                    Help your friends discover the world of trading
                  </p>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-6">
                {/* Interest Selection */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-emerald-400" />
                    What are you interested in?
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        formData.interestedIn === "session"
                          ? "border-emerald-500 bg-emerald-500/10"
                          : "border-gray-600 bg-gray-700/30"
                      }`}
                      onClick={() =>
                        setFormData({ ...formData, interestedIn: "session" })
                      }
                    >
                      <input
                        type="radio"
                        name="interestedIn"
                        value="session"
                        checked={formData.interestedIn === "session"}
                        onChange={handleFormChange}
                        className="hidden"
                      />
                      <div className="text-center">
                        <Users className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                        <h4 className="text-white font-semibold">
                          1-on-1 Session
                        </h4>
                        <p className="text-gray-300 text-sm">
                          ₹250 (FREE for students)
                        </p>
                      </div>
                    </div>
                    <div
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        formData.interestedIn === "course"
                          ? "border-emerald-500 bg-emerald-500/10"
                          : "border-gray-600 bg-gray-700/30"
                      }`}
                      onClick={() =>
                        setFormData({ ...formData, interestedIn: "course" })
                      }
                    >
                      <input
                        type="radio"
                        name="interestedIn"
                        value="course"
                        checked={formData.interestedIn === "course"}
                        onChange={handleFormChange}
                        className="hidden"
                      />
                      <div className="text-center">
                        <Star className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                        <h4 className="text-white font-semibold">
                          Complete Course
                        </h4>
                        <p className="text-gray-300 text-sm">
                          ₹9,999 (Multiple payment options)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Plan Selection (only for course) */}
                {formData.interestedIn === "course" && (
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <CreditCard className="w-5 h-5 mr-2 text-emerald-400" />
                      Choose Payment Plan
                    </h3>
                    <div className="grid gap-4">
                      {paymentPlans.map((plan) => (
                        <div
                          key={plan.id}
                          className={`relative p-6 border-2 rounded-lg cursor-pointer transition-all ${
                            formData.paymentPlan === plan.id
                              ? "border-emerald-500 bg-emerald-500/10"
                              : "border-gray-600 bg-gray-700/30"
                          } ${
                            plan.popular ? "ring-2 ring-emerald-500/30" : ""
                          }`}
                          onClick={() =>
                            setFormData({ ...formData, paymentPlan: plan.id })
                          }
                        >
                          <input
                            type="radio"
                            name="paymentPlan"
                            value={plan.id}
                            checked={formData.paymentPlan === plan.id}
                            onChange={handleFormChange}
                            className="hidden"
                          />
                          {plan.popular && (
                            <div className="absolute -top-3 left-6 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                              {plan.badge}
                            </div>
                          )}
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="text-white font-semibold text-lg">
                                {plan.name}
                              </h4>
                              <p className="text-gray-300 text-sm mt-1">
                                {plan.description}
                              </p>
                              <div className="mt-3">
                                <span className="text-emerald-400 font-bold text-2xl">
                                  ₹
                                  {plan.installmentAmount
                                    ? plan.installmentAmount.toLocaleString()
                                    : plan.amount.toLocaleString()}
                                </span>
                                {plan.installmentAmount && (
                                  <span className="text-gray-400 text-sm ml-2">
                                    / installment
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className="text-right">
                              {plan.badge && !plan.popular && (
                                <span className="inline-block bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-sm">
                                  {plan.badge}
                                </span>
                              )}
                              <div className="text-gray-400 text-sm mt-2">
                                Total: ₹{plan.amount.toLocaleString()}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Your Details Section */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <User className="w-5 h-5 mr-2 text-emerald-400" />
                    Your Details
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="referrerName"
                        value={formData.referrerName}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="referrerEmail"
                        value={formData.referrerEmail}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Your Phone *
                      </label>
                      <input
                        type="tel"
                        name="referrerPhone"
                        value={formData.referrerPhone}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Relationship
                      </label>
                      <select
                        name="relationshipType"
                        value={formData.relationshipType}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-colors"
                      >
                        <option value="">Select relationship</option>
                        <option value="friend">Friend</option>
                        <option value="family">Family Member</option>
                        <option value="colleague">Colleague</option>
                        <option value="neighbor">Neighbor</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Friend Details Section (only for session) */}
                {formData.interestedIn === "session" && (
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-emerald-400" />
                      Friend's Details
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Friend's Name *
                        </label>
                        <input
                          type="text"
                          name="friendName"
                          value={formData.friendName}
                          onChange={handleFormChange}
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors"
                          placeholder="Enter friend's name"
                          required={formData.interestedIn === "session"}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Friend's Email *
                        </label>
                        <input
                          type="email"
                          name="friendEmail"
                          value={formData.friendEmail}
                          onChange={handleFormChange}
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors"
                          placeholder="Enter friend's email"
                          required={formData.interestedIn === "session"}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Friend's Phone
                        </label>
                        <input
                          type="tel"
                          name="friendPhone"
                          value={formData.friendPhone}
                          onChange={handleFormChange}
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors"
                          placeholder="Enter friend's phone"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Message Section */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Personal Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors"
                    placeholder="Add a personal message for your friend..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold py-4 rounded-full hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      {formData.interestedIn === "course"
                        ? "Proceed to Payment"
                        : "Send Referral"}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Step 2: Payment (only for course)
  if (step === 2) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Payment for Trading Course
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Complete your enrollment by making the payment
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* QR Code Section */}
            <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-emerald-500/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <QrCode className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Scan QR Code to Pay
                  </h2>
                  <p className="text-gray-300">
                    Use any UPI app to scan and pay ₹{paymentAmount}
                  </p>
                </div>

                {qrCodeData && (
                  <div className="text-center">
                    <div className="bg-white p-4 rounded-lg inline-block mb-4">
                      <img
                        src={qrCodeData}
                        alt="Payment QR Code"
                        className="w-64 h-64 object-contain"
                      />
                    </div>
                    <div className="text-sm text-gray-400">
                      <p>UPI ID: niftynitesh@yesg</p>
                      <p>Amount: ₹{paymentAmount}</p>
                    </div>
                  </div>
                )}

                <div className="mt-8 p-4 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                  <h3 className="text-white font-semibold mb-2">
                    Payment Details
                  </h3>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex justify-between">
                      <span>Name:</span>
                      <span className="text-white">
                        {formData.referrerName}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Amount:</span>
                      <span className="text-emerald-400 font-semibold">
                        ₹{paymentAmount}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Plan:</span>
                      <span className="text-white">{selectedPlan?.name}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Next Step Button */}
            <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-emerald-500/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Upload className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Next Step
                  </h2>
                  <p className="text-gray-300 mb-6">
                    After making the payment, you'll upload the screenshot for
                    verification
                  </p>
                  <Button
                    onClick={() => setStep(3)}
                    className="w-full bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold py-4 rounded-full"
                  >
                    I've Made the Payment
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // Step 3: Screenshot Upload
  if (step === 3) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Upload Payment Screenshot
            </h1>
            <p className="text-gray-300 text-lg">
              Upload your payment screenshot for verification
            </p>
          </motion.div>

          <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-emerald-500/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="space-y-6">
                {/* File Upload Area */}
                <div className="border-2 border-dashed border-emerald-500/30 rounded-lg p-8 text-center hover:border-emerald-500/50 transition-colors">
                  {compressing ? (
                    <div>
                      <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-emerald-400">Compressing image...</p>
                    </div>
                  ) : cloudinaryUploading ? (
                    <div>
                      <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-emerald-400">Uploading image...</p>
                    </div>
                  ) : cloudinaryUrl ? (
                    <div>
                      <img
                        src={cloudinaryUrl}
                        alt="Payment Screenshot Preview"
                        className="max-w-full h-auto max-h-64 mx-auto rounded-lg mb-4"
                      />
                      <p className="text-emerald-400 text-sm mb-4">
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
                    <>
                      <input
                        type="file"
                        id="screenshot-upload"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                      <label
                        htmlFor="screenshot-upload"
                        className="cursor-pointer block"
                      >
                        <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                          <Camera className="w-8 h-8 text-emerald-400" />
                        </div>
                        <h3 className="text-white font-semibold mb-2">
                          Choose Screenshot
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">
                          Click to select payment screenshot (JPG, PNG)
                        </p>
                        <Button
                          variant="outline"
                          className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10"
                        >
                          <Upload className="w-4 h-4 mr-2" />
                          Browse Files
                        </Button>
                      </label>
                    </>
                  )}
                </div>

                {/* Error Message */}
                {uploadError && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                    <div className="flex items-center gap-2 text-red-400">
                      <X className="w-5 h-5" />
                      <span className="text-sm">{uploadError}</span>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  onClick={handleScreenshotSubmit}
                  disabled={!cloudinaryUrl || loading}
                  className="w-full bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold py-4 rounded-full hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Verifying Payment...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Submit for Verification
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Step 4: Success
  if (step === 4) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 p-4 flex items-center justify-center">
        <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm max-w-2xl w-full">
          <CardContent className="p-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-8"
            >
              <CheckCircle className="w-20 h-20 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                {formData.interestedIn === "course"
                  ? "Payment Submitted Successfully!"
                  : "Referral Sent Successfully!"}
              </h3>
              <p className="text-gray-300 mb-6">
                {formData.interestedIn === "course"
                  ? "Your payment has been submitted for verification. You'll receive course access within 24 hours."
                  : "Thank you for referring your friend. We'll reach out to them soon and keep you updated on their progress."}
              </p>
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                <p className="text-emerald-400 font-semibold">
                  🎁{" "}
                  {formData.interestedIn === "course"
                    ? "Welcome to the Course!"
                    : "Referral Rewards Coming Soon!"}
                </p>
                <p className="text-gray-300 text-sm mt-2">
                  {formData.interestedIn === "course"
                    ? "Check your email for further instructions and course materials."
                    : "Stay tuned for exciting rewards when your friends join our trading courses"}
                </p>
              </div>
              <Button
                onClick={() => (window.location.href = "/")}
                className="mt-6 bg-emerald-500 hover:bg-emerald-600 text-white"
              >
                Return to Homepage
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return null;
};

export default ReferralForm;
