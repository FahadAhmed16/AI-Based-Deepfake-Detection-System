import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import robotSlider1 from "@/assets/robot-slider-1.jpg";
import robotSlider2 from "@/assets/robot-slider-2.jpg";
import robotSlider3 from "@/assets/robot-slider-3.jpg";

export const RobotSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const robots = [
    {
      image: robotSlider1,
      title: "AI Detection Robot",
      description: "Advanced AI robot with neural processing capabilities for deepfake detection"
    },
    {
      image: robotSlider2,
      title: "Analysis Robot",
      description: "Humanoid robot specialized in video analysis and pattern recognition"
    },
    {
      image: robotSlider3,
      title: "Cyber Security Robot",
      description: "Next-generation robot for digital content authentication and security"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % robots.length);
    }, 4000);
    
    return () => clearInterval(timer);
  }, [robots.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % robots.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + robots.length) % robots.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative overflow-hidden rounded-lg shadow-2xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {robots.map((robot, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              <img
                src={robot.image}
                alt={robot.title}
                className="w-full h-64 sm:h-80 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                <h3 className="text-lg sm:text-xl font-bold mb-2">{robot.title}</h3>
                <p className="text-sm sm:text-base text-gray-200">{robot.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30"
          onClick={prevSlide}
        >
          <ChevronLeft className="w-4 h-4 text-white" />
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30"
          onClick={nextSlide}
        >
          <ChevronRight className="w-4 h-4 text-white" />
        </Button>
        
        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {robots.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
      
      {/* Robot Info Cards */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {robots.map((robot, index) => (
          <div
            key={index}
            className={`p-3 sm:p-4 rounded-lg cursor-pointer transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-primary/10 border border-primary/20' 
                : 'bg-muted/50 hover:bg-muted/70'
            }`}
            onClick={() => setCurrentSlide(index)}
          >
            <h4 className="font-semibold text-sm sm:text-base mb-1">{robot.title}</h4>
            <p className="text-xs sm:text-sm text-muted-foreground">{robot.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};