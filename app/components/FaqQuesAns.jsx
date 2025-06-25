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

// Enhanced FAQ questions with categories
const questions = [
  // General Questions
  {
    category: "general",
    trigger: "What makes Nifty Nitesh different from other trading institutes?",
    content:
      "We focus on advanced demand-supply analysis and institutional footprints rather than traditional support-resistance methods. Our approach helps students understand smart money concepts and trade alongside institutional players for consistent profitability.",
    additionalInfo:
      "Our students learn to identify market moves before they become obvious to retail traders.",
  },
  {
    category: "general",
    trigger: "What trading approach do you teach?",
    content:
      "We specialize in demand-supply trading methodology, focusing on institutional footprints and smart money concepts. This approach helps identify high-probability trading opportunities by understanding where big institutions are positioning themselves.",
    additionalInfo:
      "This methodology works across all timeframes and market conditions.",
  },
  {
    category: "general",
    trigger: "Do you provide live market analysis?",
    content:
      "Yes, we provide live market analysis during trading hours where we explain real-time market movements using our demand-supply concepts. Students can see the practical application of our teaching in live market conditions.",
  },
  {
    category: "general",
    trigger: "How accurate are your market predictions?",
    content:
      "Through our demand-supply analysis and institutional footprint tracking, we maintain a high success rate in identifying key market turning points. While no method is 100% accurate, our approach significantly improves probability of successful trades.",
  },

  // Course Related Questions
  {
    category: "course",
    trigger: "What courses do you offer?",
    content:
      "We offer Beginner Trading Course (2 months), Advanced Trading Mastery (3 months), and Premium Video Library with lifetime access. Each course is designed to build upon previous knowledge and includes live sessions, recorded materials, and ongoing support.",
    additionalInfo:
      "All courses include lifetime community access and regular market updates.",
  },
  {
    category: "course",
    trigger: "How long does it take to become profitable?",
    content:
      "While individual results vary, most of our dedicated students start seeing consistent results within 3-6 months of completing our courses. Success depends on your commitment to learning, practice, and following our risk management guidelines.",
    additionalInfo:
      "We provide ongoing mentorship to ensure you stay on track even after course completion.",
  },
  {
    category: "course",
    trigger: "Do you provide lifetime support?",
    content:
      "Yes, all our course students get lifetime access to our community, regular market updates, and ongoing support. We believe in building long-term relationships with our students and supporting their entire trading journey.",
  },
  {
    category: "course",
    trigger: "Can beginners join your advanced courses?",
    content:
      "We recommend starting with our Beginner Trading Course to build a strong foundation. However, if you have prior trading experience, you can join our Advanced Trading Mastery course after a brief assessment call.",
    additionalInfo:
      "Our team will guide you to the most suitable course based on your current knowledge level.",
  },
  {
    category: "course",
    trigger: "Are your courses suitable for working professionals?",
    content:
      "Absolutely! Our courses are designed for working professionals with flexible timings. We provide recorded sessions, weekend live classes, and our Premium Video Library can be accessed anytime. You can learn at your own pace.",
  },

  // Technical Support
  {
    category: "technical",
    trigger: "What platform do you use for online classes?",
    content:
      "We use professional video conferencing platforms with screen sharing capabilities for live sessions. All sessions are recorded and made available in your student portal. We also provide technical support for any platform-related issues.",
  },
  {
    category: "technical",
    trigger: "Do I need special software for trading?",
    content:
      "We recommend using popular trading platforms like Zerodha Kite, Upstox, or Angel Broking. We provide guidance on platform selection and basic setup. No expensive specialized software is required to implement our strategies.",
    additionalInfo:
      "We also teach you how to use free charting tools effectively.",
  },
  {
    category: "technical",
    trigger: "What if I face technical issues during live sessions?",
    content:
      "We have dedicated technical support available during all live sessions. You can also access recorded sessions if you miss any live class due to technical issues. Our support team responds quickly to resolve any problems.",
  },

  // Payment & Refunds
  {
    category: "payment",
    trigger: "What are your course fees and payment options?",
    content:
      "Our Beginner Course is ₹1,999/month, Advanced Course is ₹2,999/month, and Premium Video Library is ₹7,999 one-time. We accept all major payment methods including UPI, net banking, debit/credit cards, and EMI options.",
    additionalInfo:
      "We offer significant discounts on early bird bookings and bundle packages.",
  },
  {
    category: "payment",
    trigger: "Do you offer EMI options?",
    content:
      "Yes, we provide flexible EMI options for all our courses. You can pay in installments through credit cards or through our partner financing options. Contact our support team for detailed EMI plans.",
  },
  {
    category: "payment",
    trigger: "What is your refund policy?",
    content:
      "We offer a 7-day money-back guarantee if you're not satisfied with the course content. Refunds are processed within 5-7 business days after approval. Terms and conditions apply for refund eligibility.",
    additionalInfo:
      "We're confident in our course quality and want you to be completely satisfied.",
  },
  {
    category: "payment",
    trigger: "Are there any hidden charges?",
    content:
      "No, there are no hidden charges. The course fee mentioned is all-inclusive and covers live sessions, recorded materials, community access, and ongoing support. We believe in transparent pricing.",
  },

  // Additional General Questions
  {
    category: "general",
    trigger: "How does demand and supply work in the stock market?",
    content:
      "The stock market operates on basic demand-supply principles where price moves based on buying and selling pressure. When institutional demand exceeds supply, prices rise, and vice versa. We teach you to identify these zones before price movements occur.",
  },
  {
    category: "general",
    trigger: "Can you predict market movements before news events?",
    content:
      "Through our institutional footprint analysis, we can often identify potential market movements before they become public through news. Smart money moves first, and we teach you to recognize these early signals.",
    additionalInfo:
      "News usually follows price action, not the other way around.",
  },
  {
    category: "course",
    trigger: "Do you teach options trading?",
    content:
      "Yes, our Advanced Trading Mastery course includes comprehensive options trading strategies using our demand-supply methodology. We cover options buying, selling, and advanced strategies like spreads and hedging.",
  },
  {
    category: "general",
    trigger: "What is your success rate?",
    content:
      "Our students maintain a 95% satisfaction rate, and most dedicated students achieve consistent profitability within 6 months. We track student progress and provide additional support to those who need it.",
  },
];
