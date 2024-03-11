import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata = {
  title: "FAQ - Share Market, Finance, and Investing Classes",
  description: "Frequently asked questions",
};
const FAQ = () => {
  return (
    <div className="w-full  dark:bg-gradient-to-l dark:from-black dark:via-slate-800 dark:to-slate-900">
      <div className="w-full md:w-4/5 lg:w-3/4 flex items-center justify-center mx-auto flex-col p-5 md:p-10 ">
        <h1 className="text-3xl font-bold text-center mb-10">
          Frequently Asked Questions (FAQ)
        </h1>
        <Accordion type="single" collapsible className="w-full">
          {questions?.map((question, index) => (
            <AccordionItem
              value={`item-${index + 1}`}
              key={`item-${index + 1}`}
            >
              <AccordionTrigger>{question.trigger}</AccordionTrigger>
              <AccordionContent>{question.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
const questions = [
  {
    trigger: "what do we get done?",
    content: "We provide Damad Supply Trading",
  },
  {
    trigger: "Are we different from everyone else?",
    content:
      " We are different from other traders because we follow smart money concept and institutional footprints.",
  },
  {
    trigger: "Do we get support resistance?",
    content:
      "No, we do demand supply trading and we stay 2 steps ahead of other traders.",
  },
  {
    trigger:
      "We will know before coming in the news when, which stock will go up or down?",
    content:
      " Yes, we will know before the news comes what will happen in that stock and what will the price do.",
  },
  {
    trigger: "Do we know where the price will turn? ",
    content: "Yes, we will know when and why the price will go up and down.",
  },
  {
    trigger: " Will we be more advanced than other traders?",
    content:
      "Yes, we are advance than other traders,We look at the price and logically trade above it.",
  },
];
