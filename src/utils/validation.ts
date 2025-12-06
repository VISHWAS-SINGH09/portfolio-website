import { PortfolioData, Experience, Project, Skill, SkillCategory } from '../types';

/**
 * Validates that all required fields in portfolio data are present and non-empty
 */
export function validatePortfolioData(data: PortfolioData): boolean {
  try {
    // Validate personal info
    if (!data.personal.name || !data.personal.title) {
      console.error('Personal info is incomplete');
      return false;
    }

    // Validate about section
    if (!data.about.bio || data.about.bio.length === 0) {
      console.error('About bio is missing');
      return false;
    }

    // Validate experiences
    if (!Array.isArray(data.experiences)) {
      console.error('Experiences must be an array');
      return false;
    }

    for (const exp of data.experiences) {
      if (!validateExperience(exp)) {
        return false;
      }
    }

    // Validate skills
    if (!Array.isArray(data.skills)) {
      console.error('Skills must be an array');
      return false;
    }

    for (const category of data.skills) {
      if (!validateSkillCategory(category)) {
        return false;
      }
    }

    // Validate projects
    if (!Array.isArray(data.projects)) {
      console.error('Projects must be an array');
      return false;
    }

    for (const project of data.projects) {
      if (!validateProject(project)) {
        return false;
      }
    }

    // Validate contact info
    if (!data.contact.email) {
      console.error('Contact email is required');
      return false;
    }

    return true;
  } catch (error) {
    console.error('Validation error:', error);
    return false;
  }
}

export function validateExperience(exp: Experience): boolean {
  if (!exp.id || !exp.title || !exp.company || !exp.startDate) {
    console.error('Experience is missing required fields', exp);
    return false;
  }

  if (!Array.isArray(exp.description) || exp.description.length === 0) {
    console.error('Experience description must be a non-empty array', exp);
    return false;
  }

  if (!Array.isArray(exp.technologies) || exp.technologies.length === 0) {
    console.error('Experience technologies must be a non-empty array', exp);
    return false;
  }

  return true;
}

export function validateProject(project: Project): boolean {
  if (!project.id || !project.title || !project.description) {
    console.error('Project is missing required fields', project);
    return false;
  }

  if (!Array.isArray(project.technologies) || project.technologies.length === 0) {
    console.error('Project technologies must be a non-empty array', project);
    return false;
  }

  return true;
}

export function validateSkillCategory(category: SkillCategory): boolean {
  if (!category.name) {
    console.error('Skill category name is required', category);
    return false;
  }

  if (!Array.isArray(category.skills) || category.skills.length === 0) {
    console.error('Skill category must have at least one skill', category);
    return false;
  }

  for (const skill of category.skills) {
    if (!validateSkill(skill)) {
      return false;
    }
  }

  return true;
}

export function validateSkill(skill: Skill): boolean {
  if (!skill.name) {
    console.error('Skill name is required', skill);
    return false;
  }

  if (typeof skill.level !== 'number' || skill.level < 0 || skill.level > 100) {
    console.error('Skill level must be a number between 0 and 100', skill);
    return false;
  }

  return true;
}

/**
 * Sanitizes string input to prevent XSS attacks
 */
export function sanitizeString(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Validates email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates URL format
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}
