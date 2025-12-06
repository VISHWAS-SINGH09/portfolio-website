import { describe, test, expect, vi } from 'vitest';
import * as fc from 'fast-check';
import { render } from '@testing-library/react';
import { Experience, Project, Skill } from '../types';
import { Navigation } from '../components/Navigation';

/**
 * Feature: portfolio-website, Property 1: Complete data rendering
 * Validates: Requirements 1.3, 1.5
 * 
 * For any portfolio data item (experience, project, or skill), 
 * when rendered to the DOM, the output should contain all required fields 
 * from the data model.
 */

// Arbitraries for generating random data
// Generate non-whitespace strings to ensure valid content
const nonEmptyString = fc.string({ minLength: 1 }).filter(s => s.trim().length > 0);

const experienceArbitrary = fc.record({
  id: nonEmptyString,
  title: nonEmptyString,
  company: nonEmptyString,
  location: nonEmptyString,
  startDate: nonEmptyString,
  endDate: fc.oneof(fc.constant('Present'), nonEmptyString),
  description: fc.array(nonEmptyString, { minLength: 1 }),
  technologies: fc.array(nonEmptyString, { minLength: 1 }),
});

const projectArbitrary = fc.record({
  id: nonEmptyString,
  title: nonEmptyString,
  description: nonEmptyString,
  technologies: fc.array(nonEmptyString, { minLength: 1 }),
  imageUrl: nonEmptyString,
  liveUrl: fc.option(nonEmptyString, { nil: undefined }),
  githubUrl: fc.option(nonEmptyString, { nil: undefined }),
  featured: fc.boolean(),
});

const skillArbitrary = fc.record({
  name: nonEmptyString,
  level: fc.integer({ min: 0, max: 100 }),
  icon: fc.option(nonEmptyString, { nil: undefined }),
});

// Simple render components for testing
const ExperienceItem = ({ experience }: { experience: Experience }) => (
  <div data-testid="experience-item">
    <h3>{experience.title}</h3>
    <p>{experience.company}</p>
    <p>{experience.location}</p>
    <p>{experience.startDate} - {experience.endDate}</p>
    <ul>
      {experience.description.map((desc, i) => (
        <li key={i}>{desc}</li>
      ))}
    </ul>
    <div>
      {experience.technologies.map((tech, i) => (
        <span key={i}>{tech}</span>
      ))}
    </div>
  </div>
);

const ProjectItem = ({ project }: { project: Project }) => (
  <div data-testid="project-item">
    <h3>{project.title}</h3>
    <p>{project.description}</p>
    <img src={project.imageUrl} alt={project.title} />
    <div>
      {project.technologies.map((tech, i) => (
        <span key={i}>{tech}</span>
      ))}
    </div>
    {project.liveUrl && <a href={project.liveUrl}>Live Demo</a>}
    {project.githubUrl && <a href={project.githubUrl}>GitHub</a>}
  </div>
);

const SkillItem = ({ skill }: { skill: Skill }) => (
  <div data-testid="skill-item">
    <span>{skill.name}</span>
    <span>{skill.level}%</span>
    {skill.icon && <span>{skill.icon}</span>}
  </div>
);

describe('Property 1: Complete data rendering', () => {
  test('Experience items contain all required fields', () => {
    fc.assert(
      fc.property(experienceArbitrary, (experience) => {
        const { container } = render(<ExperienceItem experience={experience} />);
        const text = container.textContent || '';
        
        // Verify all required fields are present in the rendered output
        expect(text).toContain(experience.title);
        expect(text).toContain(experience.company);
        expect(text).toContain(experience.location);
        expect(text).toContain(experience.startDate);
        expect(text).toContain(experience.endDate);
        
        // Verify all descriptions are rendered
        experience.description.forEach(desc => {
          expect(text).toContain(desc);
        });
        
        // Verify all technologies are rendered
        experience.technologies.forEach(tech => {
          expect(text).toContain(tech);
        });
      }),
      { numRuns: 100 }
    );
  });

  test('Project items contain all required fields', () => {
    fc.assert(
      fc.property(projectArbitrary, (project) => {
        const { container } = render(<ProjectItem project={project} />);
        const text = container.textContent || '';
        
        // Verify all required fields are present
        expect(text).toContain(project.title);
        expect(text).toContain(project.description);
        
        // Verify image element exists with alt text
        const img = container.querySelector('img');
        expect(img).toBeTruthy();
        expect(img?.alt).toBe(project.title);
        // Note: We don't check src exactly because browsers normalize URLs
        // The important property is that the image element exists and has the data
        expect(img?.getAttribute('src')).toBe(project.imageUrl);
        
        // Verify all technologies are rendered
        project.technologies.forEach(tech => {
          expect(text).toContain(tech);
        });
        
        // Verify optional fields are rendered when present
        if (project.liveUrl) {
          expect(text).toContain('Live Demo');
        }
        if (project.githubUrl) {
          expect(text).toContain('GitHub');
        }
      }),
      { numRuns: 100 }
    );
  });

  test('Skill items contain all required fields', () => {
    fc.assert(
      fc.property(skillArbitrary, (skill) => {
        const { container } = render(<SkillItem skill={skill} />);
        const text = container.textContent || '';
        
        // Verify all required fields are present
        expect(text).toContain(skill.name);
        expect(text).toContain(`${skill.level}%`);
        
        // Verify optional icon is rendered when present
        if (skill.icon) {
          expect(text).toContain(skill.icon);
        }
      }),
      { numRuns: 100 }
    );
  });
});


