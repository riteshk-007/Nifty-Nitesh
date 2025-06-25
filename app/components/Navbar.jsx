"use client";
import Image from "next/image";
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { FaAngleDown, FaWhatsapp } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      {/* Fixed positioning container */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-[100] w-full max-w-none px-4">
        <nav className="w-[60%] mx-auto">
          <div
            className="bg-black/30 backdrop-blur-md border border-green-500/20 rounded-2xl 
                        shadow-[0_8px_32px_rgba(0,0,0,0.3)] shadow-green-500/10 px-8 py-4"
          >
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link
                href="/"
                className="flex items-center space-x-3"
                onClick={() => setIsOpen(false)}
              >
                <div className="logo flex items-center">
                  <Image
                    width={50}
                    height={50}
                    src="/light-logo.png"
                    alt="Nifty Nitesh Logo"
                    loading="lazy"
                    className="filter brightness-0 invert"
                  />
                  <span className="ml-3 text-xl font-bold text-green-400 hidden sm:block">
                    Nifty Nitesh
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link
                  href="/"
                  className="text-white hover:text-green-400 transition-colors duration-300 font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-white hover:text-green-400 transition-colors duration-300 font-medium"
                >
                  About
                </Link>

                {/* Courses Dropdown */}
                <div className="relative">
                  <button
                    className="text-white hover:text-green-400 transition-colors duration-300 flex items-center font-medium"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
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
                                 bg-black/50 backdrop-blur-lg rounded-xl shadow-[0_-8px_32px_rgba(0,0,0,0.4)] 
                                 border border-green-500/20 z-50 animate-in fade-in-0 zoom-in-95 duration-200"
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                      <div className="py-3">
                        <Link
                          href="/online-classes"
                          className="block px-6 py-3 text-white hover:text-green-400 hover:bg-green-500/10 
                                     transition-all duration-200 font-medium"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Online Courses
                        </Link>
                      </div>
                      <div className="border-t border-green-500/20 py-2">
                        <Link
                          href="/faq"
                          className="block px-6 py-3 text-gray-300 hover:text-green-400 hover:bg-green-500/10 
                                     transition-all duration-200 text-sm"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          FAQ →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                <Link
                  href="/contact"
                  className="text-white hover:text-green-400 transition-colors duration-300 font-medium"
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
                >
                  <button
                    className="bg-gradient-to-r from-green-500 to-green-400 text-black font-semibold 
                                     px-6 py-3 rounded-full flex items-center space-x-2 
                                     hover:shadow-lg hover:shadow-green-500/30 hover:scale-105 
                                     transition-all duration-300"
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
                             hover:bg-green-500/30 hover:scale-110 transition-all duration-300"
                >
                  <FaWhatsapp className="w-5 h-5 text-green-400" />
                </a>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="md:hidden p-3 rounded-full bg-black/40 border border-green-500/30 
                             text-white hover:text-green-400 hover:border-green-500/50 hover:scale-110
                             transition-all duration-300"
                >
                  {isOpen ? (
                    <CgClose className="w-6 h-6" />
                  ) : (
                    <RiMenu3Fill className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div
              className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"
              }`}
            >
              <div className="bg-black/20 backdrop-blur-md rounded-xl border border-green-500/15 p-6">
                <div className="space-y-4">
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="block text-white hover:text-green-400 transition-colors duration-300 py-2 font-medium"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    onClick={() => setIsOpen(false)}
                    className="block text-white hover:text-green-400 transition-colors duration-300 py-2 font-medium"
                  >
                    About
                  </Link>
                  <div className="space-y-3">
                    <div className="text-gray-300 text-sm font-semibold uppercase tracking-wider">
                      Courses
                    </div>
                    <Link
                      href="/online-classes"
                      onClick={() => setIsOpen(false)}
                      className="block pl-4 text-white hover:text-green-400 transition-colors duration-300 py-1"
                    >
                      Online Courses
                    </Link>

                    <Link
                      href="/faq"
                      onClick={() => setIsOpen(false)}
                      className="block pl-4 text-gray-300 hover:text-green-400 transition-colors duration-300 py-1 text-sm"
                    >
                      FAQ →
                    </Link>
                  </div>
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block text-white hover:text-green-400 transition-colors duration-300 py-2 font-medium"
                  >
                    Contact
                  </Link>

                  {/* Mobile CTA */}
                  <div className="pt-4 border-t border-green-500/15">
                    <a
                      href="https://whatsapp.com/channel/0029VaS551C17En02ZJgld1V"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                    >
                      <button
                        className="w-full bg-gradient-to-r from-green-500 to-green-400 text-black font-semibold 
                                         py-3 rounded-full flex items-center justify-center space-x-2 
                                         hover:shadow-lg hover:shadow-green-500/30 hover:scale-105 
                                         transition-all duration-300"
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
      </div>
    </>
  );
};

export default Navbar;
