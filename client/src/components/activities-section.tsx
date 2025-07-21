import { Zap, Target, Puzzle, Gamepad2, Rocket, Crown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ActivitiesSection() {
  const activities = [
    {
      icon: Zap,
      title: "Laser Tag Arena",
      description: "Epic laser tag battles in our neon-lit arena with obstacles, hiding spots, and team missions for kids aged 6+.",
      bgColor: "bg-red-50"
    },
    {
      icon: Target,
      title: "Ball Pit Adventure",
      description: "Dive into thousands of colorful balls with slides, tunnels, and interactive games. Perfect for toddlers and young kids.",
      bgColor: "bg-teal-50"
    },
    {
      icon: Puzzle,
      title: "Obstacle Course",
      description: "Navigate through foam blocks, climbing walls, rope bridges, and tunnels to complete exciting physical challenges.",
      bgColor: "bg-yellow-50"
    },
    {
      icon: Gamepad2,
      title: "Interactive Gaming Zone",
      description: "Motion-sensor games, educational video games, and interactive wall projections that respond to touch and movement.",
      bgColor: "bg-green-50"
    },
    {
      icon: Rocket,
      title: "Space Adventure Playground",
      description: "Multi-level space-themed playground with rocket slides, moon bounce areas, and astronaut training obstacles.",
      bgColor: "bg-purple-50"
    },
    {
      icon: Crown,
      title: "Role-Play Kingdom",
      description: "Dress-up area with costumes, mini market, doctor's clinic, and kitchen where kids can roleplay different professions.",
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
