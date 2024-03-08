import About from "./components/About";
import Cards from "./components/Cards";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Slider from "./components/Slider";
import Works from "./components/Works";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <Works />
      <About />
      <Journey />
      <Cards />
      <Slider />
    </div>
  );
}
