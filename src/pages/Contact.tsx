
import AnimatedSection from "../components/AnimatedSection";
import { Github, Linkedin, Mail, Shield } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 relative">
      {/* Background elements for visual interest */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="dark:hidden">
          {/* Light mode background elements */}
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/5 w-64 h-64 bg-green-200/20 rounded-full blur-3xl"></div>
        </div>
        <div className="hidden dark:block">
          {/* Dark mode background elements */}
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-blue-900/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/5 w-64 h-64 bg-green-900/20 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Have a security question or want to collaborate on a cybersecurity project? Feel free to reach out
            through any of these channels.
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <AnimatedSection delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 border border-border rounded-lg glass flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-6">
                  <Mail className="w-10 h-10 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Email</h3>
                <p className="text-foreground/80 mb-6">For professional inquiries and collaboration opportunities</p>
                <div className="mt-auto">
                  <p className="font-medium mb-4">[redacted]</p>
                  <a
                    href="mailto:[redacted]"
                    className="inline-flex items-center justify-center px-5 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors w-full"
                  >
                    Send an Email
                  </a>
                </div>
              </div>

              <div className="p-8 border border-border rounded-lg glass flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-6">
                  <Github className="w-10 h-10 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">GitHub</h3>
                <p className="text-foreground/80 mb-6">Check out my cybersecurity projects and contributions</p>
                <div className="mt-auto">
                  <p className="font-medium mb-4">Koon-Kiat</p>
                  <a
                    href="https://github.com/Koon-Kiat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors w-full"
                  >
                    Visit Profile
                  </a>
                </div>
              </div>

              <div className="p-8 border border-border rounded-lg glass flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-6">
                  <Linkedin className="w-10 h-10 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">LinkedIn</h3>
                <p className="text-foreground/80 mb-6">Connect with me for professional networking</p>
                <div className="mt-auto">
                  <p className="font-medium mb-4">Koon-Kiat Boo</p>
                  <a
                    href="https://www.linkedin.com/in/koon-kiat-boo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors w-full"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Contact;
