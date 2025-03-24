
import { Calendar, Code, Star, GitFork, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  name: string;
  description: string | null;
  language: string | null;
  stars: number;
  forks: number;
  updatedAt: string;
  url: string;
  homepageUrl: string | null;
  topics: string[];
}

const ProjectCard = ({
  name,
  description,
  language,
  stars,
  forks,
  updatedAt,
  url,
  homepageUrl,
  topics,
}: ProjectCardProps) => {
  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date);
  };

  return (
    <div className="group hover:scale-[1.01] transition-all duration-300 border border-border rounded-lg overflow-hidden glass h-full">
      <div className="p-6 flex flex-col h-full">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {name}
          </h3>
          <div className="flex space-x-2">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={`View ${name} on GitHub`}
            >
              <Code className="w-5 h-5" />
            </a>
            {homepageUrl && (
              <a
                href={homepageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Visit live site"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {description && (
          <p className="text-foreground/80 text-sm mt-2 mb-4 flex-grow">
            {description}
          </p>
        )}

        {topics.length > 0 && (
          <div className="flex flex-wrap gap-2 my-3">
            {topics.slice(0, 4).map((topic) => (
              <span
                key={topic}
                className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
              >
                {topic}
              </span>
            ))}
            {topics.length > 4 && (
              <span className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
                +{topics.length - 4} more
              </span>
            )}
          </div>
        )}

        <div className="flex flex-wrap justify-between items-center mt-auto pt-3 text-xs text-muted-foreground">
          <div className="flex space-x-4">
            {language && (
              <div className="flex items-center">
                <Code className="w-4 h-4 mr-1" />
                <span>{language}</span>
              </div>
            )}
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-1" />
              <span>{stars}</span>
            </div>
            <div className="flex items-center">
              <GitFork className="w-4 h-4 mr-1" />
              <span>{forks}</span>
            </div>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{formatDate(updatedAt)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
