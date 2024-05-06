import Image from "next/image";
import React from "react";

export const metadata = {
  title: "About Nifty Nitesh - Share Market Classes & Stock Trading Institute",
  description:
    "Learn about Nifty Nitesh, a leading share market and stock trading institute in Delhi, offering comprehensive classes on technical analysis, fundamental analysis, and investing strategies.",
  keywords: [
    "share market institute in delhi",
    "stock trading institute in delhi",
    "share market classes in delhi",
    "stock market courses in delhi",
    "stock market coaching in delhi",
    "technical analysis classes",
    "fundamental analysis training",
    "investing strategies courses",
    "share market education",
    "stock trading lessons",
  ],
  openGraph: {
    title:
      "About Nifty Nitesh - Share Market Classes & Stock Trading Institute",
    description:
      "Learn about Nifty Nitesh, a leading share market and stock trading institute in Delhi, offering comprehensive classes on technical analysis, fundamental analysis, and investing strategies.",
  },
};
const AboutUs = () => {
  return (
    <div className="md:w-4/5 w-full mx-auto flex flex-col items-start justify-start gap-2 md:gap-4 p-5">
      <p className="text-sm md:mb-5 md:text-base text-center w-full font-semibold text-gray-700 dark:text-gray-300 uppercase">
        ABOUT US
      </p>
      <Image
        src="/about.jpeg"
        alt="Nifty Nitesh"
        width={1920}
        height={1080}
        className="rounded-lg"
      />
      <div className="grid md:grid-cols-2 gap-5">
        <div className="my-5">
          <h1 className="mb-2 text-xl md:text-4xl font-bold text-green-600">
            Company&apos;s Journey
          </h1>
          <p className="text-sm md:mb-5 md:text-base font-semibold text-gray-500 dark:text-gray-300">
            Nifty Nitesh is the leading Stock Market Institute in Delhi,
            dedicated to providing the best stock market courses for individuals
            looking for future growth and deep knowledge of trading. Our journey
            began with a passion for empowering individuals with the skills and
            strategies needed to succeed in the stock market.
          </p>
          <h1 className="text-xl md:text-4xl font-bold text-green-600">
            Purpose and Goals
          </h1>
          <p className="text-sm md:mb-5 md:text-base font-semibold text-gray-500 dark:text-gray-300">
            Our main purpose at Nifty Nitesh is to educate and guide individuals
            on dealing with the stock market by providing current strategies and
            technical knowledge. Our goal is to equip our students with the
            necessary tools to navigate the stock market with confidence,
            focusing on demand and supply concepts, as well as proper risk
            management.
          </p>
        </div>
        <div className="my-5">
          <h1 className="mb-2 text-xl md:text-4xl font-bold text-green-600">
            Introduction to the Team
          </h1>
          <p className="text-sm md:mb-5 md:text-base font-semibold text-gray-500 dark:text-gray-300">
            At Nifty Nitesh, we have a team of experts with a wealth of
            experience in the field of stock market trading. Our team of
            professionals is dedicated to providing the best training and
            guidance to our students, ensuring they receive the support they
            need to succeed in the stock market.
          </p>
          <h1 className="text-xl md:text-4xl font-bold text-green-600">
            Offerings
          </h1>
          <p className="text-sm md:mb-5 md:text-base font-semibold text-gray-500 dark:text-gray-300">
            We offer a comprehensive range of stock market courses in Delhi,
            covering everything related to trading. Our courses provide a smooth
            learning environment for students, with lifetime mentorship support
            and advanced programs to help them navigate current price actions
            effectively.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
