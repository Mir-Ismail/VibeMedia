import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { RootState } from "../../lib/store";
import { updateFormField, submitContactForm, clearSubmitStatus } from "../../store/contactSlice";
import { useEffect } from "react";

export default function ContactForm() {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const { formData, isSubmitting, submitSuccess, submitError } = useSelector(
    (state: RootState) => state.contact
  );

  useEffect(() => {
    if (submitSuccess) {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      dispatch(clearSubmitStatus());
    }
    if (submitError) {
      toast({
        title: "Error",
        description: submitError,
        variant: "destructive",
      });
      dispatch(clearSubmitStatus());
    }
  }, [submitSuccess, submitError, toast, dispatch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(submitContactForm(formData));
  };

  const handleFieldChange = (field: keyof typeof formData, value: string) => {
    dispatch(updateFormField({ field, value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
    >
      <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </Label>
          <Input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => handleFieldChange("name", e.target.value)}
            placeholder="Your full name"
            required
            className="w-full"
          />
        </div>

        <div>
          <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleFieldChange("email", e.target.value)}
            placeholder="your@email.com"
            required
            className="w-full"
          />
        </div>

        <div>
          <Label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            Company
          </Label>
          <Input
            id="company"
            type="text"
            value={formData.company}
            onChange={(e) => handleFieldChange("company", e.target.value)}
            placeholder="Your company name"
            className="w-full"
          />
        </div>

        <div>
          <Label htmlFor="revenue" className="block text-sm font-medium text-gray-700 mb-2">
            Current Monthly Revenue
          </Label>
          <Select value={formData.revenue} onValueChange={(value) => handleFieldChange("revenue", value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select revenue range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-10k">$0 - $10K</SelectItem>
              <SelectItem value="10k-50k">$10K - $50K</SelectItem>
              <SelectItem value="50k-100k">$50K - $100K</SelectItem>
              <SelectItem value="100k-500k">$100K - $500K</SelectItem>
              <SelectItem value="500k+">$500K+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleFieldChange("message", e.target.value)}
            placeholder="Tell us about your goals and challenges..."
            rows={4}
            required
            className="w-full"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[hsl(var(--brand-primary))] hover:bg-[hsl(var(--brand-accent))] text-white py-3 rounded-lg font-semibold transition-all hover:scale-105"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </motion.div>
  );
}
