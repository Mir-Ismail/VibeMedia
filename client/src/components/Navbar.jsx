import { useState } from "react";
import { motion } from "framer-motion";
import { useLocation, Link } from "wouter";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/team", label: "Our Team" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-xl sm:text-2xl font-bold text-gradient cursor-pointer"
            >
              PrimeVibeMedia
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <motion.div
                  whileHover={{ y: -2 }}
                  className={`cursor-pointer transition-colors ${
                    location === item.href
                      ? "text-[hsl(var(--brand-primary))] font-semibold"
                      : "text-gray-700 hover:text-[hsl(var(--brand-primary))]"
                  }`}
                >
                  {item.label}
                </motion.div>
              </Link>
            ))}
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[hsl(var(--brand-primary))] to-[hsl(var(--brand-accent))] text-white px-6 py-2 rounded-lg font-semibold transition-all hover:shadow-lg animate-gradient"
              >
                Get Started
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-[hsl(var(--brand-primary))] transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-gray-100"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <div
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`cursor-pointer transition-colors ${
                      location === item.href
                        ? "text-[hsl(var(--brand-primary))] font-semibold"
                        : "text-gray-700 hover:text-[hsl(var(--brand-primary))]"
                    }`}
                  >
                    {item.label}
                  </div>
                </Link>
              ))}
              <Link href="/contact">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-gradient-to-r from-[hsl(var(--brand-primary))] to-[hsl(var(--brand-accent))] text-white px-6 py-2 rounded-lg font-semibold w-full animate-gradient"
                >
                  Get Started
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}