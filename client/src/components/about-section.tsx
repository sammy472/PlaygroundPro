import { Check } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-nunito font-bold text-gray-800 dark:text-white mb-6">
            What Makes <span className="text-primary font-comfortaa">Flokiz</span> Special?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing childhood development through play, creativity, and learning in a safe, hygienic, and fun environment
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <img 
              src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Colorful modern playground equipment" 
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
          </div>
          
          <div className="order-1 md:order-2">
            <h3 className="text-3xl font-poppins font-bold text-gray-800 mb-6">
              Africa's First Premium Indoor Playground
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Flokiz combines cognitive, physical, and creative development in one magical space. Our state-of-the-art facility is designed to stimulate young minds while ensuring maximum safety and hygiene standards.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-green-500 text-white rounded-full p-2 mr-4">
                  <Check className="h-5 w-5" />
                </div>
                <span className="text-lg font-medium">Ultra-modern play equipment</span>
              </div>
              <div className="flex items-center">
                <div className="bg-green-500 text-white rounded-full p-2 mr-4">
                  <Check className="h-5 w-5" />
                </div>
                <span className="text-lg font-medium">Multilingual library (English, French, Arabic)</span>
              </div>
              <div className="flex items-center">
                <div className="bg-green-500 text-white rounded-full p-2 mr-4">
                  <Check className="h-5 w-5" />
                </div>
                <span className="text-lg font-medium">Well-trained professional animators</span>
              </div>
              <div className="flex items-center">
                <div className="bg-green-500 text-white rounded-full p-2 mr-4">
                  <Check className="h-5 w-5" />
                </div>
                <span className="text-lg font-medium">Highest hygiene and safety standards</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
