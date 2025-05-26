import { motion } from "framer-motion";
import { ArrowRight, Star, Zap, Target } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated Background with Geometric Shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--brand-primary))] via-blue-600 to-[hsl(var(--brand-accent))]">
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/4 right-20 w-16 h-16 bg-white/15 rounded-lg"
          animate={{ 
            x: [0, 30, 0],
            rotate: [0, -180, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-12 h-12 bg-yellow-400/20 rounded-full"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-24 h-24 border-2 border-white/20 rounded-full"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
                            radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Floating Icons */}
          <div className="flex justify-center mb-8">
            <motion.div
              className="flex space-x-8"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  delay: 0
                }}
                className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"
              >
                <Star className="w-6 h-6 text-yellow-300" />
              </motion.div>
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  delay: 1
                }}
                className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"
              >
                <Zap className="w-6 h-6 text-yellow-300" />
              </motion.div>
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  delay: 2
                }}
                className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"
              >
                <Target className="w-6 h-6 text-yellow-300" />
              </motion.div>
            </motion.div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 px-4 sm:px-0"
          >
            Ready to Scale Your Amazon Business?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 opacity-90 max-w-4xl mx-auto px-4 sm:px-0"
          >
            Join 500+ successful sellers who trust PrimeVibeMedia to maximize their Amazon 
            potential. Get your free audit and discover opportunities you're missing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-6 md:mb-8 px-4 sm:px-0"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[hsl(var(--brand-primary))] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-all hover:bg-gray-100 shadow-2xl flex items-center gap-3 group w-full sm:w-auto"
            >
              <span className="whitespace-nowrap">Get Your Free Audit</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 20px 40px rgba(255,255,255,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-all hover:bg-white hover:text-[hsl(var(--brand-primary))] shadow-2xl flex items-center gap-3 group w-full sm:w-auto"
            >
              <span className="whitespace-nowrap">Schedule a Call</span>
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Target className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.div>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm opacity-80"
          >
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              <span>✓ No commitment required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              <span>✓ 30-minute comprehensive analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              <span>✓ Actionable recommendations</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Wave Effect at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-white"
          style={{
            clipPath: "polygon(0 100%, 100% 100%, 100% 60%, 0 80%)"
          }}
          animate={{
            clipPath: [
              "polygon(0 100%, 100% 100%, 100% 60%, 0 80%)",
              "polygon(0 100%, 100% 100%, 100% 80%, 0 60%)",
              "polygon(0 100%, 100% 100%, 100% 60%, 0 80%)"
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
}