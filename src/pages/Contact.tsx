
import AnimatedSection from "../components/AnimatedSection";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out through any of these channels.
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          <AnimatedSection delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 border border-border rounded-lg glass flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-6">
                  <Mail className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Email</h3>
                <p className="text-foreground/80 mb-4">your-email@example.com</p>
                <a
                  href="mailto:your-email@example.com"
                  className="inline-flex items-center text-foreground hover:underline"
                >
                  Send an Email
                </a>
              </div>

              <div className="p-8 border border-border rounded-lg glass flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-6">
                  <Github className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">GitHub</h3>
                <p className="text-foreground/80 mb-4">Koon-Kiat</p>
                <a
                  href="https://github.com/Koon-Kiat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-foreground hover:underline"
                >
                  Visit Profile
                </a>
              </div>

              <div className="p-8 border border-border rounded-lg glass flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-6">
                  <Linkedin className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">LinkedIn</h3>
                <p className="text-foreground/80 mb-4">Connect with me</p>
                <a
                  href="https://linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-foreground hover:underline"
                >
                  View Profile
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Contact;
