"use client";

import React from "react";

import { Suspense, useState } from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { HiOutlineShare } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const SocialLinks = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const socialLinks = [
    {
      href: "https://whatsapp.com/channel/0029VaS551C17En02ZJgld1V",
      icon: <FaWhatsapp size={20} />,
      label: "WhatsApp",
      color: "hover:bg-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]",
    },
    {
      href: "https://youtube.com/@Nifty-Nitesh?si=f7EmRh97E2KjE5k6",
      icon: <FaYoutube size={20} />,
      label: "YouTube",
      color: "hover:bg-red-600 hover:shadow-[0_0_20px_rgba(220,38,38,0.6)]",
    },
    {
      href: "https://www.instagram.com/nifty_nitesh?igsh=ZzhlbmIwdnc5czBl",
      icon: <FaInstagram size={20} />,
      label: "Instagram",
      color: "hover:bg-pink-600 hover:shadow-[0_0_20px_rgba(219,39,119,0.6)]",
    },
    {
      href: "https://x.com/Niftyniteshk?t=Mak7r-pNH-Z4vcaravqXKw&s=08",
      icon: <FaXTwitter size={20} />,
      label: "Twitter",
      color: "hover:bg-black hover:shadow-[0_0_20px_rgba(0,0,0,0.6)]",
    },
    {
      href: "mailto:niftynitesh000@gmail.com?subject=Hello Nitesh!&body=I am interested in your work.",
      icon: <IoIosMail size={20} />,
      label: "Email",
      color: "hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(37,99,235,0.6)]",
    },
  ];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* Desktop Version - Original Sidebar */}
      <div className="hidden lg:block fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
        <div className="glass-effect rounded-2xl p-3 border border-accent/30 shadow-glow">
          <div className="space-y-3">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  group flex items-center justify-center w-12 h-12 
                  bg-background-card/80 backdrop-blur-sm 
                  rounded-xl border border-accent/20 
                  text-text-primary transition-all duration-300 
                  ${link.color}
                  hover:text-white hover:scale-110 hover:border-transparent
                  active:scale-95
                `}
                aria-label={link.label}
              >
                <div className="group-hover:animate-pulse">{link.icon}</div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Version - Floating Action Button */}
      <div className="lg:hidden fixed bottom-32 right-4 z-50">
        {/* Backdrop overlay when expanded */}
        {isExpanded && (
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
            onClick={() => setIsExpanded(false)}
          />
        )}

        {/* Expanded social links */}
        <div
          className={`
          absolute bottom-16 right-0 transition-all duration-300 transform
          ${
            isExpanded
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-4 scale-95 pointer-events-none"
          }
        `}
        >
          <div className="glass-effect rounded-2xl p-3 border border-accent/30 shadow-glow">
            <div className="flex flex-col space-y-2">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    group flex items-center justify-center w-10 h-10 
                    bg-background-card/80 backdrop-blur-sm 
                    rounded-xl border border-accent/20 
                    text-text-primary transition-all duration-300 
                    ${link.color}
                    hover:text-white hover:scale-110 hover:border-transparent
                    active:scale-95
                  `}
                  aria-label={link.label}
                  onClick={() => setIsExpanded(false)}
                >
                  <div className="group-hover:animate-pulse">
                    {React.cloneElement(link.icon, { size: 16 })}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Main floating action button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`
            bg-black/60 backdrop-blur-xl border border-green-500/30 
                shadow-[0_8px_32px_rgba(0,0,0,0.3)] shadow-green-500/20 
                rounded-full w-14 h-14 flex items-center justify-center p-2 
                hover:scale-110 hover:shadow-green-500/40 hover:border-green-500
                transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer
                transform-gpu will-change-transform
            ${isExpanded ? "rotate-45" : "rotate-0"}
          `}
          aria-label={isExpanded ? "Close social links" : "Open social links"}
        >
          {isExpanded ? (
            <IoClose size={24} className="group-hover:animate-pulse" />
          ) : (
            <HiOutlineShare size={24} className="group-hover:animate-pulse" />
          )}
        </button>
      </div>
    </Suspense>
  );
};

export default SocialLinks;
