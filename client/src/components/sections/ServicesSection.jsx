import { motion } from "framer-motion";
import { Target, TrendingUp, Search, Award, BarChart3, Zap } from "lucide-react";
import ServiceCard from "../ui/ServiceCard";

export default function ServicesSection() {
  const services = [
    {
      icon: Target,
      title: "Amazon PPC Management",
      description: "Advanced advertising strategies that maximize ROI and drive profitable growth.",
      details: [
        "Campaign setup and optimization",
        "Keyword research and bidding strategies", 
        "Performance monitoring and reporting",
        "A/B testing and conversion optimization"
      ],
      color: "bg-blue-500"
    },
    {
      icon: Search,
      title: "Listing Optimization",
      description: "SEO-optimized listings that rank higher and convert better.",
      details: [
        "Keyword-rich title and bullet optimization",
        "Enhanced brand content creation",
        "Image optimization and A+ content",
        "Review management and optimization"
      ],
      color: "bg-purple-500"
    },
    {
      icon: TrendingUp,
      title: "Brand Growth Strategy",
      description: "Comprehensive brand development and market expansion plans.",
      details: [
        "Market analysis and competitor research",
        "Brand positioning and messaging",
        "Launch strategies for new products",
        "International marketplace expansion"
      ],
      color: "bg-orange-500"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Data-driven insights that guide strategic decision making.",
      details: [
        "Custom dashboard creation",
        "ROI tracking and optimization",
        "Sales forecasting and planning",
        "Competitive analysis reports"
      ],
      color: "bg-green-500"
    },
    {
      icon: Award,
      title: "Brand Registry & IP",
      description: "Protect your brand and unlock advanced selling features.",
      details: [
        "Brand Registry setup and management",
        "Trademark protection assistance",
        "Brand gating and authorization",
        "Counterfeit monitoring and removal"
      ],
      color: "bg-red-500"
    },
    {
      icon: Zap,
      title: "Amazon DSP Advertising",
      description: "Programmatic display advertising for brand awareness and retargeting.",
      details: [
        "Audience creation and targeting",
        "Creative development and testing",
        "Cross-device campaign optimization",
        "Brand awareness and consideration campaigns"
      ],
      color: "bg-indigo-500"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-20 w-40 h-40 bg-blue-200/30 rounded-full blur-3xl"
          animate={{ 
            x: [0, 50, 0], 
            y: [0, 30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 right-10 w-32 h-32 bg-purple-200/40 rounded-lg"
          animate={{ 
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-40 left-1/3 w-28 h-28 bg-orange-200/30 rounded-full"
          animate={{ 
            y: [0, -40, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Animated Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M0,100 Q400,50 800,100 T1600,100"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.path
            d="M0,200 Q600,150 1200,200 T2400,200"
            stroke="url(#gradient2)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#EF4444" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Floating Service Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="flex space-x-4">
              {[Target, TrendingUp, BarChart3].map((Icon, index) => (
                <motion.div
                  key={index}
                  animate={{ 
                    y: [0, -8, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                  className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center border border-gray-100"
                >
                  <Icon className="w-6 h-6 text-[hsl(var(--brand-primary))]" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 px-4 sm:px-0">
            Our <span className="text-gradient">Premium Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Comprehensive Amazon marketing solutions designed to maximize your revenue, 
            optimize performance, and dominate your market category.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
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

        {/* Process Flow Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #3B82F6 2px, transparent 2px),
                              radial-gradient(circle at 75% 75%, #8B5CF6 2px, transparent 2px)`,
              backgroundSize: '60px 60px'
            }} />
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-center mb-12">Our Proven Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Analysis", desc: "Deep dive into your current performance", icon: "🔍" },
                { step: "02", title: "Strategy", desc: "Custom plan tailored to your goals", icon: "🎯" },
                { step: "03", title: "Implementation", desc: "Execute optimizations and campaigns", icon: "⚡" },
                { step: "04", title: "Growth", desc: "Monitor, optimize, and scale results", icon: "📈" }
              ].map((phase, index) => (
                <motion.div
                  key={phase.step}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="text-center group"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    className="w-20 h-20 bg-gradient-to-br from-[hsl(var(--brand-primary))] to-[hsl(var(--brand-accent))] rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl group-hover:shadow-2xl transition-all"
                  >
                    {phase.icon}
                  </motion.div>
                  <div className="text-sm font-bold text-[hsl(var(--brand-primary))] mb-2">{phase.step}</div>
                  <h4 className="text-xl font-bold mb-2 group-hover:text-[hsl(var(--brand-primary))] transition-colors">{phase.title}</h4>
                  <p className="text-gray-600 text-sm">{phase.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}