import About from "./components/About";
import Hero from "./components/Hero";
import Works from "./components/Works";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <Works />
      <About />
    </div>
  );
}
