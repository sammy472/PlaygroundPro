import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-comfortaa text-primary">Flokiz</h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button 
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("activities")}
                className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Activities
              </button>
              <button 
                onClick={() => scrollToSection("workshops")}
                className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Workshops
              </button>
              <button 
                onClick={() => scrollToSection("events")}
                className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Events
              </button>
              <button 
                onClick={() => scrollToSection("pricing")}
                className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection("booking")}
                className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Book Visit
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Link href="/login">
              <Button variant="ghost" className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white dark:border-primary dark:text-primary">
                Sign Up
              </Button>
            </Link>
            <Button 
              onClick={() => scrollToSection("booking")}
              className="bg-primary hover:bg-red-500 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Book Now
            </Button>
          </div>
          
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <button 
                onClick={() => scrollToSection("home")}
                className="block text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary px-3 py-2 text-base font-medium w-full text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="block text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary px-3 py-2 text-base font-medium w-full text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("activities")}
                className="block text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary px-3 py-2 text-base font-medium w-full text-left"
              >
                Activities
              </button>
              <button 
                onClick={() => scrollToSection("workshops")}
                className="block text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary px-3 py-2 text-base font-medium w-full text-left"
              >
                Workshops
              </button>
              <button 
                onClick={() => scrollToSection("events")}
                className="block text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary px-3 py-2 text-base font-medium w-full text-left"
              >
                Events
              </button>
              <button 
                onClick={() => scrollToSection("pricing")}
                className="block text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary px-3 py-2 text-base font-medium w-full text-left"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection("booking")}
                className="block text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary px-3 py-2 text-base font-medium w-full text-left"
              >
                Book Visit
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="block text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary px-3 py-2 text-base font-medium w-full text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
