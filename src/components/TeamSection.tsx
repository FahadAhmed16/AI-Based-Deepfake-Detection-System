import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Github, 
  Mail, 
  Award, 
  BookOpen, 
  Presentation,
  University
} from "lucide-react";

export const TeamSection = () => {
  const teamMembers = [
    {
      name: "Fahad Ahmed",
      role: "Research Assistant",
      department: "IT Department",
      level: "Final Year Student",
      initials: "FA",
      expertise: ["Deep Learning", "Computer Vision", "Neural Networks"],
      color: "bg-blue-500",
      email: "mfahad2124@gmail.com"
    },
    {
      name: "Yasir Hassan",
      role: "Research Assistant",
      department: "IT Department", 
      level: "Final Year Student",
      initials: "YH",
      expertise: ["Machine Learning", "Data Science", "Algorithm Design"],
      color: "bg-green-500",
      email: "yasir125@gmail.com"
    },
    {
      name: "Junaid Ali",
      role: "Lead Researcher",
      department: "IT Department",
      level: "Final Year Student", 
      initials: "JA",
      expertise: ["Software Engineering", "Backend Systems", "API Development"],
      color: "bg-purple-500",
      email: "junaid al5674@gmail.com"
    },
    {
      name: "Raja Osama Khan",
      role: "Research Assistant",
      department: "IT Department",
      level: "Final Year Student",
      initials: "ROK", 
      expertise: ["Frontend Development", "UI/UX Design", "System Integration"],
      color: "bg-orange-500",
      email: "rajosama452@gmail.com"
    },
    {
      name: "Muhammad Jawaid",
      role: "Research Assistant",
      department: "IT Department", 
      level: "Final Year Student",
      initials: "MJ",
      expertise: ["Quality Assurance", "Testing", "Documentation"],
      color: "bg-cyan-500",
      email: "muhammad589@gmail.com"
    }
  ];

  const achievements = [
    {
      title: "Research Publications",
      value: "2 papers submitted to CVPR 2025",
      icon: BookOpen,
      color: "text-blue-500"
    },
    {
      title: "Conference Presentations", 
      value: "Presented at 3 academic conferences",
      icon: Presentation,
      color: "text-green-500"
    },
    {
      title: "Industry Recognition",
      value: "Featured in AI Research Weekly",
      icon: Award,
      color: "text-purple-500"
    },
    {
      title: "University Research Lab",
      value: "Information Technology & AI Department",
      icon: University,
      color: "text-orange-500"
    }
  ];

  const researchMilestones = [
    {
      date: "Jan 2025",
      title: "Project Initiation",
      description: "Research team formed and initial literature review completed"
    },
    {
      date: "Mar 2025", 
      title: "Dataset Compilation",
      description: "15M+ training samples collected from multiple sources"
    },
    {
      date: "Jun 2025",
      title: "Model Development",
      description: "Core CNN architecture designed and implemented"
    },
    {
      date: "Sep 2025",
      title: "Performance Breakthrough", 
      description: "Achieved 98.7% accuracy on benchmark datasets"
    },
    {
      date: "Dec 2025",
      title: "System Deployment",
      description: "Real-time detection system launched and tested"
    }
  ];

  return (
    <section id="team" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            👥 Team
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 blue-heading-bar">
            <span>
              Meet Our 
            </span>
            <span className="text-foreground font-bold"> Research Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet the dedicated researchers and academics behind this innovative 
            deepfake detection system, pushing the boundaries of AI technology.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card key={index} className="glass-effect hover:shadow-lg transition-all duration-300 animate-float" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 text-center">
                {/* Avatar */}
                <div className={`w-20 h-20 mx-auto mb-4 rounded-full ${member.color} flex items-center justify-center text-white font-bold text-xl`}>
                  {member.initials}
                </div>
                
                {/* Name & Role */}
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-semibold mb-1">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-2">{member.level}</p>
                <Badge variant="outline" className="mb-4">{member.department}</Badge>
                
                {/* Expertise */}
                <div className="space-y-2 mb-6">
                  <p className="text-sm font-medium">Expertise:</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.expertise.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Contact */}
                <div className="flex justify-center">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="w-8 h-8"
                    onClick={() => window.open(`mailto:${member.email}`, '_blank')}
                  >
                    <Mail className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8">
            Research Achievements
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card key={index} className="glass-effect text-center">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-muted/50 flex items-center justify-center ${achievement.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold mb-2">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground">{achievement.value}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Research Timeline */}
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-12">
            Research Timeline
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary to-accent"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {researchMilestones.map((milestone, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <Card className="glass-effect">
                        <CardContent className="p-4">
                          <Badge variant="outline" className="mb-2">{milestone.date}</Badge>
                          <h4 className="font-semibold text-lg mb-2">{milestone.title}</h4>
                          <p className="text-sm text-muted-foreground">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full tech-gradient border-4 border-background"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="glass-effect max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">Join Our Research</h3>
              <p className="text-muted-foreground mb-6">
                Interested in collaborating on cutting-edge AI research? 
                We welcome partnerships with academic institutions and industry leaders.
              </p>
              <div className="flex justify-center">
                <Button 
                  className="ai-glow"
                  onClick={() => window.open('mailto:metalkarim5@gmail.com', '_blank')}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Research Team
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};