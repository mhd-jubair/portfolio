import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
      
      {/* Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="gradient-text">
              Mohamed Jubair
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            Software Developer Engineer & AI Specialist
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experienced Innovative AI Engineer with expertise in IoT systems, AI-driven solutions, and Generative AI technologies
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth">
            <Github className="mr-2 h-5 w-5" />
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
        </div>

        {/* Tech stack preview */}
        <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
          <span className="px-3 py-1 bg-secondary rounded-full">Python</span>
          <span className="px-3 py-1 bg-secondary rounded-full">Generative AI</span>
          <span className="px-3 py-1 bg-secondary rounded-full">AWS</span>
          <span className="px-3 py-1 bg-secondary rounded-full">Azure OpenAI</span>
          <span className="px-3 py-1 bg-secondary rounded-full">LangChain</span>
          <span className="px-3 py-1 bg-secondary rounded-full">IoT</span>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse" />
    </section>
  );
};