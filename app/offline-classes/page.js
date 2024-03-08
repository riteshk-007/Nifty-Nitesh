import React from "react";
import Top from "../courses/TopSection";

export const metadata = {
  title: "Offline Classes",
  description: "Offline Classes in India",
  kewords: "Offline Classes, Offline Classes in India",
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
        title={"Offline Classes in India"}
        price={"2999"}
        discount={"6999"}
        duration={"3-4 Months"}
        time={"Moday to Friday"}
        lang={"Hindi"}
        message={encodedMessage}
        description={
          "This course covers all about understanding stocks through charts and numbers. We'll look at how different industries are connected, how to decide how much to invest, and ways to stay safe with your money. You'll learn about things like how prices are set, why people buy and sell stocks, reading detailed charts, smart strategies for daily trading, watching live prices, spotting market trends, and more. It's perfect for those aiming to start a career in the stock market."
        }
      />
    </div>
  );
};

export default Offline;
