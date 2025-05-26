import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-20 bg-[hsl(var(--brand-primary))] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
          alt="Business analytics and charts background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Scale Your Amazon Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join 500+ successful sellers who trust PrimeVibeMedia to maximize their Amazon potential.
            Get your free audit and discover opportunities you're missing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact">
              <Button className="bg-white text-[hsl(var(--brand-primary))] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105">
                Get Your Free Audit
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[hsl(var(--brand-primary))] px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 bg-[#161d2d]"
              >
                Schedule a Call
              </Button>
            </Link>
          </div>

          <div className="text-sm opacity-80">
            <p>✓ No commitment required  ✓ 30-minute comprehensive analysis  ✓ Actionable recommendations</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
