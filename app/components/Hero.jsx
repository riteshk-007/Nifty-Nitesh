"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const images = [
  {
    src: "/banner1.png",
  },
  {
    src: "/banner2.png",
  },
];
const Hero = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images?.map((item, index) => (
          <CarouselItem key={index}>
            <div className="w-full  shadow-lg">
              <Image
                width={1920}
                height={1080}
                src={item.src}
                alt={`Slide ${index + 1}`}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Hero;
