import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    visitDate: "",
    visitTime: "",
    numChildren: "",
    childrenAges: "",
    specialRequests: ""
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const bookingMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/bookings", data);
    },
    onSuccess: () => {
      toast({
        title: "Booking Request Submitted!",
        description: "We'll contact you within 24 hours to confirm your booking.",
      });
      setFormData({
        parentName: "",
        email: "",
        phone: "",
        visitDate: "",
        visitTime: "",
        numChildren: "",
        childrenAges: "",
        specialRequests: ""
      });
      queryClient.invalidateQueries({ queryKey: ["/api/bookings"] });
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
    if (!formData.parentName || !formData.email || !formData.phone || !formData.visitDate || !formData.numChildren || !formData.childrenAges) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    bookingMutation.mutate(formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="booking" className="py-20 gradient-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-6">
            Book Your <span className="font-fredoka">Visit</span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Ready for an amazing adventure? Book your visit to Flokiz and give your children an unforgettable experience!
          </p>
        </div>
        
        <Card className="shadow-2xl">
          <CardContent className="p-8 md:p-12">
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="parentName" className="text-sm font-semibold text-gray-700 mb-2">Parent's Name *</Label>
                  <Input
                    id="parentName"
                    value={formData.parentName}
                    onChange={(e) => handleChange("parentName", e.target.value)}
                    className="rounded-xl"
                    placeholder="Your full name"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="rounded-xl"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="phone" className="text-sm font-semibold text-gray-700 mb-2">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="rounded-xl"
                    placeholder="+212 6XX XXX XXX"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="visitDate" className="text-sm font-semibold text-gray-700 mb-2">Preferred Visit Date *</Label>
                  <Input
                    id="visitDate"
                    type="date"
                    value={formData.visitDate}
                    onChange={(e) => handleChange("visitDate", e.target.value)}
                    className="rounded-xl"
                    required
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="visitTime" className="text-sm font-semibold text-gray-700 mb-2">Preferred Time</Label>
                  <Select onValueChange={(value) => handleChange("visitTime", value)}>
                    <SelectTrigger className="rounded-xl">
                      <SelectValue placeholder="Select time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="9:00-11:00">9:00 AM - 11:00 AM</SelectItem>
                      <SelectItem value="11:00-13:00">11:00 AM - 1:00 PM</SelectItem>
                      <SelectItem value="14:00-16:00">2:00 PM - 4:00 PM</SelectItem>
                      <SelectItem value="16:00-18:00">4:00 PM - 6:00 PM</SelectItem>
                      <SelectItem value="18:00-20:00">6:00 PM - 8:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="numChildren" className="text-sm font-semibold text-gray-700 mb-2">Number of Children *</Label>
                  <Select onValueChange={(value) => handleChange("numChildren", value)}>
                    <SelectTrigger className="rounded-xl">
                      <SelectValue placeholder="Select number" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 child</SelectItem>
                      <SelectItem value="2">2 children</SelectItem>
                      <SelectItem value="3">3 children</SelectItem>
                      <SelectItem value="4">4 children</SelectItem>
                      <SelectItem value="5+">5+ children</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="mb-6">
                <Label htmlFor="childrenAges" className="text-sm font-semibold text-gray-700 mb-2">Children's Ages *</Label>
                <Textarea
                  id="childrenAges"
                  value={formData.childrenAges}
                  onChange={(e) => handleChange("childrenAges", e.target.value)}
                  className="rounded-xl"
                  placeholder="Please specify the ages of your children (e.g., 2 years, 5 years, 8 years)"
                  required
                />
              </div>
              
              <div className="mb-8">
                <Label htmlFor="specialRequests" className="text-sm font-semibold text-gray-700 mb-2">Special Requests (Optional)</Label>
                <Textarea
                  id="specialRequests"
                  value={formData.specialRequests}
                  onChange={(e) => handleChange("specialRequests", e.target.value)}
                  className="rounded-xl"
                  placeholder="Any special requirements, dietary restrictions, or questions?"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={bookingMutation.isPending}
                className="w-full bg-primary hover:bg-red-500 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <CalendarCheck className="mr-2 h-5 w-5" />
                {bookingMutation.isPending ? "Submitting..." : "Submit Booking Request"}
              </Button>
              
              <p className="text-sm text-gray-500 text-center mt-4">
                We'll contact you within 24 hours to confirm your booking and provide additional details.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
