import { list1, list2, list3, list4 } from "../courses/ModuleList";
import ModuleBox from "../courses/Modules";
import Top from "../courses/TopSection";

export const metadata = {
  title: "Online Classes - Share Market, Finance, and Investing Classes",
  description: "Online Classes in India",
  kewords: "Online Classes, Online Classes in India",
};
const Online = () => {
  let message = "I'm interested in online classes";
  let encodedMessage = encodeURIComponent(message);

  return (
    <div className="w-full items-center justify-center md:flex-col flex-row ">
      <Top
        head={"Online Classes"}
        area={"India"}
        img={"/course/img3.png"}
        title={"Online Classes in India"}
        price={"2666"}
        discount={"6500"}
        duration={"3-4 Months"}
        time={"Monday to Friday"}
        lang={"Hindi, English"}
        message={encodedMessage}
        description={
          "This online course covers everything about analyzing stocks using charts and numbers. You'll learn how different industries relate, how to decide how much to invest, and ways to manage risks. We'll delve into topics like setting prices, why people buy and sell stocks, reading detailed charts, smart strategies for daily trading, watching live prices, spotting market trends, and more. It's tailored for those aiming to build a career in the stock market."
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

export default Online;
