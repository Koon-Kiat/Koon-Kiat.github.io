
import AnimatedSection from "../components/AnimatedSection";
import { useGitHubData } from "../hooks/useGitHubData";
import { Code, Cpu, Lightbulb, MessagesSquare } from "lucide-react";

const AboutPage = () => {
  const { languages, loading } = useGitHubData("Koon-Kiat");
  
  // Define skill categories
  const skills = [
    { 
      category: "Languages", 
      items: loading ? ["Loading..."] : languages.length > 0 ? languages : ["JavaScript", "TypeScript", "Python", "Java"] 
    },
    { category: "Frontend", items: ["React", "Vue.js", "HTML/CSS", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "Django", "FastAPI"] },
    { category: "Tools", items: ["Git", "Docker", "VS Code", "GitHub Actions"] },
  ];

  const experiences = [
    {
      title: "Software Engineer",
      company: "Tech Company",
      period: "2021 - Present",
      description: "Developed and maintained web applications using React and Node.js. Implemented new features and improved application performance."
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      period: "2019 - 2021",
      description: "Built responsive user interfaces using modern JavaScript frameworks. Collaborated with designers to implement pixel-perfect layouts."
    },
    {
      title: "Junior Developer",
      company: "Startup",
      period: "2018 - 2019",
      description: "Assisted in developing web applications and fixed bugs in existing codebase. Learned about agile development methodologies."
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <AnimatedSection className="mb-16 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About Me</h1>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            A passionate developer with a focus on creating elegant and efficient solutions to complex problems.
          </p>
        </AnimatedSection>

        {/* Biography Section */}
        <AnimatedSection className="mb-16">
          <div className="max-w-3xl mx-auto prose dark:prose-invert prose-custom">
            <p>
              Hello! I'm a software developer with a passion for creating intuitive and performant applications. 
              My journey in programming began with a curiosity for how digital things work, which quickly evolved into a 
              career building solutions for real-world problems.
            </p>
            <p>
              I specialize in full-stack development, with particular expertise in React and Node.js. 
              I enjoy the process of taking a project from concept to completion, considering both the technical 
              implementation and the user experience.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community.
            </p>
          </div>
        </AnimatedSection>

        {/* Values Section */}
        <AnimatedSection delay={100} className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">My Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 border border-border rounded-lg glass">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary">
                <Code className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
              <p className="text-foreground/80">
                I believe in writing clean, maintainable code that can be understood and extended by others.
              </p>
            </div>
            <div className="p-6 border border-border rounded-lg glass">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary">
                <Cpu className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Performance</h3>
              <p className="text-foreground/80">
                Optimizing for speed and efficiency is crucial for providing a good user experience.
              </p>
            </div>
            <div className="p-6 border border-border rounded-lg glass">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary">
                <Lightbulb className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-foreground/80">
                I'm always exploring new technologies and approaches to solve problems in better ways.
              </p>
            </div>
            <div className="p-6 border border-border rounded-lg glass">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary">
                <MessagesSquare className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Communication</h3>
              <p className="text-foreground/80">
                Clear communication is essential for successful collaboration and project outcomes.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Skills Section - Now uses dynamic GitHub languages */}
        <AnimatedSection delay={200} className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="p-6 border border-border rounded-lg glass">
                <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="flex items-center">
                      <span className="w-2 h-2 bg-foreground rounded-full mr-2"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AnimatedSection>
        
        {/* Experience Section */}
        <AnimatedSection delay={300}>
          <h2 className="text-2xl font-bold mb-8 text-center">Experience</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className="relative pl-8 pb-8 border-l border-border last:border-0 last:pb-0"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-foreground"></div>
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-foreground/80">{exp.company}</span>
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                    </div>
                    <p className="text-foreground/80">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default AboutPage;
