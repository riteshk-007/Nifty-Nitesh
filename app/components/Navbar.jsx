"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { FaAngleDown, FaWhatsapp } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import Link from "next/link";
import { newlogo } from "@/assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCompactExpanded, setIsCompactExpanded] = useState(false);

  // Improved scroll detection with debouncing
  useEffect(() => {
    let timeoutId;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const shouldBeScrolled = scrollTop > 150;

          // Debounce the state change
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => {
            if (shouldBeScrolled !== isScrolled) {
              setIsScrolled(shouldBeScrolled);

              // ALWAYS close all menus when scroll state changes
              setIsOpen(false);
              setIsDropdownOpen(false);
              setIsCompactExpanded(false);
            }
          }, 50); // Reduced debounce for faster response

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [isScrolled]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const handleLogoClick = useCallback(
    (e) => {
      e.preventDefault();

      if (isScrolled) {
        const isMobile = window.innerWidth < 768;

        if (isMobile) {
          // On mobile, toggle the compact expanded menu
          setIsCompactExpanded(!isCompactExpanded);
        } else {
          // On desktop, just scroll to top
          scrollToTop();
        }
      } else {
        scrollToTop();
      }

      // Always close other menus
      setIsOpen(false);
      setIsDropdownOpen(false);
    },
    [isScrolled, isCompactExpanded, scrollToTop]
  );

  const handleLinkClick = useCallback(() => {
    setIsOpen(false);
    setIsDropdownOpen(false);
    setIsCompactExpanded(false);
  }, []);

  const handleMobileMenuToggle = useCallback(() => {
    setIsOpen(!isOpen);
    setIsDropdownOpen(false);
    setIsCompactExpanded(false);
  }, [isOpen]);

  const handleDropdownToggle = useCallback(() => {
    setIsDropdownOpen((prev) => !prev);
    setIsOpen(false);
    setIsCompactExpanded(false);
  }, []);

  const isCompact = isScrolled && !isCompactExpanded;

  return (
    <>
      {/* Fixed positioning container */}
      <div className="fixed bottom-4 z-[100] w-full max-w-none px-4">
        {/* Compact Circle Mode - Enhanced Scale Animation */}
        <div
          className={`fixed bottom-4 right-4 w-20 h-20 z-[101] transition-all duration-700 ease-bounce ${
            isCompact
              ? "opacity-100 scale-100 translate-y-0 rotate-0"
              : "opacity-0 scale-0 translate-y-8 rotate-180 pointer-events-none"
          }`}
        >
          <div
            className="bg-black/40 backdrop-blur-xl border border-green-500/30 
                shadow-[0_8px_32px_rgba(0,0,0,0.3)] shadow-green-500/20 
                rounded-full w-20 h-20 flex items-center justify-center p-2 
                hover:scale-125 hover:shadow-green-500/40 hover:border-green-500/50
                transition-all duration-500 ease-bounce cursor-pointer
                transform-gpu will-change-transform"
            onClick={handleLogoClick}
          >
            <Image
              width={80}
              height={80}
              src={newlogo}
              alt="Nifty Nitesh Logo"
              loading="lazy"
              className="filter brightness-0 invert transition-transform duration-500 ease-bounce
                hover:scale-125 hover:rotate-12 transform-gpu will-change-transform"
            />
          </div>
        </div>

        {/* Full Expanded Mode - Enhanced Scale Animation */}
        <nav
          className={`mx-auto w-[90%] max-w-6xl transition-all duration-700 ease-bounce transform-gpu will-change-transform ${
            !isCompact
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-75 translate-y-8 pointer-events-none"
          }`}
        >
          <div
            className="bg-black/40 backdrop-blur-xl border border-green-500/30 
                        shadow-[0_8px_32px_rgba(0,0,0,0.3)] shadow-green-500/20 
                        rounded-2xl px-8 py-4 transition-all duration-700 ease-bounce
                        transform-gpu will-change-transform"
          >
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link
                href="/"
                className="flex items-center space-x-3 group"
                onClick={handleLogoClick}
              >
                <div className="logo flex items-center">
                  <Image
                    width={70}
                    height={70}
                    src={newlogo}
                    alt="Nifty Nitesh Logo"
                    loading="lazy"
                    className="filter brightness-0 invert transition-transform duration-500 ease-bounce
                              group-hover:scale-125 group-hover:rotate-6 transform-gpu will-change-transform"
                  />
                  <span
                    className="ml-3 text-xl font-bold text-green-400 hidden sm:block 
                              transition-all duration-500 ease-bounce group-hover:text-green-300
                              group-hover:scale-105 transform-gpu will-change-transform"
                  >
                    Nifty Nitesh
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link
                  href="/"
                  className="text-white hover:text-green-400 transition-all duration-500 ease-bounce
                            font-medium relative after:absolute after:bottom-0 after:left-0 
                            after:w-0 after:h-0.5 after:bg-green-400 after:transition-all 
                            after:duration-500 after:ease-bounce hover:after:w-full
                            hover:scale-110 transform-gpu will-change-transform"
                  onClick={handleLinkClick}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-white hover:text-green-400 transition-all duration-500 ease-bounce
                            font-medium relative after:absolute after:bottom-0 after:left-0 
                            after:w-0 after:h-0.5 after:bg-green-400 after:transition-all 
                            after:duration-500 after:ease-bounce hover:after:w-full
                            hover:scale-110 transform-gpu will-change-transform"
                  onClick={handleLinkClick}
                >
                  About
                </Link>
                <Link
                  href="/enrollment"
                  className="text-white hover:text-green-400 transition-all duration-500 ease-bounce
                            font-medium relative after:absolute after:bottom-0 after:left-0 
                            after:w-0 after:h-0.5 after:bg-green-400 after:transition-all 
                            after:duration-500 after:ease-bounce hover:after:w-full
                            hover:scale-110 transform-gpu will-change-transform"
                  onClick={handleLinkClick}
                >
                  Enroll Now
                </Link>
                <Link
                  href="/refer"
                  className="text-white hover:text-green-400 transition-all duration-500 ease-bounce
                            font-medium relative after:absolute after:bottom-0 after:left-0 
                            after:w-0 after:h-0.5 after:bg-green-400 after:transition-all 
                            after:duration-500 after:ease-bounce hover:after:w-full
                            hover:scale-110 transform-gpu will-change-transform"
                  onClick={handleLinkClick}
                >
                  Refer Friend
                </Link>

                {/* Courses Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <button
                    className="text-white hover:text-green-400 transition-all duration-500 ease-bounce
                              flex items-center font-medium relative after:absolute after:bottom-0 
                              after:left-0 after:w-0 after:h-0.5 after:bg-green-400 
                              after:transition-all after:duration-500 after:ease-bounce hover:after:w-full
                              hover:scale-110 transform-gpu will-change-transform"
                    onClick={handleDropdownToggle}
                  >
                    Courses
                    <FaAngleDown
                      className={`ml-2 w-4 h-4 transition-transform duration-500 ease-bounce transform-gpu will-change-transform ${
                        isDropdownOpen
                          ? "rotate-180 scale-110"
                          : "rotate-0 scale-100"
                      }`}
                    />
                  </button>

                  <div
                    className={`absolute bottom-full left-1/2 -translate-x-1/2   w-56  overflow-hidden
                               bg-black/60 backdrop-blur-xl rounded-xl 
                               shadow-[0_-8px_32px_rgba(0,0,0,0.4)] 
                               border border-green-500/30 z-50 
                               transition-all duration-300 ease-out transform-gpu will-change-transform ${
                                 isDropdownOpen
                                   ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                                   : "opacity-0 scale-95 translate-y-2 pointer-events-none"
                               }`}
                  >
                    <div className="py-3">
                      {/* Remove any <Link href="/online-classes">...</Link> or similar menu items */}
                    </div>

                    <div className="border-t border-green-500/30 py-2">
                      <Link
                        href="/faq"
                        className="block px-6 py-3 text-gray-300 hover:text-green-400 
                                  hover:bg-green-500/20 transition-all duration-300 ease-bounce
                                  text-sm hover:translate-x-2 hover:scale-105 transform-gpu will-change-transform"
                        onClick={handleLinkClick}
                      >
                        FAQ →
                      </Link>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="text-white hover:text-green-400 transition-all duration-500 ease-bounce
                            font-medium relative after:absolute after:bottom-0 after:left-0 
                            after:w-0 after:h-0.5 after:bg-green-400 after:transition-all 
                            after:duration-500 after:ease-bounce hover:after:w-full
                            hover:scale-110 transform-gpu will-change-transform"
                  onClick={handleLinkClick}
                >
                  Contact
                </Link>
              </div>

              {/* CTA and Mobile Menu Button */}
              <div className="flex items-center space-x-4">
                {/* WhatsApp Channel CTA Button */}
                <a
                  href="https://whatsapp.com/channel/0029VaS551C17En02ZJgld1V"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden lg:block"
                  onClick={handleLinkClick}
                >
                  <button
                    className="bg-gradient-to-r from-green-500 to-green-400 text-black 
                              font-semibold px-6 py-3 rounded-full flex items-center space-x-2 
                              hover:shadow-lg hover:shadow-green-500/40 hover:scale-110 
                              transition-all duration-500 ease-bounce active:scale-95
                              transform-gpu will-change-transform"
                  >
                    <FaWhatsapp className="w-5 h-5 transition-transform duration-300 hover:scale-125 transform-gpu will-change-transform" />
                    <span>Join Channel</span>
                  </button>
                </a>

                {/* Mobile WhatsApp Icon */}
                <a
                  href="https://whatsapp.com/channel/0029VaS551C17En02ZJgld1V"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lg:hidden p-3 rounded-full bg-green-500/20 border border-green-500/30 
                            hover:bg-green-500/30 hover:scale-125 transition-all duration-500 ease-bounce
                            active:scale-95 transform-gpu will-change-transform"
                  onClick={handleLinkClick}
                >
                  <FaWhatsapp className="w-5 h-5 text-green-400 transition-transform duration-300 hover:scale-125 transform-gpu will-change-transform" />
                </a>

                {/* Mobile Menu Button */}
                <button
                  onClick={handleMobileMenuToggle}
                  className="md:hidden p-3 rounded-full bg-black/40 border border-green-500/30 
                            text-white hover:text-green-400 hover:border-green-500/50 
                            hover:scale-125 transition-all duration-500 ease-bounce active:scale-95
                            transform-gpu will-change-transform"
                >
                  <div className="relative w-6 h-6 flex items-center justify-center">
                    <RiMenu3Fill
                      className={`w-6 h-6 transition-all duration-500 ease-bounce transform-gpu will-change-transform ${
                        isOpen
                          ? "opacity-0 rotate-90 scale-0"
                          : "opacity-100 rotate-0 scale-100"
                      }`}
                    />
                    <CgClose
                      className={`w-6 h-6 absolute transition-all duration-500 ease-bounce transform-gpu will-change-transform ${
                        isOpen
                          ? "opacity-100 rotate-0 scale-100"
                          : "opacity-0 rotate-90 scale-0"
                      }`}
                    />
                  </div>
                </button>
              </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div
              className={`md:hidden overflow-hidden transition-all duration-700 ease-bounce transform-gpu will-change-transform ${
                isOpen
                  ? "max-h-96 opacity-100 mt-6 scale-100"
                  : "max-h-0 opacity-0 scale-95"
              }`}
            >
              <div className="bg-black/30 backdrop-blur-md rounded-xl border border-green-500/20 p-6 transition-all duration-500 ease-bounce transform-gpu will-change-transform">
                <div className="space-y-4">
                  <Link
                    href="/"
                    onClick={handleLinkClick}
                    className="block text-white hover:text-green-400 transition-all duration-500 ease-bounce
                              py-2 font-medium hover:translate-x-2 hover:scale-105 transform-gpu will-change-transform"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    onClick={handleLinkClick}
                    className="block text-white hover:text-green-400 transition-all duration-500 ease-bounce
                              py-2 font-medium hover:translate-x-2 hover:scale-105 transform-gpu will-change-transform"
                  >
                    About
                  </Link>
                  <Link
                    href="/enrollment"
                    onClick={handleLinkClick}
                    className="block text-white hover:text-green-400 transition-all duration-500 ease-bounce
                              py-2 font-medium hover:translate-x-2 hover:scale-105 transform-gpu will-change-transform"
                  >
                    Enroll Now
                  </Link>
                  <Link
                    href="/refer"
                    onClick={handleLinkClick}
                    className="block text-white hover:text-green-400 transition-all duration-500 ease-bounce
                              py-2 font-medium hover:translate-x-2 hover:scale-105 transform-gpu will-change-transform"
                  >
                    Refer Friend
                  </Link>
                  <div className="space-y-3">
                    <div className="text-gray-300 text-sm font-semibold uppercase tracking-wider">
                      Courses
                    </div>
                    {/* Remove any <Link href="/online-classes">...</Link> or similar menu items */}
                    <Link
                      href="/faq"
                      onClick={handleLinkClick}
                      className="block pl-4 text-gray-300 hover:text-green-400 transition-all 
                                duration-500 ease-bounce py-1 text-sm hover:translate-x-2 hover:scale-105 transform-gpu will-change-transform"
                    >
                      FAQ →
                    </Link>
                  </div>
                  <Link
                    href="/contact"
                    onClick={handleLinkClick}
                    className="block text-white hover:text-green-400 transition-all duration-500 ease-bounce
                              py-2 font-medium hover:translate-x-2 hover:scale-105 transform-gpu will-change-transform"
                  >
                    Contact
                  </Link>

                  {/* Mobile CTA */}
                  <div className="pt-4 border-t border-green-500/20">
                    <a
                      href="https://whatsapp.com/channel/0029VaS551C17En02ZJgld1V"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleLinkClick}
                    >
                      <button
                        className="w-full bg-gradient-to-r from-green-500 to-green-400 
                                  text-black font-semibold py-3 rounded-full flex items-center 
                                  justify-center space-x-2 hover:shadow-lg hover:shadow-green-500/40 
                                  hover:scale-105 transition-all duration-500 ease-bounce active:scale-95
                                  transform-gpu will-change-transform"
                      >
                        <FaWhatsapp className="w-5 h-5 transition-transform duration-300 hover:scale-125 transform-gpu will-change-transform" />
                        <span>Join Channel</span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Expanded Menu when Compact Mode is Active - Enhanced Scale Animation */}
        {isCompactExpanded && (
          <>
            {/* Backdrop to close menu */}
            <div
              className="fixed inset-0 z-[99] bg-black/20 backdrop-blur-sm md:hidden transition-all duration-300 ease-out"
              onClick={() => setIsCompactExpanded(false)}
            />

            <div
              className="fixed bottom-28 right-1/2 translate-x-1/2 w-80 md:hidden z-[102]
                         transition-all duration-500 ease-bounce transform-gpu will-change-transform
                         animate-in zoom-in-95 slide-in-from-bottom-4"
            >
              <div
                className="bg-black/60 backdrop-blur-xl rounded-2xl border border-green-500/30 
                           shadow-[0_8px_32px_rgba(0,0,0,0.4)] p-6 transition-all duration-300 ease-bounce
                           transform-gpu will-change-transform hover:scale-105"
              >
                {/* Close button */}
                <div className="flex justify-end mb-4">
                  <button
                    onClick={() => setIsCompactExpanded(false)}
                    className="p-2 rounded-full hover:bg-white/10 transition-all duration-300 ease-bounce
                              hover:scale-125 active:scale-95 transform-gpu will-change-transform"
                  >
                    <CgClose className="w-5 h-5 text-white transition-transform duration-300 hover:rotate-90 transform-gpu will-change-transform" />
                  </button>
                </div>

                <div className="space-y-4">
                  <Link
                    href="/"
                    className="block text-white hover:text-green-400 transition-all duration-300 ease-bounce
                              py-2 font-medium hover:translate-x-2 hover:scale-105 transform-gpu will-change-transform"
                    onClick={handleLinkClick}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="block text-white hover:text-green-400 transition-all duration-300 ease-bounce
                              py-2 font-medium hover:translate-x-2 hover:scale-105 transform-gpu will-change-transform"
                    onClick={handleLinkClick}
                  >
                    About
                  </Link>
                  <Link
                    href="/enrollment"
                    className="block text-white hover:text-green-400 transition-all duration-300 ease-bounce
                              py-2 font-medium hover:translate-x-2 hover:scale-105 transform-gpu will-change-transform"
                    onClick={handleLinkClick}
                  >
                    Enroll Now
                  </Link>
                  <div className="space-y-3">
                    <div className="text-gray-300 text-sm font-semibold uppercase tracking-wider">
                      Courses
                    </div>
                    {/* Remove any <Link href="/online-classes">...</Link> or similar menu items */}
                    <Link
                      href="/faq"
                      className="block pl-4 text-gray-300 hover:text-green-400 transition-all 
                                duration-300 ease-bounce py-1 text-sm hover:translate-x-2 hover:scale-105 transform-gpu will-change-transform"
                      onClick={handleLinkClick}
                    >
                      FAQ →
                    </Link>
                  </div>
                  <Link
                    href="/contact"
                    className="block text-white hover:text-green-400 transition-all duration-300 ease-bounce
                              py-2 font-medium hover:translate-x-2 hover:scale-105 transform-gpu will-change-transform"
                    onClick={handleLinkClick}
                  >
                    Contact
                  </Link>
                  <div className="pt-4 border-t border-green-500/20">
                    <a
                      href="https://whatsapp.com/channel/0029VaS551C17En02ZJgld1V"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleLinkClick}
                    >
                      <button
                        className="w-full bg-gradient-to-r from-green-500 to-green-400 
                                  text-black font-semibold py-3 rounded-full flex items-center 
                                  justify-center space-x-2 hover:shadow-lg hover:shadow-green-500/40 
                                  hover:scale-105 transition-all duration-300 ease-bounce active:scale-95
                                  transform-gpu will-change-transform"
                      >
                        <FaWhatsapp className="w-5 h-5 transition-transform duration-300 hover:scale-125 transform-gpu will-change-transform" />
                        <span>Join Channel</span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
