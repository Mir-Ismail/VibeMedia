import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  title: string;
  image: string;
  quote: string;
}

export default function TestimonialCard({ name, title, image, quote }: TestimonialCardProps) {
  return (
    <motion.div 
      className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover-lift group border border-white/20"
      whileHover={{ 
        scale: 1.05, 
        y: -10,
        backgroundColor: "rgba(255, 255, 255, 0.15)"
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="mb-6">
        <motion.div 
          className="flex text-yellow-400 mb-4"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ rotate: -180, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 300 }}
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <Star className="w-5 h-5 fill-current" />
            </motion.div>
          ))}
        </motion.div>
        <motion.p 
          className="text-lg italic group-hover:text-white transition-colors"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          "{quote}"
        </motion.p>
      </div>
      <motion.div 
        className="flex items-center space-x-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
      >
        <motion.img
          src={image}
          alt={`${name} testimonial`}
          className="w-12 h-12 rounded-full object-cover border-2 border-[hsl(var(--brand-primary))]/50"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        />
        <div>
          <div className="font-semibold group-hover:text-[hsl(var(--brand-primary))] transition-colors">{name}</div>
          <div className="text-sm text-gray-300">{title}</div>
        </div>
      </motion.div>
    </motion.div>
  );
}
