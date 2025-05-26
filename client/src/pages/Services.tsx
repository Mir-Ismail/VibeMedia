import { motion } from "framer-motion";
import ServicesSection from "../components/sections/ServicesSection";
import { Target, Tv, Search, DollarSign } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Target,
      title: "Amazon PPC Management",
      description: "Strategic campaign management for maximum ROI",
      features: [
        "Sponsored Products optimization",
        "Keyword research & bidding",
        "Negative keyword management",
        "Campaign structure optimization",
        "Performance monitoring & reporting",
        "A/B testing & optimization"
      ],
      color: "bg-[hsl(var(--brand-primary))]"
    },
    {
      icon: Tv,
      title: "Amazon DSP",
      description: "Programmatic advertising for brand awareness",
      features: [
        "Display & video advertising",
        "Audience targeting & retargeting",
        "Cross-platform reach",
        "Brand awareness campaigns",
        "Advanced attribution tracking",
        "Creative optimization"
      ],
      color: "bg-[hsl(var(--brand-accent))]"
    },
    {
      icon: Search,
      title: "Listing Optimization",
      description: "SEO-optimized listings that convert visitors",
      features: [
        "Keyword-rich titles & bullets",
        "Enhanced brand content (A+)",
        "Product photography guidelines",
        "Backend keyword optimization",
        "Conversion rate optimization",
        "Competitor analysis"
      ],
      color: "bg-[hsl(var(--brand-secondary))]"
    },
    {
      icon: DollarSign,
      title: "Reimbursement Recovery",
      description: "Recover lost revenue from Amazon",
      features: [
        "Lost inventory claims",
        "Damaged product recovery",
        "FBA fee discrepancies",
        "Missing shipment claims",
        "Automated monitoring system",
        "Case management support"
      ],
      color: "bg-[hsl(var(--brand-accent))]"
    }
  ];

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
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-gray-600">
            Comprehensive Amazon marketing solutions designed to maximize your ROI and accelerate growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 hover-lift"
            >
              <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mb-6`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[hsl(var(--brand-primary))] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help scale your Amazon business
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-[hsl(var(--brand-primary))] hover:bg-[hsl(var(--brand-accent))] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all"
          >
            Contact Us Today
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
