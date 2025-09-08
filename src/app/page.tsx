import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedFragrances from "@/components/FeaturedFragrances";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <Navigation />
      <Hero />
      <FeaturedFragrances />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}