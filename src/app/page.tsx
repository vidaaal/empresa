import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Studio from "@/components/Studio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="grain" />
      <Header />
      <main>
        <Hero />
        <Work />
        <Services />
        <Studio />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
