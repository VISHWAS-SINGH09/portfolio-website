import { useEffect, useState } from 'react';
import { portfolioData } from './data/portfolio-data';
import { StatCard } from './components/StatCard';
import { CodingProfiles } from './components/CodingProfiles';
import { GitHubStats } from './components/GitHubStats';
import { ContactForm } from './components/ContactForm';

function App() {
  const [isDarkLime, setIsDarkLime] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.body.setAttribute('data-theme', isDarkLime ? 'dark-lime' : 'default');
  }, [isDarkLime]);

  useEffect(() => {
    // Scroll Progress Bar
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        } else {
          // Remove class when scrolling away to retrigger animation
          entry.target.classList.remove('animate-in');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    // Observe all cards
    const cards = document.querySelectorAll('.skill-category, .project-card, .education-card, .stat-card, .about-text, .about-paragraph');
    cards.forEach(card => observer.observe(card));

    // Mobile Navigation Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    const toggleMenu = () => {
      navMenu?.classList.toggle('active');
    };

    navToggle?.addEventListener('click', toggleMenu);

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu?.classList.remove('active');
      });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });

    // Active navigation link highlighting and navbar color change
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.nav-link');
      const navbar = document.querySelector('.navbar') as HTMLElement;
      
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= (sectionTop - 200)) {
          current = section.getAttribute('id') || '';
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });

      // Change navbar color based on scroll position
      if (navbar) {
        if (window.scrollY > 100) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Form submission is now handled by ContactForm component

    return () => {
      navToggle?.removeEventListener('click', toggleMenu);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress" 
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <a href="#home">PORTFOLIO</a>
          </div>
          <div className="nav-menu" id="nav-menu">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#coding-profiles" className="nav-link">Coding</a>
            <a href="#github-stats" className="nav-link">GitHub</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          <div className="nav-actions">
            <button 
              className="theme-toggle" 
              onClick={() => setIsDarkLime(!isDarkLime)}
              aria-label="Toggle theme"
            >
              <svg 
                className="theme-icon" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                {isDarkLime ? (
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                ) : (
                  <>
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </>
                )}
              </svg>
            </button>
            <div className="nav-toggle" id="nav-toggle">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Big Name & Introduction */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="availability-badge">
                <i className="fas fa-briefcase"></i>
                Available for Internships 2025
              </div>
              <div className="hero-greeting"></div>
              <h1 className="hero-name">{portfolioData.personal.name}</h1>
              <p className="hero-title">{portfolioData.personal.title}</p>
              <p className="hero-description">{portfolioData.personal.tagline}</p>
              <div className="hero-buttons">
                {portfolioData.personal.resumeUrl && (
                  <a 
                    href={portfolioData.personal.resumeUrl} 
                    download="Vishwas_Singh_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <i className="fas fa-download"></i>
                    Download Resume
                  </a>
                )}
                <a href="#projects" className="btn btn-secondary">View Projects</a>
                <a href="#contact" className="btn btn-outline">Get In Touch</a>
              </div>
            </div>

            {/* Animated Illustration */}
            <div className="hero-illustration">
              <div className="illustration-container">
                {/* Animated Geometric Shapes */}
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
                <div className="shape shape-4"></div>
                
                {/* Central Icon */}
                <div className="central-icon">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor: 'var(--accent-primary)', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: 'var(--accent-secondary)', stopOpacity: 1}} />
                      </linearGradient>
                    </defs>
                    
                    {/* Brain/AI Icon */}
                    <circle cx="100" cy="100" r="80" fill="url(#gradient1)" opacity="0.1"/>
                    <path d="M100 40 L140 70 L130 110 L100 130 L70 110 L60 70 Z" 
                          fill="url(#gradient1)" opacity="0.3" className="pulse-shape"/>
                    <circle cx="100" cy="100" r="50" fill="none" stroke="url(#gradient1)" 
                            strokeWidth="3" className="rotating-circle"/>
                    <circle cx="100" cy="100" r="30" fill="url(#gradient1)" opacity="0.5"/>
                    
                    {/* Neural Network Nodes */}
                    <circle cx="70" cy="70" r="8" fill="var(--accent-primary)" className="node node-1"/>
                    <circle cx="130" cy="70" r="8" fill="var(--accent-primary)" className="node node-2"/>
                    <circle cx="70" cy="130" r="8" fill="var(--accent-primary)" className="node node-3"/>
                    <circle cx="130" cy="130" r="8" fill="var(--accent-primary)" className="node node-4"/>
                    
                    {/* Connecting Lines */}
                    <line x1="70" y1="70" x2="100" y2="100" stroke="var(--accent-primary)" 
                          strokeWidth="2" opacity="0.5" className="connection"/>
                    <line x1="130" y1="70" x2="100" y2="100" stroke="var(--accent-primary)" 
                          strokeWidth="2" opacity="0.5" className="connection"/>
                    <line x1="70" y1="130" x2="100" y2="100" stroke="var(--accent-primary)" 
                          strokeWidth="2" opacity="0.5" className="connection"/>
                    <line x1="130" y1="130" x2="100" y2="100" stroke="var(--accent-primary)" 
                          strokeWidth="2" opacity="0.5" className="connection"/>
                  </svg>
                </div>

                {/* Floating Code Symbols */}
                <div className="floating-symbol symbol-1">&lt;/&gt;</div>
                <div className="floating-symbol symbol-2">{ }</div>
                <div className="floating-symbol symbol-3">AI</div>
                <div className="floating-symbol symbol-4">ML</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              {portfolioData.about.bio.map((paragraph, index) => (
                <p key={index} className="about-paragraph">{paragraph}</p>
              ))}
            </div>
            <div className="about-stats">
              <StatCard 
                icon="fas fa-code" 
                number={50} 
                suffix="+" 
                label="Projects Completed" 
              />
              <StatCard 
                icon="fas fa-brain" 
                number={10} 
                suffix="+" 
                label="ML Models Deployed" 
              />
              <StatCard 
                icon="fas fa-trophy" 
                number={5} 
                suffix="+" 
                label="Certifications" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            {portfolioData.skills.map((category, index) => (
              <div key={index} className="skill-category">
                <h3>{category.name}</h3>
                <div className="skill-items">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-item">{skill.name}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-grid">
            {portfolioData.about.education.map((edu, index) => (
              <div key={index} className="education-card">
                <div className="education-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <div className="education-content">
                  <h3>{edu.degree}</h3>
                  <p className="institution">{edu.institution}</p>
                  <div className="education-details">
                    <span className="location">
                      <i className="fas fa-map-marker-alt"></i>
                      {edu.location}
                    </span>
                    {edu.year && <span className="year">{edu.year}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coding Profiles Section */}
      <CodingProfiles profiles={portfolioData.codingProfiles} />

      {/* GitHub Stats Section */}
      <GitHubStats stats={portfolioData.githubStats} />

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {portfolioData.projects.map((project, index) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <i className={`fas ${
                    index === 0 ? 'fa-brain' : 
                    index === 1 ? 'fa-heart' : 
                    'fa-chart-line'
                  }`}></i>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex}>{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                        <i className="fas fa-external-link-alt"></i>
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                        <i className="fab fa-github"></i>
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's work together!</h3>
              <p>I'm always interested in new opportunities and exciting ML projects. Feel free to reach out!</p>
              <div className="contact-details">
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <span>{portfolioData.contact.email}</span>
                </div>
                {portfolioData.contact.phone && (
                  <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    <span>{portfolioData.contact.phone}</span>
                  </div>
                )}
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>{portfolioData.contact.location}</span>
                </div>
              </div>
              <div className="social-links">
                {portfolioData.contact.socialLinks.map((link, index) => (
                  <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className={`fab ${
                      link.platform === 'GitHub' ? 'fa-github' :
                      link.platform === 'LinkedIn' ? 'fa-linkedin' :
                      'fa-envelope'
                    }`}></i>
                  </a>
                ))}
              </div>
            </div>
            <ContactForm accessKey="0e15ebcb-3728-47e6-8a61-16ef934b8e8c" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 {portfolioData.personal.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
