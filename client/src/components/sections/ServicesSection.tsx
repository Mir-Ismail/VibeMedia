import { motion } from "framer-motion";
import ServiceCard from "../ui/ServiceCard";
import { Target, Tv, Search, DollarSign } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Target,
      title: "Amazon PPC",
      description: "Strategic campaign management for maximum ROI",
      details: [
        "Sponsored Products optimization",
        "Keyword research & bidding",
        "Negative keyword management",
        "Campaign structure optimization",
        "Performance monitoring & reporting",
      ],
      color: "bg-[hsl(var(--brand-primary))]",
    },
    {
      icon: Tv,
      title: "Amazon DSP",
      description: "Programmatic advertising for brand awareness",
      details: [
        "Display & video advertising",
        "Audience targeting & retargeting",
        "Cross-platform reach",
        "Brand awareness campaigns",
        "Advanced attribution tracking",
      ],
      color: "bg-[hsl(var(--brand-accent))]",
    },
    {
      icon: Search,
      title: "Listing Optimization",
      description: "SEO-optimized listings that convert visitors",
      details: [
        "Keyword-rich titles & bullets",
        "Enhanced brand content (A+)",
        "Product photography guidelines",
        "Backend keyword optimization",
        "Conversion rate optimization",
      ],
      color: "bg-[hsl(var(--brand-secondary))]",
    },
    {
      icon: DollarSign,
      title: "Reimbursements",
      description: "Recover lost revenue from Amazon",
      details: [
        "Lost inventory claims",
        "Damaged product recovery",
        "FBA fee discrepancies",
        "Missing shipment claims",
        "Automated monitoring system",
      ],
      color: "bg-[hsl(var(--brand-accent))]",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive Amazon marketing solutions designed to maximize your ROI and accelerate growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
