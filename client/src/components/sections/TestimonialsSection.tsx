import { motion } from "framer-motion";
import TestimonialCard from "../ui/TestimonialCard";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CEO, TechGadgets Co.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
      quote: "PrimeVibeMedia transformed our PPC campaigns. We saw a 450% increase in ROAS within 3 months. Their attention to detail and strategic approach is unmatched.",
    },
    {
      name: "Mike Chen",
      title: "Founder, EcoLiving Brand",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
      quote: "The listing optimization alone increased our conversion rate by 180%. The team's expertise in Amazon's algorithm is evident in every recommendation.",
    },
    {
      name: "Lisa Rodriguez",
      title: "Owner, FitLife Supplements",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
      quote: "From $50K to $2M in annual revenue in just 18 months. Their reimbursement service alone recovered $15K we didn't know we were owed.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-[hsl(var(--brand-secondary))] text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Client <span className="text-[hsl(var(--brand-primary))]">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how we've transformed Amazon businesses across various industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
