import { motion } from "framer-motion";
import { Award, Users, Target, TrendingUp } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We deliver exceptional results through proven Amazon marketing strategies and cutting-edge optimization techniques."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Your success is our success. We work as an extension of your team to achieve your business goals."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every strategy is data-backed and focused on measurable outcomes that drive real business growth."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We stay ahead of Amazon's evolving landscape to keep your brand competitive and profitable."
    }
  ];

  return (
    <div className="pt-16 sm:pt-20 min-h-screen">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-gradient">PrimeVibeMedia</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We're a team of Amazon marketing specialists dedicated to helping brands 
            achieve explosive growth on the world's largest marketplace through 
            data-driven strategies and personalized service.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2018 by a team of former Amazon employees and digital marketing veterans, 
              PrimeVibeMedia was born from a simple observation: most brands struggle to navigate 
              Amazon's complex advertising ecosystem effectively.
            </p>
            <p className="text-gray-600 mb-4">
              Having worked inside Amazon's advertising division, we understood the platform's 
              intricacies better than most. We saw an opportunity to bridge the gap between 
              Amazon's powerful tools and the brands that needed expert guidance to use them effectively.
            </p>
            <p className="text-gray-600">
              Today, we've helped over 500 brands scale their Amazon presence, generating 
              millions in additional revenue through optimized PPC campaigns, enhanced listings, 
              and strategic brand positioning.
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-gradient-to-br from-[hsl(var(--brand-primary))] to-[hsl(var(--brand-accent))] rounded-xl p-8 text-white"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-sm opacity-90">Brands Helped</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">$100M+</div>
                <div className="text-sm opacity-90">Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">250%</div>
                <div className="text-sm opacity-90">Avg ROI Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">5+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="w-16 h-16 bg-[hsl(var(--brand-primary))]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[hsl(var(--brand-primary))] group-hover:text-white transition-all"
                >
                  <value.icon className="w-8 h-8" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[hsl(var(--brand-primary))] transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gray-50 rounded-xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            To empower brands of all sizes to achieve sustainable growth on Amazon by providing 
            expert guidance, innovative strategies, and personalized service that delivers 
            measurable results and long-term success.
          </p>
        </motion.div>
      </div>
    </div>
  );
}