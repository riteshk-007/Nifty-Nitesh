import { Suspense } from "react";
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
      <Suspense
        fallback={
          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-white text-lg">Loading enrollment form...</p>
            </div>
          </div>
        }
      >
        <TradingCourseForm />
      </Suspense>
    </div>
  );
};

export default EnrollmentPage;
