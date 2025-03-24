
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import GitHubProfile from "../components/GitHubProfile";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center section-padding pt-24">
        <div className="container mx-auto">
          <AnimatedSection className="flex flex-col items-center text-center">
            <span className="text-sm md:text-base font-medium px-4 py-2 rounded-full bg-secondary text-secondary-foreground mb-6">
              Software Developer & Engineer
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
              Crafting digital experiences with{" "}
              <span className="text-foreground relative">
                precision and elegance
              </span>
            </h1>
            
            <p className="text-foreground/80 text-lg md:text-xl max-w-3xl mb-8">
              I'm a passionate developer focused on creating intuitive and 
              high-performance applications. Explore my projects and see what I can build.
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
      
      {/* GitHub Profile Section */}
      <section className="section-padding pb-24">
        <div className="container mx-auto">
          <AnimatedSection delay={300}>
            <GitHubProfile username="Koon-Kiat" />
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;
