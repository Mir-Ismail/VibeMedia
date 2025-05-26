import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { RootState } from "../../lib/store";
import { updateEmail, subscribeNewsletter, resetNewsletter } from "../../store/newsletterSlice";
import { useEffect } from "react";

export default function NewsletterForm() {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const { email, isSubmitting, submitSuccess, submitError } = useSelector(
    (state: RootState) => state.newsletter
  );

  useEffect(() => {
    if (submitSuccess) {
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      dispatch(resetNewsletter());
    }
    if (submitError) {
      toast({
        title: "Error",
        description: submitError,
        variant: "destructive",
      });
    }
  }, [submitSuccess, submitError, toast, dispatch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      dispatch(subscribeNewsletter(email));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <Input
        type="email"
        value={email}
        onChange={(e) => dispatch(updateEmail(e.target.value))}
        placeholder="Your email address"
        required
        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[hsl(var(--brand-primary))] focus:border-transparent text-white"
      />
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[hsl(var(--brand-primary))] hover:bg-[hsl(var(--brand-accent))] text-white py-3 rounded-lg font-semibold transition-all"
      >
        {isSubmitting ? "Subscribing..." : "Subscribe"}
      </Button>
    </form>
  );
}
