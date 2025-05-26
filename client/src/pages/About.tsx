import { motion } from "framer-motion";
import { TrendingUp, Users, Rocket } from "lucide-react";

export default function About() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-gradient">PrimeVibeMedia</span>
          </h1>
          <p className="text-xl text-gray-600">
            We're a team of Amazon marketplace experts dedicated to helping sellers achieve unprecedented growth
            through data-driven strategies and cutting-edge optimization techniques.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-8">
              To empower Amazon sellers with the tools, strategies, and expertise needed to scale their businesses
              profitably. We believe in long-term partnerships built on trust, transparency, and measurable results.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[hsl(var(--brand-primary))]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="text-[hsl(var(--brand-primary))] w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Data-Driven Approach</h3>
                  <p className="text-gray-600">Every strategy is backed by comprehensive market research and performance analytics.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[hsl(var(--brand-accent))]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="text-[hsl(var(--brand-accent))] w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
                  <p className="text-gray-600">Certified Amazon advertising specialists with years of marketplace experience.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[hsl(var(--brand-secondary))]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Rocket className="text-[hsl(var(--brand-secondary))] w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Proven Results</h3>
                  <p className="text-gray-600">Track record of helping clients achieve 300%+ ROI improvements consistently.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Professional marketing team collaborating"
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[hsl(var(--brand-primary))]/20 rounded-full animate-float"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[hsl(var(--brand-accent))]/20 rounded-full animate-float"></div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="space-y-8">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-[hsl(var(--brand-primary))] rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                2016
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Company Founded</h3>
                <p className="text-gray-600">Started with a vision to help small Amazon sellers compete with big brands.</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-[hsl(var(--brand-accent))] rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                2018
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">100 Clients Milestone</h3>
                <p className="text-gray-600">Reached our first major milestone with proven results across various product categories.</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-[hsl(var(--brand-secondary))] rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                2020
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">$10M Revenue Generated</h3>
                <p className="text-gray-600">Helped clients generate over $10 million in additional revenue through optimized campaigns.</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-[hsl(var(--brand-primary))] rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                2024
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">500+ Happy Clients</h3>
                <p className="text-gray-600">Now serving over 500 clients with $50M+ in total revenue generated.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
