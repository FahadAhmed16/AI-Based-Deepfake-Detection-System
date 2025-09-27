// src/components/Navbar.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield, Eye, Cpu, FileText, Users, Home, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import aiDetectorRobot from "@/assets/ai-detector-robot.jpg";

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navbar = ({ activeSection, setActiveSection }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

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
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Your Original */}
          <div className="flex items-center space-x-3">
            <img
              src={aiDetectorRobot}
              alt="AI Detector Robot"
              className="w-8 h-8 rounded-full"
            />
            <span className="font-bold text-lg text-primary">
              Deepfake Video Detector
            </span>
          </div>

          {/* Desktop Navigation - Your Original */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(({ id, label, icon: Icon }) => (
              <Button
                key={id}
                variant="ghost"
                onClick={() => handleNavClick(id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </Button>
            ))}
          </div>

          {/* Auth Section */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="outline"
              onClick={() => handleNavClick('demo')}
            >
              Try Demo
            </Button>
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-3">
                <span className="text-sm text-muted-foreground">
                  Welcome, {user?.name}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLogout}
                  className="text-muted-foreground hover:text-primary"
                >
                  <LogOut className="w-4 h-4 mr-1" />
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Button variant="ghost" onClick={() => navigate('/login')}>
                  Login
                </Button>
                <Button onClick={() => navigate('/signup')}>
                  Sign Up
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navItems.map(({ id, label, icon: Icon }) => (
              <Button
                key={id}
                variant="ghost"
                onClick={() => handleNavClick(id)}
                className={`flex items-center space-x-3 w-full px-3 py-3 rounded-lg transition-all duration-300 ${
                  activeSection === id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </Button>
            ))}
            
            <div className="pt-4 space-y-2 border-t border-border/20">
              <Button
                variant="outline"
                onClick={() => handleNavClick('demo')}
                className="w-full"
              >
                Try Demo
              </Button>
              
              {isAuthenticated ? (
                <div className="space-y-2">
                  <div className="text-center text-sm text-muted-foreground py-2">
                    Welcome, {user?.name}
                  </div>
                  <Button
                    variant="ghost"
                    onClick={handleLogout}
                    className="w-full text-muted-foreground hover:text-primary"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </Button>
                </div>
              ) : (
                <>
                  <Button variant="ghost" onClick={() => navigate('/login')} className="w-full">
                    Login
                  </Button>
                  <Button onClick={() => navigate('/signup')} className="w-full">
                    Sign Up
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
