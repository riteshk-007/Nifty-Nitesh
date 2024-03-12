import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-2 md:gap-4 p-5  dark:bg-black">
      <p className="text-xs md:text-base font-semibold text-gray-700 dark:text-gray-300 text-center uppercase">
        ABOUT US
      </p>
      <h1 className="text-base md:text-4xl font-bold text-center">
        {"Stock Market Institute in Delhi - "}
        <span className="text-green-500 dark:text-green-400 ">
          Nifty Nitesh
        </span>
      </h1>

      <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-2 md:gap-4">
        <p className="text-xs md:text-base font-semibold text-gray-500 dark:text-gray-300 text-center uppercase">
          OUR MISSION
        </p>
        <p className="text-xs md:text-base font-semibold text-gray-500 dark:text-gray-300 text-center">
          {"Our mission is to provide quality education to the students and "}
          {"make them understand the stock market in a simple way."}
        </p>
      </div>
      <div className="flex flex-col md:flex-row w-full items-center justify-center p-5 md:p-10">
        <div className="w-full md:w-1/2 flex items-center justify-center bg-cover">
          <Image
            width={500}
            height={300}
            src="/about.jpeg"
            alt="Nifty Nitesh"
            className="rounded-lg"
          />
        </div>
        <span className="text-xs lg:text-sm  mx-2 font-semibold text-gray-700 dark:text-gray-300 text-start w-full md:w-1/2  my-3 flex flex-col">
          Welcome, to the leading best Stock market Institute in Delhi, we offer
          Stock market courses for future growth and impart deep knowledge of
          the stock market and Trading. Here, we&apos;ll teach you and guide you
          to deal in the stock market with current strategies and
          technicalities. Our Stock market courses in Delhi includes everything
          related to the stock market and mainly focus on demand and supply
          concepts, with proper risk management. Nifty Nitesh is the finest
          Stock market coaching in Delhi, We provide a smooth and easy learning
          environment to our students by providing Lifetime Mentorship Support
          and various advanced programs to deal with current price actions. Our
          team Expertise in the field of Stock Market and We have Brilliant
          Professionals of stock market for training purpose. Nifty Nitesh
          assures Genuine supports and skilful guidance of stock market.
          <Link href="/about" className="my-4">
            <Button className="bg-green-500 dark:bg-green-600 text-white hover:bg-green-600 dark:hover:bg-green-500 shadow-md">
              Read More
            </Button>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default About;
