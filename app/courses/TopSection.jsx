import Image from "next/image";
import React from "react";
import { MdOutlineTimer } from "react-icons/md";
import { RxLapTimer } from "react-icons/rx";
import { IoLanguage } from "react-icons/io5";
import { Button } from "@/components/ui/button";

const Top = ({
  head,
  img,
  title,
  price,
  discount,
  duration,
  time,
  lang,
  message,
  description,
}) => {
  return (
    <>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl flex items-center justify-center gap-2 font-bold text-black dark:text-white mt-5 mb-3 sm:mt-10 sm:mb-5 md:mt-20 md:mb-10 ml-3 sm:ml-0 text-center">
        <p className="text-green-500 dark:text-green-400">{head}</p> in India
      </h1>
      <p className="text-xs md:text-sm lg:text-lg  text-gray-500 dark:text-gray-300 text-start px-3">
        {description}
      </p>

      <div className="flex items-center justify-center flex-col md:flex-row p-2">
        <div className="w-full md:w-3/4">
          <Image
            src={img}
            width={1920}
            height={500}
            alt={head}
            className="rounded-lg"
          />
        </div>
        <div className="w-full p-1 md:w-1/4 flex items-center justify-center flex-col shadow-md mt-5 rounded-md border m-1">
          <span className="md:text-2xl text-lg font-bold text-black dark:text-white text-center">
            {title}
          </span>
          <hr className="w-full bg-gray-700 dark:bg-gray-300" />
          <span className="w-full flex items-center justify-between px-1 my-2">
            <h1 className="text-2xl font-bold text-green-500 dark:text-gr gap-1 een-400 flex items-center justify-center">
              ₹ {price}{" "}
              <p className="text-xs text-black dark:text-white">/month</p>
            </h1>
            <h1>
              <p className="text-sm line-through text-gray-500 dark:text-gray-400">
                ₹ {discount}
              </p>
            </h1>
          </span>
          <span className="w-full flex items-center justify-between px-1 my-2">
            <h1 className="text-2xl font-bold text-green-500 dark:text-green-400 flex gap-1  items-center justify-center">
              <MdOutlineTimer />{" "}
              <p className="text-xs text-black dark:text-white">Duration</p>
            </h1>
            <h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {duration}
              </p>
            </h1>
          </span>
          <span className="w-full flex items-center justify-between px-1 my-2">
            <h1 className="text-2xl font-bold text-green-500 dark:text-green-400  gap-1 flex items-center justify-center">
              <RxLapTimer />{" "}
              <p className="text-xs text-black dark:text-white">Timing</p>
            </h1>
            <h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">{time}</p>
            </h1>
          </span>
          <span className="w-full flex items-center justify-between px-1 my-2">
            <h1 className="text-2xl font-bold text-green-500 dark:text-green-400  gap-1 flex items-center justify-center">
              <IoLanguage />
              <p className="text-xs text-black dark:text-white">Language</p>
            </h1>
            <h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">{lang}</p>
            </h1>
          </span>
          <span className="w-full flex items-center justify-center px-1 my-2">
            <hr className="w-full bg-gray-700 dark:bg-gray-300" />
          </span>
          <span className="w-full flex items-center justify-center px-1 my-2">
            <Button variant="success" className="text-white font-bold shadow">
              <a
                href={`https://wa.me/+917827433875?text=${message}`}
                target="_blank"
                className="text-white font-bold shadow"
                rel="noreferrer"
              >
                Join Now
              </a>
            </Button>
          </span>
        </div>
      </div>
    </>
  );
};

export default Top;
