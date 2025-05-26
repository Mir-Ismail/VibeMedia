import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";

export default function Team() {
  const teamMembers = [
    {
      name: "Alex Rodriguez",
      title: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      bio: "Serial entrepreneur with 12+ years in Amazon marketplace. Led teams that generated over $100M in seller revenue.",
      specialties: ["Strategic Planning", "Business Development", "Team Leadership"],
      linkedin: "#",
      twitter: "#",
      email: "alex@amazonpro.com"
    },
    {
      name: "Sarah Chen",
      title: "Head of PPC Strategy",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      bio: "Certified Amazon Advertising expert with expertise in campaign optimization and bid management strategies.",
      specialties: ["PPC Campaigns", "Keyword Research", "Performance Analytics"],
      linkedin: "#",
      twitter: "#",
      email: "sarah@amazonpro.com"
    },
    {
      name: "Marcus Johnson",
      title: "Senior Account Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      bio: "Dedicated to client success with a track record of helping brands scale from 6 to 8 figures on Amazon.",
      specialties: ["Client Relations", "Growth Strategy", "Market Analysis"],
      linkedin: "#",
      twitter: "#",
      email: "marcus@amazonpro.com"
    },
    {
      name: "Emma Thompson",
      title: "Listing Optimization Specialist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      bio: "Expert in SEO optimization and conversion rate improvement with a focus on enhanced brand content.",
      specialties: ["SEO Optimization", "A+ Content", "Conversion Optimization"],
      linkedin: "#",
      twitter: "#",
      email: "emma@amazonpro.com"
    },
    {
      name: "David Park",
      title: "DSP Campaign Manager",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      bio: "Programmatic advertising specialist focused on brand awareness and customer acquisition through Amazon DSP.",
      specialties: ["Amazon DSP", "Display Advertising", "Audience Targeting"],
      linkedin: "#",
      twitter: "#",
      email: "david@amazonpro.com"
    },
    {
      name: "Lisa Wang",
      title: "Data Analytics Lead",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      bio: "Data scientist with expertise in performance tracking, reporting, and actionable insights for Amazon sellers.",
      specialties: ["Data Analysis", "Performance Tracking", "Strategic Insights"],
      linkedin: "#",
      twitter: "#",
      email: "lisa@amazonpro.com"
    }
  ];

  return (
    <div className="pt-16 sm:pt-20 min-h-screen">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12 md:mb-16 px-4 sm:px-0"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            Meet Our <span className="text-gradient">Expert Team</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate Amazon marketing professionals dedicated to scaling your business
            with proven strategies and personalized attention.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="text-center mb-6">
                <motion.div
                  className="relative inline-block mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.title}`}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-[hsl(var(--brand-primary))]/20 group-hover:border-[hsl(var(--brand-primary))] transition-colors"
                  />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[hsl(var(--brand-primary))] rounded-full animate-pulse"></div>
                </motion.div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[hsl(var(--brand-primary))] transition-colors">
                  {member.name}
                </h3>
                <p className="text-[hsl(var(--brand-accent))] font-semibold mb-4">{member.title}</p>
              </div>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Specialties:</h4>
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((specialty, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      className="px-3 py-1 bg-[hsl(var(--brand-primary))]/10 text-[hsl(var(--brand-primary))] text-xs rounded-full font-medium"
                    >
                      {specialty}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="flex justify-center space-x-4 pt-4 border-t border-gray-100">
                <motion.a
                  href={member.linkedin}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 bg-[hsl(var(--brand-primary))]/10 rounded-full flex items-center justify-center hover:bg-[hsl(var(--brand-primary))] hover:text-white transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href={member.twitter}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 bg-[hsl(var(--brand-primary))]/10 rounded-full flex items-center justify-center hover:bg-[hsl(var(--brand-primary))] hover:text-white transition-all"
                >
                  <Twitter className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href={`mailto:${member.email}`}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 bg-[hsl(var(--brand-primary))]/10 rounded-full flex items-center justify-center hover:bg-[hsl(var(--brand-primary))] hover:text-white transition-all"
                >
                  <Mail className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-[hsl(var(--brand-primary))] to-[hsl(var(--brand-accent))] text-white rounded-xl p-12 text-center animate-gradient"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Work With Our Team?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get personalized Amazon marketing strategies from our certified experts
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-[hsl(var(--brand-primary))] px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:bg-gray-100 shadow-lg hover:shadow-2xl"
          >
            Schedule a Consultation
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}