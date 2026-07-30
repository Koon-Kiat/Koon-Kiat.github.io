import { useEffect, useState } from "react";
import { Moon, Sun, Wrench } from "lucide-react";

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

      <main className="maintenance-main" id="main-content">
        <button
          className="icon-button maintenance-theme-toggle"
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

        <section className="maintenance-message" aria-labelledby="maintenance-title">
          <div className="maintenance-mark" aria-hidden="true">
            <Wrench />
          </div>
          <p className="maintenance-kicker">Website update</p>
          <h1 id="maintenance-title">
            Site under <span className="accent-underline">maintenance.</span>
          </h1>
          <p className="maintenance-summary">
            I’m currently working on improving this website. Please check back
            soon.
          </p>
        </section>
      </main>
    </>
  );
}

export default Maintenance;
