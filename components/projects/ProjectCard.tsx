'use client';

import { motion } from 'framer-motion';
import type { Easing } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/ui/BrandIcons';
import { type Project } from '@/data/projects';
import { cn } from '@/lib/utils';

const EASE_OUT: Easing = 'easeOut';

interface ProjectCardProps {
  project: Project;
  index: number;
  reversed?: boolean;
}

export default function ProjectCard({ project, index, reversed = false }: ProjectCardProps) {
  const isPlaceholder = project.title.startsWith('[');

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-80px' }}
      transition={{ duration: 0.7, ease: EASE_OUT, delay: index * 0.1 }}
      className={cn(
        'grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center',
        reversed && 'lg:grid-flow-dense'
      )}
      aria-label={`Project: ${project.title}`}
    >
      {/* Content column */}
      <div
        className={cn(
          'lg:col-span-7 flex flex-col gap-5',
          reversed && 'lg:col-start-6'
        )}
      >
        {/* Meta row */}
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-mono text-[#9C9990] tracking-widest">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="w-6 h-px bg-[#9C9990]/40" aria-hidden="true" />
          <span className="text-[10px] font-mono text-[#9C9990] tracking-wider uppercase">
            {project.category}
          </span>
          <span className="ml-auto text-[10px] font-mono text-[#9C9990]/60">
            {project.year}
          </span>
        </div>

        {/* Title */}
        <h3
          className={cn(
            'text-2xl sm:text-3xl font-bold leading-tight tracking-tight',
            isPlaceholder ? 'text-[#9C9990]/60 italic' : 'text-[#E0D8DE]'
          )}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className={cn(
          'text-sm sm:text-base leading-relaxed',
          isPlaceholder ? 'text-[#9C9990]/50 italic' : 'text-[#9C9990]'
        )}>
          {project.description}
        </p>

        {/* Problem / Solution pills */}
        {!isPlaceholder && project.problem && (
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-start">
              <span className="shrink-0 text-[10px] font-mono text-[#CFD2B2] tracking-wider pt-0.5 uppercase">
                Problem
              </span>
              <p className="text-xs text-[#9C9990] leading-relaxed">{project.problem}</p>
            </div>
            {project.solution && (
              <div className="flex gap-2 items-start">
                <span className="shrink-0 text-[10px] font-mono text-[#CFD2B2] tracking-wider pt-0.5 uppercase">
                  Solution
                </span>
                <p className="text-xs text-[#9C9990] leading-relaxed">{project.solution}</p>
              </div>
            )}
          </div>
        )}

        {/* Tech stack */}
        {!isPlaceholder && (
          <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
            {project.technologies.map((tech) => (
              <li key={tech}>
                <span className="text-[10px] px-2 py-1 border border-[#9C9990]/25 text-[#9C9990] rounded-sm font-mono tracking-wider">
                  {tech}
                </span>
              </li>
            ))}
          </ul>
        )}

        {/* Links */}
        {!isPlaceholder && (project.liveUrl || project.githubUrl) && (
          <div className="flex items-center gap-4 mt-1">
            {project.liveUrl && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#CFD2B2] hover:text-[#E0D8DE] tracking-wider uppercase transition-colors"
                aria-label={`View ${project.title} live site`}
              >
                <ExternalLink size={13} />
                Live Site
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9C9990] hover:text-[#CFD2B2] tracking-wider uppercase transition-colors"
                aria-label={`View ${project.title} source code on GitHub`}
              >
                <GithubIcon size={13} aria-hidden />
                Source
              </motion.a>
            )}
          </div>
        )}
      </div>

      {/* Visual column — project preview placeholder */}
      <motion.div
        whileHover={{ y: -4, borderColor: 'rgba(207, 210, 178, 0.4)' }}
        className={cn(
          'lg:col-span-5 h-52 sm:h-64 lg:h-72 rounded-lg border border-[#9C9990]/20 bg-[#6A6262]/40 flex flex-col items-center justify-center gap-4 overflow-hidden relative group transition-colors duration-300',
          reversed && 'lg:col-start-1 lg:row-start-1'
        )}
        aria-hidden="true"
      >
        {isPlaceholder ? (
          <div className="flex flex-col items-center gap-2 text-center px-6">
            <span className="text-3xl text-[#9C9990]/30">+</span>
            <span className="text-xs text-[#9C9990]/40 font-mono">
              Add project to data/projects.ts
            </span>
          </div>
        ) : (
          <>
            {/* Abstract visual for projects without real screenshots */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full bg-[#4B3B47]/50 flex flex-col items-start justify-end p-5 gap-2">
                {/* Mock UI lines */}
                <div className="w-1/3 h-1.5 bg-[#CFD2B2]/30 rounded-full" />
                <div className="w-2/3 h-1 bg-[#9C9990]/20 rounded-full" />
                <div className="w-1/2 h-1 bg-[#9C9990]/20 rounded-full" />
                <div className="mt-3 w-full h-8 bg-[#6A6262]/50 rounded" />
                <div className="w-full h-8 bg-[#6A6262]/30 rounded" />
                <div className="w-full h-8 bg-[#6A6262]/20 rounded" />
              </div>
            </div>
            {/* Category label overlay */}
            <div className="absolute top-4 right-4">
              <span className="text-[10px] font-mono text-[#9C9990]/60 tracking-wider border border-[#9C9990]/20 px-2 py-0.5 rounded-full">
                {project.category}
              </span>
            </div>
          </>
        )}
      </motion.div>
    </motion.article>
  );
}
