import { Suspense } from "react";
import ReferralForm from "@/app/components/ReferralForm";

export const metadata = {
  title: "Refer a Friend - Nifty Nitesh Trading",
  description:
    "Share the gift of trading knowledge with your friends. Refer them to our trading courses and help them start their trading journey.",
  keywords:
    "trading referral, refer friend, trading course referral, nifty nitesh",
};

export default function ReferPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ReferralForm />
      </main>
    </Suspense>
  );
}
