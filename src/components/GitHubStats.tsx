import { GitHubStats as GitHubStatsType } from '../types';

interface GitHubStatsProps {
  stats: GitHubStatsType;
}

export function GitHubStats({ stats }: GitHubStatsProps) {
  return (
    <section id="github-stats" className="github-stats">
      <div className="container">
        <h2 className="section-title">GitHub Activity</h2>
        <p className="section-subtitle">Open Source Contributions & Projects</p>
        
        <div className="github-content">
          {/* Stats Cards */}
          <div className="github-stats-grid">
            <div className="github-stat-card">
              <div className="stat-icon">
                <i className="fas fa-folder"></i>
              </div>
              <div className="stat-info">
                <h3>{stats.totalRepos}</h3>
                <p>Repositories</p>
              </div>
            </div>
            
            <div className="github-stat-card">
              <div className="stat-icon">
                <i className="fas fa-star"></i>
              </div>
              <div className="stat-info">
                <h3>{stats.totalStars}</h3>
                <p>Stars Earned</p>
              </div>
            </div>
            
            <div className="github-stat-card">
              <div className="stat-icon">
                <i className="fas fa-code-branch"></i>
              </div>
              <div className="stat-info">
                <h3>{stats.totalCommits}</h3>
                <p>Total Commits</p>
              </div>
            </div>
            
            <div className="github-stat-card">
              <div className="stat-icon">
                <i className="fas fa-calendar-check"></i>
              </div>
              <div className="stat-info">
                <h3>{stats.contributions}</h3>
                <p>Contributions</p>
              </div>
            </div>
          </div>
          
          {/* GitHub Contribution Graph */}
          <div className="github-graph-container">
            <h3 className="graph-title">Contribution Activity</h3>
            <div className="github-graph">
              <img 
                src={`https://ghchart.rshah.org/${stats.username}`}
                alt="GitHub Contribution Graph"
                className="contribution-graph"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    parent.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 2rem;">Contribution graph unavailable</p>';
                  }
                }}
              />
            </div>
            <a 
              href={stats.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="github-profile-link"
            >
              <i className="fab fa-github"></i>
              View Full Profile
            </a>
          </div>
          
          {/* GitHub Stats Image */}
          <div className="github-stats-images">
            <img 
              src={`https://github-readme-stats.vercel.app/api?username=${stats.username}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=1c1c1e&title_color=9b8fc4&icon_color=9b8fc4&text_color=d4d4d4`}
              alt="GitHub Stats"
              className="stats-image"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <img 
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${stats.username}&theme=tokyonight&hide_border=true&background=1c1c1e&ring=9b8fc4&fire=9b8fc4&currStreakLabel=9b8fc4&sideNums=d4d4d4&sideLabels=a8a8a8&dates=888888`}
              alt="GitHub Streak"
              className="stats-image"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
