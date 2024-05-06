import FaqQuesAns from "../../components/FaqQuesAns";

export const metadata = {
  title: "Share Market & Stock Trading Classes FAQ | Nifty Nitesh",
  description:
    "Get answers to frequently asked questions about Nifty Nitesh's share market, stock trading, technical analysis, and fundamental analysis classes in Delhi.",
  keywords: [
    "share market classes faq",
    "stock trading classes faq",
    "technical analysis classes faq",
    "fundamental analysis classes faq",
    "investing classes faq",
    "share market education faq",
    "stock market training faq",
    "nifty nitesh faq",
  ],
  openGraph: {
    title: "Share Market & Stock Trading Classes FAQ | Nifty Nitesh",
    description:
      "Get answers to frequently asked questions about Nifty Nitesh's share market, stock trading, technical analysis, and fundamental analysis classes in Delhi.",
  },
};
const FAQ = () => {
  return (
    <div className="w-full  dark:bg-gradient-to-l dark:from-black dark:via-slate-800 dark:to-slate-900">
      <FaqQuesAns />
    </div>
  );
};

export default FAQ;
