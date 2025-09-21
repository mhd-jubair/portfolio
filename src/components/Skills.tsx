import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      skills: ["Generative AI", "LangChain", "CrewAI", "TensorFlow", "PyTorch", "RAG Systems", "LLM Integration", "AI Agents"],
      color: "primary"
    },
    {
      title: "Programming & Development", 
      skills: ["Python", "Django", "Linux", "Shell", "Docker", "CI/CD", "Kubernetes", "Algorithm Development"],
      color: "accent"
    },
    {
      title: "Cloud & IoT",
      skills: ["AWS IoT Core", "Azure OpenAI", "AWS S3", "AWS Lambda", "IoT Systems", "MLOps", "Cloud Deployment", "Data Processing"],
      color: "primary"
    },
    {
      title: "Testing & Automation",
      skills: ["Robot Framework", "Selenium", "Test Automation", "AI-driven Testing", "Hardware-in-Loop Testing", "Test Planning", "GIT", "Scrum"],
      color: "accent"
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized expertise in AI/ML technologies, IoT systems, and intelligent automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="card-glow p-6 border-border hover:border-primary/50 transition-smooth hover:shadow-glow animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className={`w-3 h-3 rounded-full bg-${category.color} mr-3`}></span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="bg-background/50 text-foreground border border-border hover:border-primary/50 transition-smooth"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Experience Level Indicators */}
        <div className="mt-16 animate-slide-up">
          <h3 className="text-2xl font-bold text-center mb-8">Experience Levels</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">3+</span>
                </div>
              </div>
              <h4 className="font-semibold mb-2">Expert Level</h4>
              <p className="text-sm text-muted-foreground">Python, AI/ML, IoT Systems, LangChain</p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent-foreground">2+</span>
                </div>
              </div>
              <h4 className="font-semibold mb-2">Advanced Level</h4>
              <p className="text-sm text-muted-foreground">AWS, Azure OpenAI, Django, Docker</p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-muted to-muted/80 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-2xl font-bold text-muted-foreground">1+</span>
                </div>
              </div>
              <h4 className="font-semibold mb-2">Intermediate Level</h4>
              <p className="text-sm text-muted-foreground">Kubernetes, TensorFlow, PyTorch</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};