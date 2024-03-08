import Top from "../courses/TopSection";

export const metadata = {
  title: "Online Classes",
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
        time={"Moday to Friday"}
        lang={"Hindi"}
        message={encodedMessage}
        description={
          "This online course covers everything about analyzing stocks using charts and numbers. You'll learn how different industries relate, how to decide how much to invest, and ways to manage risks. We'll delve into topics like setting prices, why people buy and sell stocks, reading detailed charts, smart strategies for daily trading, watching live prices, spotting market trends, and more. It's tailored for those aiming to build a career in the stock market."
        }
      />
    </div>
  );
};

export default Online;
