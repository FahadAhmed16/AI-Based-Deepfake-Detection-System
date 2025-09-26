import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Download, 
  Github, 
  BookOpen, 
  Code2, 
  Terminal,
  ExternalLink,
  Layers,
  Settings,
  Database
} from "lucide-react";

export const DocumentationSection = () => {
  const documents = [
    {
      title: "AI Deepfake Video Detection System - Comprehensive Research Paper",
      description: "Complete academic paper covering detection approaches, deep learning architectures, visual artifact analysis, and comprehensive evaluation of AI-powered deepfake detection using CNNs, RNNs, and advanced neural networks",
      size: "2.8 MB",
      format: "PDF",
      type: "research",
      icon: BookOpen,
      color: "text-blue-500",
      downloadUrl: "/docs/AI_Deepfake_Video_Detection_System_Research_Paper.pdf"
    },
    {
      title: "AI Deepfake Detector Technical Implementation Guide", 
      description: "Foundational concepts, step-by-step implementation covering environment setup, data collection & preprocessing, CNN/RNN/Transformer architectures, transfer learning with VGG/ResNet/EfficientNet, model training, evaluation, and production deployment strategies",
      size: "2.4 MB",
      format: "PDF",
      type: "technical",
      icon: Code2,
      color: "text-green-500",
      downloadUrl: "/docs/AI_Deepfake_Detector_Technical_Implementation_Guide.pdf"
    },
    {
      title: "AI Detection API Documentation & Integration",
      description: "Complete API documentation covering authentication, HTTP requests, endpoint usage, integration examples with Python/Node.js/curl, and real-world implementation for cloud-based deepfake detection services",
      size: "1.2 MB", 
      format: "PDF",
      type: "api",
      icon: Terminal,
      color: "text-purple-500",
      downloadUrl: "/docs/AI_Detection_API_Documentation_Integration.pdf"
    }
  ];

  const quickStartSteps = [
    {
      step: "1",
      title: "Environment Setup",
      description: "Install Python 3.8+, PyTorch, and required dependencies",
      code: "pip install torch torchvision opencv-python",
      icon: Settings
    },
    {
      step: "2",
      title: "Model Download", 
      description: "Download pre-trained model weights and configuration files",
      code: "wget https://models.ai-detector.com/deepfake-v2.pth",
      icon: Download
    },
    {
      step: "3",
      title: "Input Preparation",
      description: "Preprocess video/image files according to model requirements", 
      code: "python preprocess.py --input video.mp4 --output frames/",
      icon: Layers
    },
    {
      step: "4",
      title: "Inference",
      description: "Run detection algorithm and interpret confidence scores",
      code: "python detect.py --model deepfake-v2.pth --input frames/",
      icon: Terminal
    }
  ];

  const publications = [
    {
      title: "Advanced AI Deepfake Detection Using Multi-Modal CNNs and Temporal Analysis",
      authors: "Ahmed, F., Hassan, Y., Ali, J., Khan, R.O., Jawaid, M.",
      venue: "Computer Vision and Pattern Recognition (CVPR) 2025",
      status: "Published",
      type: "conference",
      year: "2025"
    },
    {
      title: "Real-Time AI-Powered Synthetic Media Detection for Social Platforms",
      authors: "Hassan, Y., Ahmed, F., Ali, J.",
      venue: "IEEE International Conference on AI and Machine Learning",
      status: "Accepted",
      type: "conference", 
      year: "2025"
    },
    {
      title: "Robust Adversarial Training Methods for AI Deepfake Detection Systems",
      authors: "Khan, R.O., Ahmed, F., Jawaid, M.",
      venue: "International Journal of Artificial Intelligence Research",
      status: "Under Review",
      type: "journal",
      year: "2025"
    }
  ];

  const systemRequirements = [
    {
      category: "Python Version",
      requirement: "3.8 or higher",
      recommended: "3.9+"
    },
    {
      category: "Memory", 
      requirement: "8GB RAM minimum",
      recommended: "16GB+"
    },
    {
      category: "GPU",
      requirement: "CUDA-compatible (recommended)",
      recommended: "RTX 3080+"
    },
    {
      category: "Storage",
      requirement: "5GB available space", 
      recommended: "10GB+"
    }
  ];

  const codeExamples = [
    {
      title: "Basic Detection",
      language: "Python",
      code: `from deepfake_detector import DeepfakeDetector

detector = DeepfakeDetector()
result = detector.detect("video.mp4")
print(f"Confidence: {result.confidence}%")
print(f"Is Deepfake: {result.is_deepfake}")`
    },
    {
      title: "Batch Processing",
      language: "Python", 
      code: `import os
from deepfake_detector import BatchProcessor

processor = BatchProcessor(model_path="model.pth")
results = processor.process_directory("./videos/")
for filename, result in results.items():
    print(f"{filename}: {result.confidence}%")`
    },
    {
      title: "Real-time Stream",
      language: "Python",
      code: `from deepfake_detector import StreamDetector
import cv2

detector = StreamDetector()
cap = cv2.VideoCapture(0)

while True:
    ret, frame = cap.read()
    result = detector.detect_frame(frame)
    if result.confidence > 0.8:
        print("Deepfake detected!"))`
    }
  ];

  return (
    <section id="docs" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            📚 Documentation & Resources
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 blue-heading-bar">
            <span>
              Comprehensive 
            </span>
            <span className="text-foreground font-extrabold"> Documentation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Access comprehensive technical documentation, AI research papers, and implementation 
            guides for our deepfake detection system.
          </p>
        </div>

        {/* Documents */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-16">
          {documents.map((doc, index) => {
            const Icon = doc.icon;
            return (
              <Card key={index} className="glass-effect hover:shadow-lg transition-all duration-300 animate-float" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`p-2 rounded-lg bg-muted/50 ${doc.color}`}>
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <Badge variant="outline" className="text-xs">
                        {doc.format} • {doc.size}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-base sm:text-lg leading-tight">{doc.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-0">
                  <p className="text-sm text-muted-foreground leading-relaxed">{doc.description}</p>
                  <Button 
                    className="w-full ai-glow text-sm"
                    onClick={() => {
                      if (doc.downloadUrl) {
                        const link = document.createElement('a');
                        link.href = doc.downloadUrl;
                        link.download = doc.title + '.pdf';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }
                    }}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Start Guide */}
        <div className="mb-16">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6 sm:mb-8">
            Quick Start Guide
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {quickStartSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="glass-effect">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-black rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {step.step}
                      </div>
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2 text-sm sm:text-base">{step.title}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3 leading-relaxed">{step.description}</p>
                    <div className="bg-muted/50 rounded p-2 text-xs font-mono text-primary overflow-x-auto">
                      {step.code}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Code Examples */}
        <div className="mb-16">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6 sm:mb-8">
            Code Examples
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {codeExamples.map((example, index) => (
              <Card key={index} className="glass-effect">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base sm:text-lg">{example.title}</CardTitle>
                    <Badge variant="outline" className="text-xs">{example.language}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="bg-muted/50 rounded-lg p-3 sm:p-4 overflow-x-auto">
                    <pre className="text-xs sm:text-sm text-foreground whitespace-pre-wrap">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Publications */}
        <div className="mb-16">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6 sm:mb-8">
            Research Publications
          </h3>
          <div className="space-y-4 sm:space-y-6">
            {publications.map((pub, index) => (
              <Card key={index} className="glass-effect">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-base sm:text-lg mb-2 leading-tight">{pub.title}</h4>
                      <p className="text-muted-foreground text-sm mb-2">{pub.authors}</p>
                      <p className="text-primary font-medium text-sm">{pub.venue} • {pub.year}</p>
                    </div>
                    <div className="flex items-center space-x-2 self-start">
                      <Badge variant={pub.status === 'Published' || pub.status === 'Accepted' ? 'default' : 'outline'} className={pub.status === 'Under Review' ? 'bg-white text-black border border-gray-300' : 'text-xs'}>
                        {pub.status}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* System Requirements & GitHub */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* System Requirements */}
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Database className="w-5 h-5 text-primary" />
                <span>System Requirements</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {systemRequirements.map((req, index) => (
                <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                  <div>
                    <div className="font-medium text-sm">{req.category}</div>
                    <div className="text-xs text-muted-foreground">Recommended: {req.recommended}</div>
                  </div>
                  <div className="text-sm font-semibold text-primary">
                    {req.requirement}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* GitHub Repository */}
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Github className="w-5 h-5 text-primary" />
                <span>Source Code</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                Complete source code and documentation available on GitHub. 
                Includes model weights, training scripts, and deployment guides.
              </p>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Language</span>
                  <Badge variant="outline">Python</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Framework</span>
                  <Badge variant="outline">PyTorch</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">License</span>
                  <Badge variant="outline">MIT</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Stars</span>
                  <Badge variant="outline">⭐ 1.2k</Badge>
                </div>
              </div>

            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};