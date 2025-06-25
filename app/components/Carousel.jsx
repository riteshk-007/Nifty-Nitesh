"use client";
import React, { useRef, useEffect, Suspense } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselScroll = ({ images }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current.slickNext();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: true,
    fade: true,
    cssEase: "ease-in-out",
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
        },
      },
    ],
  };

  return (
    <div className="hero-section relative">
      <Suspense
        fallback={
          <div className="w-full h-screen flex items-center justify-center">
            <div className="animate-pulse text-accent text-xl">Loading...</div>
          </div>
        }
      >
        <div className="relative w-full h-screen overflow-hidden">
          <Slider ref={sliderRef} {...settings} className="h-full">
            {images.map((image, index) => (
              <div key={index} className="relative h-screen">
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10"></div>
                <Image
                  src={image.src}
                  alt={`Trading Platform Hero ${index + 1}`}
                  fill
                  className="object-cover opacity-30"
                  loading={index === 0 ? "eager" : "lazy"}
                  priority={index === 0}
                />
              </div>
            ))}
          </Slider>

          {/* Hero Content Overlay */}
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="max-w-4xl">
                <div className="fade-in-up">
                  <h1 className="hero-title">
                    Master the <span className="green-text">Stock Market</span>{" "}
                    with
                    <br />
                    Expert{" "}
                    <span className="gradient-text">Trading Classes</span>
                  </h1>

                  <p className="hero-subtitle">
                    Transform your trading journey with comprehensive courses
                    designed by industry experts. Learn technical analysis, risk
                    management, and proven strategies to succeed in the stock
                    market.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <Link href="/online-classes">
                      <Button
                        variant="cta"
                        size="lg"
                        className="w-full sm:w-auto"
                      >
                        Start Learning Today
                      </Button>
                    </Link>
                    <Link href="/faq">
                      <Button
                        variant="secondary"
                        size="lg"
                        className="w-full sm:w-auto"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </div>

                  {/* Trust Indicators */}
                  <div className="flex flex-wrap items-center gap-8 mt-12 text-text-secondary">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                      <span className="text-sm">500+ Students Trained</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                      <span className="text-sm">95% Success Rate</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                      <span className="text-sm">Expert Mentorship</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <div className="flex flex-col items-center text-accent animate-bounce">
              <span className="text-sm mb-2">Scroll Down</span>
              <div className="w-0.5 h-12 bg-gradient-to-b from-accent to-transparent"></div>
            </div>
          </div>
        </div>
      </Suspense>

      <style jsx global>{`
        .custom-dots {
          bottom: 2rem;
          z-index: 30;
        }

        .custom-dots li button:before {
          color: rgba(0, 255, 136, 0.5);
          font-size: 12px;
        }

        .custom-dots li.slick-active button:before {
          color: #00ff88;
        }
      `}</style>
    </div>
  );
};

export default CarouselScroll;
