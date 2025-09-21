import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, TestTube } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "AI Framework for Test Analysis",
      description: "Pioneer project creating AI framework to analyze Robot Framework logs autonomously using LLM. Automated test log analysis and requirements validation, revolutionizing testing efficiency at KONE Elevators.",
      technologies: ["LLM", "Robot Framework", "Python", "AI Analysis"],
      github: "#",
      demo: "#",
      impact: "Autonomous Analysis"
    },
    {
      title: "Django Relay Control System",
      description: "Developed Django Web Application to operate relay modules in test environment, enabling manual testing accessibility and reducing infrastructure complexity for multiple test scenarios.",
      technologies: ["Django", "Python", "Web Development", "Hardware Control"],
      github: "#",
      demo: "#",
      impact: "Environment Optimization"
    },
    {
      title: "IoT Test Automation Platform",
      description: "Built comprehensive AWS IoT Core testing workflows with AI-driven diagnostic systems. Integrated device connectivity, messaging, and shadow updates with intelligent monitoring dashboards.",
      technologies: ["AWS IoT Core", "Python", "Test Automation", "AI Diagnostics"],
      github: "#",
      demo: "#",
      impact: "Automated IoT Testing"
    },
    {
      title: "RAG-Powered AI Agents",
      description: "Implemented Retrieval-Augmented Generation pipelines using CrewAI and LangChain. Connected AI agents with domain-specific knowledge for contextual test planning and execution.",
      technologies: ["CrewAI", "LangChain", "RAG", "Vector Databases"],
      github: "#",
      demo: "#",
      impact: "Intelligent Testing"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my development and testing expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="card-glow overflow-hidden border-border hover:border-primary/50 transition-smooth hover:shadow-glow animate-slide-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TestTube className="h-4 w-4 text-accent" />
                    <span className="text-sm font-semibold text-accent">
                      {project.impact}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="bg-background/50 text-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-slide-up">
          <Button 
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};