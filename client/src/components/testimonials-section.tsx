import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Fatima Al-Rashid",
      role: "Mother of Yasmin, 4 years",
      content: "Flokiz has exceeded all our expectations! My daughter loves the music workshops and has learned so much. The staff is incredibly professional and caring.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "Ahmed Benali",
      role: "Father of twins, 6 years",
      content: "The hygiene standards and safety measures at Flokiz are outstanding. I feel completely comfortable leaving my children here while I run errands.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "Sarah Martinez",
      role: "Mother of Omar, 8 years",
      content: "My son has become more confident and social since visiting Flokiz. The science workshops are his favorite - he comes home excited to share what he learned!",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-6">
            What <span className="text-primary font-fredoka">Parents</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the families who have experienced the magic of Flokiz
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-neutral shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image}
                    alt={`${testimonial.name} testimonial`}
                    className="w-12 h-12 rounded-full object-cover mr-4" 
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
