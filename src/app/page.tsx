import SmoothScroll from "@/components/providers/SmoothScroll";
import Preloader from "@/components/layout/Preloader";
import CustomCursor from "@/components/layout/CustomCursor";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Statement from "@/components/sections/Statement";
import Showreel from "@/components/sections/Showreel";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import Featured from "@/components/sections/Featured";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <Preloader />
      <CustomCursor />
      <div className="grain" />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Statement />
        <Showreel />
        <Services />
        <Work />
        <Featured />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
