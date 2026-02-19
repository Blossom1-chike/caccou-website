import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
// import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      {/* <WhyUs /> */}
      <Contact />
      <Footer />
    </main>
  );
}
