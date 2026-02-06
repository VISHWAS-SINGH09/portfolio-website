export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  tagline: string;
  resumeUrl?: string;
  availability?: string;
}

export interface AboutInfo {
  bio: string[];
  interests: string[];
  education: Education[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  location: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  description: string[];
  technologies: string[];
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  socialLinks: SocialLink[];
}

export interface PortfolioData {
  personal: PersonalInfo;
  about: AboutInfo;
  experiences: Experience[];
  skills: SkillCategory[];
  projects: Project[];
  contact: ContactInfo;
  codingProfiles: CodingProfile[];
  githubStats: GitHubStats;
}

export interface CTAButton {
  label: string;
  action: () => void;
  variant: 'primary' | 'secondary';
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface CodingProfile {
  platform: string;
  username: string;
  url: string;
  rating?: string;
  problemsSolved?: number;
  rank?: string;
  icon: string;
  color: string;
}

export interface GitHubStats {
  username: string;
  profileUrl: string;
  totalRepos: number;
  totalStars: number;
  totalCommits: string;
  contributions: number;
}
