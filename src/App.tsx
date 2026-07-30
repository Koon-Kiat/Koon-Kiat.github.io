import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Mail,
  Moon,
  Network,
  Printer,
  ShieldCheck,
  Sun,
  TerminalSquare,
} from "lucide-react";

type Theme = "light" | "dark";

type Project = {
  name: string;
  description: string;
  focus: string;
  technologies: string[];
  url: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    name: "Spam & Phishing Email Detection",
    description:
      "A research-oriented classifier that treats data leakage, grouped validation, and cross-domain failure as first-class evaluation concerns.",
    focus: "Machine learning · security research",
    technologies: ["Python", "scikit-learn", "Flask"],
    url: "https://github.com/Koon-Kiat/Spam-and-Phishing-Email-Detection",
    featured: true,
  },
  {
    name: "CipherShare",
    description:
      "Zero-knowledge file sharing with client-side AES-256-GCM encryption, X25519 key exchange, and explicit access control.",
    focus: "Applied cryptography · secure systems",
    technologies: ["JavaScript", "Web Crypto", "X25519"],
    url: "https://github.com/Koon-Kiat/CipherShare",
    featured: true,
  },
  {
    name: "SITBank",
    description:
      "A secure internet-banking application built around authentication, transaction workflows, and defensive web-development practices.",
    focus: "Application security · full stack",
    technologies: ["Python", "Web security", "SQL"],
    url: "https://github.com/Koon-Kiat/SITBank",
  },
  {
    name: "Cost-Sensitive Fraud Detection",
    description:
      "An end-to-end fraud-detection study using leakage-safe pipelines, imbalance handling, failure analysis, and cost-aware threshold selection.",
    focus: "Machine learning · risk modelling",
    technologies: ["Python", "Jupyter", "scikit-learn"],
    url: "https://github.com/Koon-Kiat/Credit-Card-Fraud-Detection-with-Cost-Sensitive-Machine-Learning",
  },
  {
    name: "Care Link",
    description:
      "A portable assistive-care prototype with fall detection, temperature monitoring, panic alerts, and a management dashboard.",
    focus: "Embedded systems · assistive technology",
    technologies: ["C++", "Arduino", "Python"],
    url: "https://github.com/Koon-Kiat/Care-Link",
  },
  {
    name: "Enterprise Network Infrastructure",
    description:
      "A high-availability network design covering redundant connectivity, routing, address translation, DNS, and resilient services.",
    focus: "Network engineering · resilience",
    technologies: ["OSPF", "HSRP", "NAT", "DNS"],
    url: "https://github.com/Koon-Kiat/Enterprise-Network-Infrastructure",
  },
];

const capabilityGroups = [
  {
    icon: ShieldCheck,
    title: "Security engineering",
    description:
      "Threat-aware design, secure defaults, vulnerability analysis, authentication, cryptography, and evidence-backed reporting.",
    skills: ["Application security", "Network security", "Threat modelling"],
  },
  {
    icon: BrainCircuit,
    title: "Applied machine learning",
    description:
      "Leakage-aware experimentation, imbalanced classification, threshold selection, and honest evaluation across data sources.",
    skills: ["scikit-learn", "Model evaluation", "Failure analysis"],
  },
  {
    icon: Code2,
    title: "Software systems",
    description:
      "Practical software across web, automation, embedded devices, and data workflows, with an emphasis on maintainability.",
    skills: ["Python", "TypeScript", "C++ / Java"],
  },
  {
    icon: Network,
    title: "Infrastructure",
    description:
      "Network design, routing, high availability, service exposure analysis, and host-native security tooling.",
    skills: ["TCP/IP", "Network architecture", "Automation"],
  },
];

const principles = [
  "Make security claims traceable to evidence.",
  "Test the failure cases, not only the happy path.",
  "Prefer small, understandable systems over needless complexity.",
];

