import About from "./components/About";
import BackToTopBtn from "./components/BackToTopBtn";
import Blog from "./components/Blog";
import Cta from "./components/Cta";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";
import Photography from "./components/Photography";
import Certificate from "./components/Certificate";

export default function Home() {
  return (
    <main className="max-w-[1920px] bg-white mx-auto relative overflow-hidden">
      <Hero></Hero>
      <About />
      <Certificate />
      <Blog />
      <Photography />
      <Testimonial />
      <Cta />
      <BackToTopBtn />
    </main>
  );
}
