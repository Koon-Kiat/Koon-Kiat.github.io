import { useState, useEffect } from "react";

// This is a mock function since direct LinkedIn API access requires authentication
// In a real implementation, this would fetch from an API endpoint
const fetchLinkedInExperience = async (username: string) => {
  // Mock data - in a real app, this would come from LinkedIn API or your backend
  return [
    {
      title: "IT Support Engineer Intern",
      company: "DataExpert Singapore",
      period: "Sep 2021 - Feb 2022",
      description:
        "Conducted digital and mobile forensic investigations, implementing secure data disposal protocols and recovery procedures. Developed and facilitated comprehensive training courses on mobile forensic techniques for technical staff.",
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
