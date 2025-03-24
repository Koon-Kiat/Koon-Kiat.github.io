
import { useState } from "react";
import { useGitHubData } from "../hooks/useGitHubData";
import ProjectCard from "../components/ProjectCard";
import AnimatedSection from "../components/AnimatedSection";

const Projects = () => {
  const { repositories, loading, error } = useGitHubData("Koon-Kiat");
  const [filter, setFilter] = useState("all");

  // Get unique languages from repositories
  const languages = repositories
    ? Array.from(
        new Set(
          repositories
            .map((repo) => repo.language)
            .filter((language): language is string => !!language)
        )
      )
    : [];

  // Filter repositories by language
  const filteredRepositories = repositories
    ? filter === "all"
      ? repositories
      : repositories.filter((repo) => repo.language === filter)
    : [];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Explore my latest projects and open-source contributions. These represent
            my work in various technologies and problem domains.
          </p>
        </AnimatedSection>
        
        {/* Filter Controls */}
        {languages.length > 0 && (
          <AnimatedSection delay={200} className="mb-8">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  filter === "all"
                    ? "bg-foreground text-background"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                All
              </button>
              {languages.map((language) => (
                <button
                  key={language}
                  onClick={() => setFilter(language)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    filter === language
                      ? "bg-foreground text-background"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {language}
                </button>
              ))}
            </div>
          </AnimatedSection>
        )}

        {/* Projects Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse border border-border rounded-lg p-6 h-64">
                <div className="h-7 bg-secondary rounded w-3/4 mb-4"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-secondary rounded"></div>
                  <div className="h-4 bg-secondary rounded w-5/6"></div>
                  <div className="h-4 bg-secondary rounded w-3/4"></div>
                </div>
                <div className="mt-6 flex justify-between">
                  <div className="h-4 bg-secondary rounded w-1/4"></div>
                  <div className="h-4 bg-secondary rounded w-1/4"></div>
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center p-12">
            <p className="text-destructive text-lg">Failed to load repositories</p>
            <p className="text-muted-foreground mt-2">{error}</p>
          </div>
        ) : filteredRepositories.length === 0 ? (
          <div className="text-center p-12">
            <p className="text-lg">No repositories found with the selected filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRepositories.map((repo, index) => (
              <AnimatedSection key={repo.id} delay={150 * (index % 3)}>
                <ProjectCard
                  name={repo.name}
                  description={repo.description}
                  language={repo.language}
                  stars={repo.stargazers_count}
                  forks={repo.forks_count}
                  updatedAt={repo.updated_at}
                  url={repo.html_url}
                  homepageUrl={repo.homepage}
                  topics={repo.topics || []}
                />
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
