import { motion } from "framer-motion";
import { TrendingUp, Users, Rocket } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-gradient">PrimeVibeMedia</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              With over 8 years of Amazon marketplace expertise, we've helped hundreds of brands
              scale from startup to 8-figure success stories. Our data-driven approach and
              proprietary optimization techniques deliver consistent, measurable results.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[hsl(var(--brand-primary))]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="text-[hsl(var(--brand-primary))] w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Data-Driven Strategy</h3>
                  <p className="text-gray-600">Every decision backed by comprehensive analytics and market research</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[hsl(var(--brand-accent))]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="text-[hsl(var(--brand-accent))] w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Dedicated Account Manager</h3>
                  <p className="text-gray-600">Personal support from certified Amazon advertising specialists</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[hsl(var(--brand-secondary))]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Rocket className="text-[hsl(var(--brand-secondary))] w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Proven Results</h3>
                  <p className="text-gray-600">Average 300% ROI increase within the first 90 days</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Professional marketing team collaborating"
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[hsl(var(--brand-primary))]/20 rounded-full animate-float"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[hsl(var(--brand-accent))]/20 rounded-full animate-float" style={{ animationDelay: "-3s" }}></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
