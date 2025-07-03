"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { FaAngleDown, FaWhatsapp } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCompactExpanded, setIsCompactExpanded] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const shouldBeScrolled = scrollTop > 120;

          if (shouldBeScrolled !== isScrolled) {
            setIsScrolled(shouldBeScrolled);
            if (shouldBeScrolled) {
              // Close all menus when scrolling down
              setIsOpen(false);
              setIsDropdownOpen(false);
              setIsCompactExpanded(false);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleLogoClick = (e) => {
    e.preventDefault();

    if (isScrolled) {
      // Check if we're on mobile/tablet (using window width)
      const isMobile = window.innerWidth < 768; // md breakpoint

      if (isMobile) {
        if (isCompactExpanded) {
          // If expanded, scroll to top and collapse
          scrollToTop();
          setIsCompactExpanded(false);
        } else {
          // If compact, expand the menu
          setIsCompactExpanded(true);
        }
      } else {
        // On desktop, just scroll to top
        scrollToTop();
        setIsCompactExpanded(false);
      }
      // Close other menus
      setIsOpen(false);
      setIsDropdownOpen(false);
    } else {
      // Normal behavior when not scrolled
      scrollToTop();
      setIsOpen(false);
      setIsDropdownOpen(false);
    }
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
    setIsCompactExpanded(false);
  };

  const handleMobileMenuToggle = () => {
    setIsOpen(!isOpen);
    setIsDropdownOpen(false);
    setIsCompactExpanded(false);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsOpen(false);
    setIsCompactExpanded(false);
  };

  const isCompact = isScrolled && !isCompactExpanded;

  return (
    <>
      {/* Fixed positioning container */}
      <div className="fixed bottom-4 z-[100] w-full max-w-none px-4">
        {/* Show either compact circle OR full navbar, not both */}
        {isCompact ? (
          /* Compact Circle Mode - Only Logo */
          <div className="ml-auto mr-4 w-20 max-w-20">
            <div
              className="bg-black/30 backdrop-blur-xl border border-green-500/20 
                          shadow-[0_8px_32px_rgba(0,0,0,0.3)] shadow-green-500/10 
                          rounded-full w-20 h-20 flex items-center justify-center p-2 
                          hover:scale-110 hover:shadow-green-500/30 transition-all duration-300"
            >
              <button
                onClick={handleLogoClick}
                className="w-full h-full flex items-center justify-center rounded-full 
                          hover:bg-green-500/10 transition-all duration-300 
                          active:scale-95 group"
              >
                <Image
                  width={36}
                  height={36}
                  src="/light-logo.png"
                  alt="Nifty Nitesh Logo"
                  loading="lazy"
                  className="filter brightness-0 invert transition-transform duration-300 
                            group-hover:scale-110"
                />
              </button>
            </div>
          </div>
        ) : (
          /* Full Expanded Mode */
          <nav className="mx-auto w-[90%] max-w-6xl transition-all duration-700 ease-in-out">
            <div
              className="bg-black/30 backdrop-blur-xl border border-green-500/20 
                          shadow-[0_8px_32px_rgba(0,0,0,0.3)] shadow-green-500/10 
                          rounded-2xl px-8 py-4 transition-all duration-700 ease-in-out"
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
                      width={50}
                      height={50}
                      src="/light-logo.png"
                      alt="Nifty Nitesh Logo"
                      loading="lazy"
                      className="filter brightness-0 invert transition-transform duration-300 
                                group-hover:scale-110"
                    />
                    <span
                      className="ml-3 text-xl font-bold text-green-400 hidden sm:block 
                                    transition-colors duration-300 group-hover:text-green-300"
                    >
                      Nifty Nitesh
                    </span>
                  </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                  <Link
                    href="/"
                    className="text-white hover:text-green-400 transition-all duration-300 
                              font-medium relative after:absolute after:bottom-0 after:left-0 
                              after:w-0 after:h-0.5 after:bg-green-400 after:transition-all 
                              after:duration-300 hover:after:w-full"
                    onClick={handleLinkClick}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="text-white hover:text-green-400 transition-all duration-300 
                              font-medium relative after:absolute after:bottom-0 after:left-0 
                              after:w-0 after:h-0.5 after:bg-green-400 after:transition-all 
                              after:duration-300 hover:after:w-full"
                    onClick={handleLinkClick}
                  >
                    About
                  </Link>

                  {/* Courses Dropdown */}
                  <div className="relative">
                    <button
                      className="text-white hover:text-green-400 transition-all duration-300 
                                flex items-center font-medium relative after:absolute after:bottom-0 
                                after:left-0 after:w-0 after:h-0.5 after:bg-green-400 
                                after:transition-all after:duration-300 hover:after:w-full"
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      onMouseLeave={() => setIsDropdownOpen(false)}
                      onClick={handleDropdownToggle}
                    >
                      Courses
                      <FaAngleDown
                        className={`ml-2 w-4 h-4 transition-transform duration-300 ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isDropdownOpen && (
                      <div
                        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-56 
                                   bg-black/60 backdrop-blur-xl rounded-xl 
                                   shadow-[0_-8px_32px_rgba(0,0,0,0.4)] 
                                   border border-green-500/20 z-50 
                                   animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-2 
                                   duration-300"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                      >
                        <div className="py-3">
                          <Link
                            href="/online-classes"
                            className="block px-6 py-3 text-white hover:text-green-400 
                                      hover:bg-green-500/10 transition-all duration-200 
                                      font-medium hover:translate-x-1"
                            onClick={handleLinkClick}
                          >
                            Online Courses
                          </Link>
                        </div>
                        <div className="border-t border-green-500/20 py-2">
                          <Link
                            href="/faq"
                            className="block px-6 py-3 text-gray-300 hover:text-green-400 
                                      hover:bg-green-500/10 transition-all duration-200 
                                      text-sm hover:translate-x-1"
                            onClick={handleLinkClick}
                          >
                            FAQ →
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>

                  <Link
                    href="/contact"
                    className="text-white hover:text-green-400 transition-all duration-300 
                              font-medium relative after:absolute after:bottom-0 after:left-0 
                              after:w-0 after:h-0.5 after:bg-green-400 after:transition-all 
                              after:duration-300 hover:after:w-full"
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
                                hover:shadow-lg hover:shadow-green-500/30 hover:scale-105 
                                transition-all duration-300 active:scale-95"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      <span>Join Channel</span>
                    </button>
                  </a>

                  {/* Mobile WhatsApp Icon */}
                  <a
                    href="https://whatsapp.com/channel/0029VaS551C17En02ZJgld1V"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lg:hidden p-3 rounded-full bg-green-500/20 border border-green-500/30 
                              hover:bg-green-500/30 hover:scale-110 transition-all duration-300 
                              active:scale-95"
                    onClick={handleLinkClick}
                  >
                    <FaWhatsapp className="w-5 h-5 text-green-400" />
                  </a>

                  {/* Mobile Menu Button */}
                  <button
                    onClick={handleMobileMenuToggle}
                    className="md:hidden p-3 rounded-full bg-black/40 border border-green-500/30 
                              text-white hover:text-green-400 hover:border-green-500/50 
                              hover:scale-110 transition-all duration-300 active:scale-95"
                  >
                    <div className="relative w-6 h-6 flex items-center justify-center">
                      <RiMenu3Fill
                        className={`w-6 h-6 transition-all duration-300 ${
                          isOpen
                            ? "opacity-0 rotate-90 scale-0"
                            : "opacity-100 rotate-0 scale-100"
                        }`}
                      />
                      <CgClose
                        className={`w-6 h-6 absolute transition-all duration-300 ${
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
                className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
                  isOpen ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"
                }`}
              >
                <div className="bg-black/20 backdrop-blur-md rounded-xl border border-green-500/15 p-6">
                  <div className="space-y-4">
                    <Link
                      href="/"
                      onClick={handleLinkClick}
                      className="block text-white hover:text-green-400 transition-all duration-300 
                                py-2 font-medium hover:translate-x-2"
                    >
                      Home
                    </Link>
                    <Link
                      href="/about"
                      onClick={handleLinkClick}
                      className="block text-white hover:text-green-400 transition-all duration-300 
                                py-2 font-medium hover:translate-x-2"
                    >
                      About
                    </Link>
                    <div className="space-y-3">
                      <div className="text-gray-300 text-sm font-semibold uppercase tracking-wider">
                        Courses
                      </div>
                      <Link
                        href="/online-classes"
                        onClick={handleLinkClick}
                        className="block pl-4 text-white hover:text-green-400 transition-all 
                                  duration-300 py-1 hover:translate-x-2"
                      >
                        Online Courses
                      </Link>
                      <Link
                        href="/faq"
                        onClick={handleLinkClick}
                        className="block pl-4 text-gray-300 hover:text-green-400 transition-all 
                                  duration-300 py-1 text-sm hover:translate-x-2"
                      >
                        FAQ →
                      </Link>
                    </div>
                    <Link
                      href="/contact"
                      onClick={handleLinkClick}
                      className="block text-white hover:text-green-400 transition-all duration-300 
                                py-2 font-medium hover:translate-x-2"
                    >
                      Contact
                    </Link>

                    {/* Mobile CTA */}
                    <div className="pt-4 border-t border-green-500/15">
                      <a
                        href="https://whatsapp.com/channel/0029VaS551C17En02ZJgld1V"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleLinkClick}
                      >
                        <button
                          className="w-full bg-gradient-to-r from-green-500 to-green-400 
                                    text-black font-semibold py-3 rounded-full flex items-center 
                                    justify-center space-x-2 hover:shadow-lg hover:shadow-green-500/30 
                                    hover:scale-105 transition-all duration-300 active:scale-95"
                        >
                          <FaWhatsapp className="w-5 h-5" />
                          <span>Join Channel</span>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        )}

        {/* Expanded Menu when Compact Mode is Active - Only on mobile/tablet */}
        {isCompactExpanded && (
          <div
            className="absolute bottom-24 right-4 w-80 md:hidden
                         animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-4 
                         duration-300"
          >
            <div
              className="bg-black/50 backdrop-blur-xl rounded-2xl border border-green-500/20 
                           shadow-[0_8px_32px_rgba(0,0,0,0.4)] p-6"
            >
              <div className="space-y-4">
                <Link
                  href="/"
                  className="block text-white hover:text-green-400 transition-all duration-300 
                            py-2 font-medium hover:translate-x-2"
                  onClick={handleLinkClick}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block text-white hover:text-green-400 transition-all duration-300 
                            py-2 font-medium hover:translate-x-2"
                  onClick={handleLinkClick}
                >
                  About
                </Link>
                <div className="space-y-3">
                  <div className="text-gray-300 text-sm font-semibold uppercase tracking-wider">
                    Courses
                  </div>
                  <Link
                    href="/online-classes"
                    className="block pl-4 text-white hover:text-green-400 transition-all 
                              duration-300 py-1 hover:translate-x-2"
                    onClick={handleLinkClick}
                  >
                    Online Courses
                  </Link>
                  <Link
                    href="/faq"
                    className="block pl-4 text-gray-300 hover:text-green-400 transition-all 
                              duration-300 py-1 text-sm hover:translate-x-2"
                    onClick={handleLinkClick}
                  >
                    FAQ →
                  </Link>
                </div>
                <Link
                  href="/contact"
                  className="block text-white hover:text-green-400 transition-all duration-300 
                            py-2 font-medium hover:translate-x-2"
                  onClick={handleLinkClick}
                >
                  Contact
                </Link>
                <div className="pt-4 border-t border-green-500/15">
                  <a
                    href="https://whatsapp.com/channel/0029VaS551C17En02ZJgld1V"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                  >
                    <button
                      className="w-full bg-gradient-to-r from-green-500 to-green-400 
                                text-black font-semibold py-3 rounded-full flex items-center 
                                justify-center space-x-2 hover:shadow-lg hover:shadow-green-500/30 
                                hover:scale-105 transition-all duration-300 active:scale-95"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      <span>Join Channel</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
