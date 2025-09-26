import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Shield, Clock, Database, Play, FileText, Brain, Eye, Zap } from "lucide-react";
import Typewriter from "react-typewriter-effect";
import aiRobotDark from "@/assets/ai-robot-dark.jpg";
import menFaceDetection from "@/assets/men-face-detection.jpg";
import faceDetection2 from "@/assets/face-detection-2.jpg";

export const HeroSection = () => {
  const stats = [
    {
      value: "98.7%",
      label: "Detection Accuracy",
      icon: Shield,
      color: "text-green-500"
    },
    {
      value: "<2s",
      label: "Processing Time", 
      icon: Clock,
      color: "text-blue-500"
    },
    {
      value: "15M+",
      label: "Training Samples",
      icon: Database,
      color: "text-purple-500"
    }
  ];

  const features = [
    { 
      label: "Deep Learning", 
      icon: Brain,
      title: "Deep Neural Networks",
      description: "Our system utilizes advanced deep learning architectures including Convolutional Neural Networks (CNNs) and Recurrent Neural Networks (RNNs) to analyze facial features and detect synthetic content.",
      details: [
        "ResNet-50 backbone for feature extraction",
        "Custom attention mechanisms for focus areas",
        "Multi-scale feature fusion for robust detection",
        "Transfer learning from large-scale datasets"
      ]
    },
    { 
      label: "Computer Vision", 
      icon: Eye,
      title: "Advanced Computer Vision",
      description: "State-of-the-art computer vision techniques for facial analysis, landmark detection, and temporal consistency checking across video frames.",
      details: [
        "68-point facial landmark detection",
        "Micro-expression analysis algorithms",
        "Texture and lighting inconsistency detection",
        "Motion pattern analysis across frames"
      ]
    },
    { 
      label: "Real-time Analysis", 
      icon: Zap,
      title: "Real-time Processing",
      description: "Optimized inference pipeline capable of processing video streams and images in real-time with sub-second response times.",
      details: [
        "ONNX Runtime optimization for speed",
        "GPU acceleration support",
        "Batch processing for multiple frames",
        "Edge deployment capabilities"
      ]
    }
  ];

  return (
    <section id="overview" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${aiRobotDark})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="absolute inset-0 glow-gradient" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          {/* AI Face Detection Heading */}
          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6 blue-heading-bar">
              AI Face Detection
            </h2>
            
            {/* Face Detection Images */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="w-full sm:w-72 md:w-80 lg:w-96 h-40 sm:h-48 md:h-52 rounded-xl overflow-hidden glass-effect ai-glow">
                <img 
                  src={menFaceDetection} 
                  alt="Men's AI Face Detection Technology"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full sm:w-72 md:w-80 lg:w-96 h-40 sm:h-48 md:h-52 rounded-xl overflow-hidden glass-effect ai-glow">
                <img 
                  src={faceDetection2} 
                  alt="Advanced Facial Analysis System"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Badge */}
          <div className="flex justify-center">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium glass-effect">
              🎓 Final Year Research Project
            </Badge>
          </div>

          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight">
              <Typewriter
                textStyle={{
                  color: 'hsl(var(--foreground))',
                  fontWeight: 'bold',
                }}
                startDelay={1000}
                cursorColor="hsl(var(--primary))"
                multiText={[
                  'AI-Powered Deepfake Detection System',
                ]}
                multiTextDelay={1000}
                typeSpeed={100}
                multiTextLoop
              />
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              <Typewriter
                textStyle={{
                  color: 'hsl(var(--muted-foreground))',
                }}
                startDelay={3000}
                cursorColor="hsl(var(--primary))"
                multiText={[
                  'Advanced machine learning technology to identify and combat synthetic media manipulation using state-of-the-art neural networks and computer vision algorithms.',
                ]}
                multiTextDelay={1000}
                typeSpeed={50}
                multiTextLoop
              />
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto px-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="glass-effect p-4 sm:p-6 rounded-xl card-gradient animate-float"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <Icon className={`w-6 sm:w-8 h-6 sm:h-8 ${stat.color}`} />
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
            <Button 
              size="lg" 
              className="ai-glow px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg w-full sm:w-auto"
              onClick={() => {
                const element = document.getElementById('demo');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Play className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
              Try Live Demo
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg glass-effect w-full sm:w-auto"
              onClick={() => {
                const element = document.getElementById('docs');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <FileText className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
              View Research
            </Button>
          </div>

          {/* Features */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-6 sm:pt-8 px-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="flex items-center space-x-2 glass-effect px-3 sm:px-4 py-2 rounded-full hover:bg-primary/10 transition-all duration-300"
                    >
                      <Icon className="w-4 h-4 text-primary" />
                      <span className="text-xs sm:text-sm font-medium">
                        {feature.label}
                      </span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-lg">
                    <DialogHeader>
                      <DialogTitle className="flex items-center space-x-2">
                        <Icon className="w-5 h-5 text-primary" />
                        <span>{feature.title}</span>
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                      <div>
                        <h4 className="font-semibold mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {feature.details.map((detail, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};