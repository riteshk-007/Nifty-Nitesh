"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  Users,
  Mail,
  Phone,
  User,
  MessageSquare,
  Send,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import imageCompression from "browser-image-compression";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { PlayCircle } from "lucide-react";
import { video } from "@/assets";

const CLOUDINARY_URL = process.env.NEXT_PUBLIC_CLOUDINARY_URL;

export default function ReferralForm({ isModal = false, onClose }) {
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

  // Add friend details validation
  const validateFriendDetails = () => {
    const errors = {};
    if (!formData.friendName?.trim()) {
      errors.friendName = "Friend's name is required";
    }
    if (!formData.friendEmail?.trim()) {
      errors.friendEmail = "Friend's email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.friendEmail)) {
      errors.friendEmail = "Please enter a valid email";
    }
    if (!formData.friendPhone?.trim()) {
      errors.friendPhone = "Friend's phone is required";
    } else if (!/^\d{10}$/.test(formData.friendPhone)) {
      errors.friendPhone = "Please enter a valid 10-digit phone number";
    }
    return errors;
  };

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
    setLoading(true);

    // Validate friend details
    const friendErrors = validateFriendDetails();
    if (Object.keys(friendErrors).length > 0) {
      Object.entries(friendErrors).forEach(([field, error]) => {
        toast.error(error);
      });
      setLoading(false);
      return;
    }

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
        toast.success("Referral submitted successfully!", {
          description: "We'll contact your friend soon.",
        });
        setStep(4);
      } else {
        if (result.details) {
          Object.entries(result.details).forEach(([field, error]) => {
            toast.error(`${field}: ${error}`);
          });
        } else {
          toast.error("Error submitting referral", {
            description: result.error || "Please try again",
          });
        }
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error submitting referral", {
        description: "Please try again later",
      });
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

  return (
    <>
      {/* Form Header with Video Button */}
      <div className="relative mb-8">
        {/* Background Gradient Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-2xl"></div>

        <div className="relative p-6 border border-emerald-500/20 rounded-2xl bg-black/40 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left Side - Title and Icon */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center shrink-0">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Refer a Friend
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  Help your friends discover trading and earn rewards
                </p>
              </div>
            </div>

            {/* Right Side - Video Button */}
            <Dialog>
              <DialogTrigger asChild>
                <button className="group z-[100000] flex items-center gap-3 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-full transition-all duration-300  hover:animate-none">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <PlayCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-white font-semibold">Watch Demo</div>
                    <div className="text-white/80 text-sm">2 min video</div>
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl bg-black/95 border-emerald-500/20">
                <div className="relative aspect-video">
                  <video
                    className="w-full h-full rounded-lg"
                    controls
                    autoPlay
                    src={video}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      {/* Video Preview Card */}
      <Dialog>
        <DialogTrigger asChild>
          <div className="relative mb-8 cursor-pointer group">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-600">
              <div className="w-full h-48 flex items-center justify-center relative">
                {/* Animated Background Effect */}
                <div className="absolute inset-0">
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,170,0.1),transparent_70%)] "></div>
                  <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-blob"></div>
                  <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center px-4">
                  <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-white font-medium">
                    Learn how to refer friends and earn rewards
                  </div>
                </div>
              </div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/20">
                  <PlayCircle className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Bottom Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <div className="text-white font-semibold flex items-center gap-2">
                  <PlayCircle className="w-5 h-5" />
                  Watch How It Works
                </div>
                <div className="text-white/80 text-sm">
                  2 minute video guide
                </div>
              </div>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-4xl bg-black/95 border-emerald-500/20">
          <div className="relative aspect-video">
            <video
              className="w-full h-full rounded-lg"
              controls
              autoPlay
              src={video}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </DialogContent>
      </Dialog>

      {step === 1 && (
        <form onSubmit={handleFormSubmit} className="space-y-6">
          {/* Your Details Section */}
          <div className="bg-gray-900/50 border border-emerald-500/20 rounded-lg p-4 md:p-6">
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <User className="w-5 h-5 text-emerald-400" />
              Your Details
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="referrerName"
                  value={formData.referrerName}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-emerald-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors"
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
                  className="w-full px-4 py-3 bg-gray-800/50 border border-emerald-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Phone *
                </label>
                <input
                  type="tel"
                  name="referrerPhone"
                  value={formData.referrerPhone}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-emerald-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>
          </div>

          {/* Friend's Details Section */}
          <div className="bg-gray-900/50 border border-emerald-500/20 rounded-lg p-4 md:p-6">
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-emerald-400" />
              Friend&apos;s Details
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Friend&apos;s Name *
                </label>
                <input
                  type="text"
                  name="friendName"
                  value={formData.friendName}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-emerald-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors"
                  placeholder="Enter your friend's name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Friend&apos;s Email *
                </label>
                <input
                  type="email"
                  name="friendEmail"
                  value={formData.friendEmail}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-emerald-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors"
                  placeholder="Enter your friend's email"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Friend&apos;s Phone *
                </label>
                <input
                  type="tel"
                  name="friendPhone"
                  value={formData.friendPhone}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-emerald-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors"
                  placeholder="Enter your friend's phone number"
                  required
                />
              </div>
            </div>
          </div>

          {/* Referral Details Section */}
          <div className="bg-gray-900/50 border border-emerald-500/20 rounded-lg p-4 md:p-6">
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-emerald-400" />
              Referral Details
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  What are they interested in? *
                </label>
                <select
                  name="interestedIn"
                  value={formData.interestedIn}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-emerald-500/20 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-colors"
                  required
                >
                  <option value="course">Complete Trading Course</option>
                  <option value="session">1-on-1 Trading Session</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  How do you know them?
                </label>
                <select
                  name="relationshipType"
                  value={formData.relationshipType}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-emerald-500/20 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-colors"
                >
                  <option value="">Select relationship</option>
                  <option value="friend">Friend</option>
                  <option value="family">Family Member</option>
                  <option value="colleague">Colleague</option>
                  <option value="classmate">Classmate</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Personal Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-emerald-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors"
                  placeholder="Add a personal message for your friend..."
                  rows="3"
                ></textarea>
              </div>
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
              <Send className="w-5 h-5 mr-2" />
            )}
            {loading ? "Submitting..." : "Submit Referral"}
          </Button>
        </form>
      )}

      {step === 4 && (
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Referral Submitted Successfully!
          </h3>
          <p className="text-gray-300 mb-6">
            We&apos;ll contact your friend soon and notify you when they join.
          </p>
          {isModal && (
            <Button
              onClick={onClose}
              className="bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold py-4 px-8 rounded-full hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
            >
              Close
            </Button>
          )}
        </div>
      )}
    </>
  );
}
