import { Activity, Music, FlaskConical, Utensils, Palette, Book } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function WorkshopsSection() {
  const workshops = [
    {
      icon: Activity,
      title: "Sports & Fitness",
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
      title: "Cooking Classes",
      description: "Learn basic cooking skills and nutrition through fun, hands-on culinary workshops designed for young chefs.",
      bgColor: "bg-green-50"
    },
    {
      icon: Palette,
      title: "Arts & Crafts",
      description: "Explore artistic expression through painting, crafts, storytelling, and cultural activities that celebrate Morocco's rich heritage.",
      bgColor: "bg-purple-50"
    },
    {
      icon: Book,
      title: "Language Learning",
      description: "Interactive language workshops in our multilingual library featuring English, French, and Arabic for all skill levels.",
      bgColor: "bg-blue-50"
    }
  ];

  const getIconColor = (index: number) => {
    const colors = ["text-red-500", "text-teal-500", "text-yellow-600", "text-green-600", "text-purple-600", "text-blue-600"];
    return colors[index];
  };

  return (
    <section id="workshops" className="py-20 bg-white dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-nunito font-bold text-gray-800 dark:text-white mb-6">
            Educational <span className="text-accent font-comfortaa">Workshops</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Structured learning programs designed to develop skills, creativity, and knowledge through engaging hands-on activities
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => {
            const IconComponent = workshop.icon;
            return (
              <Card key={workshop.title} className="card-hover">
                <CardContent className="p-8 text-center">
                  <div className={`${workshop.bgColor} rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className={`h-8 w-8 ${getIconColor(index)}`} />
                  </div>
                  <h3 className="text-2xl font-nunito font-bold text-gray-800 dark:text-white mb-4">{workshop.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{workshop.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            All workshops are led by qualified instructors and designed for different age groups
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              Ages 6 months - 3 years
            </span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              Ages 4 - 7 years
            </span>
            <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
              Ages 8 - 12 years
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}