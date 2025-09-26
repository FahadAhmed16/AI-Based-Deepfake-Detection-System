import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { 
  Upload, 
  Play, 
  FileVideo, 
  FileImage, 
  CheckCircle, 
  AlertCircle,
  Clock,
  Shield,
  Eye,
  History,
  X
} from "lucide-react";
import { toast } from "sonner";

export const DemoSection = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [showHistory, setShowHistory] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Detection history state
  const [detectionHistory, setDetectionHistory] = useState([
    {
      id: 1,
      filename: "sample_video_1.mp4",
      result: "Real",
      confidence: 97.3,
      timestamp: "2025-01-15 14:30:25",
      details: "Original content with consistent facial features and natural expressions"
    },
    {
      id: 2, 
      filename: "deepfake_test.mp4",
      result: "Deepfake",
      confidence: 94.8,
      timestamp: "2025-01-15 13:22:10", 
      details: "Detected inconsistencies in temporal facial landmarks and lighting"
    },
    {
      id: 3,
      filename: "faceswap_example.mov",
      result: "Face Swap",
      confidence: 89.2,
      timestamp: "2025-01-15 12:15:43",
      details: "Artificial facial boundary artifacts and unnatural micro-expressions"
    }
  ]);

  const sampleResults = [
    {
      type: "Real Video",
      confidence: 97.3,
      status: "authentic",
      description: "Original content with consistent facial features and natural expressions",
      color: "text-green-500"
    },
    {
      type: "Deepfake",
      confidence: 94.8, 
      status: "synthetic",
      description: "Detected inconsistencies in temporal facial landmarks and lighting",
      color: "text-red-500"
    },
    {
      type: "Face Swap",
      confidence: 89.2,
      status: "manipulated", 
      description: "Artificial facial boundary artifacts and unnatural micro-expressions",
      color: "text-orange-500"
    }
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 50 * 1024 * 1024) {
        toast.error("File size must be less than 50MB");
        return;
      }
      
      const allowedTypes = ['video/mp4', 'video/avi', 'video/mov', 'image/jpeg', 'image/png'];
      if (!allowedTypes.includes(file.type)) {
        toast.error("Please upload MP4, AVI, MOV, JPG, or PNG files only");
        return;
      }

      setUploadedFile(file);
      setAnalysisComplete(false);
      setAnalysisResult(null);
      toast.success("File uploaded successfully!");
    }
  };

  const runAnalysis = async () => {
    if (!uploadedFile) return;

    setIsAnalyzing(true);
    toast.info("Starting AI analysis...");

    // Simulate analysis process
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Mock result with enhanced details
    const mockResult = {
      filename: uploadedFile.name,
      result: Math.random() > 0.5 ? "Real" : "Deepfake",
      confidence: Math.round((85 + Math.random() * 10) * 10) / 10,
      processingTime: "1.7s",
      details: "Analysis complete. Detailed temporal and spatial feature analysis performed.",
      timestamp: new Date().toLocaleString(),
      // Enhanced video analysis details
      videoDetails: {
        resolution: `${Math.floor(Math.random() * 1000) + 720}x${Math.floor(Math.random() * 600) + 480}`,
        frameRate: `${Math.floor(Math.random() * 30) + 24} fps`,
        duration: `${Math.floor(Math.random() * 120) + 30}s`,
        platform: ["YouTube", "TikTok", "Instagram", "Facebook", "Twitter"][Math.floor(Math.random() * 5)],
        codec: ["H.264", "H.265", "VP9", "AV1"][Math.floor(Math.random() * 4)],
        fileSize: `${(Math.random() * 50 + 10).toFixed(1)} MB`,
        uploadSource: ["Direct Upload", "Social Media", "Web Scraping", "User Device"][Math.floor(Math.random() * 4)],
        metadata: {
          created: new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString(),
          device: ["iPhone 15", "Samsung Galaxy", "Google Pixel", "Canon DSLR", "Unknown"][Math.floor(Math.random() * 5)],
          location: ["USA", "India", "China", "Europe", "Unknown"][Math.floor(Math.random() * 5)],
        }
      }
    };

    setAnalysisResult(mockResult);
    setIsAnalyzing(false);
    setAnalysisComplete(true);
    
    // Add to detection history
    const newHistoryItem = {
      id: detectionHistory.length + 1,
      filename: mockResult.filename,
      result: mockResult.result,
      confidence: mockResult.confidence,
      timestamp: mockResult.timestamp,
      details: mockResult.details
    };
    setDetectionHistory(prev => [newHistoryItem, ...prev]);
    
    toast.success("Analysis completed and saved to history!");
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <section id="demo" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            🎯 Demo
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 blue-heading-bar">
            <span>
              Try Our 
            </span>
            <span className="text-foreground font-bold"> AI Detection</span> System
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience our AI deepfake detection system in action. Upload a video or image 
            and see real-time analysis with detailed confidence scores.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Upload Section */}
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Upload className="w-5 h-5 text-primary" />
                <span>Live Detection Demo</span>
              </CardTitle>
              <p className="text-muted-foreground">
                Upload a video or image file to test our detection algorithm
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Upload Area */}
              <div 
                className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center cursor-pointer hover:border-primary/50 transition-colors"
                onClick={triggerFileUpload}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  accept="video/mp4,video/avi,video/mov,image/jpeg,image/png"
                  onChange={handleFileUpload}
                />
                
                {uploadedFile ? (
                  <div className="space-y-3">
                    {uploadedFile.type.startsWith('video') ? (
                      <FileVideo className="w-12 h-12 mx-auto text-primary" />
                    ) : (
                      <FileImage className="w-12 h-12 mx-auto text-primary" />
                    )}
                    <p className="font-medium">{uploadedFile.name}</p>
                    <p className="text-sm text-muted-foreground">
                      File size: {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <Upload className="w-12 h-12 mx-auto text-muted-foreground" />
                    <div>
                      <p className="font-medium">Drop files here</p>
                      <p className="text-muted-foreground">or click to browse</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Supports MP4, AVI, MOV, JPG, PNG (Max 50MB)
                    </p>
                  </div>
                )}
              </div>

              {/* Analysis Button */}
              <Button 
                onClick={runAnalysis}
                disabled={!uploadedFile || isAnalyzing}
                className="w-full ai-glow"
                size="lg"
              >
                {isAnalyzing ? (
                  <>
                    <div className="w-4 h-4 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    Run Demo Analysis
                  </>
                )}
              </Button>

              {/* Analysis Progress */}
              {isAnalyzing && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Processing video frames...</span>
                    <span>67%</span>
                  </div>
                  <Progress value={67} className="h-2" />
                </div>
              )}

              {/* Results */}
              {analysisComplete && analysisResult && (
                <div className="space-y-4">
                  <Card className="bg-muted/50">
                    <CardContent className="p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          {analysisResult.result === "Real" ? (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          ) : (
                            <AlertCircle className="w-5 h-5 text-red-500" />
                          )}
                          <span className="font-semibold">{analysisResult.result}</span>
                        </div>
                        <Badge variant={analysisResult.result === "Real" ? "default" : "destructive"}>
                          {analysisResult.confidence}% confidence
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{analysisResult.details}</p>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <span className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>Processing: {analysisResult.processingTime}</span>
                        </span>
                        <span>{analysisResult.timestamp}</span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Enhanced Video Details */}
                  <Card className="bg-muted/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center space-x-2">
                        <Eye className="w-5 h-5" />
                        <span>Detailed Video Analysis</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Resolution</p>
                          <p className="text-sm font-semibold">{analysisResult.videoDetails.resolution}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Frame Rate</p>
                          <p className="text-sm font-semibold">{analysisResult.videoDetails.frameRate}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Duration</p>
                          <p className="text-sm font-semibold">{analysisResult.videoDetails.duration}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Platform</p>
                          <p className="text-sm font-semibold">{analysisResult.videoDetails.platform}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Codec</p>
                          <p className="text-sm font-semibold">{analysisResult.videoDetails.codec}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">File Size</p>
                          <p className="text-sm font-semibold">{analysisResult.videoDetails.fileSize}</p>
                        </div>
                      </div>
                      
                      <div className="border-t pt-3">
                        <p className="text-sm font-medium text-muted-foreground mb-2">Metadata Information</p>
                        <div className="grid grid-cols-3 gap-2 text-xs">
                          <div>
                            <span className="text-muted-foreground">Created: </span>
                            <span className="font-medium">{analysisResult.videoDetails.metadata.created}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Device: </span>
                            <span className="font-medium">{analysisResult.videoDetails.metadata.device}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Location: </span>
                            <span className="font-medium">{analysisResult.videoDetails.metadata.location}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Sample Results */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                Sample Detection Results
              </h3>
              <Button variant="outline" onClick={() => setShowHistory(true)}>
                <History className="w-4 h-4 mr-2" />
                View History
              </Button>
            </div>
            
            <p className="text-muted-foreground">
              See how our system performs on different types of content
            </p>

            {sampleResults.map((sample, index) => (
              <Card key={index} className="glass-effect">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <Shield className={`w-5 h-5 ${sample.color}`} />
                      <span className="font-semibold">{sample.type}</span>
                    </div>
                    <Badge variant="outline">
                      {sample.confidence}%
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{sample.description}</p>
                </CardContent>
              </Card>
            ))}

            {/* System Specs */}
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="text-lg">System Specifications</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">147MB</div>
                  <div className="text-sm text-muted-foreground">Model Size</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">&lt;1.8s</div>
                  <div className="text-sm text-muted-foreground">Inference Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2.1GB</div>
                  <div className="text-sm text-muted-foreground">GPU Memory</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">32</div>
                  <div className="text-sm text-muted-foreground">Batch Size</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detection History Dialog */}
        <Dialog open={showHistory} onOpenChange={setShowHistory}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center space-x-2">
                <History className="w-5 h-5" />
                <span>AI Video Detection History</span>
              </DialogTitle>
              <DialogDescription>
                Complete history of all video detections performed by our AI system
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4">
              {detectionHistory.map((item) => (
                <Card key={item.id} className="glass-effect">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <FileVideo className="w-5 h-5 text-muted-foreground" />
                        <span className="font-medium">{item.filename}</span>
                      </div>
                      <Badge 
                        variant={item.result === "Real" ? "default" : "destructive"}
                        className="flex items-center space-x-1"
                      >
                        <Eye className="w-3 h-3" />
                        <span>{item.result} - {item.confidence}%</span>
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{item.details}</p>
                    <div className="text-xs text-muted-foreground">
                      Processed: {item.timestamp}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};