import { CodingProfile } from '../types';

interface CodingProfilesProps {
  profiles: CodingProfile[];
}

export function CodingProfiles({ profiles }: CodingProfilesProps) {
  return (
    <section id="coding-profiles" className="coding-profiles">
      <div className="container">
        <h2 className="section-title">Coding Profiles</h2>
        <p className="section-subtitle">Competitive Programming & Problem Solving</p>
        
        <div className="coding-profiles-grid">
          {profiles.map((profile, index) => (
            <a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="coding-profile-card"
              style={{ '--profile-color': profile.color } as React.CSSProperties}
            >
              <div className="profile-icon">
                <i className={profile.icon}></i>
              </div>
              
              <div className="profile-content">
                <h3 className="profile-platform">{profile.platform}</h3>
                <p className="profile-username">@{profile.username}</p>
                
                <div className="profile-stats">
                  {profile.rating && (
                    <div className="stat-item">
                      <span className="stat-label">Rating</span>
                      <span className="stat-value">{profile.rating}</span>
                    </div>
                  )}
                  
                  {profile.rank && (
                    <div className="stat-item">
                      <span className="stat-label">Rank</span>
                      <span className="stat-value">{profile.rank}</span>
                    </div>
                  )}
                  
                  {profile.problemsSolved && (
                    <div className="stat-item">
                      <span className="stat-label">Problems</span>
                      <span className="stat-value">{profile.problemsSolved}+</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="profile-link-icon">
                <i className="fas fa-external-link-alt"></i>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
