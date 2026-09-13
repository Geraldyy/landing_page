'use client';

import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import ProjectGrid from '@/components/projects/ProjectGrid';
import { projects } from '@/data/projects';
import { fadeUpVariant } from '@/lib/utils';

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 lg:py-32 section-divider"
      aria-labelledby="projects-heading"
    >
      <Container>
        {/* Section header */}
        <div className="mb-16 lg:mb-20">
          <motion.span
            variants={fadeUpVariant(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="text-[10px] text-[#9C9990] tracking-widest uppercase font-mono"
          >
            03 / Work
          </motion.span>
          <motion.h2
            id="projects-heading"
            variants={fadeUpVariant(0.06)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="mt-2 text-3xl sm:text-4xl font-bold text-[#E0D8DE] tracking-tight"
          >
            SELECTED PROJECTS
          </motion.h2>
          <motion.p
            variants={fadeUpVariant(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="mt-3 text-[#9C9990] text-base max-w-lg"
          >
            Projects, experiments, and digital products I&apos;ve built.
          </motion.p>
        </div>

        <ProjectGrid projects={projects} />
      </Container>
    </section>
  );
}
