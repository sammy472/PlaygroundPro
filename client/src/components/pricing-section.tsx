import { Clock, CreditCard, Star, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function PricingSection() {
  const pricingPlans = [
    {
      id: "minute",
      name: "Quick Play",
      duration: "1.5 Hours",
      price: "150",
      currency: "MAD",
      icon: Clock,
      description: "Perfect for a quick fun session",
      features: [
        "1.5 hours of unlimited play",
        "Access to all playground activities",
        "Basic safety equipment included",
        "Supervision by trained staff",
        "Perfect for first-time visitors"
      ],
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      iconColor: "text-blue-500",
      popular: false
    },
    {
      id: "classic",
      name: "Classic Experience",
      duration: "3 Hours",
      price: "250",
      currency: "MAD",
      icon: Star,
      description: "The complete Flokiz experience",
      features: [
        "3 hours of unlimited play",
        "Access to ALL activities & workshops",
        "Complimentary snack included",
        "Priority access to popular attractions",
        "Photo session with our mascot",
        "Take-home activity pack"
      ],
      bgColor: "bg-accent/10",
      borderColor: "border-accent",
      iconColor: "text-accent",
      popular: true
    },
    {
      id: "card",
      name: "Flexi-Card",
      duration: "10 Entries",
      price: "800",
      currency: "MAD",
      icon: CreditCard,
      description: "Maximum flexibility for regular visitors",
      features: [
        "10 individual entry passes",
        "Each entry valid for 2 hours",
        "Transferable between family members",
        "6-month validity period",
        "Best value for frequent visitors",
        "Free birthday party upgrade"
      ],
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      iconColor: "text-green-500",
      popular: false
    }
  ];

  const additionalServices = [
    "Birthday party packages available",
    "Group discounts for 5+ children",
    "Corporate family day packages",
    "Special holiday pricing events"
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-6">
            Flexible <span className="text-accent font-fredoka">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect option for your family's needs. From quick visits to regular play sessions, 
            we have pricing that works for everyone.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan) => {
            const IconComponent = plan.icon;
            return (
              <Card 
                key={plan.id} 
                className={`card-hover relative ${plan.bgColor} ${plan.borderColor} ${plan.popular ? 'ring-2 ring-accent shadow-xl scale-105' : 'border-2'}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-white px-4 py-1">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className={`rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 ${plan.bgColor.replace('50', '100')}`}>
                    <IconComponent className={`h-7 w-7 ${plan.iconColor}`} />
                  </div>
                  <CardTitle className="text-2xl font-poppins font-bold text-gray-800">
                    {plan.name}
                  </CardTitle>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                      <span className="text-lg text-gray-600">{plan.currency}</span>
                    </div>
                    <p className="text-accent font-medium">{plan.duration}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                    className={`w-full py-3 ${
                      plan.popular 
                        ? 'bg-accent hover:bg-accent/90 text-white' 
                        : 'bg-gray-800 hover:bg-gray-700 text-white'
                    }`}
                  >
                    Choose {plan.name}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Information */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-poppins font-bold text-gray-800 mb-6">
            Additional Services & Benefits
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="flex items-center justify-center gap-3">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              💳 All cards accepted
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              🎫 Advance booking recommended
            </span>
            <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
              👨‍👩‍👧‍👦 Family packages available
            </span>
          </div>

          <p className="text-gray-600 text-sm">
            All prices include access to basic facilities and safety equipment. 
            Special offers and seasonal discounts available - contact us for current promotions.
          </p>
        </div>
      </div>
    </section>
  );
}