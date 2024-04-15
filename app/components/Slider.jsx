import { LuCandlestickChart } from "react-icons/lu";
import { IoBarChartOutline } from "react-icons/io5";
import { FaUserFriends, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
const Slider = () => {
  const features = [
    {
      icon: <IoBarChartOutline fontSize={23} />,
      title: "Analytics",
    },
    {
      icon: <FaUserFriends fontSize={23} />,
      title: "Life Time Mentorship",
    },
    {
      icon: <LuCandlestickChart fontSize={23} />,
      title: "Free access Platform for trade ",
    },
    {
      icon: <FaWhatsapp fontSize={23} />,
      title: "Free access to our Swing Trade WhatsApp channel",
    },
  ];
  return (
    <section className="py-14 bg-gray-100 dark:bg-black">
      <div className=" mx-auto px-4 text-gray-600 gap-16 justify-between md:px-8 lg:flex">
        <div>
          <div className="max-w-xl space-y-3">
            <p className="text-green-500 dark:text-green-400 text-3xl font-semibold sm:text-4xl">
              Smart Money Concept
            </p>
            <p className="text-gray-800 dark:text-gray-200">
              We specialize in working with Demand Supply Stock, Forex, Crypto,
              and any other chart-intensive sectors worldwide. Our expertise
              allows us to navigate these complex landscapes effectively.
            </p>
          </div>
          <div className="mt-12 w-full md:w-1/2 ">
            <ul className="space-y-8">
              {features.map((item, idx) => (
                <li key={idx} className="flex gap-x-4">
                  <div className="flex-none w-12 h-12 bg-indigo-50 dark:bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg text-gray-800 dark:text-gray-200 font-semibold">
                      {item.title}
                    </h4>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 lg:mt-0 w-full lg:w-1/2 flex items-center justify-center">
          <Image
            width={1920}
            height={1080}
            src="/bank.png"
            className="w-full shadow-lg rounded-lg border"
            alt="brow"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Slider;
