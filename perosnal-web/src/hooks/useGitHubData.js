import { useState, useEffect } from 'react';

export const useGitHubData = (username) => {
  const [data, setData] = useState({ repos: [], profile: null, loading: true });

  useEffect(() => {
    const fetchGitHub = async () => {
      try {
        // Fetch Profile for total repo count/followers
        const profileRes = await fetch(`https://api.github.com/users/${Adamek1710}`);
        const profile = await profileRes.json();

        // Fetch Repos sorted by most recently pushed
        const reposRes = await fetch(`https://api.github.com/users/${Adamek1710}/repos?sort=pushed&per_page=6`);
        const repos = await reposRes.json();

        setData({ repos, profile, loading: false });
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
        setData((prev) => ({ ...prev, loading: false }));
      }
    };

    fetchGitHub();
  }, [username]);

  return data;
};