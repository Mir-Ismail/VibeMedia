import { motion } from "framer-motion";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CEO, TechGadgets Co.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
      quote: "PrimeVibeMedia transformed our PPC campaigns. We saw a 450% increase in ROAS within 3 months. Their attention to detail and strategic approach is unmatched.",
      metrics: "450% ROAS increase"
    },
    {
      name: "Mike Chen",
      title: "Founder, EcoLiving Brand",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
      quote: "The listing optimization alone increased our conversion rate by 180%. The team's expertise in Amazon's algorithm is evident in every recommendation.",
      metrics: "180% conversion increase"
    },
    {
      name: "Lisa Rodriguez",
      title: "Owner, FitLife Supplements",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
      quote: "From $50K to $2M in annual revenue in just 18 months. Their reimbursement service alone recovered $15K we didn't know we were owed.",
      metrics: "$2M annual revenue"
    },
    {
      name: "David Park",
      title: "CMO, Urban Style Co.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
      quote: "The DSP campaigns opened up entirely new customer segments for us. Our brand awareness increased by 300% and sales followed suit.",
      metrics: "300% brand awareness increase"
    },
    {
      name: "Jennifer Kim",
      title: "Director, Home & Garden Plus",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
      quote: "Their data-driven approach to keyword optimization helped us rank #1 for our main product category. Sales tripled within 6 months.",
      metrics: "3x sales increase"
    },
    {
      name: "Robert Thompson",
      title: "CEO, Outdoor Adventures",
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
      quote: "The dedicated account manager feels like an extension of our team. They understand our brand and consistently deliver results that exceed expectations.",
      metrics: "500% ROI improvement"
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
            Client <span className="text-gradient">Success Stories</span>
          </h1>
          <p className="text-xl text-gray-600">
            See how we've transformed Amazon businesses across various industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 hover-lift"
            >
              <div className="mb-6">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <div className="text-sm font-semibold text-[hsl(var(--brand-primary))] mb-4">
                  {testimonial.metrics}
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name} testimonial`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-[hsl(var(--brand-primary))] text-white rounded-xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Join Our Success Stories</h2>
          <p className="text-xl mb-8 opacity-90">
            Ready to see similar results for your Amazon business?
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-[hsl(var(--brand-primary))] px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:bg-gray-100"
          >
            Get Your Free Audit
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
