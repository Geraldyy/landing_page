import { type Project } from '@/data/projects';
import ProjectCard from './ProjectCard';

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="flex flex-col gap-20 lg:gap-28">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={index}
          reversed={index % 2 !== 0}
        />
      ))}
    </div>
  );
}
