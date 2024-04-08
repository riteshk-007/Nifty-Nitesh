import Image from "next/image";
import { FaRegPlayCircle } from "react-icons/fa";

const DemoClasses = () => {
  return (
    <>
      <h1 className="text-3xl md:text-5xl font-bold text-green-600 text-center my-5">
        Demo Classes
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
        <a
          href="https://youtu.be/NZUkbQynTRI?si=ejYyVdrQDVA0-Y2S"
          className="w-full h-full rounded-2xl relative"
          target="_blank"
        >
          <Image
            src="/opengraph-image.png"
            alt="Demo Classes"
            width={1920}
            height={1080}
            className="rounded-lg"
          />
          <div className="absolute bottom-1 md:bottom-3 right-2 md:right-3">
            <h1 className="text-xl md:text-3xl font-bold text-[#44ff00]">
              Class 01
            </h1>
          </div>
          <FaRegPlayCircle className="text-gray-300 dark:text-gray-100 absolute top-1/2 left-1/2 text-5xl md:text-8xl -translate-x-1/2 -translate-y-1/2" />
        </a>

        <a
          className="w-full h-full rounded-2xl relative"
          target="_blank"
          href="https://youtu.be/2cow94qrd1I?si=-nmt4maM7oFH6NEd"
        >
          <Image
            src="/opengraph-image.png"
            alt="Demo Classes"
            width={1920}
            height={1080}
            className="rounded-lg"
          />
          <div className="absolute bottom-1 md:bottom-3 right-2 md:right-3">
            <h1 className="text-xl md:text-3xl font-bold text-[#44ff00]">
              Class 02
            </h1>
          </div>
          <FaRegPlayCircle className="text-gray-300 dark:text-gray-100 absolute top-1/2 left-1/2 text-5xl md:text-8xl -translate-x-1/2 -translate-y-1/2" />
        </a>
      </div>
      <div className="w-full flex items-center justify-center p-3">
        <span className="text-sm md:mb-5 md:text-base text-center w-full font-bold  text-green-600 uppercase px-2 bg-[#f0f0f0] dark:bg-gray-950 p-1 rounded">
          If you have enjoyed our demo classes, we invite you to continue with
          this course. We offer the flexibility to attend classes in a way that
          suits you best - online, offline, or through recorded videos. We are
          committed to providing the highest quality education, tailored to your
          convenience.
        </span>
      </div>
    </>
  );
};

export default DemoClasses;
