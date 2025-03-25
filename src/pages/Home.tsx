
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center section-padding pt-24">
        <div className="container mx-auto">
          <AnimatedSection className="flex flex-col items-center text-center">
            <span className="text-sm md:text-base font-medium px-4 py-2 rounded-full bg-secondary text-secondary-foreground mb-6">
              Cybersecurity Student & Enthusiast
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
              Securing digital landscapes with{" "}
              <span className="text-foreground relative">
                vigilance and expertise
              </span>
            </h1>
            
            <p className="text-foreground/80 text-lg md:text-xl max-w-3xl mb-8">
              I'm a passionate cybersecurity student focused on understanding vulnerabilities,
              implementing secure solutions, and protecting digital assets. Explore my projects and see how I contribute to a safer digital world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link 
                to="/projects" 
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg bg-foreground text-background hover:bg-foreground/90 transition-colors"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg border border-border bg-transparent hover:bg-secondary transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;
