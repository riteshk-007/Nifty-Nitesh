"use client";

import { useState, useEffect } from "react";
import {
  FaUsers,
  FaGift,
  FaArrowRight,
  FaCheckCircle,
  FaTimes,
} from "react-icons/fa";
import { RiPercentLine } from "react-icons/ri";

const ReferralPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Show popup after 2 seconds every time page loads
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, 300);
  };

  const handleEnrollClick = () => {
    // WhatsApp enrollment message
    const message = `Hi! I want to enroll with a friend and get the referral discount.

I get 15% discount and my friend gets 10% discount.
Total savings: 25%

Please share the enrollment details and referral process.`;

    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] transition-all duration-300 ease-bounce ${
          isClosing ? "opacity-0" : "opacity-100"
        }`}
        onClick={handleClose}
      />

      {/* Popup Wrapper for Centering */}
      <div className="fixed inset-0 z-[1000] flex items-center justify-center pointer-events-none">
        {/* Popup */}
        <div
          className={`relative w-full max-w-2xl mx-2 sm:mx-4 md:mx-0 pointer-events-auto transition-all duration-300 ease-bounce ${
            isClosing
              ? "opacity-0 scale-95 translate-y-4"
              : "opacity-100 scale-100 translate-y-0"
          }`}
        >
          <div className="relative overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] shadow-green-500/30 bg-black/80 backdrop-blur-xl border border-green-500/40 px-4 py-6 sm:p-8">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-emerald-500/10 to-teal-500/20 rounded-3xl pointer-events-none" />
            <div className="absolute top-0 left-0 w-20 h-20 sm:w-32 sm:h-32 bg-green-400/30 rounded-full blur-3xl animate-pulse pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-40 sm:h-40 bg-emerald-400/30 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full bg-black/40 border border-green-500/30 text-white hover:text-green-400 hover:bg-green-500/20 hover:scale-125 transition-all duration-300 ease-bounce active:scale-95 transform-gpu will-change-transform z-10"
            >
              <FaTimes className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
              {/* Left Side - Content */}
              <div className="space-y-4 sm:space-y-6">
                {/* Header */}
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="p-2 sm:p-3 bg-green-500/30 rounded-full animate-pulse">
                      <FaGift className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                    </div>
                    <span className="text-green-400 font-bold text-xs sm:text-sm uppercase tracking-wider">
                      🎁 Limited Time Offer
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                    Bring a Friend,
                    <span className="block text-green-400 animate-pulse">
                      Get 25% Total Off!
                    </span>
                  </h2>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    You get{" "}
                    <span className="text-green-400 font-semibold">
                      15% discount
                    </span>{" "}
                    + Your friend gets{" "}
                    <span className="text-green-400 font-semibold">
                      10% discount
                    </span>
                    <br />
                    <span className="text-base sm:text-lg font-bold text-green-400">
                      = Total 25% savings!
                    </span>
                  </p>
                </div>

                {/* Benefits */}
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <FaCheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-white text-xs sm:text-sm">
                      <span className="text-green-400 font-semibold">
                        You get 15% off
                      </span>{" "}
                      (referrer)
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <FaCheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-white text-xs sm:text-sm">
                      <span className="text-green-400 font-semibold">
                        Friend gets 10% off
                      </span>{" "}
                      (new student)
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <FaCheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-white text-xs sm:text-sm">
                      Study together and stay motivated
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <FaCheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-white text-xs sm:text-sm">
                      Lifetime access to all materials
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={handleEnrollClick}
                  className="w-full bg-gradient-to-r from-green-500 to-green-400 text-black font-bold px-4 py-3 sm:px-6 sm:py-4 rounded-full flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-green-500/40 hover:scale-105 transition-all duration-500 ease-bounce active:scale-95 transform-gpu will-change-transform text-sm sm:text-base"
                >
                  <FaUsers className="w-5 h-5" />
                  <span>Enroll with Friend Now</span>
                  <FaArrowRight className="w-4 h-4" />
                </button>

                {/* Small text */}
                <p className="text-xs text-gray-400 text-center">
                  Offer valid for limited time only
                </p>
              </div>

              {/* Right Side - Visual */}
              <div className="relative flex justify-center items-center">
                {/* Discount Badge */}
                <div className="relative w-32 h-32 sm:w-48 sm:h-48 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/40 to-emerald-500/40 rounded-full blur-2xl animate-pulse" />
                  <div className="relative bg-gradient-to-br from-green-500 to-emerald-500 rounded-full w-32 h-32 sm:w-48 sm:h-48 flex items-center justify-center shadow-[0_0_40px_rgba(34,197,94,0.4)] animate-pulse">
                    <div className="text-center text-white">
                      <div className="flex items-center justify-center space-x-1 sm:space-x-2 mb-2">
                        <RiPercentLine className="w-5 h-5 sm:w-6 sm:h-6" />
                        <span className="text-3xl sm:text-5xl font-bold">
                          25
                        </span>
                      </div>
                      <div className="text-sm sm:text-lg font-semibold">
                        TOTAL OFF
                      </div>
                      <div className="text-xs opacity-80 mt-2">
                        15% + 10% = 25%
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floating Elements */}
                <div className="absolute top-2 right-2 w-8 h-8 sm:w-12 sm:h-12 bg-green-400/30 rounded-full animate-bounce" />
                <div className="absolute bottom-4 left-2 w-6 h-6 sm:w-8 sm:h-8 bg-emerald-400/30 rounded-full animate-bounce delay-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReferralPopup;
