import { Activity, Music, FlaskConical, Utensils, Palette, Book } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ActivitiesSection() {
  const activities = [
    {
      icon: Activity,
      title: "Sports",
      description: "Physical development through fun sports activities, obstacle courses, and movement games that build coordination and strength.",
      bgColor: "bg-red-50"
    },
    {
      icon: Music,
      title: "Music & Dance",
      description: "Express creativity through rhythm, melody, and movement. Our music workshops develop artistic skills and cultural appreciation.",
      bgColor: "bg-teal-50"
    },
    {
      icon: FlaskConical,
      title: "Science & Technology",
      description: "Spark curiosity with hands-on experiments, coding basics, and STEM activities that make learning science exciting and accessible.",
      bgColor: "bg-yellow-50"
    },
    {
      icon: Utensils,
      title: "Catering",
      description: "Healthy, delicious meals and snacks prepared with care. Learn about nutrition while enjoying kid-friendly, wholesome food.",
      bgColor: "bg-green-50"
    },
    {
      icon: Palette,
      title: "Culture & Creativity",
      description: "Explore artistic expression through crafts, storytelling, and cultural activities that celebrate Morocco's rich heritage.",
      bgColor: "bg-purple-50"
    },
    {
      icon: Book,
      title: "Reading Corner",
      description: "Discover the joy of reading in our multilingual library featuring books in English, French, and Arabic for all reading levels.",
      bgColor: "bg-blue-50"
    }
  ];

  const getIconColor = (index: number) => {
    const colors = ["text-red-500", "text-teal-500", "text-yellow-600", "text-green-600", "text-purple-600", "text-blue-600"];
    return colors[index];
  };

  return (
    <section id="activities" className="py-20 bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-6">
            Our <span className="text-secondary font-fredoka">Activities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our diverse range of workshops and activities designed to nurture every aspect of your child's development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => {
            const IconComponent = activity.icon;
            return (
              <Card key={activity.title} className="card-hover">
                <CardContent className="p-8 text-center">
                  <div className={`${activity.bgColor} rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className={`h-8 w-8 ${getIconColor(index)}`} />
                  </div>
                  <h3 className="text-2xl font-poppins font-bold text-gray-800 mb-4">{activity.title}</h3>
                  <p className="text-gray-600">{activity.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
