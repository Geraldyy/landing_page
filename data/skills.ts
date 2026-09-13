// ============================================================
// SKILLS DATA — Update this file to add/edit skills
// ============================================================

export interface Skill {
  name: string;
  level?: 'learning' | 'comfortable' | 'proficient';
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'HTML',         level: 'proficient' },
      { name: 'CSS',          level: 'proficient' },
      { name: 'JavaScript',   level: 'proficient' },
      { name: 'TypeScript',   level: 'comfortable' },
      { name: 'React',        level: 'comfortable' },
      { name: 'Next.js',      level: 'comfortable' },
      { name: 'Tailwind CSS', level: 'comfortable' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      { name: 'PHP',      level: 'proficient' },
      { name: 'Laravel',  level: 'proficient' },
      { name: 'Node.js',  level: 'comfortable' },
      { name: 'REST API', level: 'comfortable' },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    skills: [
      { name: 'MySQL',      level: 'proficient' },
      { name: 'PostgreSQL', level: 'learning' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    skills: [
      { name: 'Git',    level: 'comfortable' },
      { name: 'GitHub', level: 'comfortable' },
      { name: 'Docker', level: 'learning' },
      { name: 'VS Code', level: 'proficient' },
    ],
  },
  {
    id: 'ai',
    label: 'AI-Assisted Dev',
    skills: [
      { name: 'ChatGPT',           level: 'proficient' },
      { name: 'Claude',            level: 'proficient' },
      { name: 'AI Coding Workflow', level: 'proficient' },
    ],
  },
];
