import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { TrendingUp, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      className="fixed top-0 w-full z-50 bg-[hsl(var(--brand-dark))]/95 backdrop-blur-sm border-b border-[hsl(var(--brand-accent))]/20"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="w-10 h-10 bg-[hsl(var(--brand-primary))] rounded-lg flex items-center justify-center">
                <TrendingUp className="text-white text-xl" />
              </div>
              <span className="text-white text-xl font-bold">PrimeVibeMedia</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className={`text-white hover:text-[hsl(var(--brand-primary))] transition-colors ${
                    location === item.href ? "text-[hsl(var(--brand-primary))]" : ""
                  }`}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact">
              <Button className="bg-[hsl(var(--brand-primary))] hover:bg-[hsl(var(--brand-accent))] text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105">
                Free Audit
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a
                    className={`text-white hover:text-[hsl(var(--brand-primary))] transition-colors block ${
                      location === item.href ? "text-[hsl(var(--brand-primary))]" : ""
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
              <Link href="/contact">
                <Button
                  className="bg-[hsl(var(--brand-primary))] hover:bg-[hsl(var(--brand-accent))] text-white w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Free Audit
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
