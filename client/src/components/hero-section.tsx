import { Button } from "@/components/ui/button";
import { Calendar, Play, Baby, Rocket, Star, Puzzle } from "lucide-react";

export default function HeroSection() {
  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-pattern overflow-hidden">
      {/* Background with children playing */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
          alt="Children playing in colorful indoor playground" 
          className="w-full h-full object-cover opacity-20" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/70 dark:from-gray-900/90 dark:to-gray-900/70"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-bounce-slow mb-8">
          <Baby className="h-16 w-16 text-primary mx-auto" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-nunito font-bold text-gray-800 dark:text-white mb-6">
          Welcome to <span className="text-primary font-comfortaa">Flokiz</span>
        </h1>
        
        <p className="text-2xl md:text-3xl font-nunito font-medium text-secondary mb-4">
          Where Kids Learn Through Play
        </p>
        
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          First-of-its-kind indoor amusement center in Africa, designed for children aged 6 months to 12 years in Casablanca, Morocco
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={scrollToBooking}
            className="bg-primary hover:bg-red-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book a Visit
          </Button>
          
          <Button 
            variant="outline"
            className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 text-primary font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-primary"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Video
          </Button>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-wiggle">
          <Puzzle className="h-8 w-8 text-accent opacity-60" />
        </div>
        <div className="absolute top-40 right-20 animate-bounce-slow">
          <Rocket className="h-8 w-8 text-secondary opacity-60" />
        </div>
        <div className="absolute bottom-40 left-20 animate-wiggle">
          <Star className="h-8 w-8 text-primary opacity-60" />
        </div>
      </div>
    </section>
  );
}
