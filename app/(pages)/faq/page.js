import FaqQuesAns from "../../components/FaqQuesAns";

export const metadata = {
  title: "FAQ - Share Market, Finance, and Investing Classes",
  description: "Frequently asked questions",
};
const FAQ = () => {
  return (
    <div className="w-full  dark:bg-gradient-to-l dark:from-black dark:via-slate-800 dark:to-slate-900">
      <FaqQuesAns />
    </div>
  );
};

export default FAQ;
