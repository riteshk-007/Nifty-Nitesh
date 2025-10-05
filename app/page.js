import Link from "next/link";
import About from "./components/About";
import FaqQuesAns from "./components/FaqQuesAns";
import Hero from "./components/Hero";
import ModernStats from "./components/ModernStats";
import ServiceCards from "./components/ServiceCards";
import { Button } from "@/components/ui/button";
import FeaturesShowcase from "./components/Slider";
import RadialGallery from "./components/radial-gallery";
import PlaylistGallery from "./components/playlist-gallery";

export default function Home() {
  return (
    <div className="w-full flex flex-col bg-bg-primary min-h-screen">
      {/* Hero Section */}
      <Hero />

      <main className="">
        {" "}
        <RadialGallery />
      </main>

      <PlaylistGallery />

      {/* Modern Stats Section */}
      <ModernStats />

      {/* Service Cards Section */}
      <div id="services">
        <ServiceCards />
      </div>

      {/* Student Reviews */}
      <div className="w-full ">
        <FeaturesShowcase />
      </div>

      {/* About Section */}
      <About />

      {/* FAQ Section */}
      <div className="w-full bg-black py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Get answers to common questions about our trading courses and
              programs.
            </p>
          </div>

          <FaqQuesAns numQuestions={5} />

          <div className="text-center mt-8">
            <Link href="/faq">
              <Button variant="secondary" size="lg">
                View All FAQ →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
