// ============================================================
// EXPERIENCE DATA — Update this file to add/edit experience
// ============================================================

export interface ExperienceEntry {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
  technologies?: string[];
  type: 'work' | 'education' | 'project' | 'achievement';
}

export const experiences: ExperienceEntry[] = [
  {
    id: 'exp-1',
    year: '2024',
    title: '[ADD TITLE — e.g. Internship / Freelance Project / Academic Project]',
    organization: '[ADD ORGANIZATION]',
    description:
      '[ADD DESCRIPTION — What did you do, what did you contribute, and what did you learn or build?]',
    technologies: ['[TECH 1]', '[TECH 2]'],
    type: 'work',
  },
  {
    id: 'exp-2',
    year: '2023',
    title: 'Started Full-Stack Development Journey',
    organization: 'Self-Directed Learning',
    description:
      'Began systematically learning web development fundamentals — HTML, CSS, JavaScript — then progressed to PHP, Laravel, React, and Next.js while building personal and academic projects.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Laravel'],
    type: 'education',
  },
  {
    id: 'exp-3',
    year: '2024',
    title: 'Adopted AI-Assisted Development Workflow',
    organization: 'Personal Practice',
    description:
      'Integrated AI tools (ChatGPT, Claude) into development workflow — using them to accelerate exploration, debug complex problems, and generate initial implementations while maintaining engineering decision-making.',
    technologies: ['ChatGPT', 'Claude', 'Next.js', 'TypeScript'],
    type: 'achievement',
  },
  {
    id: 'exp-4',
    year: '[ADD YEAR]',
    title: '[ADD TITLE — e.g. Education / Degree / Course]',
    organization: '[ADD INSTITUTION]',
    description: '[ADD DESCRIPTION — Your educational background, program, or notable coursework.]',
    technologies: [],
    type: 'education',
  },
];
