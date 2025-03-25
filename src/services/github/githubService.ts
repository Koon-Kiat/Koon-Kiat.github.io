
import { CyberSecurityTags, Profile, RateLimit, Repository } from "./types";

const SECURITY_KEYWORDS = [
  "security", "cybersecurity", "infosec", "pentest", "penetration", 
  "vulnerability", "exploit", "malware", "ransomware", "phishing", 
  "firewall", "encryption", "cryptography", "authentication", "authorization", 
  "ctf", "forensics", "intrusion", "detection", "prevention", "mitigation",
  "threat", "risk", "compliance", "audit", "osint", "hacking", "ethical"
];

export const fetchUserProfile = async (username: string): Promise<Profile> => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch GitHub profile: ${response.statusText}`);
  }
  return await response.json();
};

export const fetchUserRepositories = async (username: string): Promise<Repository[]> => {
  const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
  if (!response.ok) {
    throw new Error(`Failed to fetch repositories: ${response.statusText}`);
  }
  return await response.json();
};

export const extractUniqueLanguages = (repositories: Repository[]): string[] => {
  return Array.from(
    new Set(
      repositories
        .map((repo) => repo.language)
        .filter((lang) => lang !== null && lang !== undefined)
    )
  ) as string[];
};

export const categorizeRepositoryForSecurity = (repository: Repository): CyberSecurityTags => {
  const description = repository.description?.toLowerCase() || "";
  const name = repository.name.toLowerCase();
  const topics = repository.topics.map(topic => topic.toLowerCase());
  
  const allText = `${name} ${description} ${topics.join(" ")}`;
  
  const securityTags = SECURITY_KEYWORDS.filter(keyword => 
    allText.includes(keyword.toLowerCase())
  );
  
  return {
    isCyberSecurity: securityTags.length > 0,
    securityTags
  };
};

export const getRateLimit = async (): Promise<RateLimit> => {
  const response = await fetch("https://api.github.com/rate_limit");
  if (!response.ok) {
    throw new Error(`Failed to fetch rate limit: ${response.statusText}`);
  }
  const data = await response.json();
  return data.resources.core;
};
