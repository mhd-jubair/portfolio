import { Card } from "@/components/ui/card";
import { Code, TestTube, Zap, Users } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "AI & ML Engineering",
      description: "Expert in Generative AI, LLM frameworks like CrewAI and LangChain, with hands-on experience in agentic AI workflow orchestration for intelligent automation."
    },
    {
      icon: TestTube,
      title: "AI-Powered Test Automation",
      description: "Delivered autonomous testing solutions leveraging AI-driven test systems, LLM-based planning, and smart test orchestration for enhanced quality and speed."
    },
    {
      icon: Zap,
      title: "IoT, Cloud & Kubernetes Solutions",
      description: "Skilled in AWS, Azure, and multi-cloud deployments with Kubernetes, Helm, and MCP for scalable, resilient, and cloud-native AI/ML applications."
    },
    {
      icon: Users,
      title: "Algorithm & DevOps Engineering",
      description: "Proficient in Python algorithm development, CI/CD pipeline optimization, and orchestrating AI workflows with modern DevOps and cloud-native practices."
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
            I am an experienced AI Engineer and Software Developer specializing in IoT systems, AI-driven solutions, and 
            Generative AI technologies. Currently, I contribute to Python algorithm development at Kinaxis and have previously
             led the development of AI frameworks for autonomous testing systems at KONE Elevators.
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
                Started with a background in Mechatronics Engineering and evolved into an AI specialist working with
                 cutting-edge technologies. Holding a Master’s degree in Artificial Intelligence,
                  I am currently working as a Software Development Engineer at Kinaxis, focusing on Python algorithm development,
                   exploring LLM agent capabilities, and designing AI/ML-based products and solutions.
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
                <div className="text-2xl font-bold text-accent">AI/ML & Testing</div>
                <div className="text-sm text-muted-foreground">Specialization</div>
              </div>
              <div className="bg-background/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-primary">IoT</div>
                <div className="text-sm text-muted-foreground">Systems Expert</div>
              </div>
              <div className="bg-background/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-accent">MTech</div>
                <div className="text-sm text-muted-foreground">Artificial Intelligence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};