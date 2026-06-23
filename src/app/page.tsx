import SmoothScroll from "@/components/providers/SmoothScroll";
import CustomCursor from "@/components/layout/CustomCursor";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ClientRoster from "@/components/sections/ClientRoster";
import Showreel from "@/components/sections/Showreel";
import Statement from "@/components/sections/Statement";
import Work from "@/components/sections/Work";
import Services from "@/components/sections/Services";
import Featured from "@/components/sections/Featured";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <div className="grain" />
      <Navbar />
      <main>
        <Hero />
        <ClientRoster />
        <Showreel />
        <Statement />
        <Work />
        <Services />
        <Featured />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
