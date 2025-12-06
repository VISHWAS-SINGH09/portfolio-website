# Design Document

## Overview

The portfolio website will be built as a modern, single-page application (SPA) using React with TypeScript for type safety and maintainability. The design emphasizes visual appeal through sophisticated animations, glassmorphism UI elements, and smooth user interactions. The website will be fully responsive, accessible, and optimized for performance.

### Design Template Inspiration

The portfolio will follow a **modern, premium developer portfolio template** style with these characteristics:

- **Visual Style**: Dark theme with vibrant gradient accents (purple, blue, cyan)
- **Layout Pattern**: Single-page scroll with full-height hero section
- **Animation Style**: Smooth scroll-triggered reveals, particle effects, 3D card tilts
- **UI Pattern**: Glassmorphism cards with backdrop blur and subtle borders
- **Typography**: Large, bold headings with gradient text effects
- **Interaction**: Hover effects that lift and tilt cards, animated skill bars
- **Background**: Animated gradient mesh or particle system in hero section

**Similar to popular templates like:**
- Brittany Chiang's portfolio (smooth animations, clean sections)
- Bruno Simon's creative portfolio (3D effects, interactive elements)
- Jacek Jeznach's portfolio (glassmorphism, modern gradients)

The architecture follows a component-based approach where each section of the portfolio is an independent, reusable component. We'll use Framer Motion for advanced animations, Tailwind CSS for styling with a custom design system, and React Hook Form for form management. The deployment pipeline will use GitHub Actions for CI/CD, automatically deploying to Vercel for optimal performance and global CDN distribution.

## Architecture

### Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom configuration for the design system
- **Animation Library**: Framer Motion for declarative animations
- **Form Handling**: React Hook Form with Zod validation
- **Email Service**: EmailJS for contact form submissions
- **Deployment**: Vercel with automatic deployments from GitHub
- **Version Control**: Git with GitHub repository

### Application Structure

```
portfolio-website/
├── src/
│   ├── components/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Experience/
│   │   ├── Skills/
│   │   ├── Projects/
│   │   ├── Contact/
│   │   ├── Navigation/
│   │   └── common/
│   ├── data/
│   │   └── portfolio-data.ts
│   ├── hooks/
│   │   └── useScrollAnimation.ts
│   ├── styles/
│   │   └── globals.css
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   └── animations.ts
│   ├── App.tsx
│   └── main.tsx
├── public/
│   └── VISHWAS_SINGH_2025-CV.pdf
├── .github/
│   └── workflows/
│       └── deploy.yml
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

### Component Architecture

The application follows a hierarchical component structure:

1. **App Component**: Root component that manages global state and routing
2. **Navigation Component**: Sticky header with smooth scroll navigation
3. **Section Components**: Hero, About, Experience, Skills, Projects, Contact
4. **Common Components**: Button, Card, AnimatedText, SkillBar, Timeline, etc.

Each component is self-contained with its own styles, animations, and logic. Components communicate through props and custom hooks for shared functionality like scroll detection and animation triggers.

## Components and Interfaces

### Core Components

#### Navigation Component
```typescript
interface NavigationProps {
  sections: string[];
  activeSection: string;
  onNavigate: (section: string) => void;
}
```

Responsibilities:
- Display navigation menu with section links
- Highlight active section based on scroll position
- Provide mobile hamburger menu
- Smooth scroll to sections on click

#### Hero Component
```typescript
interface HeroProps {
  name: string;
  title: string;
  subtitle: string;
  ctaButtons: CTAButton[];
}

interface CTAButton {
  label: string;
  action: () => void;
  variant: 'primary' | 'secondary';
}
```

Responsibilities:
- Display animated hero section with name and title
- Implement typing effect for dynamic text
- Render animated background (particles or gradients)
- Provide call-to-action buttons

#### Experience Component
```typescript
interface ExperienceProps {
  experiences: Experience[];
}

interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  description: string[];
  technologies: string[];
}
```

Responsibilities:
- Display work experience in animated timeline format
- Show job details with expand/collapse functionality
- Animate timeline items on scroll
- Highlight technologies used

#### Skills Component
```typescript
interface SkillsProps {
  skillCategories: SkillCategory[];
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}
```

Responsibilities:
- Display skills organized by category
- Animate skill bars with progress indicators
- Show skill icons where available
- Trigger animations on scroll into view

#### Projects Component
```typescript
interface ProjectsProps {
  projects: Project[];
}

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}
```

Responsibilities:
- Display projects in responsive grid layout
- Implement hover effects with 3D tilt or parallax
- Show project details on hover/click
- Provide links to live demos and source code

#### Contact Component
```typescript
interface ContactProps {
  email: string;
  socialLinks: SocialLink[];
}

interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
```

Responsibilities:
- Display contact form with validation
- Handle form submission via EmailJS
- Show success/error messages
- Display social media links with animated icons
- Provide CV download button

### Custom Hooks

#### useScrollAnimation
```typescript
interface UseScrollAnimationReturn {
  ref: RefObject<HTMLElement>;
  isVisible: boolean;
  hasAnimated: boolean;
}

function useScrollAnimation(threshold?: number): UseScrollAnimationReturn;
```

Monitors element visibility in viewport and triggers animations once.

#### useActiveSection
```typescript
function useActiveSection(sectionIds: string[]): string;
```

Tracks which section is currently in view for navigation highlighting.

## Data Models

### Portfolio Data Structure

```typescript
interface PortfolioData {
  personal: PersonalInfo;
  about: AboutInfo;
  experiences: Experience[];
  skills: SkillCategory[];
  projects: Project[];
  contact: ContactInfo;
}

interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  tagline: string;
}

interface AboutInfo {
  bio: string[];
  interests: string[];
  education: Education[];
}

interface Education {
  degree: string;
  institution: string;
  year: string;
  location: string;
}

interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  socialLinks: SocialLink[];
}
```

All portfolio data will be stored in a TypeScript file (`portfolio-data.ts`) for easy updates and type safety. This approach allows for quick content changes without modifying component code.

## Error Handling

### Form Validation Errors

- Use Zod schema validation for contact form
- Display inline error messages below form fields
- Prevent submission until all validation passes
- Show field-specific error messages (e.g., "Invalid email format")

### Email Service Errors

- Implement try-catch blocks around EmailJS calls
- Display user-friendly error messages on failure
- Provide retry mechanism for failed submissions
- Log errors to console for debugging

### Asset Loading Errors

- Implement fallback images for missing project images
- Use lazy loading with loading states
- Handle PDF download errors gracefully
- Show loading spinners during async operations

### Responsive Design Errors

- Test on multiple device sizes and browsers
- Implement CSS fallbacks for unsupported features
- Use feature detection for advanced animations
- Provide accessible alternatives for animation-heavy features

## Testing Strategy

### Unit Testing

- Test form validation logic with various inputs
- Test utility functions for animations and scroll detection
- Test data transformation functions
- Test custom hooks with React Testing Library

### Property-Based Testing

Property-based tests will use `fast-check` library to verify universal properties across many randomly generated inputs.

### Integration Testing

- Test navigation flow between sections
- Test form submission end-to-end
- Test responsive behavior at different breakpoints
- Test animation triggers on scroll

### Accessibility Testing

- Run automated accessibility audits with axe-core
- Test keyboard navigation through all interactive elements
- Verify screen reader compatibility
- Check color contrast ratios

### Performance Testing

- Measure initial load time and time to interactive
- Test animation performance (60fps target)
- Verify image optimization
- Check bundle size and code splitting


## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Complete data rendering
*For any* portfolio data item (experience, project, or skill), when rendered to the DOM, the output should contain all required fields from the data model.
**Validates: Requirements 1.3, 1.5**

### Property 2: Category-based organization
*For any* set of skills with categories, the rendered output should group all skills under their respective category headings in the correct order.
**Validates: Requirements 1.4**

### Property 3: Navigation completeness
*For any* list of section identifiers, the navigation component should render exactly one link for each section.
**Validates: Requirements 2.1**

### Property 4: Scroll-to-section behavior
*For any* navigation link, clicking it should result in the viewport scrolling to the element with the corresponding section ID.
**Validates: Requirements 2.2**

### Property 5: Sticky navigation persistence
*For any* scroll position greater than zero, the navigation component should remain visible at the top of the viewport.
**Validates: Requirements 2.3**

### Property 6: Active section highlighting
*For any* section currently in the viewport, the navigation link corresponding to that section should have the active state class applied.
**Validates: Requirements 2.4**

### Property 7: Form validation consistency
*For any* invalid form input (empty required fields, malformed email), the form should display appropriate error messages and prevent submission.
**Validates: Requirements 3.3**

### Property 8: Email service integration
*For any* valid contact form data, submitting the form should trigger an email send request to the configured email service.
**Validates: Requirements 3.2**

### Property 9: Responsive image serving
*For any* viewport width, images should be served at a resolution appropriate for that device size (not exceeding 2x the display size).
**Validates: Requirements 4.5**

### Property 10: Client-side navigation
*For any* navigation action within the application, the browser should not perform a full page reload.
**Validates: Requirements 5.5**

### Property 11: Scroll position preservation
*For any* action that triggers a file download, the viewport scroll position should remain unchanged after the download initiates.
**Validates: Requirements 6.4**

### Property 12: Accessibility markup completeness
*For any* interactive element, image, or form input in the application, it should have appropriate accessibility attributes (ARIA labels, alt text, or associated labels).
**Validates: Requirements 7.1, 7.4, 7.5**

### Property 13: Keyboard navigation support
*For any* interactive element in the application, it should be reachable and operable using only keyboard navigation (tab, enter, space).
**Validates: Requirements 7.2**

### Property 14: Color contrast compliance
*For any* text element in the application, the contrast ratio between text color and background color should be at least 4.5:1.
**Validates: Requirements 7.3**

### Property 15: Consistent spacing system
*For any* spacing value used in the application, it should be a multiple of the base spacing unit defined in the design system.
**Validates: Requirements 8.3**

### Property 16: Scroll-triggered animations
*For any* section element, when it enters the viewport, animation classes should be applied to trigger entrance animations.
**Validates: Requirements 8.5, 9.2**

### Property 17: Hover effect application
*For any* interactive element (buttons, cards, links), hovering should apply CSS transition effects (scale, color, or transform).
**Validates: Requirements 9.3**

### Property 18: Skill bar animations
*For any* skill item with a level value, the rendered skill bar should animate from 0 to the specified level percentage.
**Validates: Requirements 9.4**

### Property 19: Project card hover effects
*For any* project card, hovering should apply transform effects (3D tilt or parallax) and reveal additional project details.
**Validates: Requirements 9.5**

### Property 20: Glassmorphism styling
*For any* card component in the application, it should have glassmorphism CSS properties (backdrop-filter, semi-transparent background, border).
**Validates: Requirements 10.2**

### Property 21: Grid layout with hover reveals
*For any* set of project items, they should be displayed in a CSS grid layout where hovering reveals additional details.
**Validates: Requirements 10.4**

## Deployment Architecture

### GitHub Repository Structure

The repository will follow standard React project conventions:

- `src/`: Source code for the application
- `public/`: Static assets including the CV PDF
- `.github/workflows/`: CI/CD configuration
- Configuration files at root: `package.json`, `tsconfig.json`, `tailwind.config.js`, `vite.config.ts`

### CI/CD Pipeline

The deployment pipeline uses GitHub Actions with the following workflow:

1. **Trigger**: Push to `main` branch
2. **Build**: 
   - Install dependencies (`npm install`)
   - Run type checking (`npm run type-check`)
   - Build production bundle (`npm run build`)
3. **Deploy**:
   - Deploy to Vercel using Vercel CLI or GitHub integration
   - Vercel automatically handles:
     - Global CDN distribution
     - Automatic HTTPS
     - Preview deployments for pull requests
     - Environment variable management

### Environment Configuration

Required environment variables:
- `VITE_EMAILJS_SERVICE_ID`: EmailJS service identifier
- `VITE_EMAILJS_TEMPLATE_ID`: EmailJS template identifier
- `VITE_EMAILJS_PUBLIC_KEY`: EmailJS public key

These will be configured in Vercel's environment settings and accessed via `import.meta.env` in the application.

## Animation System

### Animation Library: Framer Motion

Framer Motion provides declarative animations with excellent performance. Key features used:

- **Variants**: Define animation states (initial, animate, exit)
- **Viewport Detection**: Trigger animations when elements enter viewport
- **Gesture Animations**: Handle hover, tap, and drag interactions
- **Layout Animations**: Smooth transitions when layout changes

### Animation Patterns

#### Scroll-Triggered Animations

```typescript
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};
```

Applied to sections using Framer Motion's `whileInView` prop with `once: true` to animate only on first view.

#### Hover Effects

```typescript
const cardHover = {
  scale: 1.05,
  rotateY: 5,
  transition: { duration: 0.3 }
};
```

Applied to interactive cards for engaging micro-interactions.

#### Typing Effect

Implemented using Framer Motion's `motion.span` with staggered character animations for the hero section.

### Performance Considerations

- Use `will-change` CSS property sparingly
- Prefer `transform` and `opacity` for animations (GPU-accelerated)
- Implement `IntersectionObserver` for scroll detection
- Lazy load animation library code
- Disable animations on low-end devices using `prefers-reduced-motion`

## Styling System

### Tailwind CSS Configuration

Custom theme extending Tailwind defaults:

```javascript
{
  colors: {
    primary: { /* gradient colors */ },
    secondary: { /* accent colors */ },
    dark: { /* dark mode colors */ }
  },
  spacing: { /* 4px base unit */ },
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    display: ['Poppins', 'sans-serif']
  },
  animation: {
    'fade-in': 'fadeIn 0.6s ease-out',
    'slide-up': 'slideUp 0.6s ease-out',
    'pulse-slow': 'pulse 3s ease-in-out infinite'
  }
}
```

### Design Tokens

- **Spacing Scale**: 4, 8, 12, 16, 24, 32, 48, 64, 96px
- **Border Radius**: 8, 12, 16, 24px
- **Shadows**: Layered shadows for depth
- **Glassmorphism**: `backdrop-filter: blur(10px)`, `background: rgba(255,255,255,0.1)`

### Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Form Handling

### Validation Schema (Zod)

```typescript
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters")
});
```

### EmailJS Integration

1. Configure EmailJS account with email template
2. Store credentials in environment variables
3. Use EmailJS SDK to send form data
4. Handle success/error responses with user feedback

### Form States

- **Idle**: Initial state, form ready for input
- **Validating**: Client-side validation in progress
- **Submitting**: Email send request in progress
- **Success**: Email sent successfully, show confirmation
- **Error**: Email send failed, show error message with retry option

## Performance Optimization

### Code Splitting

- Lazy load route components
- Dynamic imports for heavy libraries (Framer Motion, EmailJS)
- Separate vendor bundle from application code

### Image Optimization

- Use WebP format with JPEG fallback
- Implement responsive images with `srcset`
- Lazy load images below the fold
- Compress images to < 200KB

### Bundle Optimization

- Tree-shaking unused code
- Minification and compression
- CSS purging with Tailwind
- Analyze bundle with `vite-bundle-visualizer`

### Caching Strategy

- Leverage Vercel's CDN caching
- Set appropriate cache headers for static assets
- Use service worker for offline support (optional)

## Browser Support

- Chrome/Edge: Last 2 versions
- Firefox: Last 2 versions
- Safari: Last 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Android 90+

Graceful degradation for older browsers:
- Fallback to simpler animations
- Polyfills for modern JavaScript features
- Alternative layouts for unsupported CSS features
