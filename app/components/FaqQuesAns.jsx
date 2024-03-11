import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqQuesAns = ({ numQuestions }) => {
  return (
    <div className="w-full md:w-4/5 lg:w-3/4 flex items-center justify-center mx-auto flex-col p-5 md:p-10 ">
      <h1 className="text-3xl font-bold text-center mb-10">
        Frequently Asked Questions (FAQ)
      </h1>
      <Accordion type="single" collapsible className="w-full">
        {questions?.slice(0, numQuestions).map((question, index) => (
          <AccordionItem value={`item-${index + 1}`} key={`item-${index + 1}`}>
            <AccordionTrigger>{question.trigger}</AccordionTrigger>
            <AccordionContent>{question.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FaqQuesAns;
const questions = [
  {
    trigger: "What do we get done?",
    content: "We provide demand-supply trading.",
  },
  {
    trigger: "Are we different from everyone else?",
    content: "We use institutional footprints, i.e., demand-supply trading.",
  },
  {
    trigger: "Do we get support for resistance?",
    content:
      "We do demand supply, and we are two steps ahead of support resistance traders.",
  },
  {
    trigger:
      "We will know before coming in the news when the stock will go up or down.",
    content:
      "We would have known before coming in the news which stock would go up or down.",
  },
  {
    trigger: "Do we know where the price will turn?",
    content: "Yes, we will know when and how the price will go up and down.",
  },
  {
    trigger: "Are we ahead of other traders?",
    content:
      "Yes, we are more advanced than other traders. We look at the price and logically trade above it.",
  },
  {
    trigger:
      "What is the relationship between demand and supply in the stock market? ",
    content:
      "The stock market operates on the basic principles of demand and supply. When demand for a particular stock exceeds its supply, the price tends to go up. Conversely, when supply exceeds demand, the price tends to decrease.",
  },
  {
    trigger:
      "How does an increase in demand affect stock prices on the market?",
    content:
      "An increase in demand for a stock typically leads to an increase in its price. This is because as more investors seek to buy the stock, there are fewer sellers willing to sell at the current price, causing the price to rise.",
  },
  {
    trigger:
      "What factors can influence demand for stocks in the stock market?",
    content:
      "Several factors can influence demand for stocks, including economic indicators, company performance, market sentiment, interest rates, and geopolitical events.",
  },
  {
    trigger:
      "How does the concept of supply impact stock prices on the market?",
    content:
      "The supply of a stock refers to the number of shares available for sale. When supply exceeds demand, the price of the stock may decrease as sellers compete to attract buyers.",
  },
  {
    trigger:
      "What role does investor psychology play in determining demand and supply in the stock market?",
    content:
      "Investor psychology can significantly impact demand and supply in the stock market. Sentiment, emotions, and perceptions of investors can drive buying or selling decisions, influencing the overall market dynamics.",
  },
  {
    trigger:
      "How do changes in demand and supply impact the overall market equilibrium?",
    content:
      "Changes in both demand and supply can lead to fluctuations in stock prices until a new equilibrium is reached. This equilibrium point is where the quantity of shares demanded equals the quantity supplied.",
  },
  {
    trigger:
      "What is the significance of understanding demand and supply dynamics for stock market participants?",
    content:
      "Understanding demand and supply dynamics is crucial for investors, traders, and other market participants to make informed decisions about buying or selling stocks. It helps in predicting potential price movements and maximizing returns.",
  },
  {
    trigger:
      "Can demand and supply patterns in the stock market be predicted accurately?",
    content:
      "While demand and supply patterns can be analyzed using various tools and techniques, accurately predicting them is challenging due to the unpredictable nature of market forces. It requires a combination of fundamental and technical analysis.",
  },
  {
    trigger:
      "How can the principles of demand and supply be applied to develop a successful investment strategy in the stock market?",
    content:
      "Developing a successful investment strategy involves analyzing the demand and supply dynamics of stocks, identifying trends, understanding market factors, and diversifying your portfolio to manage risks effectively.",
  },
  {
    trigger:
      "Does the stock market demand supply concept apply universally to all types of stocks and trading scenarios?",
    content:
      "Yes, the concept of demand and supply applies universally to all types of stocks and trading scenarios, regardless of the market conditions. Understanding these principles is essential for navigating the complexities of the stock market effectively.",
  },
];
