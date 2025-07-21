import { PartyPopper, Calendar, Gift, Users, Clock, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function EventRoomsSection() {
  const eventFeatures = [
    {
      icon: PartyPopper,
      title: "Birthday Parties",
      description: "Magical birthday celebrations with decorations, activities, and unforgettable memories for your special day.",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-500"
    },
    {
      icon: Users,
      title: "Group Events",
      description: "Perfect for school trips, summer camps, and group celebrations with customized activities for all ages.",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500"
    },
    {
      icon: Gift,
      title: "Special Occasions",
      description: "Celebrate graduations, achievements, and family gatherings in our dedicated party spaces.",
      bgColor: "bg-green-50",
      iconColor: "text-green-500"
    },
    {
      icon: Calendar,
      title: "Private Bookings",
      description: "Exclusive access to our facilities for intimate celebrations and corporate family events.",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-500"
    }
  ];

  const roomFeatures = [
    "Decorated themed party rooms",
    "Professional party host included",
    "Customizable decorations and setup",
    "Dedicated party area with seating",
    "Photo opportunities and memories",
    "Party favor bags available"
  ];

  return (
    <section id="events" className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-nunito font-bold text-gray-800 dark:text-white mb-6">
            Event <span className="text-accent font-comfortaa">Rooms</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Make your special occasions unforgettable with our dedicated event spaces designed for birthdays, celebrations, and memorable gatherings
          </p>
        </div>

        {/* Event Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {eventFeatures.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <Card key={feature.title} className="card-hover text-center">
                <CardContent className="p-6">
                  <div className={`${feature.bgColor} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className={`h-7 w-7 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-nunito font-bold text-gray-800 dark:text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Event Room Showcase */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-poppins font-bold text-gray-800 mb-6">
                Dedicated Party Spaces
              </h3>
              <p className="text-gray-600 mb-6">
                Our beautifully designed event rooms provide the perfect backdrop for your celebration. 
                Each room comes fully equipped with everything you need to create magical moments.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {roomFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-accent hover:bg-accent/90 text-white px-8 py-3"
                >
                  Book Event Room
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-accent text-accent hover:bg-accent hover:text-white px-8 py-3"
                >
                  Get Quote
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-8 text-center">
                <PartyPopper className="h-24 w-24 text-accent mx-auto mb-4" />
                <h4 className="text-2xl font-poppins font-bold text-gray-800 mb-4">
                  Ready to Celebrate?
                </h4>
                <p className="text-gray-600 mb-6">
                  Let us handle the details while you enjoy the special moments with your loved ones.
                </p>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>2-4 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>Up to 20 guests</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Private room</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-6">
            Contact us to customize your perfect event package
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium">
              🎂 Birthday Packages
            </span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              🎈 Group Discounts
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              🎁 Custom Themes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}