
import { useState, useEffect } from "react";

type Repository = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  topics: string[];
  language: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  homepage: string | null;
};

type Profile = {
  name: string;
  login: string;
  avatar_url: string;
  html_url: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
  location: string;
  blog: string;
  twitter_username: string | null;
};

export const useGitHubData = (username: string) => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [languages, setLanguages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch user profile
        const profileResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!profileResponse.ok) {
          throw new Error(`Failed to fetch GitHub profile: ${profileResponse.statusText}`);
        }
        const profileData = await profileResponse.json();
        setProfile(profileData);

        // Fetch all repositories (not just the first 10)
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
        if (!reposResponse.ok) {
          throw new Error(`Failed to fetch repositories: ${reposResponse.statusText}`);
        }
        const reposData = await reposResponse.json();
        setRepositories(reposData);

        // Extract unique languages from repositories
        const uniqueLanguages = Array.from(
          new Set(
            reposData
              .map((repo: Repository) => repo.language)
              .filter((lang: string | null) => lang !== null)
          )
        );
        setLanguages(uniqueLanguages as string[]);
      } catch (err) {
        console.error("Error fetching GitHub data:", err);
        setError(err instanceof Error ? err.message : "Unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  return { repositories, profile, languages, loading, error };
};
