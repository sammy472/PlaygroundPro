import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const newsletterMutation = useMutation({
    mutationFn: async (email: string) => {
      return await apiRequest("POST", "/api/newsletter", { email });
    },
    onSuccess: () => {
      toast({
        title: "Welcome to Flokiz!",
        description: "You've been successfully subscribed to our newsletter.",
      });
      setEmail("");
      queryClient.invalidateQueries({ queryKey: ["/api/newsletter"] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }
    newsletterMutation.mutate(email);
  };

  return (
    <section className="py-16 bg-yellow-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <Mail className="h-16 w-16 text-accent mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 mb-4">
            Stay Updated with <span className="text-accent font-fredoka">Flokiz</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get the latest news about new activities, special events, and exclusive offers delivered to your inbox!
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 rounded-full border-gray-300"
            required
          />
          <Button
            type="submit"
            disabled={newsletterMutation.isPending}
            className="bg-accent hover:bg-yellow-400 text-gray-800 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {newsletterMutation.isPending ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
        
        <p className="text-sm text-gray-500 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
