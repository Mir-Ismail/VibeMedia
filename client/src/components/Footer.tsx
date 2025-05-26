import { Link } from "wouter";
import { TrendingUp, Linkedin, Twitter, Facebook } from "lucide-react";
import NewsletterForm from "./ui/NewsletterForm";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[hsl(var(--brand-dark))] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-[hsl(var(--brand-primary))] rounded-lg flex items-center justify-center">
                <TrendingUp className="text-white text-xl" />
              </div>
              <span className="text-white text-xl font-bold">PrimeVibeMedia</span>
            </div>
            <p className="text-gray-400 mb-6">
              Leading Amazon marketing agency helping sellers scale their businesses with data-driven strategies.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-[hsl(var(--brand-primary))]/20 rounded-full flex items-center justify-center hover:bg-[hsl(var(--brand-primary))] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[hsl(var(--brand-primary))]/20 rounded-full flex items-center justify-center hover:bg-[hsl(var(--brand-primary))] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[hsl(var(--brand-primary))]/20 rounded-full flex items-center justify-center hover:bg-[hsl(var(--brand-primary))] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <a className="text-gray-400 hover:text-[hsl(var(--brand-primary))] transition-colors">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-gray-400 hover:text-[hsl(var(--brand-primary))] transition-colors">
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-gray-400 hover:text-[hsl(var(--brand-primary))] transition-colors">
                    Services
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/testimonials">
                  <a className="text-gray-400 hover:text-[hsl(var(--brand-primary))] transition-colors">
                    Testimonials
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-gray-400 hover:text-[hsl(var(--brand-primary))] transition-colors">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-[hsl(var(--brand-primary))] transition-colors">
                  Amazon PPC
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[hsl(var(--brand-primary))] transition-colors">
                  Amazon DSP
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[hsl(var(--brand-primary))] transition-colors">
                  Listing Optimization
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[hsl(var(--brand-primary))] transition-colors">
                  Reimbursements
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[hsl(var(--brand-primary))] transition-colors">
                  Brand Management
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Get the latest Amazon marketing insights and strategies.</p>
            <NewsletterForm />
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © {currentYear} PrimeVibeMedia Agency. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-[hsl(var(--brand-primary))] text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[hsl(var(--brand-primary))] text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[hsl(var(--brand-primary))] text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
