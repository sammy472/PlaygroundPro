import { Facebook, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "About Flokiz", href: "#about" },
    { name: "Our Activities", href: "#activities" },
    { name: "Book a Visit", href: "#booking" },
    { name: "Contact Us", href: "#contact" },
    { name: "Privacy Policy", href: "#" }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-fredoka text-primary mb-4">Flokiz</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Africa's first premium indoor playground center where children learn, play, and grow in a safe, fun environment.
            </p>
            
            <div className="flex space-x-4">
              <button 
                onClick={() => window.open("#", "_blank")}
                className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </button>
              <button 
                onClick={() => window.open("#", "_blank")}
                className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </button>
              <button 
                onClick={() => window.open("https://wa.me/212522000000", "_blank")}
                className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-center">
                <span className="mr-2">📍</span>
                <span>Casablanca, Morocco</span>
              </p>
              <p className="flex items-center">
                <span className="mr-2">📞</span>
                <span>+212 522 000 000</span>
              </p>
              <p className="flex items-center">
                <span className="mr-2">📧</span>
                <span>hello@flokiz.ma</span>
              </p>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Flokiz. All rights reserved. Made with ❤️ for children in Morocco.
          </p>
          <div className="flex space-x-6 text-sm">
            <button className="text-gray-400 hover:text-white transition-colors">Terms of Service</button>
            <button className="text-gray-400 hover:text-white transition-colors">Privacy Policy</button>
            <button className="text-gray-400 hover:text-white transition-colors">Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
