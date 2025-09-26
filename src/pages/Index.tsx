import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TechnologySection } from "@/components/TechnologySection";
import { DemoSection } from "@/components/DemoSection";
import { ResultsSection } from "@/components/ResultsSection";
import { AIFutureSection } from "@/components/AIFutureSection";
import { TeamSection } from "@/components/TeamSection";
import { DocumentationSection } from "@/components/DocumentationSection";
import aiDetectorRobot from "@/assets/ai-detector-robot.jpg";

const Index = () => {
  const [activeSection, setActiveSection] = useState("overview");

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["overview", "technology", "demo", "results", "ai-future", "team", "docs"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <HeroSection />
        <TechnologySection />
        <DemoSection />
        <ResultsSection />
        <AIFutureSection />
        <TeamSection />
        <DocumentationSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-muted/50 py-12 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden ai-glow">
                <img 
                  src={aiDetectorRobot} 
                  alt="AI Detector Robot" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold text-foreground">
                Deepfake Video Detector
              </span>
            </div>
            <p className="text-muted-foreground mb-6">
              Advanced AI-powered deepfake detection system developed by Information Technology Department
            </p>
            <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
              <span>© 2025 Final Year Research Project</span>
              <span>•</span>
              <span>IT Department</span>
              <span>•</span>
              <span>All rights reserved</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
