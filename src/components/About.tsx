import { Card } from "@/components/ui/card";
import { Code, TestTube, Zap, Users } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "AI & ML Engineering",
      description: "Expert in Generative AI, LLM frameworks like CrewAI and LangChain for intelligent automation"
    },
    {
      icon: TestTube,
      title: "Test Automation with AI",
      description: "Pioneer in AI-driven test systems and autonomous test planning using LLM frameworks"
    },
    {
      icon: Zap,
      title: "IoT & Cloud Solutions",
      description: "Skilled in AWS IoT Core, Azure OpenAI, and scalable cloud-based AI/ML deployments"
    },
    {
      icon: Users,
      title: "Algorithm Development",
      description: "Experience in Python algorithm development and CI/CD pipeline optimization"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm an experienced AI Engineer and Software Developer specializing in IoT systems, AI-driven solutions, 
            and Generative AI technologies. Currently working at Kinaxis on Python algorithm development and 
            previously pioneered AI frameworks at KONE Elevators for autonomous test systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card 
              key={index} 
              className="card-glow p-6 border-border hover:border-primary/50 transition-smooth hover:shadow-glow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-secondary/50 rounded-2xl p-8 animate-slide-up">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Started with Mechatronics Engineering and evolved into an AI specialist working with 
                cutting-edge technologies. Currently pursuing MTech in Artificial Intelligence while 
                working at Kinaxis on algorithm development and CI/CD optimization.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                At KONE Elevators, I pioneered AI frameworks for autonomous test analysis and built 
                intelligent systems using LangChain and CrewAI. My expertise spans from IoT systems 
                to Generative AI, always focusing on practical AI solutions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-background/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-primary">3.5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="bg-background/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-accent">AI/ML</div>
                <div className="text-sm text-muted-foreground">Specialization</div>
              </div>
              <div className="bg-background/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-primary">IoT</div>
                <div className="text-sm text-muted-foreground">Systems Expert</div>
              </div>
              <div className="bg-background/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-accent">MTech</div>
                <div className="text-sm text-muted-foreground">AI (Pursuing)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};