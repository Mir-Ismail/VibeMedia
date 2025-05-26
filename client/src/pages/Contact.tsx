import { motion } from "framer-motion";
import ContactForm from "../components/ui/ContactForm";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-gray-600">
            Ready to transform your Amazon business? Let's discuss your goals and create a custom strategy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[hsl(var(--brand-primary))]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[hsl(var(--brand-primary))] w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-gray-600">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[hsl(var(--brand-primary))]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[hsl(var(--brand-primary))] w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-600">hello@amazonpro.com</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[hsl(var(--brand-primary))]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[hsl(var(--brand-primary))] w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Office</div>
                    <div className="text-gray-600">
                      123 Business Ave<br />
                      Seattle, WA 98101
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Image */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
                alt="Modern professional office workspace"
                className="w-full h-48 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
