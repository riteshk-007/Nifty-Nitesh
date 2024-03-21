import Link from "next/link";
import About from "./components/About";
import Cards from "./components/Cards";
import FaqQuesAns from "./components/FaqQuesAns";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Location from "./components/Location";
import Slider from "./components/Slider";
import Works from "./components/Works";
import { HeroParallaxDemo } from "./components/Parallax";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <Works />
      <Suspense>
        <HeroParallaxDemo />
      </Suspense>
      <Journey />
      <Cards />
      <About />
      <FaqQuesAns numQuestions={5} />
      <Link
        href="/faq"
        className="text-center text-green-500 font-bold text-lg mb-5 md:text-xl"
      >
        View All FAQ
      </Link>
      <Slider />
      <div className="w-full items-center justify-center flex-col p-5">
        <h1 className="text-2xl lg:text-4xl font-bold text-center text-gray-800 dark:text-gray-300 mb-5">
          Our Location
        </h1>
        <Location />
      </div>
    </div>
  );
}
