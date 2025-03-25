
import AnimatedSection from "../components/AnimatedSection";
import { useGitHubData } from "../hooks/useGitHubData";
import { useLinkedInData } from "../hooks/useLinkedInData";
import { Code, Shield, Lock, Database, AlertTriangle, Server, Network } from "lucide-react";

const AboutPage = () => {
  const { languages, securitySkills, loading: githubLoading } = useGitHubData("Koon-Kiat");
  const { experiences, loading: linkedinLoading } = useLinkedInData("koon-kiat-boo");
  
  const loading = githubLoading || linkedinLoading;
  
  // Define skill categories
  const skills = [
    { 
      category: "Languages", 
      items: loading ? ["Loading..."] : languages.length > 0 ? languages : ["Python", "C/C++", "Bash", "PowerShell"] 
    },
    { 
      category: "Security Skills", 
      items: loading ? ["Loading..."] : securitySkills.length > 0 
        ? securitySkills.map(skill => skill.charAt(0).toUpperCase() + skill.slice(1)) 
        : ["Vulnerability Assessment", "Penetration Testing", "Network Security", "Digital Forensics"]
    },
    { 
      category: "Tools", 
      items: ["Wireshark", "Metasploit", "Burp Suite", "Nmap", "Kali Linux"] 
    },
    { 
      category: "Certifications", 
      items: ["CompTIA Security+ (In Progress)", "eJPT (Studying for)"] 
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <AnimatedSection className="mb-16 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About Me</h1>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            A passionate cybersecurity student dedicated to understanding and mitigating digital threats.
          </p>
        </AnimatedSection>

        {/* Biography Section */}
        <AnimatedSection className="mb-16">
          <div className="max-w-3xl mx-auto prose dark:prose-invert">
            <p>
              Hello! I'm a cybersecurity student with a focus on understanding and defending against digital threats.
              My journey began with a curiosity about how systems work and how they can be secured, which evolved into a
              dedication to the field of cybersecurity.
            </p>
            <p>
              I specialize in vulnerability assessment, penetration testing, and security analysis.
              I enjoy the process of identifying security flaws, understanding attack vectors, and implementing robust defenses
              to protect critical systems and data.
            </p>
            <p>
              When I'm not studying security concepts, you can find me participating in CTF competitions, 
              contributing to security research, or exploring new technologies to better understand 
              potential vulnerabilities.
            </p>
          </div>
        </AnimatedSection>

        {/* Values Section */}
        <AnimatedSection delay={100} className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">My Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 border border-border rounded-lg glass">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary">
                <Shield className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Defense in Depth</h3>
              <p className="text-foreground/80">
                I believe in implementing multiple layers of security controls to protect sensitive assets.
              </p>
            </div>
            <div className="p-6 border border-border rounded-lg glass">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary">
                <AlertTriangle className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proactive Security</h3>
              <p className="text-foreground/80">
                Identifying and addressing vulnerabilities before they can be exploited is crucial for maintaining security.
              </p>
            </div>
            <div className="p-6 border border-border rounded-lg glass">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary">
                <Lock className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Privacy</h3>
              <p className="text-foreground/80">
                I'm committed to protecting sensitive data and respecting privacy as fundamental aspects of security.
              </p>
            </div>
            <div className="p-6 border border-border rounded-lg glass">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary">
                <Code className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
              <p className="text-foreground/80">
                The security landscape evolves rapidly, requiring constant learning and adaptation to new threats.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Skills Section - Now with cybersecurity focus */}
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
            {loading ? (
              <div className="space-y-4">
                {[1, 2, 3].map((index) => (
                  <div key={index} className="animate-pulse">
                    <div className="h-6 bg-secondary rounded w-1/4 mb-3"></div>
                    <div className="h-4 bg-secondary rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-secondary rounded w-full mb-2"></div>
                    <div className="h-4 bg-secondary rounded w-3/4"></div>
                  </div>
                ))}
              </div>
            ) : (
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
            )}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default AboutPage;
