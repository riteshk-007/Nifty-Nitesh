import Image from "next/image";
import React from "react";

const Works = () => {
  const data = [
    {
      image: "/image1.png",
      title: "Make a Decision",
      description: "It's time to become financially independent",
    },
    {
      image: "/image2.png",
      title: "Subscribe",
      description:
        "Get in depth knowledge of stock market by subscribing our Trading in the zone and Nifty Nitesh Options Courses.",
    },
    {
      image: "/image3.png",
      title: "Scheduling Process",
      description:
        "Join our live classes through google meet link, also you can go through recordings. Also we provide you the Mentor support.",
    },
    {
      image: "/image4.png",
      title: "Transformation Completed",
      description: "Novice to Professional Trader Journey start from here.",
    },
  ];
  return (
    <div className="w-full flex flex-col items-center justify-center gap-2 md:gap-4 p-2 md:p-5 bg-gray-200 dark:bg-black/30">
      <p className="text-base font-semibold text-gray-700 dark:text-gray-300 text-center uppercase">
        JOURNEY OF A STUDENT AT Nifty Nitesh
      </p>
      <h1 className="text-lg md:text-4xl font-bold">How Does it Works</h1>

      <div className=" grid grid-cols-2 lg:grid-cols-4 gap-1.5 md:my-5  md:gap-5 flex-wrap justify-center">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col  items-center justify-center  bg-white dark:bg-black p-2 md:p-5 rounded-lg shadow-md md:w-60 md:h-80 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            <Image src={item.image} width={180} height={150} alt="image" />
            <h1 className="text-base md:text-lg font-bold text-center">
              {item.title}
            </h1>
            <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
