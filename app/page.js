import About from "./components/About";
import Cards from "./components/Cards";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Location from "./components/Location";
import Slider from "./components/Slider";
import Works from "./components/Works";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <Works />
      <Journey />
      <Cards />
      <About />
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
