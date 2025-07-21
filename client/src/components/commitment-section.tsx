import { Shield, HandHeart, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function CommitmentSection() {
  const commitments = [
    {
      icon: Shield,
      title: "Child Security",
      description: "State-of-the-art security systems, controlled access, and continuous supervision ensure your child's safety at all times.",
      badges: ["24/7 Security", "CCTV Monitoring"],
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      badgeColor: "bg-green-600"
    },
    {
      icon: HandHeart,
      title: "Hygiene Standards", 
      description: "Medical-grade cleaning protocols, air purification systems, and regular sanitization maintain the highest hygiene standards.",
      badges: ["Daily Deep Clean", "Air Purification"],
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      badgeColor: "bg-blue-600"
    },
    {
      icon: GraduationCap,
      title: "Qualified Animators",
      description: "Our professional team is trained in child development, first aid, and creating engaging, educational experiences.",
      badges: ["Certified Staff", "First Aid Trained"],
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600", 
      badgeColor: "bg-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-6">
            Our <span className="text-green-600 font-fredoka">Commitment</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your child's safety, health, and happiness are our top priorities. We maintain the highest standards in everything we do.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {commitments.map((commitment) => {
            const IconComponent = commitment.icon;
            return (
              <div key={commitment.title} className="text-center">
                <div className={`${commitment.bgColor} rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-6`}>
                  <IconComponent className={`h-12 w-12 ${commitment.iconColor}`} />
                </div>
                <h3 className="text-2xl font-poppins font-bold text-gray-800 mb-4">{commitment.title}</h3>
                <p className="text-gray-600 mb-4">{commitment.description}</p>
                <div className="flex justify-center space-x-2">
                  {commitment.badges.map((badge) => (
                    <Badge 
                      key={badge}
                      className={`${commitment.badgeColor} text-white px-3 py-1 text-sm`}
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
