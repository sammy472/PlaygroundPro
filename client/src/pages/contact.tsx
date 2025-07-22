import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Send, Home, MapPin, Phone, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    }
  });

  const emailMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/send-email", data);
    },
    onSuccess: () => {
      toast({
        title: "Email Sent Successfully!",
        description: "Your message has been sent directly to our team.",
      });
    },
    onError: () => {
      toast({
        title: "Email Failed",
        description: "Could not send email. Your message was saved for our review.",
        variant: "destructive"
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    // Save to database first
    contactMutation.mutate(formData);
    
    // Also attempt to send email
    emailMutation.mutate(formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-green-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="text-primary hover:text-red-600">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-4">
              Contact <span className="text-secondary font-fredoka">Flokiz</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about our playground? Want to book a party? We'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-poppins font-bold text-gray-800 flex items-center">
                  <Mail className="mr-3 h-6 w-6 text-secondary" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="contactName" className="text-sm font-semibold text-gray-700">
                        Full Name *
                      </Label>
                      <Input
                        id="contactName"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className="mt-1 rounded-lg"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="contactEmail" className="text-sm font-semibold text-gray-700">
                        Email Address *
                      </Label>
                      <Input
                        id="contactEmail"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="mt-1 rounded-lg"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-sm font-semibold text-gray-700">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleChange("subject", e.target.value)}
                      className="mt-1 rounded-lg"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-sm font-semibold text-gray-700">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className="mt-1 rounded-lg min-h-[150px]"
                      placeholder="Tell us how we can help you..."
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={contactMutation.isPending || emailMutation.isPending}
                    className="w-full bg-secondary hover:bg-teal-400 text-white font-bold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {(contactMutation.isPending || emailMutation.isPending) ? "Sending..." : "Send Message"}
                  </Button>
                  
                  <p className="text-sm text-gray-500 text-center">
                    We'll respond within 24 hours during business days
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-poppins font-bold text-gray-800 mb-6">
                    Visit Our Playground
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-teal-100 rounded-full p-3 mr-4">
                        <MapPin className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Address</h4>
                        <p className="text-gray-600">
                          Avenue de Nice
                          <br />
                          Casablanca 20000, Morocco
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-red-100 rounded-full p-3 mr-4">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Phone</h4>
                        <p className="text-gray-600">+212 676 767 288</p>
                        <p className="text-sm text-gray-500">WhatsApp available</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-yellow-100 rounded-full p-3 mr-4">
                        <Mail className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Email</h4>
                        <p className="text-gray-600">hello@flokiz.ma</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-green-100 rounded-full p-3 mr-4">
                        <Clock className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Opening Hours</h4>
                        <div className="text-gray-600 space-y-1">
                          <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                          <p>Saturday - Sunday: 11:00 AM - 8:00 PM</p>
                          <p className="text-sm text-gray-500">Closed on public holidays</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="shadow-lg bg-gradient-to-r from-primary to-secondary text-white">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
                  <div className="space-y-3">
                    <Link href="/#booking">
                      <Button variant="secondary" className="w-full bg-white text-primary hover:bg-gray-100">
                        Book a Visit
                      </Button>
                    </Link>
                    <Button 
                      onClick={() => window.open('https://wa.me/212676767288?text=Hello%20Flokiz!%20I%20need%20help.', '_blank')}
                      variant="outline" 
                      className="w-full border-white text-white hover:bg-white hover:text-primary"
                    >
                      WhatsApp Us
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}