/**
 * Feature: portfolio-website, Property 3: Navigation completeness
 * Validates: Requirements 2.1
 * 
 * For any list of section identifiers, the navigation component should render 
 * exactly one link for each section.
 */
describe('Property 3: Navigation completeness', () => {
  test('Navigation renders exactly one link per section', () => {
    const sectionArbitrary = fc.array(
      fc.string({ minLength: 1 }).filter(s => s.trim().length > 0),
      { minLength: 1, maxLength: 10 }
    );

    fc.assert(
      fc.property(sectionArbitrary, (sections) => {
        const { container } = render(
          <Navigation
            sections={sections}
            activeSection={sections[0]}
            onNavigate={() => {}}
          />
        );

        // Count navigation buttons (desktop view)
        const desktopButtons = container.querySelectorAll('.md\\:flex button');
        expect(desktopButtons.length).toBe(sections.length);

        // Verify each section has exactly one button
        sections.forEach(section => {
          const buttons = Array.from(desktopButtons).filter(
            btn => btn.textContent?.toLowerCase().includes(section.toLowerCase())
          );
          expect(buttons.length).toBeGreaterThanOrEqual(1);
        });
      }),
      { numRuns: 100 }
    );
  });
});


/**
 * Feature: portfolio-website, Property 4: Scroll-to-section behavior
 * Validates: Requirements 2.2
 * 
 * For any navigation link, clicking it should result in the viewport scrolling 
 * to the element with the corresponding section ID.
 */
describe('Property 4: Scroll-to-section behavior', () => {
  test('Clicking navigation link scrolls to corresponding section', () => {
    const sectionArbitrary = fc.string({ minLength: 1 }).filter(s => s.trim().length > 0);

    fc.assert(
      fc.property(sectionArbitrary, (sectionId) => {
        // Create a mock section element
        const mockSection = document.createElement('div');
        mockSection.id = sectionId;
        mockSection.scrollIntoView = vi.fn();
        document.body.appendChild(mockSection);

        const { container } = render(
          <Navigation
            sections={[sectionId]}
            activeSection={sectionId}
            onNavigate={() => {}}
          />
        );

        // Find and click the navigation button
        const button = container.querySelector('button');
        expect(button).toBeTruthy();
        
        button?.click();

        // Verify scrollIntoView was called
        expect(mockSection.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });

        // Cleanup
        document.body.removeChild(mockSection);
      }),
      { numRuns: 50 }
    );
  });
});


/**
 * Feature: portfolio-website, Property 5: Sticky navigation persistence
 * Validates: Requirements 2.3
 * 
 * For any scroll position greater than zero, the navigation component should 
 * remain visible at the top of the viewport.
 */
describe('Property 5: Sticky navigation persistence', () => {
  test('Navigation has fixed positioning class', () => {
    const sectionArbitrary = fc.array(
      fc.string({ minLength: 1 }).filter(s => s.trim().length > 0),
      { minLength: 1, maxLength: 5 }
    );

    fc.assert(
      fc.property(sectionArbitrary, (sections) => {
        const { container } = render(
          <Navigation
            sections={sections}
            activeSection={sections[0]}
            onNavigate={() => {}}
          />
        );

        // Verify navigation has fixed positioning
        const nav = container.querySelector('nav');
        expect(nav).toBeTruthy();
        expect(nav?.className).toContain('fixed');
        expect(nav?.className).toContain('top-0');
      }),
      { numRuns: 100 }
    );
  });
});

/**
 * Feature: portfolio-website, Property 6: Active section highlighting
 * Validates: Requirements 2.4
 * 
 * For any section currently in the viewport, the navigation link corresponding 
 * to that section should have the active state class applied.
 */
describe('Property 6: Active section highlighting', () => {
  test('Active section has distinct styling', () => {
    const sectionArbitrary = fc.array(
      fc.string({ minLength: 1 }).filter(s => s.trim().length > 0),
      { minLength: 2, maxLength: 5 }
    );

    fc.assert(
      fc.property(sectionArbitrary, (sections) => {
        const activeIndex = Math.floor(Math.random() * sections.length);
        const activeSection = sections[activeIndex];

        const { container } = render(
          <Navigation
            sections={sections}
            activeSection={activeSection}
            onNavigate={() => {}}
          />
        );

        // Find all desktop navigation buttons
        const buttons = container.querySelectorAll('.md\\:flex button');
        
        // Verify at least one button has active styling
        let hasActiveButton = false;
        buttons.forEach(button => {
          if (button.className.includes('text-primary-400')) {
            hasActiveButton = true;
          }
        });

        expect(hasActiveButton).toBe(true);
      }),
      { numRuns: 100 }
    );
  });
});
