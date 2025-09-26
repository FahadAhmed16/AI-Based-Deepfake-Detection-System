import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Eye, 
  MapPin, 
  Zap, 
  Database, 
  Shield, 
  ArrowRight,
  Cpu,
  Network,
  Target
} from "lucide-react";

export const TechnologySection = () => {
  const technologies = [
    {
      title: "Convolutional Neural Networks",
      description: "Multi-layer CNN architecture optimized for facial feature detection and analysis",
      details: "ResNet-50 backbone with custom attention mechanisms",
      icon: Brain,
      color: "text-blue-500"
    },
    {
      title: "Temporal Consistency Analysis", 
      description: "Frame-by-frame analysis to detect temporal inconsistencies in video sequences",
      details: "LSTM networks for sequence modeling and anomaly detection",
      icon: Eye,
      color: "text-purple-500"
    },
    {
      title: "Facial Landmark Detection",
      description: "68-point facial landmark tracking for micro-expression analysis", 
      details: "MediaPipe integration with custom refinement algorithms",
      icon: MapPin,
      color: "text-green-500"
    },
    {
      title: "Real-time Processing",
      description: "Optimized inference pipeline capable of processing video streams in real-time",
      details: "ONNX Runtime with GPU acceleration support",
      icon: Zap,
      color: "text-yellow-500"
    },
    {
      title: "Multi-modal Dataset",
      description: "Trained on diverse datasets including FaceForensics++, Celeb-DF, and DFDC",
      details: "15M+ samples across multiple deepfake generation techniques",
      icon: Database,
      color: "text-cyan-500"
    },
    {
      title: "Adversarial Training",
      description: "Robust training against adversarial attacks and novel deepfake methods",
      details: "Advanced data augmentation and regularization techniques",
      icon: Shield,
      color: "text-red-500"
    }
  ];

  const pipeline = [
    {
      step: "01",
      title: "Input Processing",
      description: "Video frame extraction and preprocessing",
      icon: Cpu
    },
    {
      step: "02", 
      title: "Feature Extraction",
      description: "CNN-based facial feature extraction",
      icon: Network
    },
    {
      step: "03",
      title: "Temporal Analysis", 
      description: "Sequence modeling and consistency checking",
      icon: Eye
    },
    {
      step: "04",
      title: "Classification",
      description: "Binary classification with confidence scoring",
      icon: Target
    }
  ];

  return (
    <section id="technology" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            🔬 Technology Stack
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 blue-heading-bar">
              <span>
                Cutting-Edge 
              </span>
            <span className="text-foreground font-bold"> AI Technology</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our deepfake detection system leverages cutting-edge machine learning techniques 
            and computer vision algorithms to achieve state-of-the-art performance.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <Card 
                key={index} 
                className="glass-effect hover:shadow-lg transition-all duration-300 animate-float"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-2 rounded-lg bg-background ${tech.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg">{tech.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">{tech.description}</p>
                  <p className="text-sm font-medium text-primary">{tech.details}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Detection Pipeline */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 blue-heading-bar">
              <span>
                Detection Pipeline 
              </span>
              <span className="text-foreground font-bold"> Architecture</span>
            </h3>
            <p className="text-muted-foreground">
              Our four-stage processing pipeline ensures accurate and efficient deepfake detection
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pipeline.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <Card className="glass-effect hover:shadow-lg transition-all duration-300 p-6">
                    <div className="text-center space-y-4">
                      <div className="w-12 h-12 mx-auto bg-black rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {step.step}
                      </div>
                      <Icon className="w-8 h-8 mx-auto text-primary" />
                      <h4 className="font-semibold text-lg">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </Card>
                  
                  {index < pipeline.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-muted-foreground" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};