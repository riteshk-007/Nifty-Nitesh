const images = [
  {
    src: "/banner1.png",
  },
  {
    src: "/banner2.png",
  },
];
import CarouselScroll from "./Carousel";

const Hero = () => {
  return <CarouselScroll images={images} />;
};

export default Hero;
