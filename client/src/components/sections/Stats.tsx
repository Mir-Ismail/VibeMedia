import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Stats() {
  const [counters, setCounters] = useState({
    revenue: 0,
    clients: 0,
    roi: 0,
    experience: 0,
  });

  const targetValues = {
    revenue: 50,
    clients: 500,
    roi: 300,
    experience: 8,
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const interval = 50; // Update every 50ms
    const steps = duration / interval;

    const increments = {
      revenue: targetValues.revenue / steps,
      clients: targetValues.clients / steps,
      roi: targetValues.roi / steps,
      experience: targetValues.experience / steps,
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      if (currentStep < steps) {
        setCounters((prev) => ({
          revenue: Math.min(Math.ceil(prev.revenue + increments.revenue), targetValues.revenue),
          clients: Math.min(Math.ceil(prev.clients + increments.clients), targetValues.clients),
          roi: Math.min(Math.ceil(prev.roi + increments.roi), targetValues.roi),
          experience: Math.min(Math.ceil(prev.experience + increments.experience), targetValues.experience),
        }));
        currentStep++;
      } else {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-[hsl(var(--brand-secondary))] text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1, y: -10 }}
            transition={{ duration: 0.6 }}
            className="text-center group"
          >
            <div className="text-4xl md:text-5xl font-bold text-[hsl(var(--brand-primary))] mb-2 group-hover:animate-pulse-glow transition-all">
              ${counters.revenue}M+
            </div>
            <div className="text-lg group-hover:text-[hsl(var(--brand-primary))] transition-colors">Revenue Generated</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1, y: -10 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center group"
          >
            <div className="text-4xl md:text-5xl font-bold text-[hsl(var(--brand-primary))] mb-2 group-hover:animate-pulse-glow transition-all">
              {counters.clients}+
            </div>
            <div className="text-lg group-hover:text-[hsl(var(--brand-primary))] transition-colors">Happy Clients</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1, y: -10 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center group"
          >
            <div className="text-4xl md:text-5xl font-bold text-[hsl(var(--brand-primary))] mb-2 group-hover:animate-pulse-glow transition-all">
              {counters.roi}%
            </div>
            <div className="text-lg group-hover:text-[hsl(var(--brand-primary))] transition-colors">Average ROI</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1, y: -10 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center group"
          >
            <div className="text-4xl md:text-5xl font-bold text-[hsl(var(--brand-primary))] mb-2 group-hover:animate-pulse-glow transition-all">
              {counters.experience}+
            </div>
            <div className="text-lg group-hover:text-[hsl(var(--brand-primary))] transition-colors">Years Experience</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
