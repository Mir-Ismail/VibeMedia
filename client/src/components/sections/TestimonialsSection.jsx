import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import TestimonialCard from "../ui/TestimonialCard";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CEO, EcoLiving Products",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      quote: "PrimeVibeMedia transformed our Amazon presence completely. Our sales increased by 340% in just 6 months, and our ACoS dropped from 45% to 18%. Their PPC strategies are phenomenal!"
    },
    {
      name: "Michael Chen",
      title: "Founder, TechGadget Pro",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      quote: "The team's expertise in listing optimization helped us rank #1 for our main keywords. Revenue went from $50K to $200K monthly. Best investment we've made for our Amazon business."
    },
    {
      name: "Emily Rodriguez",
      title: "Brand Manager, NaturePure",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      quote: "Working with PrimeVibeMedia has been a game-changer. Their data-driven approach and strategic insights helped us expand to 5 new marketplaces successfully."
    },
    {
      name: "David Thompson",
      title: "Director, FitLife Supplements",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      quote: "The ROI we've seen is incredible. PrimeVibeMedia's team doesn't just run campaigns, they become true partners in your success. Highly recommend their services!"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Dynamic Background with Animated Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, 100, 0], 
            y: [0, 50, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 right-20 w-48 h-48 bg-purple-400/25 rounded-full blur-3xl"
          animate={{ 
            x: [0, -80, 0], 
            y: [0, -60, 0],
            scale: [1, 1.4, 1]
          }}
          transition={{ 
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/3 w-40 h-40 bg-pink-400/20 rounded-full blur-2xl"
          animate={{ 
            y: [0, -40, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Animated Stars */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Gradient Mesh Overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full" style={{
            background: `radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                        radial-gradient(circle at 80% 70%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
                        radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.2) 0%, transparent 50%)`
          }} />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Floating Quote Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30"
            >
              <Quote className="w-8 h-8 text-yellow-300" />
            </motion.div>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 px-4 sm:px-0">
            What Our <span className="text-gradient bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto px-4 sm:px-0">
            Real results from real businesses. See how we've helped brands 
            achieve extraordinary growth on Amazon marketplace.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
          >
            <TestimonialCard {...testimonials[currentIndex]} />
            <TestimonialCard {...testimonials[(currentIndex + 1) % testimonials.length]} />
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6">
            <motion.button
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 text-white hover:text-yellow-300 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-yellow-300' : 'bg-white/30'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  animate={index === currentIndex ? { scale: [1, 1.3, 1] } : {}}
                  transition={{ duration: 0.5 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 text-white hover:text-yellow-300 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        {/* Success Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "98%", label: "Client Satisfaction", icon: "😊" },
            { number: "340%", label: "Avg Sales Increase", icon: "📈" },
            { number: "18%", label: "Avg ACoS Reduction", icon: "💰" },
            { number: "5★", label: "Average Rating", icon: "⭐" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all group"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                className="text-3xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors"
              >
                {stat.number}
              </motion.div>
              <div className="text-sm text-white/80">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}