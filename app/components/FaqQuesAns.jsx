"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HiSparkles,
  HiMagnifyingGlass,
  HiBookOpen,
  HiAcademicCap,
  HiCurrencyDollar,
  HiWrench,
  HiLifebuoy,
} from "react-icons/hi2";
import { FaQuestionCircle, FaFilter, FaTimes } from "react-icons/fa";

const FaqQuesAns = ({ numQuestions }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Questions", icon: HiBookOpen },
    { id: "general", name: "General Questions", icon: HiLifebuoy },
    { id: "course", name: "Course Related", icon: HiAcademicCap },
    { id: "technical", name: "Technical Support", icon: HiWrench },
    { id: "payment", name: "Payment & Refunds", icon: HiCurrencyDollar },
  ];

  // Filter questions based on search and category
  const filteredQuestions = questions
    .filter((question) => {
      const matchesSearch =
        question.trigger.toLowerCase().includes(searchTerm.toLowerCase()) ||
        question.content.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || question.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .slice(0, numQuestions || questions.length);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Search and Filter Section */}
      <div className="mb-8">
        {/* Search Bar */}
        <div className="relative mb-6">
          <div className="relative">
            <HiMagnifyingGlass className="absolute left-4 top-1/2 transform -translate-y-1/2 text-accent w-5 h-5" />
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input pl-12 pr-12 py-4 text-lg"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-text-muted hover:text-accent transition-colors"
              >
                <FaTimes className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
                selectedCategory === category.id
                  ? "bg-accent text-primary-dark"
                  : "bg-bg-card border border-border-secondary text-text-secondary hover:border-accent hover:text-accent"
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{category.name}</span>
            </button>
          ))}

          {(searchTerm || selectedCategory !== "all") && (
            <button
              onClick={clearFilters}
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 hover:bg-red-500/30 transition-all"
            >
              <FaTimes className="w-3 h-3" />
              <span className="text-sm font-medium">Clear Filters</span>
            </button>
          )}
        </div>

        {/* Results Count */}
        <div className="text-text-muted text-sm">
          {filteredQuestions.length === 0
            ? "No questions found matching your criteria"
            : `Showing ${filteredQuestions.length} question${
                filteredQuestions.length !== 1 ? "s" : ""
              }`}
        </div>
      </div>

      {/* FAQ Accordion */}
      {filteredQuestions.length > 0 ? (
        <Accordion type="single" collapsible className="space-y-4 mb-12">
          {filteredQuestions.map((question, index) => (
            <AccordionItem
              value={`item-${index + 1}`}
              key={`item-${index + 1}`}
              className="faq-accordion"
            >
              <AccordionTrigger className="text-left hover:no-underline group p-6">
                <div className="flex items-start space-x-4 w-full">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent/20 rounded-full group-hover:bg-accent/30 transition-colors flex items-center justify-center">
                    <FaQuestionCircle className="text-accent w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-text-primary group-hover:text-accent transition-colors font-semibold text-lg text-left">
                      {question.trigger}
                    </h3>
                    <div className="flex items-center space-x-2 mt-2">
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${getCategoryBadgeStyle(
                          question.category
                        )}`}
                      >
                        {getCategoryName(question.category)}
                      </span>
                    </div>
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent className="px-6 pb-6">
                <div className="pl-12">
                  <div className="p-6 bg-bg-card/50 rounded-xl border border-accent/10">
                    <p className="text-text-secondary leading-relaxed text-lg">
                      {question.content}
                    </p>
                    {question.additionalInfo && (
                      <div className="mt-4 p-4 bg-accent/10 rounded-lg">
                        <p className="text-accent text-sm font-medium">
                          💡 Pro Tip: {question.additionalInfo}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <div className="glass-card p-12 text-center mb-12">
          <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <HiMagnifyingGlass className="w-8 h-8 text-accent" />
          </div>
          <h3 className="text-xl font-bold text-text-primary mb-2">
            No Results Found
          </h3>
          <p className="text-text-secondary mb-6">
            Try adjusting your search or filter criteria, or contact us directly
            for personalized help.
          </p>
          <button onClick={clearFilters} className="btn-primary">
            Clear All Filters
          </button>
        </div>
      )}

      {/* FAQ Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="glass-card p-6 text-center group hover:border-accent/50 transition-all">
          <div className="w-16 h-16 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center group-hover:bg-accent/30 transition-colors">
            <HiSparkles className="text-accent w-8 h-8" />
          </div>
          <div className="text-3xl font-bold text-accent mb-2 group-hover:glow-text transition-all">
            500+
          </div>
          <div className="text-text-secondary font-medium">
            Questions Answered
          </div>
        </div>

        <div className="glass-card p-6 text-center group hover:border-accent/50 transition-all">
          <div className="w-16 h-16 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center group-hover:bg-accent/30 transition-colors">
            <FaQuestionCircle className="text-accent w-8 h-8" />
          </div>
          <div className="text-3xl font-bold text-accent mb-2 group-hover:glow-text transition-all">
            24/7
          </div>
          <div className="text-text-secondary font-medium">
            Support Available
          </div>
        </div>

        <div className="glass-card p-6 text-center group hover:border-accent/50 transition-all">
          <div className="w-16 h-16 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center group-hover:bg-accent/30 transition-colors">
            <div className="w-8 h-8 bg-accent rounded-full animate-pulse-glow"></div>
          </div>
          <div className="text-3xl font-bold text-accent mb-2 group-hover:glow-text transition-all">
            95%
          </div>
          <div className="text-text-secondary font-medium">
            Satisfaction Rate
          </div>
        </div>
      </div>

      {/* Contact Support Section */}
      <div className="glass-card p-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-text-primary mb-4">
            Still Have <span className="gradient-text">Questions?</span>
          </h3>
          <p className="text-text-secondary mb-6 text-lg">
            Our expert support team is ready to help you with personalized
            answers and guidance for your trading education journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:niftynitesh000@gmail.com?subject=Question%20about%20courses"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-6 py-3"
            >
              Contact us on WhatsApp
            </a>
            <a href="/contact" className="btn-secondary px-6 py-3">
              Send us a Message
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper functions
const getCategoryName = (category) => {
  const categoryMap = {
    general: "General",
    course: "Course",
    technical: "Technical",
    payment: "Payment",
  };
  return categoryMap[category] || "General";
};

const getCategoryBadgeStyle = (category) => {
  const styleMap = {
    general: "bg-blue-500/20 text-blue-400",
    course: "bg-green-500/20 text-green-400",
    technical: "bg-purple-500/20 text-purple-400",
    payment: "bg-yellow-500/20 text-yellow-400",
  };
  return styleMap[category] || "bg-accent/20 text-accent";
};

export default FaqQuesAns;

const questions = [
  // 🔹 General Questions
  {
    category: "general",
    trigger:
      "How is Nifty Nitesh different from other trading courses in India?",
    content:
      "We’re a trader-led education platform that focuses on demand-supply and institutional trading — not indicators or retail noise. Our teaching is based on how smart money moves the market, using clear logic and real price action concepts.",
    additionalInfo:
      "Built by a full-time trader, not a marketing company or generic institute.",
  },
  {
    category: "general",
    trigger: "What is the main trading strategy you teach?",
    content:
      "We specialize in institutional demand-supply trading. This means identifying where big players (smart money) are active, and entering trades based on risk-reward, liquidity zones, and market structure — not news or lagging indicators.",
    additionalInfo:
      "Works across stocks, indices, forex, and crypto — on all timeframes.",
  },
  {
    category: "general",
    trigger: "Do you provide live market analysis sessions?",
    content:
      "Yes. We conduct regular live sessions where we break down real-time price action using demand-supply and institutional concepts. This helps you see how theory applies in the live market.",
  },
  {
    category: "general",
    trigger: "How accurate is the method you teach?",
    content:
      "While no trading method is 100% accurate, our approach focuses on improving your decision-making and trade planning. By understanding institutional footprints, most students see improvement in their win-rate and confidence over time.",
    additionalInfo:
      "Our focus is on consistent setups, risk control, and reading market context.",
  },
  {
    category: "general",
    trigger: "Are you SEBI registered?",
    content:
      "We are not SEBI-registered because we do not offer investment advice or portfolio management. We are strictly an educational platform. The trainer is NISM certified, and our content is built purely for self-learning and concept-building.",
  },

  // 🔸 Course Related Questions
  {
    category: "course",
    trigger: "What trading courses are available on this platform?",
    content:
      "We offer structured trading education for different levels — from beginner to advanced. All programs include demand-supply concepts, price action, smart money logic, and live market examples. You'll also get access to a private trading community.",
    additionalInfo:
      "Our goal is to make you an independent trader — not signal-dependent.",
  },
  {
    category: "course",
    trigger: "How long does it take to become consistent in trading?",
    content:
      "Most serious learners start building consistency within 3 to 6 months, depending on their practice, learning speed, and risk management. We don’t promise results, but we do promise real guidance.",
  },
  {
    category: "course",
    trigger: "Do I get lifetime access to course materials?",
    content:
      "Yes. Once you’re enrolled, you get lifetime access to all your course content, market updates, and the learning community. You can revisit any topic at any time.",
  },
  {
    category: "course",
    trigger: "Is this suitable for complete beginners?",
    content:
      "Yes. Our foundation-level course is built specifically for beginners who want to understand how markets really work — from the ground up. No prior experience is needed.",
    additionalInfo:
      "If you're already experienced, you can directly join the advanced program after a quick assessment.",
  },
  {
    category: "course",
    trigger: "Can I learn if I’m working a full-time job?",
    content:
      "Absolutely. Sessions are scheduled in the evening or weekends, and recordings are always available. Our course structure is designed for working professionals to learn at their own pace.",
  },
  {
    category: "course",
    trigger: "Do you cover options trading as well?",
    content:
      "Yes. Our advanced course includes options buying, selling, spreads, and risk-managed strategies — all tied back to demand-supply and market structure. You’ll learn to trade options with logic, not just greeks.",
  },

  // ⚙️ Technical Support
  {
    category: "technical",
    trigger: "What platform do you use for online classes?",
    content:
      "We use Zoom or Google Meet for live sessions. All sessions are recorded and uploaded to your student portal. You can access them anytime from any device.",
  },
  {
    category: "technical",
    trigger: "Do I need any paid tools to learn your strategies?",
    content:
      "No paid software is required. We teach using free tools like TradingView for charting and popular brokers like Zerodha or Upstox. Everything is designed to be accessible for Indian traders.",
    additionalInfo:
      "We'll guide you step-by-step on how to use these platforms effectively.",
  },
  {
    category: "technical",
    trigger: "What if I face technical issues during class?",
    content:
      "Our support team is always available during live sessions. And in case of any issue, you’ll get the full class recording. You can also ask your questions in the community afterward.",
  },

  // 💬 1-on-1 Sessions
  {
    category: "general",
    trigger: "Are 1-to-1 mentorship sessions available?",
    content:
      "Yes. One-on-one sessions are **completely free** for students enrolled in our full course. If you're not enrolled and want a personal session, it’s available with a separate booking fee.",
    additionalInfo:
      "We prioritize students inside the course, but external 1-on-1 sessions are also available on request.",
  },
];
