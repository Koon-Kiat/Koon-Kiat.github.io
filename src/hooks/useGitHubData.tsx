
import { useState, useEffect } from "react";
import { 
  fetchUserProfile, 
  fetchUserRepositories, 
  extractUniqueLanguages,
  categorizeRepositoryForSecurity
} from "../services/github/githubService";
import { Profile, Repository } from "../services/github/types";

export const useGitHubData = (username: string) => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [securityRepos, setSecurityRepos] = useState<Repository[]>([]);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [languages, setLanguages] = useState<string[]>([]);
  const [securitySkills, setSecuritySkills] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch user profile
        const profileData = await fetchUserProfile(username);
        setProfile(profileData);

        // Fetch all repositories
        const reposData = await fetchUserRepositories(username);
        setRepositories(reposData);

        // Extract unique languages from repositories
        const uniqueLanguages = extractUniqueLanguages(reposData);
        setLanguages(uniqueLanguages);

        // Identify security-related repositories and skills
        const securityRelated = reposData.filter(repo => {
          const securityInfo = categorizeRepositoryForSecurity(repo);
          return securityInfo.isCyberSecurity;
        });
        
        setSecurityRepos(securityRelated);

        // Extract unique security tags
        const allSecurityTags = securityRelated.flatMap(repo => 
          categorizeRepositoryForSecurity(repo).securityTags
        );
        
        const uniqueSecurityTags = Array.from(new Set(allSecurityTags));
        setSecuritySkills(uniqueSecurityTags);

      } catch (err) {
        console.error("Error fetching GitHub data:", err);
        setError(err instanceof Error ? err.message : "Unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  return { 
    repositories, 
    securityRepos,
    profile, 
    languages, 
    securitySkills,
    loading, 
    error 
  };
};
