import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Cpu, 
  Brain, 
  Zap, 
  Globe, 
  Microscope, 
  Rocket,
  GraduationCap,
  Building,
  Users,
  ChevronRight
} from "lucide-react";
import universityAiResearch from "@/assets/university-ai-research.jpg";
import { RobotSlider } from "./RobotSlider";

export const AIFutureSection = () => {
  const futureApplications = [
    {
      title: "Autonomous Content Moderation",
      description: "AI systems that can detect and filter synthetic media across all platforms in real-time",
      icon: Globe,
      timeline: "2025-2027",
      impact: "Global"
    },
    {
      title: "Medical Diagnostic Enhancement", 
      description: "Integration with medical imaging to detect manipulated diagnostic images and ensure patient safety",
      icon: Microscope,
      timeline: "2026-2028",
      impact: "Healthcare"
    },
    {
      title: "Legal Evidence Verification",
      description: "Court-admissible AI systems for verifying authenticity of video evidence in legal proceedings",
      icon: Building,
      timeline: "2027-2030",
      impact: "Justice System"
    },
    {
      title: "Educational Content Safety",
      description: "Protecting students from harmful synthetic educational content and ensuring learning material authenticity",
      icon: GraduationCap,
      timeline: "2025-2026",
      impact: "Education"
    }
  ];

  const ai2025Achievements = [
    {
      title: "GPT-5 and Advanced Language Models",
      description: "OpenAI's GPT-5 revolutionizes AI capabilities with unprecedented reasoning and multimodal understanding",
      country: "United States",
      impact: "Global AI advancement"
    },
    {
      title: "Quantum-AI Hybrid Computing",
      description: "Google and IBM achieve breakthrough quantum-classical AI integration for complex problem solving",
      country: "USA/Europe",
      impact: "Computing paradigm shift"
    },
    {
      title: "Autonomous Medical Diagnosis",
      description: "AI systems achieve 99.5% accuracy in cancer detection, surpassing human radiologists",
      country: "Global",
      impact: "Healthcare transformation"
    },
    {
      title: "Climate AI Solutions",
      description: "DeepMind's AI models predict climate patterns with 95% accuracy for disaster prevention",
      country: "United Kingdom",
      impact: "Environmental protection"
    }
  ];

  const pakistanAIProjects = [
    {
      title: "National AI Policy Implementation",
      description: "Pakistan launches comprehensive AI strategy with $100M investment in AI research and development",
      organization: "Ministry of IT & Telecom",
      year: "2025",
      impact: "National AI infrastructure"
    },
    {
      title: "Urdu Language AI Models",
      description: "LUMS and FAST develop advanced Urdu NLP models for local language processing",
      organization: "Pakistani Universities",
      year: "2025",
      impact: "Local language AI"
    },
    {
      title: "Agricultural AI Systems",
      description: "AI-powered crop monitoring and yield prediction systems deployed across Punjab and Sindh",
      organization: "Agriculture Department",
      year: "2025",
      impact: "Food security enhancement"
    },
    {
      title: "Healthcare AI Initiative",
      description: "Telemedicine AI assistants deployed in remote areas for basic diagnosis and treatment guidance",
      organization: "Ministry of Health",
      year: "2025",
      impact: "Healthcare accessibility"
    }
  ];

  const universityResearch = [
    {
      university: "Stanford University",
      focus: "Advanced Neural Network Architectures",
      projects: ["Transformer-based Detection Models", "Multi-modal Analysis Systems"],
      funding: "$2.5M"
    },
    {
      university: "MIT Computer Science",
      focus: "Real-time Processing Optimization",
      projects: ["Edge Computing Solutions", "Mobile Detection Systems"],
      funding: "$3.2M"
    },
    {
      university: "Carnegie Mellon",
      focus: "Adversarial Training Methods", 
      projects: ["Robust Defense Mechanisms", "Generative Model Security"],
      funding: "$1.8M"
    },
    {
      university: "UC Berkeley",
      focus: "Ethical AI and Bias Prevention",
      projects: ["Fair Detection Algorithms", "Privacy-Preserving Methods"],
      funding: "$2.1M"
    }
  ];

  const roboticsIntegration = [
    {
      area: "Human-Robot Interaction",
      description: "Ensuring authentic communication between humans and AI systems",
      applications: ["Service Robots", "Companion AI", "Healthcare Assistants"]
    },
    {
      area: "Autonomous Vehicles",
      description: "Verifying authenticity of visual data for safe navigation decisions", 
      applications: ["Self-Driving Cars", "Delivery Drones", "Traffic Management"]
    },
    {
      area: "Industrial Automation",
      description: "Quality control and authenticity verification in manufacturing processes",
      applications: ["Quality Assurance", "Product Authentication", "Security Systems"]
    }
  ];

  return (
    <section id="ai-future" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            🚀 Future
          </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 blue-heading-bar">
            <span>
              How AI Will Shape 
            </span>
              <span className="text-foreground font-extrabold"> Tomorrow</span>
            </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore the revolutionary applications of AI deepfake detection technology 
            across industries, universities, and robotics in the coming decades.
          </p>
        </div>

        {/* 2025 AI Achievements */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center">
              2025 Global AI Achievements
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Revolutionary AI breakthroughs that shaped the world in 2025
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ai2025Achievements.map((achievement, index) => (
              <Card key={index} className="glass-effect hover:shadow-lg transition-all duration-300 animate-float" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{achievement.country}</Badge>
                    <Badge className="bg-green-100 text-green-800">2025</Badge>
                  </div>
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-3">{achievement.description}</p>
                  <div className="flex items-center space-x-2 text-xs">
                    <Rocket className="w-3 h-3 text-primary" />
                    <span className="text-primary font-medium">{achievement.impact}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Pakistan AI Projects */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center">
              Pakistan AI Initiatives 2025
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Leading AI projects and initiatives driving Pakistan's digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pakistanAIProjects.map((project, index) => (
              <Card key={index} className="glass-effect hover:shadow-lg transition-all duration-300 border-green-200">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="border-green-500 text-green-700">🇵🇰 Pakistan</Badge>
                    <Badge className="bg-green-100 text-green-800">{project.year}</Badge>
                  </div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <p className="text-sm text-primary">{project.organization}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                  <div className="flex items-center space-x-2 text-xs">
                    <GraduationCap className="w-3 h-3 text-green-600" />
                    <span className="text-green-600 font-medium">{project.impact}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Future Applications */}
        <div className="mb-20">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 text-center">
            Future Applications & Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {futureApplications.map((app, index) => {
              const Icon = app.icon;
              return (
                <Card key={index} className="glass-effect hover:shadow-lg transition-all duration-300 animate-float" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <Badge variant="outline">{app.timeline}</Badge>
                      </div>
                      <Badge className="bg-black text-white">{app.impact}</Badge>
                    </div>
                    <CardTitle className="text-xl">{app.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{app.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* University Research */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">University Research & Development</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Leading academic institutions driving innovation in AI detection technology
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6">
              {universityResearch.map((research, index) => (
                <Card key={index} className="glass-effect">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-lg">{research.university}</h4>
                      <Badge variant="secondary">{research.funding}</Badge>
                    </div>
                    <p className="text-primary font-medium mb-3">{research.focus}</p>
                    <div className="space-y-2">
                      {research.projects.map((project, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <ChevronRight className="w-3 h-3" />
                          <span>{project}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={universityAiResearch} 
                  alt="University AI Research Laboratory"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute inset-0 ai-gradient opacity-20 rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Robotics Integration */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">AI in Robotics & Automation</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              How deepfake detection technology integrates with robotic systems for enhanced security and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roboticsIntegration.map((area, index) => (
              <Card key={index} className="glass-effect hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-lg">
                    <Cpu className="w-5 h-5 text-primary" />
                    <span>{area.area}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{area.description}</p>
                  <div className="space-y-2">
                    <p className="font-medium text-sm">Key Applications:</p>
                    {area.applications.map((app, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <span className="text-muted-foreground">{app}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Robot Slider */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">AI Detection Robots Gallery</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Advanced robotic systems designed for AI-powered deepfake detection and analysis
            </p>
          </div>
          <RobotSlider />
        </div>

        {/* Future Timeline */}
        <div className="mt-20 text-center">
          <Card className="glass-effect">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-6">Technology Roadmap</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-black mx-auto flex items-center justify-center text-white font-bold mb-3">2025</div>
                  <p className="text-sm font-medium">Current Systems</p>
                  <p className="text-xs text-muted-foreground">98.7% accuracy</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary mx-auto flex items-center justify-center text-primary-foreground font-bold mb-3">2027</div>
                  <p className="text-sm font-medium">Real-time Global</p>
                  <p className="text-xs text-muted-foreground">Platform integration</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-black mx-auto flex items-center justify-center text-white font-bold mb-3">2029</div>
                  <p className="text-sm font-medium">Edge Computing</p>
                  <p className="text-xs text-muted-foreground">Mobile & IoT</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary mx-auto flex items-center justify-center text-primary-foreground font-bold mb-3">2030</div>
                  <p className="text-sm font-medium">Quantum Enhanced</p>
                  <p className="text-xs text-muted-foreground">Next-gen AI</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};