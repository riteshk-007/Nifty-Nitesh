"use client";

import { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import imageCompression from "browser-image-compression";
import {
  QrCode,
  Upload,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
  Download,
  Camera,
  FileText,
  Users,
  Gift,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/riteshk/image/upload";
const CLOUDINARY_UPLOAD_PRESET = "nifty_unsigned";

const ReferPaymentVerificationContent = () => {
  const searchParams = useSearchParams();
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [compressing, setCompressing] = useState(false);
  const [cloudinaryUrl, setCloudinaryUrl] = useState("");
  const [cloudinaryUploading, setCloudinaryUploading] = useState(false);

  // Get parameters from URL
  const submissionId = searchParams.get("submissionId");
  const qrCode = searchParams.get("qrCode");
  const amount = searchParams.get("amount");
  const name = searchParams.get("name");
  const paymentPlan = searchParams.get("paymentPlan");

  // Validate required parameters
  useEffect(() => {
    if (!submissionId || !amount || !name) {
      setUploadError(
        "Missing required payment information. Please return to the referral page."
      );
    }
    setIsLoading(false);
  }, [submissionId, amount, name]);

  const handleFileSelect = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    setUploadError("");
    setCloudinaryUrl("");
    setSelectedFile(null);
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
      setSelectedFile(compressedFile);
      setCompressing(false);

      // Show preview and upload to Cloudinary
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

  const handleUpload = async () => {
    if (!cloudinaryUrl) {
      setUploadError("Please select and upload a screenshot first");
      return;
    }
    setUploading(true);
    setUploadError("");

    try {
      const formData = new FormData();
      formData.append("screenshotUrl", cloudinaryUrl);
      formData.append("submissionId", submissionId);
      formData.append("amount", amount);
      formData.append("name", name);
      formData.append("paymentPlan", paymentPlan);

      const response = await fetch("/api/upload-screenshot", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setUploadSuccess(true);
        setSelectedFile(null);
        setCloudinaryUrl("");
        const fileInput = document.getElementById("screenshot-upload");
        if (fileInput) fileInput.value = "";
      } else {
        setUploadError(
          result.error || result.details || "Upload failed. Please try again."
        );
      }
    } catch (error) {
      setUploadError(
        "Upload failed. Please check your connection and try again."
      );
    } finally {
      setUploading(false);
    }
  };

  const downloadQRCode = () => {
    if (displayQRCode) {
      const link = document.createElement("a");
      link.href = displayQRCode;
      link.download = "payment-qr-code.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // Generate fallback QR code if not provided
  const generateFallbackQRCode = () => {
    if (!qrCode && amount) {
      const upiString = `upi://pay?pa=niftynitesh@yesg&pn=Nifty%20Nitesh&am=${amount}&cu=INR&tn=Trading%20Course%20Payment`;
      return `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(
        upiString
      )}`;
    }
    return qrCode;
  };

  const displayQRCode = generateFallbackQRCode();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading payment verification...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <Button
              variant="ghost"
              onClick={() => window.history.back()}
              className="text-emerald-400 hover:text-emerald-300 mr-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </Button>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Referral Payment Verification
            </h1>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Complete your referral enrollment by making the payment and
            uploading the screenshot
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* QR Code Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
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
                    Use any UPI app to scan and pay ₹{amount}
                  </p>
                </div>

                {displayQRCode ? (
                  <div className="text-center">
                    <div className="bg-white p-4 rounded-lg inline-block mb-4">
                      <Image
                        src={displayQRCode}
                        alt="Payment QR Code"
                        width={256}
                        height={256}
                        className="w-64 h-64 object-contain"
                      />
                    </div>
                    <div className="space-y-3">
                      <Button
                        onClick={downloadQRCode}
                        className="bg-emerald-500 hover:bg-emerald-600 text-white"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download QR Code
                      </Button>
                      <div className="text-sm text-gray-400">
                        <p>UPI ID: niftynitesh@yesg</p>
                        <p>Amount: ₹{amount}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <AlertCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
                    <p className="text-red-400">QR Code not available</p>
                  </div>
                )}

                <div className="mt-8 p-4 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                  <h3 className="text-white font-semibold mb-2 flex items-center">
                    <Gift className="w-4 h-4 mr-2" />
                    Referral Payment Details
                  </h3>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex justify-between">
                      <span>Name:</span>
                      <span className="text-white">{name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Amount:</span>
                      <span className="text-emerald-400 font-semibold">
                        ₹{amount}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Plan:</span>
                      <span className="text-white">{paymentPlan}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Type:</span>
                      <span className="text-emerald-400">
                        Referral Enrollment
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>ID:</span>
                      <span className="text-gray-400 font-mono text-xs">
                        {submissionId}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Screenshot Upload Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-emerald-500/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Upload className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Upload Payment Screenshot
                  </h2>
                  <p className="text-gray-300">
                    After payment, upload the screenshot for verification
                  </p>
                </div>

                {uploadSuccess ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                    <h3 className="text-emerald-400 font-semibold text-xl mb-2">
                      Payment Verified!
                    </h3>
                    <p className="text-gray-300 mb-4">
                      Your referral payment has been received and verified
                      successfully.
                    </p>
                    <div className="space-y-2 text-sm text-gray-400">
                      <p>✅ Enrollment confirmed</p>
                      <p>✅ Welcome email sent</p>
                      <p>✅ Course access will be provided within 24 hours</p>
                      <p>✅ Referral bonus processed</p>
                    </div>
                    <Button
                      onClick={() => (window.location.href = "/")}
                      className="mt-6 bg-emerald-500 hover:bg-emerald-600 text-white"
                    >
                      Return to Homepage
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* File Upload Area */}
                    <div className="border-2 border-dashed border-emerald-500/30 rounded-lg p-8 text-center hover:border-emerald-500/50 transition-colors">
                      {compressing ? (
                        <div>
                          <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                          <p className="text-emerald-400">
                            Compressing image...
                          </p>
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
                            height={337}
                            className="max-w-full h-auto max-h-64 mx-auto rounded-lg mb-4"
                          />
                          <p className="text-emerald-400 text-sm mb-4">
                            Image uploaded successfully
                          </p>
                          <Button
                            onClick={() => {
                              setSelectedFile(null);
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
                            onChange={handleFileSelect}
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
                              <FileText className="w-4 h-4 mr-2" />
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
                          <AlertCircle className="w-5 h-5" />
                          <span className="text-sm">{uploadError}</span>
                        </div>
                      </div>
                    )}

                    {/* Upload Button */}
                    <Button
                      onClick={handleUpload}
                      disabled={!cloudinaryUrl || uploading}
                      className="w-full bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold py-4 rounded-full hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 disabled:opacity-50"
                    >
                      {uploading ? (
                        <>
                          <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Uploading...
                        </>
                      ) : (
                        <>
                          <Upload className="w-5 h-5 mr-2" />
                          Verify Payment
                        </>
                      )}
                    </Button>

                    {/* Instructions */}
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                      <h4 className="text-blue-400 font-semibold mb-2 flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        Referral Payment Instructions
                      </h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Make payment using the QR code</li>
                        <li>• Take a screenshot of the payment confirmation</li>
                        <li>• Upload the screenshot here for verification</li>
                        <li>
                          • You&apos;ll receive course access within 24 hours
                        </li>
                        <li>
                          • Referral bonus will be processed automatically
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-emerald-500/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-1">
                    Secure Payment
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Your payment is processed securely through UPI
                  </p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-1">
                    Referral Benefits
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Enjoy special referral bonuses and rewards
                  </p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Gift className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-1">
                    Instant Access
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Get course access within 24 hours of verification
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

const ReferPaymentVerificationPage = () => {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-white text-lg">
              Loading payment verification...
            </p>
          </div>
        </div>
      }
    >
      <ReferPaymentVerificationContent />
    </Suspense>
  );
};

export default ReferPaymentVerificationPage;
