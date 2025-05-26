import Hero from "../components/sections/Hero";
import AboutSection from "../components/sections/AboutSection";
import ServicesSection from "../components/sections/ServicesSection";
import Stats from "../components/sections/Stats";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import CTASection from "../components/sections/CTASection";

export default function Home() {
  return (
    <div className="pt-16 sm:pt-20">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <Stats />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}