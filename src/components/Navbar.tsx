import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield, Eye, Cpu, FileText, Users, Home } from "lucide-react";
import aiDetectorRobot from "@/assets/ai-detector-robot.jpg";

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navbar = ({ activeSection, setActiveSection }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "overview", label: "Overview", icon: Home },
    { id: "technology", label: "Technology", icon: Cpu },
    { id: "demo", label: "Demo", icon: Eye },
    { id: "results", label: "Results", icon: Shield },
    { id: "team", label: "Team", icon: Users },
    { id: "docs", label: "Docs", icon: FileText },
  ];

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    
    // Smooth scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect bg-background/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg overflow-hidden ai-glow">
              <img 
                src={aiDetectorRobot} 
                alt="AI Detector Robot" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-xl font-bold text-foreground">
              Deepfake Video Detector
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{label}</span>
              </button>
            ))}
            <Button 
              variant="default" 
              className="ai-glow"
              onClick={() => handleNavClick('demo')}
            >
              Try Demo
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t">
          <div className="px-4 py-6 space-y-3">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`flex items-center space-x-3 w-full px-3 py-3 rounded-lg transition-all duration-300 ${
                  activeSection === id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{label}</span>
              </button>
            ))}
            <Button 
              className="w-full mt-4 ai-glow"
              onClick={() => handleNavClick('demo')}
            >
              Try Demo
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};