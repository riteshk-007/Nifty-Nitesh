import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa6";

const Cards = () => {
  function truncateText(text, limit) {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    } else {
      return text;
    }
  }
  const text =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium modi possimus aperiam velit nulla voluptatum explicabo similique voluptatem, aut dignissimos enim incidunt itaque, quidem minus sed doloremque dolore odio nisi!";
  return (
    <div className="w-full flex flex-col items-center justify-center gap-2 md:gap-4 p-5  dark:bg-black">
      <p className="text-xs md:text-base font-semibold text-gray-500 dark:text-gray-300 text-center uppercase">
        OUR COURSES
      </p>
      <h1 className="text-base md:text-4xl font-bold text-center text-green-500 dark:text-green-400 ">
        Our Classes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
        <div className="md:max-w-96 border-2 dark:border shadow-lg rounded-lg overflow-hidden bg-gray-100 dark:bg-black flex flex-col items-start gap-3 justify-start ">
          <Image
            width={500}
            height={300}
            src="/about.jpg"
            alt="Nifty Nitesh"
            className=" border-b-2 border-green-500 dark:border-green-400"
          />
          <h2>
            <span className="text-xs md:text-xl px-3 flex-wrap font-semibold text-gray-700 dark:text-gray-300 text-center uppercase">
              Stock Market Course
            </span>
          </h2>
          <p className="text-xs md:text-base font-semibold text-gray-500 dark:text-gray-300 text-start px-3">
            {truncateText(text, 20)}
          </p>
          <span className="flex items-center justify-center space-x-1 px-3 text-yellow-500 dark:text-yellow-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </span>
          <div className="flex w-full items-center  justify-between p-3">
            <span className="text-xs flex-col flex md:text-2xl font-semibold text-black  dark:text-white text-start">
              <span className="flex items-center justify-center">
                {"₹ 1000"} <p className="text-sm">/-per month</p>
              </span>
              <span className="line-through text-sm text-gray-500 dark:text-gray-400">
                ₹ 2000
              </span>
            </span>
            <Button className="text-white font-bold shadow" variant="success">
              Enroll Now
            </Button>
          </div>
        </div>
        <div className="md:max-w-96 border-2 dark:border shadow-lg rounded-lg overflow-hidden bg-gray-100 dark:bg-black flex flex-col items-start gap-3 justify-start ">
          <Image
            width={500}
            height={300}
            src="/about.jpg"
            alt="Nifty Nitesh"
            className=" border-b-2 border-green-500 dark:border-green-400"
          />
          <h2>
            <span className="text-xs md:text-xl px-3 flex-wrap font-semibold text-gray-700 dark:text-gray-300 text-center uppercase">
              Stock Market Course
            </span>
          </h2>
          <p className="text-xs md:text-base font-semibold text-gray-500 dark:text-gray-300 text-start px-3">
            {truncateText(text, 20)}
          </p>
          <span className="flex items-center justify-center space-x-1 px-3 text-yellow-500 dark:text-yellow-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </span>
          <div className="flex w-full items-center  justify-between p-3">
            <span className="text-xs flex-col flex md:text-2xl font-semibold text-black  dark:text-white text-start">
              <span className="flex items-center justify-center">
                {"₹ 1000"} <p className="text-sm">/-per month</p>
              </span>
              <span className="line-through text-sm text-gray-500 dark:text-gray-400">
                ₹ 2000
              </span>
            </span>
            <Button className="text-white font-bold shadow" variant="success">
              Enroll Now
            </Button>
          </div>
        </div>
        <div className="md:max-w-96 border-2 dark:border shadow-lg rounded-lg overflow-hidden bg-gray-100 dark:bg-black flex flex-col items-start gap-3 justify-start ">
          <Image
            width={500}
            height={300}
            src="/about.jpg"
            alt="Nifty Nitesh"
            className=" border-b-2 border-green-500 dark:border-green-400"
          />
          <h2>
            <span className="text-xs md:text-xl px-3 flex-wrap font-semibold text-gray-700 dark:text-gray-300 text-center uppercase">
              Stock Market Course
            </span>
          </h2>
          <p className="text-xs md:text-base font-semibold text-gray-500 dark:text-gray-300 text-start px-3">
            {truncateText(text, 20)}
          </p>
          <span className="flex items-center justify-center space-x-1 px-3 text-yellow-500 dark:text-yellow-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </span>
          <div className="flex w-full items-center  justify-between p-3">
            <span className="text-xs flex-col flex md:text-2xl font-semibold text-black  dark:text-white text-start">
              <span className="flex items-center justify-center">
                {"₹ 1000"} <p className="text-sm">/-per month</p>
              </span>
              <span className="line-through text-sm text-gray-500 dark:text-gray-400">
                ₹ 2000
              </span>
            </span>
            <Button className="text-white font-bold shadow" variant="success">
              Enroll Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
