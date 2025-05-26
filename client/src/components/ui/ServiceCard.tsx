import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
  color: string;
}

export default function ServiceCard({ icon: Icon, title, description, details, color }: ServiceCardProps) {
  return (
    <motion.div 
      className="service-card h-80 hover-lift group"
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="service-card-inner relative w-full h-full">
        {/* Front of card */}
        <div className="service-card-front absolute inset-0 bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center group-hover:shadow-2xl transition-shadow duration-300">
          <motion.div 
            className={`w-16 h-16 ${color}/10 rounded-full flex items-center justify-center mb-4 group-hover:animate-pulse-glow`}
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Icon className={`${color.replace('bg-', 'text-')} text-2xl w-8 h-8 group-hover:scale-110 transition-transform`} />
          </motion.div>
          <h3 className="text-xl font-bold mb-3 group-hover:text-[hsl(var(--brand-primary))] transition-colors">{title}</h3>
          <p className="text-gray-600">{description}</p>
          <div className="absolute bottom-4 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
            Hover to see details
          </div>
        </div>

        {/* Back of card */}
        <div className={`service-card-back absolute inset-0 ${color} rounded-xl p-6 flex flex-col justify-center text-white shadow-2xl`}>
          <motion.h3 
            className="text-xl font-bold mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {title}
          </motion.h3>
          <motion.ul 
            className="space-y-2 text-sm"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {details.map((detail, index) => (
              <motion.li 
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-center"
              >
                <span className="w-2 h-2 bg-white/70 rounded-full mr-3 animate-pulse"></span>
                {detail}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </motion.div>
  );
}
