
import { useState, useEffect } from "react";

// This is a mock function since direct LinkedIn API access requires authentication
// In a real implementation, this would fetch from an API endpoint
const fetchLinkedInExperience = async (username: string) => {
  // Mock data - in a real app, this would come from LinkedIn API or your backend
  return [
    {
      title: "Cybersecurity Intern",
      company: "University InfoSec Team",
      period: "2023 - Present",
      description: "Vulnerability assessments, penetration testing, and security monitoring. Implemented security controls and incident response protocols."
    },
    {
      title: "Security Analyst (Part-time)",
      company: "CyberDefend Solutions",
      period: "2022 - 2023",
      description: "Analyzed security logs and alerts. Helped identify and mitigate potential threats. Participated in security audits and compliance reviews."
    },
    {
      title: "CTF Team Lead",
      company: "University Cyber Club",
      period: "2021 - Present",
      description: "Organized and led a team in various Capture The Flag competitions. Focused on web exploitation, cryptography challenges, and forensics."
    },
  ];
};

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export const useLinkedInData = (username: string) => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const experienceData = await fetchLinkedInExperience(username);
        setExperiences(experienceData);
      } catch (err) {
        console.error("Error fetching LinkedIn data:", err);
        setError(err instanceof Error ? err.message : "Unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  return { experiences, loading, error };
};
