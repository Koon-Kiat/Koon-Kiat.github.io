
export type Repository = {
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

export type Profile = {
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

export type CyberSecurityTags = {
  isCyberSecurity: boolean;
  securityTags: string[];
};

export type RateLimit = {
  limit: number;
  remaining: number;
  reset: number;
};
