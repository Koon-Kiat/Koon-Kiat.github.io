
import { useState, useMemo } from "react";
import { useGitHubData } from "../hooks/useGitHubData";
import ProjectCard from "../components/ProjectCard";
import AnimatedSection from "../components/AnimatedSection";
import { Code } from "lucide-react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "../components/ui/select";

const Projects = () => {
  const { repositories, loading, error } = useGitHubData("Koon-Kiat");
  const [filter, setFilter] = useState("all");

  // Get unique languages from repositories
  const languages = useMemo(() => {
    if (!repositories) return [];
    
    // Extract all languages and filter out nulls
    const allLanguages = repositories
      .map((repo) => repo.language)
      .filter((language): language is string => !!language);
    
    // Create a map to count occurrences (for potential future sorting by popularity)
    const languageCount = allLanguages.reduce((acc, lang) => {
      acc[lang] = (acc[lang] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    // Create a unique sorted array
    return Array.from(new Set(allLanguages)).sort((a, b) => {
      // First sort by count (descending)
      const countDiff = languageCount[b] - languageCount[a];
      if (countDiff !== 0) return countDiff;
      
      // Then alphabetically if counts are equal
      return a.localeCompare(b);
    });
  }, [repositories]);

  // Filter repositories by language
  const filteredRepositories = useMemo(() => {
    if (!repositories) return [];
    
    return filter === "all"
      ? repositories
      : repositories.filter((repo) => repo.language === filter);
  }, [repositories, filter]);
  
  // Count repositories by language for display in filter buttons
  const languageCounts = useMemo(() => {
    if (!repositories) return {};
    
    return repositories.reduce((acc, repo) => {
      if (repo.language) {
        acc[repo.language] = (acc[repo.language] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);
  }, [repositories]);

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
            {/* Desktop filter buttons */}
            <div className="hidden md:flex flex-wrap justify-center gap-2 md:gap-4">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  filter === "all"
                    ? "bg-foreground text-background"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                All ({repositories?.length || 0})
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
                  {language} ({languageCounts[language] || 0})
                </button>
              ))}
            </div>

            {/* Mobile dropdown filter */}
            <div className="md:hidden flex justify-center mb-4">
              <Select
                value={filter}
                onValueChange={setFilter}
              >
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Filter by Language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">
                    <span className="flex items-center">
                      <Code className="mr-2 h-4 w-4" />
                      All Languages
                    </span>
                  </SelectItem>
                  {languages.map((language) => (
                    <SelectItem key={language} value={language}>
                      <span className="flex items-center">
                        <Code className="mr-2 h-4 w-4" />
                        {language} ({languageCounts[language]})
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
