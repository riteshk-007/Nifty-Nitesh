"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React from "react";

const Slider = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: true })
  );
  return (
    <div className="w-full flex  items-center justify-center gap-2 md:gap-4 p-5 bg-gray-100 dark:bg-black/30 relative">
      <Carousel
        plugins={[plugin.current]}
        className="w-full md:w-3/4"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <p className="w-full md:w-4/5 flex items-center justify-start text-xs sm:text-lg md:text-xl font-medium text-center md:text-start text-gray-500 dark:text-gray-400 absolute left-0 -top-2 sm:top-0   lg:top-[7%] xl:top-[10%]">
          Follow our journey and join the community on our social media pages.
          We share regular updates, insights, and inspiration. Connect with us
          on , Instagram, and Twitter.
        </p>
        <CarouselContent>
          {["img1.png", "img2.png", "img3.png"].map((img, index) => (
            <CarouselItem key={index}>
              <div className="p-1 flex">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-2 ">
                    <Image
                      width={1920}
                      height={1080}
                      src={`/ss/${img}`}
                      alt="carousel"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
};

export default Slider;

const Card = ({ children }) => {
  return <div className=" w-full">{children}</div>;
};

const CardContent = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};
