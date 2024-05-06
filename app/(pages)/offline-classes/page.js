import React from "react";
import Top from "../../courses/TopSection";
import ModuleBox from "../../courses/Modules";
import { list1, list2, list3, list4 } from "../../courses/ModuleList";

export const metadata = {
  title: "Offline Share Market & Stock Trading Classes in Delhi | Nifty Nitesh",
  description:
    "Attend offline share market, stock trading, technical analysis, and fundamental analysis classes by Nifty Nitesh in Delhi. Learn from experienced professionals in a classroom setting.",
  keywords: [
    "offline share market classes",
    "offline stock trading classes",
    "offline technical analysis classes",
    "offline fundamental analysis classes",
    "offline investing classes in delhi",
    "share market classroom training in delhi",
    "stock trading classroom courses in delhi",
    "nifty nitesh offline classes",
  ],
  openGraph: {
    title:
      "Offline Share Market & Stock Trading Classes in Delhi | Nifty Nitesh",
    description:
      "Attend offline share market, stock trading, technical analysis, and fundamental analysis classes by Nifty Nitesh in Delhi. Learn from experienced professionals in a classroom setting.",
  },
};
const Offline = () => {
  let message = "I'm interested in offline classes";
  let encodedMessage = encodeURIComponent(message);
  return (
    <div className="w-full items-center justify-center md:flex-col flex-row ">
      <Top
        head={"Offline Classes"}
        area={"Delhi"}
        img={"/course/img2.png"}
        title={"Offline Classes in Delhi"}
        price={"2999"}
        discount={"6999"}
        duration={"3-4 Months"}
        time={"Monday to Friday"}
        lang={"Hindi, English"}
        message={encodedMessage}
        description={
          "This course covers all about understanding stocks through charts and numbers. We'll look at how different industries are connected, how to decide how much to invest, and ways to stay safe with your money. You'll learn about things like how prices are set, why people buy and sell stocks, reading detailed charts, smart strategies for daily trading, watching live prices, spotting market trends, and more. It's perfect for those aiming to start a career in the stock market."
        }
      />
      <h1 className="text-3xl font-bold text-center mt-10 mb-5 dark:text-green-500 text-green-500">
        What Will You Learn{" "}
      </h1>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 w-4/5 mx-auto">
        <ModuleBox moduleNumber={1} list={list1} />
        <ModuleBox moduleNumber={2} list={list2} />
        <ModuleBox moduleNumber={3} list={list3} />
        <ModuleBox moduleNumber={4} list={list4} />
      </div>
    </div>
  );
};

export default Offline;
