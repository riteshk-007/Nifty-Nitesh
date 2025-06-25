import FaqQuesAns from "../../components/FaqQuesAns";

export const metadata = {
  title: "Frequently Asked Questions - Trading Courses | Nifty Nitesh",
  description:
    "Get answers to frequently asked questions about Nifty Nitesh's online trading courses, technical analysis training, course fees, support, and trading strategies. Find everything you need to know.",
  keywords: [
    "trading courses faq",
    "online trading education questions",
    "technical analysis course questions",
    "trading course fees",
    "trading course support",
    "stock market course faq",
    "trading strategies questions",
    "nifty nitesh faq",
    "trading institute questions",
    "course enrollment questions",
  ],
  openGraph: {
    title: "Frequently Asked Questions - Trading Courses | Nifty Nitesh",
    description:
      "Get answers to frequently asked questions about Nifty Nitesh's online trading courses, technical analysis training, and support. Find everything you need to know.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Nifty Nitesh FAQ",
      },
    ],
  },
};

const FAQ = () => {
  return (
    <div className="min-h-screen bg-gradient-primary">
      {/* Hero Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-accent font-semibold mb-4 uppercase tracking-wider text-sm">
              FREQUENTLY ASKED QUESTIONS
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Get <span className="gradient-text">Answers</span> to Your
              Questions
            </h1>
            <p className="text-text-secondary text-xl max-w-3xl mx-auto text-balance">
              Find comprehensive answers to common questions about our trading
              courses, support, and everything you need to start your trading
              education journey.
            </p>
          </div>

          {/* FAQ Component */}
          <div className="animate-slide-up">
            <FaqQuesAns />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
