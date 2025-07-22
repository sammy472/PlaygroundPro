import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function ContactSection() {
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
        description: "Thank you for contacting us. We'll get back to you soon.",
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
    contactMutation.mutate(formData);
    emailMutation.mutate(formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-6">
            Get in <span className="text-secondary font-fredoka">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-poppins font-bold text-gray-800 mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label htmlFor="contactName" className="text-sm font-semibold text-gray-700 mb-2">Name *</Label>
                    <Input
                      id="contactName"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className="rounded-xl"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="contactEmail" className="text-sm font-semibold text-gray-700 mb-2">Email *</Label>
                    <Input
                      id="contactEmail"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="rounded-xl"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <Label htmlFor="subject" className="text-sm font-semibold text-gray-700 mb-2">Subject</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleChange("subject", e.target.value)}
                    className="rounded-xl"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div className="mb-6">
                  <Label htmlFor="message" className="text-sm font-semibold text-gray-700 mb-2">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className="rounded-xl min-h-[120px]"
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full bg-secondary hover:bg-teal-400 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Send className="mr-2 h-4 w-4" />
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-poppins font-bold text-gray-800 mb-6">Visit Us</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-teal-100 rounded-full p-3 mr-4">
                    <MapPin className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Location</h4>
                    <p className="text-gray-600">
                      Avenue de Nice<br/>
                      Casablanca 20000, Morocco
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 rounded-full p-3 mr-4">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                    <p className="text-gray-600">+212 676 767 288</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-yellow-100 rounded-full p-3 mr-4">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">hello@flokiz.ma</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-3 mr-4">
                    <Clock className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Opening Hours</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                      <p>Saturday - Sunday: 9:00 AM - 9:00 PM</p>
                      <p className="text-sm text-gray-500">Closed on public holidays</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300" 
                  alt="Family fun activities at indoor playground center" 
                  className="w-full h-48 object-cover rounded-xl" 
                />
                <p className="text-sm text-gray-500 text-center mt-2">
                  Interactive map will be integrated here
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