const getInitialTheme = (): Theme => {
  const savedTheme = localStorage.getItem("portfolio-theme");

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light",
    );
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="header-inner">
          <a className="wordmark" href="#top" aria-label="Koon Kiat — home">
            <span className="wordmark-mark" aria-hidden="true">
              KK
            </span>
            <span>Koon Kiat</span>
          </a>

          <nav className="site-nav" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#capabilities">Skills</a>
            <a href="#contact">Contact</a>
          </nav>

          <button
            className="icon-button"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
          >
            {theme === "light" ? (
              <Moon aria-hidden="true" />
            ) : (
              <Sun aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="status-dot" aria-hidden="true" />
                Cybersecurity · Software · Machine learning
              </p>
              <h1 id="hero-title">
                Building secure systems with{" "}
                <span className="accent-underline">evidence in the loop.</span>
              </h1>
              <p className="hero-summary">
                I’m Koon Kiat, a cybersecurity-focused developer working across
                secure applications, network tooling, and applied machine
                learning. I care about systems that are useful, explainable, and
                honest about their limits.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#work">
                  Explore selected work
                  <ArrowDown aria-hidden="true" />
                </a>
                <a
                  className="button button-secondary"
                  href="mailto:[redacted]"
                >
                  Start a conversation
                  <Mail aria-hidden="true" />
                </a>
              </div>

              <div className="hero-links" aria-label="Profile links">
                <a
                  href="https://github.com/Koon-Kiat"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Code2 aria-hidden="true" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/koon-kiat-boo/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BriefcaseBusiness aria-hidden="true" />
                  LinkedIn
                </a>
                <button type="button" onClick={() => window.print()}>
                  <Printer aria-hidden="true" />
                  Print résumé
                </button>
              </div>
            </div>

            <aside className="signal-card" aria-label="Working profile">
              <div className="signal-card-header">
                <TerminalSquare aria-hidden="true" />
                <span>working-profile.md</span>
                <span className="window-dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
              </div>
              <dl>
                <div>
                  <dt>Focus</dt>
                  <dd>Security engineering + dependable software</dd>
                </div>
                <div>
                  <dt>Method</dt>
                  <dd>Measure, challenge, document, iterate</dd>
                </div>
                <div>
                  <dt>Current themes</dt>
                  <dd>Secure ML, network visibility, privacy</dd>
                </div>
                <div>
                  <dt>Principle</dt>
                  <dd>Evidence before confidence</dd>
                </div>
              </dl>
              <div className="signal-footer">
                <span aria-hidden="true">$</span>
                <span>ship --secure --tested</span>
                <span className="cursor" aria-hidden="true" />
              </div>
            </aside>
          </div>
        </section>

        <section
          className="section section-about"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="section-heading">
            <p className="section-index">01 / About</p>
            <h2 id="about-title">
              Curious about how systems fail—and how to make them hold up.
            </h2>
          </div>
          <div className="about-grid">
            <div className="about-copy">
              <p className="lead">
                My work sits where cybersecurity, software engineering, and
                applied research meet.
              </p>
              <p>
                I enjoy turning unclear security questions into working systems
                that can be inspected, tested, and improved. My projects explore
                how software behaves under real constraints: messy data, limited
                visibility, changing dependencies, and adversarial inputs.
              </p>
              <p>
                That means validating assumptions, designing safe failure modes,
                and documenting what the evidence does—and does not—support.
                The result is a portfolio spanning secure web applications,
                encrypted file sharing, network infrastructure, embedded
                assistive technology, and leakage-aware machine learning.
              </p>
            </div>

            <ol className="principle-list" aria-label="Working principles">
              {principles.map((principle, index) => (
                <li key={principle}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{principle}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section" id="work">
          <div className="section-heading section-heading-row">
            <div>
              <p className="section-index">02 / Selected work</p>
              <h2>Projects built to answer real questions.</h2>
            </div>
            <a
              className="text-link"
              href="https://github.com/Koon-Kiat?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              View every repository
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article
                className={`project-card ${project.featured ? "featured" : ""}`}
                key={project.name}
              >
                <div className="project-card-top">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {project.featured && <span>Featured</span>}
                </div>
                <p className="project-focus">{project.focus}</p>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="tag-list" aria-label={`${project.name} technologies`}>
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <a
                  className="project-link"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.name} on GitHub`}
                >
                  View repository
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="capabilities">
          <div className="section-heading">
            <p className="section-index">03 / Capabilities</p>
            <h2>Broad enough to connect the system. Focused enough to ship.</h2>
          </div>

          <div className="capability-list">
            {capabilityGroups.map((capability) => {
              const Icon = capability.icon;

              return (
                <article className="capability-row" key={capability.title}>
                  <div className="capability-icon">
                    <Icon aria-hidden="true" />
                  </div>
                  <div>
                    <h3>{capability.title}</h3>
                    <p>{capability.description}</p>
                  </div>
                  <ul>
                    {capability.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>

          <div className="toolbox">
            <p>Working toolkit</p>
            <div>
              <span>Python</span>
              <span>TypeScript</span>
              <span>React</span>
              <span>C / C++</span>
              <span>Java</span>
              <span>scikit-learn</span>
              <span>Flask</span>
              <span>Linux</span>
              <span>GitHub Actions</span>
              <span>Network protocols</span>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div>
            <p className="section-index">04 / Contact</p>
            <h2>Have a problem worth investigating?</h2>
            <p>
              I’m always interested in thoughtful security, software, and
              research conversations.
            </p>
          </div>
          <div className="contact-actions">
            <a className="button button-inverse" href="mailto:[redacted]">
              <Mail aria-hidden="true" />
              [redacted]
            </a>
            <a
              className="button button-ghost"
              href="https://www.linkedin.com/in/koon-kiat-boo/"
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Koon Kiat</p>
        <p>Designed and built with care for clarity, accessibility, and security.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}

export default App;
