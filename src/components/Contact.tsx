import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin, Calendar } from "lucide-react";

export const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "jakirjubair.555@gmail.com",
      link: "mailto:jakirjubair.555@gmail.com",
      color: "primary"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "@mhd-jubair",
      link: "https://github.com/mhd-jubair/",
      color: "accent"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Mohamed Jubair",
      link: "https://www.linkedin.com/in/mohamed-jubair-428b6318b/",
      color: "primary"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Kanyakumari, India",
      link: "#",
      color: "accent"
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in AI/ML projects, IoT innovations, and collaborative opportunities. 
            Let's discuss how we can build intelligent solutions together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <Card 
              key={index}
              className="card-glow p-6 border-border hover:border-primary/50 transition-smooth hover:shadow-glow animate-slide-up group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <a 
                href={method.link}
                className="flex items-center space-x-4"
                target={method.link.startsWith('http') ? '_blank' : '_self'}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
              >
                <div className={`p-3 rounded-lg bg-${method.color}/10 group-hover:bg-${method.color}/20 transition-smooth`}>
                  <method.icon className={`h-6 w-6 text-${method.color}`} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-smooth">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground">{method.value}</p>
                </div>
              </a>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-card rounded-2xl p-8 text-center animate-slide-up border border-border">
          <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Ready to Start a Project?</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Whether you need development, testing, or both - I'm here to help bring your ideas to life with quality and precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Send Email Button */}
            <a
              href="mailto:jakirjubair.555@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth"
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </a>

            {/* Schedule Call Button */}
            <a
              href="https://calendar.google.com/calendar/r/eventedit?add=jakirjubair.555@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Call
              </Button>
            </a>
          </div>

        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12 animate-slide-up">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">6h</div>
            <div className="text-sm text-muted-foreground">Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">Onsite/Remote</div>
            <div className="text-sm text-muted-foreground">Work Preference</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">Full-time</div>
            <div className="text-sm text-muted-foreground">Availability</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">IST</div>
            <div className="text-sm text-muted-foreground">Timezone</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">Yes</div>
            <div className="text-sm text-muted-foreground">Sponsorship / Relocation</div>
          </div>
        </div>
      </div>
    </section>
  );
};