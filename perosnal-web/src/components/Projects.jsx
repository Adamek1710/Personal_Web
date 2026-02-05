import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Code2, Star, GitFork, Activity } from 'lucide-react';
import { GitHubCalendar } from 'react-github-calendar';

/**
 * STYLING OBJECT
 * Separates Tailwind clutter from the logic
 */
const styles = {
  section: "py-24 bg-slate-950 text-slate-200",
  container: "max-w-6xl mx-auto px-6",
  headerContainer: "flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4",
  sectionTitle: "text-3xl font-bold text-white",
  grid: "grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]",
  
  // Card Variants
  cardBase: "rounded-3xl border border-slate-800 bg-slate-900 transition-all overflow-hidden relative p-6 hover:border-blue-500/50 group flex flex-col",
  featuredCard: "md:col-span-2 md:row-span-2 p-8 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900/20",
  statsCard: "rounded-3xl border border-slate-800 bg-gradient-to-br from-blue-600/20 to-slate-900 p-6 flex flex-col justify-center items-center text-center",
  calendarCard: "md:col-span-3 rounded-3xl border border-slate-800 bg-slate-900/50 p-6 flex flex-col items-center justify-center overflow-hidden",

  // Typography & Elements
  title: "text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors capitalize",
  featuredTitle: "text-3xl font-bold text-white mb-4 capitalize",
  description: "text-slate-400 text-sm line-clamp-3 mb-4",
  featuredDescription: "text-slate-400 text-lg mb-6 max-w-md",
  tag: "px-2 py-1 text-[10px] font-mono rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20",
  stat: "flex items-center gap-1 text-xs text-slate-500 font-mono",
  linkIcon: "w-5 h-5 text-slate-400 hover:text-white transition-colors",
};

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const username = 'Adamek1710';

  useEffect(() => {
    const fetchGitHub = async () => {
      try {
        const [profRes, repoRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=pushed&per_page=6`)
        ]);
        const profData = await profRes.json();
        const repoData = await repoRes.json();
        
        setProfile(profData);
        setRepos(repoData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchGitHub();
  }, []);

  if (loading) return (
    <div className="bg-slate-950 text-blue-400 flex items-center justify-center py-40 font-mono italic">
      {`> Initializing_GitHub_Sync...`}
    </div>
  );

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.headerContainer}>
          <div>
            <h2 className={styles.sectionTitle}>Automated Project Feed</h2>
            <p className="text-slate-500 mt-2 font-mono text-sm">Sorted by latest activity</p>
          </div>
          <a href={`https://github.com/${username}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium">
            <Github size={18} /> Explore full archive →
          </a>
        </div>

        <div className={styles.grid}>
          {repos.map((repo, index) => {
            const isFeatured = index === 0;
            return (
              <div key={repo.id} className={`${styles.cardBase} ${isFeatured ? styles.featuredCard : ''}`}>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-slate-800 rounded-lg">
                    <Code2 className="text-blue-400 w-6 h-6" />
                  </div>
                  <div className="flex gap-4">
                    <a href={repo.html_url} target="_blank" rel="noreferrer" title="View Source"><Github className={styles.linkIcon} /></a>
                    {repo.homepage && <a href={repo.homepage} target="_blank" rel="noreferrer" title="Live Demo"><ExternalLink className={styles.linkIcon} /></a>}
                  </div>
                </div>

                <h3 className={isFeatured ? styles.featuredTitle : styles.title}>
                  {repo.name.replace(/-/g, ' ')}
                </h3>
                
                <p className={isFeatured ? styles.featuredDescription : styles.description}>
                  {repo.description || "Experimental project focusing on clean architecture and efficient problem solving."}
                </p>

                <div className="mt-auto flex items-center gap-4">
                  {repo.language && <span className={styles.tag}>{repo.language}</span>}
                  <span className={styles.stat}><Star size={14} /> {repo.stargazers_count}</span>
                  <span className={styles.stat}><GitFork size={14} /> {repo.forks_count}</span>
                </div>
              </div>
            );
          })}

          {/* GitHub Live Stats Card */}
          <div className={styles.statsCard}>
            <Activity className="text-emerald-400 w-8 h-8 mb-4 animate-pulse" />
            <p className="text-xs font-mono text-blue-400 uppercase tracking-widest">Public Output</p>
            <div className="text-5xl font-bold text-white my-2">{profile?.public_repos}</div>
            <p className="text-sm text-slate-500">Repositories pushed</p>
          </div>

          {/* Contribution Calendar Card */}
          <div className={styles.calendarCard}>
            <div className="w-full mb-6 text-left">
              <h4 className="text-white font-bold text-lg">Commit Velocity</h4>
            </div>
            <div className="w-full flex justify-center [transform-origin:center] scale-[0.8] sm:scale-100 transition-transform">
              <GitHubCalendar 
              username={username}
              blockSize={12}
              blockMargin={4}
              colorScheme="dark"
              fontSize={12}
              responsive={false} 
              theme={{
                dark: [
                  '#1e293b', 
                  '#1e40af', 
                  '#3b82f6', 
                  '#60a5fa', 
                  '#93c5fd'],
              }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;