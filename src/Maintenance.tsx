import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Mail,
  Moon,
  Sun,
  Wrench,
} from "lucide-react";

type Theme = "light" | "dark";

const getInitialTheme = (): Theme => {
  const savedTheme = localStorage.getItem("portfolio-theme");

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

function Maintenance() {
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
        <div className="header-inner maintenance-header-inner">
          <a className="wordmark" href="/" aria-label="Koon Kiat — home">
            <span className="wordmark-mark" aria-hidden="true">
              KK
            </span>
            <span>Koon Kiat</span>
          </a>

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

      <main className="maintenance-main" id="main-content">
        <div className="maintenance-grid">
          <div className="maintenance-copy">
            <p className="eyebrow">
              <span className="status-dot" aria-hidden="true" />
              Maintenance mode · Portfolio refresh
            </p>

            <h1>
              The portfolio is getting a{" "}
              <span className="accent-underline">careful refresh.</span>
            </h1>

            <p className="maintenance-summary">
              I’m refining the project details and experience across this site
              so the finished portfolio stays useful, accessible, and honest
              about the work behind it. It will be back online soon.
            </p>

            <div className="hero-actions maintenance-actions">
              <a
                className="button button-primary"
                href="mailto:[redacted]"
              >
                <Mail aria-hidden="true" />
                Get in touch
              </a>
              <a
                className="button button-secondary"
                href="https://github.com/Koon-Kiat"
                target="_blank"
                rel="noreferrer"
              >
                View GitHub
                <ArrowUpRight aria-hidden="true" />
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
            </div>
          </div>

          <aside className="signal-card maintenance-card" aria-label="Site status">
            <div className="signal-card-header">
              <Wrench aria-hidden="true" />
              <span>maintenance-status.md</span>
              <span className="window-dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
            </div>

            <dl>
              <div>
                <dt>Status</dt>
                <dd>Portfolio updates in progress</dd>
              </div>
              <div>
                <dt>Current work</dt>
                <dd>Refining project details, copy, and presentation</dd>
              </div>
              <div>
                <dt>Still available</dt>
                <dd>GitHub repositories, LinkedIn, and email</dd>
              </div>
              <div>
                <dt>Priority</dt>
                <dd>Clarity, accessibility, and evidence</dd>
              </div>
            </dl>

            <div className="signal-footer">
              <span aria-hidden="true">$</span>
              <span>portfolio --refreshing</span>
              <span className="cursor" aria-hidden="true" />
            </div>
          </aside>
        </div>
      </main>

      <footer className="site-footer maintenance-footer">
        <p>© {new Date().getFullYear()} Koon Kiat</p>
        <p>Portfolio maintenance in progress.</p>
        <a href="mailto:[redacted]">Contact me</a>
      </footer>
    </>
  );
}

export default Maintenance;
