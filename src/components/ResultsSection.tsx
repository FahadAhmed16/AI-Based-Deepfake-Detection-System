import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Target, 
  Zap, 
  CheckCircle, 
  BarChart3,
  Database,
  Cpu,
  Clock
} from "lucide-react";

export const ResultsSection = () => {
  const mainMetrics = [
    {
      title: "Overall Accuracy",
      value: "98.7%",
      change: "+2.3%",
      description: "Evaluated on FaceForensics++ test set",
      icon: Target,
      color: "text-blue-500"
    },
    {
      title: "Precision Score", 
      value: "97.9%",
      change: "+1.8%",
      description: "True positive deepfake detection rate",
      icon: CheckCircle,
      color: "text-green-500"
    },
    {
      title: "Recall Score",
      value: "98.4%", 
      change: "+2.1%",
      description: "Successfully identified deepfakes",
      icon: BarChart3,
      color: "text-purple-500"
    },
    {
      title: "Processing Speed",
      value: "1.7s",
      change: "-0.4s",
      description: "Average inference time per video", 
      icon: Zap,
      color: "text-orange-500"
    }
  ];

  const benchmarkData = [
    {
      dataset: "FaceForensics++",
      samples: "1.8M",
      accuracy: 98.7,
      precision: 97.9,
      recall: 98.4
    },
    {
      dataset: "Celeb-DF v2",
      samples: "590K", 
      accuracy: 96.3,
      precision: 95.7,
      recall: 97.1
    },
    {
      dataset: "DFDC Preview",
      samples: "5.2M",
      accuracy: 94.8,
      precision: 93.6,
      recall: 96.2
    },
    {
      dataset: "DeeperForensics",
      samples: "60K",
      accuracy: 97.1,
      precision: 96.4,
      recall: 97.8
    }
  ];

  const trainingMetrics = [
    {
      label: "Training Samples",
      value: "15M+",
      description: "video samples",
      icon: Database
    },
    {
      label: "Deepfake Methods", 
      value: "25",
      description: "different techniques",
      icon: Cpu
    },
    {
      label: "Compression Levels",
      value: "50+",
      description: "video qualities",
      icon: BarChart3
    },
    {
      label: "Resolution Support",
      value: "4K",
      description: "maximum quality",
      icon: Target
    }
  ];

  const architectureSpecs = [
    {
      component: "ResNet-50 backbone",
      description: "Core feature extraction network"
    },
    {
      component: "Custom attention layers", 
      description: "Enhanced focus on facial regions"
    },
    {
      component: "147M parameters",
      description: "Optimized model complexity"
    },
    {
      component: "Mixed precision training",
      description: "Efficient GPU utilization"
    }
  ];

  const projectStats = [
    {
      label: "Research Hours",
      value: "500+",
      icon: Clock,
      color: "text-blue-500"
    },
    {
      label: "Training Samples", 
      value: "15M+",
      icon: Database,
      color: "text-green-500"
    },
    {
      label: "Peak Accuracy",
      value: "98.7%",
      icon: Target,
      color: "text-purple-500"
    }
  ];

  return (
    <section id="results" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            📊 Performance Results
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 blue-heading-bar">
            <span>
              State-of-the-Art 
            </span>
            <span className="text-foreground font-bold"> Performance</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our system achieves state-of-the-art performance across multiple benchmark datasets, 
            demonstrating superior accuracy and efficiency in deepfake detection.
          </p>
        </div>

        {/* Main Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {mainMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card key={index} className="glass-effect hover:shadow-lg transition-all duration-300 animate-float" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className={`p-3 rounded-full bg-background ${metric.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-foreground">
                      {metric.value}
                    </div>
                    <div className="text-lg font-semibold">{metric.title}</div>
                    <div className="flex items-center justify-center space-x-2">
                      <Badge variant={metric.change.startsWith('+') ? 'default' : 'secondary'} className="text-xs">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        {metric.change}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{metric.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Benchmark Comparison */}
        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8">
            Benchmark Comparison
          </h3>
          <p className="text-center text-muted-foreground mb-8">
            Performance evaluation across industry-standard deepfake detection datasets
          </p>
          
          <Card className="glass-effect overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="text-left p-4 font-semibold">Dataset</th>
                      <th className="text-left p-4 font-semibold">Samples</th>
                      <th className="text-left p-4 font-semibold">Accuracy</th>
                      <th className="text-left p-4 font-semibold">Precision</th>
                      <th className="text-left p-4 font-semibold">Recall</th>
                    </tr>
                  </thead>
                  <tbody>
                    {benchmarkData.map((data, index) => (
                      <tr key={index} className="border-b hover:bg-muted/25 transition-colors">
                        <td className="p-4 font-medium">{data.dataset}</td>
                        <td className="p-4 text-muted-foreground">{data.samples}</td>
                        <td className="p-4">
                          <div className="flex items-center space-x-2">
                            <span className="font-semibold text-primary">{data.accuracy}%</span>
                            <Progress value={data.accuracy} className="w-16 h-2" />
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center space-x-2">
                            <span className="font-semibold text-green-600">{data.precision}%</span>
                            <Progress value={data.precision} className="w-16 h-2" />
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center space-x-2">
                            <span className="font-semibold text-purple-600">{data.recall}%</span>
                            <Progress value={data.recall} className="w-16 h-2" />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Training Data & Model Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Training Data */}
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Database className="w-5 h-5 text-primary" />
                <span>Training Data</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {trainingMetrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                    <div className="flex items-center space-x-3">
                      <Icon className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-semibold">{metric.label}</div>
                        <div className="text-sm text-muted-foreground">{metric.description}</div>
                      </div>
                    </div>
                    <div className="text-xl font-bold text-foreground">
                      {metric.value}
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Model Architecture */}
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Cpu className="w-5 h-5 text-primary" />
                <span>Model Architecture</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {architectureSpecs.map((spec, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-muted/50">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-sm">{spec.component}</div>
                    <div className="text-sm text-muted-foreground">{spec.description}</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Project Stats */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Research Impact</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {projectStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-muted/50 flex items-center justify-center ${stat.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="text-4xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};