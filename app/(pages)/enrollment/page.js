import TradingCourseForm from "@/app/components/TradingCourseForm";

export const metadata = {
  title: "Enroll in Trading Course - Nifty Nitesh",
  description:
    "Join Nifty Nitesh's comprehensive trading course and master the art of trading with expert guidance and proven strategies.",
  keywords:
    "trading course, stock market, nifty trading, trading education, financial markets",
};

const EnrollmentPage = () => {
  return (
    <div>
      <TradingCourseForm />
    </div>
  );
};

export default EnrollmentPage;
