"use client";

import { useState } from "react";
import { FaUsers, FaGift, FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { RiPercentLine } from "react-icons/ri";

const ReferralOffer = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      {/* Main Referral Offer Card */}
      <div className="relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-teal-500/10 rounded-3xl"></div>

        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-green-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-emerald-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Main Content */}
        <div className="relative bg-black/40 backdrop-blur-xl border border-green-500/30 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.3)] shadow-green-500/20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Main Offer */}
            <div className="space-y-6">
              {/* Header */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-green-500/20 rounded-full">
                    <FaGift className="w-6 h-6 text-green-400" />
                  </div>
                  <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">
                    Special Offer
                  </span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Bring a Friend,
                  <span className="block text-green-400">Get 40% Off!</span>
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Enroll with a friend and both of you get an exclusive 40%
                  discount on your course fees. Learn together, grow together!
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FaCheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">
                    Both friends get 40% discount
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">
                    Study together and stay motivated
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">
                    Access to all course materials
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">Lifetime access to updates</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-gradient-to-r from-green-500 to-green-400 text-black font-bold px-8 py-4 rounded-full flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-green-500/40 hover:scale-105 transition-all duration-500 ease-bounce active:scale-95 transform-gpu will-change-transform">
                  <FaUsers className="w-5 h-5" />
                  <span>Enroll with Friend</span>
                  <FaArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="border border-green-500/50 text-green-400 font-semibold px-8 py-4 rounded-full hover:bg-green-500/20 hover:border-green-500 hover:scale-105 transition-all duration-500 ease-bounce active:scale-95 transform-gpu will-change-transform"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Side - Visual Elements */}
            <div className="relative">
              {/* Discount Badge */}
              <div className="relative mx-auto w-64 h-64">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-full blur-2xl animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-green-500 to-emerald-500 rounded-full w-64 h-64 flex items-center justify-center shadow-[0_0_50px_rgba(34,197,94,0.3)]">
                  <div className="text-center text-white">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <RiPercentLine className="w-8 h-8" />
                      <span className="text-6xl font-bold">40</span>
                    </div>
                    <div className="text-xl font-semibold">OFF</div>
                    <div className="text-sm opacity-80 mt-2">
                      For Both Friends
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-green-400/20 rounded-full animate-bounce"></div>
              <div className="absolute bottom-8 left-4 w-12 h-12 bg-emerald-400/20 rounded-full animate-bounce delay-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Details */}
      {isExpanded && (
        <div className="mt-8 transition-all duration-700 ease-bounce transform-gpu will-change-transform animate-in slide-in-from-top-4">
          <div className="bg-black/30 backdrop-blur-xl border border-green-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
              <FaUsers className="w-6 h-6 text-green-400" />
              <span>How It Works</span>
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Step 1 */}
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-green-400">1</span>
                </div>
                <h4 className="text-lg font-semibold text-white">
                  Invite Your Friend
                </h4>
                <p className="text-gray-300 text-sm">
                  Share your unique referral link with a friend who's interested
                  in learning trading
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-green-400">2</span>
                </div>
                <h4 className="text-lg font-semibold text-white">
                  Both Enroll
                </h4>
                <p className="text-gray-300 text-sm">
                  When your friend enrolls using your link, both of you get the
                  40% discount
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-green-400">3</span>
                </div>
                <h4 className="text-lg font-semibold text-white">
                  Learn Together
                </h4>
                <p className="text-gray-300 text-sm">
                  Study together, practice together, and achieve your trading
                  goals as a team
                </p>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="mt-8 p-6 bg-black/20 rounded-xl border border-green-500/10">
              <h4 className="text-lg font-semibold text-white mb-4">
                Terms & Conditions
              </h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Offer valid for new enrollments only</li>
                <li>• Both friends must enroll within 7 days of each other</li>
                <li>• Discount applies to the full course fee</li>
                <li>• Cannot be combined with other offers</li>
                <li>• Offer subject to availability</li>
              </ul>
            </div>

            {/* Contact for More Info */}
            <div className="mt-6 text-center">
              <p className="text-gray-300 mb-4">
                Have questions about the referral program?
              </p>
              <a
                href="https://whatsapp.com/channel/0029VaS551C17En02ZJgld1V"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-green-400 hover:scale-105 transition-all duration-300 ease-bounce"
              >
                <span>Contact Us</span>
                <FaArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReferralOffer;
