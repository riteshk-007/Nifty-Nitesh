import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
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
  return (
    <div className="w-full flex flex-col items-center justify-center gap-2 md:gap-4 p-5  dark:bg-black">
      <p className="text-sm md:text-xl font-semibold text-gray-500 dark:text-gray-300 text-center uppercase">
        Embark on a transformative learning journey with our comprehensive
        course.
      </p>
      <h1 className="text-lg md:text-4xl font-bold text-center text-green-500 dark:text-green-400 ">
        Our Classes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
        {Card?.map((item, index) => (
          <div
            key={item?.id}
            className="md:max-w-96 border-2 dark:border shadow-lg rounded-lg overflow-hidden bg-gray-100 dark:bg-black flex flex-col items-start gap-2 md:gap-3 justify-start "
          >
            <Image
              width={500}
              height={300}
              src={item?.image}
              alt="Nifty Nitesh"
              className=" border-b-2 border-green-500 dark:border-green-400"
              loading="lazy"
            />
            <h2>
              <span className="text-base md:text-lg px-2 flex  md:px-3 font-bold text-gray-900 dark:text-gray-200 text-start uppercase">
                {item?.title}
              </span>
            </h2>
            <p className="text-sm font-semibold text-gray-500 dark:text-gray-300 text-start px-3">
              {truncateText(item?.text, 20)}
            </p>
            <span className="flex items-center justify-center space-x-1 px-3 text-yellow-500 dark:text-yellow-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
            <div className="flex w-full items-center  justify-between p-3">
              <span className="text-xl flex-col flex md:text-2xl font-semibold text-black  dark:text-white text-start">
                <span className="flex items-center justify-center">
                  {"₹"}
                  {item?.price} <p className="text-sm">/-{item?.paymentType}</p>
                </span>
                <span className="line-through text-base text-gray-500 dark:text-gray-400">
                  ₹ {item?.discount}
                </span>
              </span>
              <Button
                className="text-white font-bold shadow"
                variant="success"
                disabled={item?.btnText === "Coming Soon"}
              >
                {index === 2 ? (
                  <a href={item.link} target="_blank" rel="noreferrer">
                    {item?.btnText}
                  </a>
                ) : (
                  <Link href={item.link}>{item?.btnText}</Link>
                )}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
let message = "I am interested in the recording classes videos";
message = encodeURIComponent(message);
export const Card = [
  {
    id: 1,
    title: "Offline Classes in Delhi",
    image: "/course/img2.png",
    text: "This course covers all about understanding stocks through charts and numbers. We'll look at how different industries are connected, how to decide how much to invest, and ways to stay safe with your money. You'll learn about things like how prices are set, why people buy and sell stocks, reading detailed charts, smart strategies for daily trading, watching live prices, spotting market trends, and more. It's perfect for those aiming to start a career in the stock market.",
    price: 2999,
    discount: 6999,
    paymentType: "monthly",
    link: "/offline-classes",
    btnText: "Enroll Now",
  },
  {
    id: 2,
    title: "Online Classes in India",
    image: "/course/img3.png",
    text: "This online course covers everything about analyzing stocks using charts and numbers. You'll learn how different industries relate, how to decide how much to invest, and ways to manage risks. We'll delve into topics like setting prices, why people buy and sell stocks, reading detailed charts, smart strategies for daily trading, watching live prices, spotting market trends, and more. It's tailored for those aiming to build a career in the stock market.",
    price: 2666,
    discount: 6500,
    paymentType: "monthly",
    link: "/online-classes",
    btnText: "Enroll Now",
  },
  {
    id: 3,
    title: "Recording Technical Analysis Videos",
    image: "/course/img1.png",
    text: "This course covers technical analysis, understanding how different industries affect each other, deciding how much to invest, managing risks, pricing trends, reading charts, day trading strategies, live price reading, identifying gaps, using indicators, avoiding market traps, advanced stock scanning, trading psychology, analyzing trends, and more. Perfect for anyone looking to build a career in the stock market.",
    price: 5999,
    discount: 8999,
    paymentType: "one time",
    link: `https://wa.me/+917827433875?text=${message}`,
    btnText: "Enroll Now",
  },
];
