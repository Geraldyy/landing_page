// ============================================================
// PROJECTS DATA — Update this file to add/edit projects
// ============================================================

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  problem?: string;
  solution?: string;
  result?: string;
  image?: string;
  technologies: string[];
  category: string;
  year: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'e-absensi',
    title: 'E-Absensi Internship System',
    description:
      'A web-based attendance and internship activity monitoring platform designed to replace manual attendance processes with a centralized digital system.',
    problem:
      'Manual attendance tracking was error-prone, time-consuming, and difficult to audit across multiple internship sites.',
    solution:
      'Built a full-stack web platform with role-based access for admins and interns, real-time attendance logging, and activity reporting.',
    result: '[ADD RESULT — e.g. reduced attendance processing time, improved reporting accuracy]',
    technologies: ['Laravel', 'MySQL', 'JavaScript', 'REST API', 'Bootstrap'],
    category: 'Full-Stack Web App',
    year: '2024',
    liveUrl: undefined, // TODO: Add live URL when available
    githubUrl: undefined, // TODO: Add GitHub URL when available
    featured: true,
  },
  {
    id: 'project-two',
    title: '[ADD PROJECT TITLE]',
    description: '[ADD PROJECT DESCRIPTION — A brief, compelling summary of what this project does and why it matters.]',
    problem: '[ADD PROBLEM — What challenge did this solve?]',
    solution: '[ADD SOLUTION — How did you build and approach it?]',
    result: '[ADD RESULT — What was the outcome or impact?]',
    technologies: ['[TECH 1]', '[TECH 2]', '[TECH 3]'],
    category: '[ADD CATEGORY]',
    year: '[ADD YEAR]',
    liveUrl: undefined,
    githubUrl: undefined,
    featured: true,
  },
  {
    id: 'project-three',
    title: '[ADD PROJECT TITLE]',
    description: '[ADD PROJECT DESCRIPTION — A brief, compelling summary of what this project does and why it matters.]',
    problem: '[ADD PROBLEM — What challenge did this solve?]',
    solution: '[ADD SOLUTION — How did you build and approach it?]',
    result: '[ADD RESULT — What was the outcome or impact?]',
    technologies: ['[TECH 1]', '[TECH 2]', '[TECH 3]'],
    category: '[ADD CATEGORY]',
    year: '[ADD YEAR]',
    liveUrl: undefined,
    githubUrl: undefined,
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
