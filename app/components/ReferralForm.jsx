"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  Users,
  User,
  MessageSquare,
  Send,
  CheckCircle,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { PlayCircle } from "lucide-react";
import { video } from "@/assets";

// Form validation schema
const formSchema = z.object({
  // Referrer Details
  referrerName: z.string().min(2, "Name must be at least 2 characters"),
  referrerEmail: z.string().email("Please enter a valid email address"),
  referrerPhone: z
    .string()
    .regex(/^\d{10}$/, "Please enter a valid 10-digit phone number"),

  // Friend Details
  friendName: z.string().min(2, "Name must be at least 2 characters"),
  friendEmail: z.string().email("Please enter a valid email address"),
  friendPhone: z
    .string()
    .regex(/^\d{10}$/, "Please enter a valid 10-digit phone number"),

  // Referral Details
  interestedIn: z.string().min(1, "Please select an interest"),
  relationshipType: z.string().optional(),
  message: z.string().optional(),

  // Payment Details
  paymentPlan: z.string().default("one-time"),
});

export default function ReferralForm({ isModal = false, onClose }) {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [qrCodeData, setQrCodeData] = useState(null);
  const [paymentAmount, setPaymentAmount] = useState(9999);
  const [submissionId, setSubmissionId] = useState(null);

  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      interestedIn: "course",
      relationshipType: "",
      message: "",
    },
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

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await fetch("/api/submit-referral", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
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

  // Function to show error message
  const ErrorMessage = ({ message }) => (
    <span className="text-red-500 text-sm flex items-center gap-1 mt-1">
      <AlertCircle className="w-4 h-4" />
      {message}
    </span>
  );

  return (
    <div className="max-w-4xl mx-auto">
      {/* Simplified Header */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Refer a Friend & Earn Rewards
        </h2>
        <p className="text-lg text-gray-300">
          Help your friends start their trading journey with us
        </p>
      </div>

      {/* Discount Information Card */}
      <Card className="mb-8 bg-black/50 border border-emerald-500/20">
        <CardContent className="p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Bring a Friend, Get 25% Total Off!
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-emerald-800/50 rounded-lg p-4">
                <div className="text-4xl font-bold text-emerald-400 mb-2">
                  15%
                </div>
                <p className="text-white">
                  You get 15% off
                  <br />
                  (as referrer)
                </p>
              </div>
              <div className="bg-emerald-800/50 rounded-lg p-4">
                <div className="text-4xl font-bold text-emerald-400 mb-2">
                  10%
                </div>
                <p className="text-white">
                  Friend gets 10% off
                  <br />
                  (new student)
                </p>
              </div>
              <div className="bg-emerald-800/50 rounded-lg p-4">
                <div className="text-4xl font-bold text-emerald-400 mb-2">
                  25%
                </div>
                <p className="text-white">
                  Total savings
                  <br />
                  when combined
                </p>
              </div>
            </div>
            <p className="text-lg text-emerald-100">
              Study together, stay motivated, and get lifetime access to all
              materials!
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Video Section - Using Card */}
      <Card className="mb-8 bg-gradient-to-r from-emerald-900 to-emerald-700 border-emerald-500/20">
        <Dialog>
          <DialogTrigger asChild>
            <button className="w-full">
              <div className="aspect-video p-8 flex flex-col items-center justify-center">
                {/* Play Button */}
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                  <PlayCircle className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-white mb-2">
                  Watch How It Works
                </CardTitle>
                <CardDescription className="text-gray-300">
                  2-minute guide to referral program
                </CardDescription>
              </div>
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl bg-black/95 border-emerald-500/20">
            <div className="aspect-video rounded-lg overflow-hidden">
              <video
                className="w-full h-full"
                controls
                src={video}
                poster="/course/img1.png"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </DialogContent>
        </Dialog>
      </Card>

      {step === 1 && (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Your Details */}
          <Card className="bg-gray-900/50 backdrop-blur-sm border-emerald-500/20">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-white flex items-center gap-3">
                <User className="w-6 h-6 text-emerald-400" />
                Your Details
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid w-full items-center gap-2">
                <Label
                  htmlFor="referrerName"
                  className="text-sm font-medium text-gray-300"
                >
                  Your Name *
                </Label>
                <Input
                  id="referrerName"
                  {...register("referrerName")}
                  className={`bg-black/30 border-emerald-500/20 text-white placeholder-gray-500 focus-visible:ring-emerald-500/30 ${
                    errors.referrerName ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.referrerName && (
                  <ErrorMessage message={errors.referrerName.message} />
                )}
              </div>

              <div className="grid w-full items-center gap-2">
                <Label
                  htmlFor="referrerEmail"
                  className="text-sm font-medium text-gray-300"
                >
                  Your Email *
                </Label>
                <Input
                  id="referrerEmail"
                  type="email"
                  {...register("referrerEmail")}
                  className={`bg-black/30 border-emerald-500/20 text-white placeholder-gray-500 focus-visible:ring-emerald-500/30 ${
                    errors.referrerEmail ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.referrerEmail && (
                  <ErrorMessage message={errors.referrerEmail.message} />
                )}
              </div>

              <div className="grid w-full items-center gap-2">
                <Label
                  htmlFor="referrerPhone"
                  className="text-sm font-medium text-gray-300"
                >
                  Your Phone *
                </Label>
                <Input
                  id="referrerPhone"
                  {...register("referrerPhone")}
                  className={`bg-black/30 border-emerald-500/20 text-white placeholder-gray-500 focus-visible:ring-emerald-500/30 ${
                    errors.referrerPhone ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your 10-digit phone number"
                />
                {errors.referrerPhone && (
                  <ErrorMessage message={errors.referrerPhone.message} />
                )}
              </div>
            </CardContent>
          </Card>

          {/* Friend's Details */}
          <Card className="bg-gray-900/50 backdrop-blur-sm border-emerald-500/20">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-white flex items-center gap-3">
                <Users className="w-6 h-6 text-emerald-400" />
                Friend&apos;s Details
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid w-full items-center gap-2">
                <Label
                  htmlFor="friendName"
                  className="text-sm font-medium text-gray-300"
                >
                  Friend&apos;s Name *
                </Label>
                <Input
                  id="friendName"
                  {...register("friendName")}
                  className={`bg-black/30 border-emerald-500/20 text-white placeholder-gray-500 focus-visible:ring-emerald-500/30 ${
                    errors.friendName ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your friend's name"
                />
                {errors.friendName && (
                  <ErrorMessage message={errors.friendName.message} />
                )}
              </div>

              <div className="grid w-full items-center gap-2">
                <Label
                  htmlFor="friendEmail"
                  className="text-sm font-medium text-gray-300"
                >
                  Friend&apos;s Email *
                </Label>
                <Input
                  id="friendEmail"
                  type="email"
                  {...register("friendEmail")}
                  className={`bg-black/30 border-emerald-500/20 text-white placeholder-gray-500 focus-visible:ring-emerald-500/30 ${
                    errors.friendEmail ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your friend's email"
                />
                {errors.friendEmail && (
                  <ErrorMessage message={errors.friendEmail.message} />
                )}
              </div>

              <div className="grid w-full items-center gap-2">
                <Label
                  htmlFor="friendPhone"
                  className="text-sm font-medium text-gray-300"
                >
                  Friend&apos;s Phone *
                </Label>
                <Input
                  id="friendPhone"
                  {...register("friendPhone")}
                  className={`bg-black/30 border-emerald-500/20 text-white placeholder-gray-500 focus-visible:ring-emerald-500/30 ${
                    errors.friendPhone ? "border-red-500" : ""
                  }`}
                  placeholder="Enter friend's 10-digit phone number"
                />
                {errors.friendPhone && (
                  <ErrorMessage message={errors.friendPhone.message} />
                )}
              </div>
            </CardContent>
          </Card>

          {/* Additional Details */}
          <Card className="bg-gray-900/50 backdrop-blur-sm border-emerald-500/20">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-white flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-emerald-400" />
                Additional Details
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid w-full items-center gap-2">
                <Label
                  htmlFor="interestedIn"
                  className="text-sm font-medium text-gray-300"
                >
                  What are they interested in? *
                </Label>
                <Select
                  onValueChange={(value) => setValue("interestedIn", value)}
                  defaultValue={watch("interestedIn")}
                >
                  <SelectTrigger
                    className={`bg-black/30 border-emerald-500/20 text-white focus:ring-emerald-500/30 ${
                      errors.interestedIn ? "border-red-500" : ""
                    }`}
                  >
                    <SelectValue placeholder="Select interest" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-emerald-500/20 text-white">
                    <SelectItem value="course">
                      Complete Trading Course
                    </SelectItem>
                  </SelectContent>
                </Select>
                {errors.interestedIn && (
                  <ErrorMessage message={errors.interestedIn.message} />
                )}
              </div>

              <div className="grid w-full items-center gap-2">
                <Label
                  htmlFor="relationshipType"
                  className="text-sm font-medium text-gray-300"
                >
                  How do you know them?
                </Label>
                <Select
                  onValueChange={(value) => setValue("relationshipType", value)}
                  defaultValue={watch("relationshipType")}
                >
                  <SelectTrigger className="bg-black/30 border-emerald-500/20 text-white focus:ring-emerald-500/30">
                    <SelectValue placeholder="Select relationship" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-emerald-500/20 text-white">
                    <SelectItem value="friend">Friend</SelectItem>
                    <SelectItem value="family">Family Member</SelectItem>
                    <SelectItem value="colleague">Colleague</SelectItem>
                    <SelectItem value="classmate">Classmate</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid w-full items-center gap-2">
                <Label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-300"
                >
                  Personal Message (Optional)
                </Label>
                <textarea
                  id="message"
                  {...register("message")}
                  className="w-full px-4 py-3 bg-black/30 border border-emerald-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 transition-all"
                  placeholder="Add a personal message for your friend..."
                  rows="3"
                />
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-emerald-500 to-green-500 text-white text-lg font-semibold py-4 rounded-xl hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="w-6 h-6 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="w-6 h-6 mr-2" />
                Submit Referral
              </>
            )}
          </Button>
        </form>
      )}

      {/* Success State - Using Card */}
      {step === 4 && (
        <Card className="bg-gray-900/50 backdrop-blur-sm border-emerald-500/20">
          <CardContent className="text-center py-12">
            <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold text-white mb-4">
              Referral Submitted Successfully!
            </CardTitle>
            <CardDescription className="text-xl text-gray-300 mb-8">
              We&apos;ll contact your friend soon and notify you when they join.
            </CardDescription>
            {isModal && (
              <Button
                onClick={onClose}
                className="bg-gradient-to-r from-emerald-500 to-green-500 text-white text-lg font-semibold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
              >
                Close
              </Button>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
