
import { useGitHubData } from "../hooks/useGitHubData";
import { Github, MapPin, Link as LinkIcon, Twitter } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

interface GitHubProfileProps {
  username: string;
}

const GitHubProfile = ({ username }: GitHubProfileProps) => {
  const { profile, loading, error } = useGitHubData(username);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-secondary h-12 w-12"></div>
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-secondary rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-secondary rounded"></div>
              <div className="h-4 bg-secondary rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="text-center p-6 border border-border rounded-lg bg-card">
        <p className="text-destructive">Failed to load GitHub profile</p>
        <p className="text-sm text-muted-foreground mt-2">{error || "Unknown error"}</p>
      </div>
    );
  }

  return (
    <AnimatedSection className="border border-border rounded-lg overflow-hidden glass">
      <div className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0">
            <img
              src={profile.avatar_url}
              alt={profile.name || profile.login}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-2 border-border"
            />
          </div>
          
          <div className="flex-grow">
            <h2 className="text-2xl font-bold mb-1">{profile.name || profile.login}</h2>
            <a 
              href={profile.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground flex items-center gap-1 hover:text-foreground transition-colors mb-3"
            >
              <Github className="w-4 h-4" />
              <span>@{profile.login}</span>
            </a>
            
            {profile.bio && (
              <p className="text-foreground/80 mb-4 max-w-2xl">{profile.bio}</p>
            )}
            
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {profile.location && (
                <div className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{profile.location}</span>
                </div>
              )}
              
              {profile.blog && (
                <a 
                  href={profile.blog.startsWith("http") ? profile.blog : `https://${profile.blog}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <LinkIcon className="w-4 h-4" />
                  <span>Website</span>
                </a>
              )}
              
              {profile.twitter_username && (
                <a 
                  href={`https://twitter.com/${profile.twitter_username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                  <span>@{profile.twitter_username}</span>
                </a>
              )}
            </div>
            
            <div className="flex gap-4 mt-4 text-sm">
              <div>
                <span className="font-semibold">{profile.followers}</span> <span className="text-muted-foreground">followers</span>
              </div>
              <div>
                <span className="font-semibold">{profile.following}</span> <span className="text-muted-foreground">following</span>
              </div>
              <div>
                <span className="font-semibold">{profile.public_repos}</span> <span className="text-muted-foreground">repositories</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default GitHubProfile;
