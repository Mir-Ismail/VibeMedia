import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[hsl(var(--brand-primary))]/20 to-[hsl(var(--brand-accent))]/10 rounded-full animate-float animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-[hsl(var(--brand-accent))]/15 to-[hsl(var(--brand-secondary))]/10 rounded-full animate-float animate-rotate-slow" style={{ animationDelay: "-2s" }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-[hsl(var(--brand-secondary))]/20 to-[hsl(var(--brand-primary))]/10 rounded-full animate-bounce-soft" style={{ animationDelay: "-4s" }}></div>
        <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-[hsl(var(--brand-primary))]/10 rounded-full animate-float" style={{ animationDelay: "-1s" }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-[hsl(var(--brand-accent))]/15 rounded-full animate-bounce-soft" style={{ animationDelay: "-3s" }}></div>
      </div>

      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Scale Your
            <span className="text-gradient block">Amazon Business</span>
            with Data-Driven PPC
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-600 mb-8"
          >
            We've generated over $50M in revenue for Amazon sellers through optimized PPC campaigns,
            listing enhancements, and strategic brand growth initiatives.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button className="bg-gradient-to-r from-[hsl(var(--brand-primary))] to-[hsl(var(--brand-accent))] hover:from-[hsl(var(--brand-accent))] hover:to-[hsl(var(--brand-primary))] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-2xl animate-gradient">
                  Get Started Today
                </Button>
              </motion.div>
            </Link>
            <Link href="/testimonials">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  variant="outline"
                  className="border-2 border-[hsl(var(--brand-primary))] text-[hsl(var(--brand-primary))] hover:bg-[hsl(var(--brand-primary))] hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-2xl backdrop-blur-sm"
                >
                  View Case Studies
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-16"
          >
            <p className="text-gray-500 text-sm mb-6">Trusted by 500+ Amazon sellers worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="bg-gray-200 px-6 py-3 rounded text-gray-600 font-semibold">Brand A</div>
              <div className="bg-gray-200 px-6 py-3 rounded text-gray-600 font-semibold">Brand B</div>
              <div className="bg-gray-200 px-6 py-3 rounded text-gray-600 font-semibold">Brand C</div>
              <div className="bg-gray-200 px-6 py-3 rounded text-gray-600 font-semibold">Brand D</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
