import SmoothScroll from "@/components/providers/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ClientRoster from "@/components/sections/ClientRoster";
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
      <Navbar />
      <main>
        <Hero />
        <ClientRoster />
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
