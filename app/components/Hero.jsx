import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full items-center justify-center flex">
      <Image src="/banner.png" alt="hero" width={1920} height={1080} />
    </div>
  );
};

export default Hero;
