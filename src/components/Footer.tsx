import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-xl mb-4">
              <span className="gradient-text">Mohamed Jubair</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              AI Engineer & Software Developer specializing in IoT systems, Generative AI, 
              and intelligent automation. Creating innovative solutions with cutting-edge technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.querySelector(`#${item.toLowerCase()}`);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-muted-foreground hover:text-primary transition-smooth text-sm"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/mhd-jubair/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-jubair-428b6318b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:jakirjubair.555@gmail.com"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm flex items-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> by Mohamed Jubair
          </p>
          <p className="text-muted-foreground text-sm mt-2 md:mt-0">
            © {currentYear} Mohamed Jubair. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};