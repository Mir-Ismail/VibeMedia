import Hero from "../components/sections/Hero";
import Stats from "../components/sections/Stats";
import ServicesSection from "../components/sections/ServicesSection";
import AboutSection from "../components/sections/AboutSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import CTASection from "../components/sections/CTASection";

export default function Home() {
  return (
    <div className="pt-20">
      <Hero />
      <Stats />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
