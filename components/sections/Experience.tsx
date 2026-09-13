'use client';

import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import { experiences } from '@/data/experience';
import { cn, fadeUpVariant } from '@/lib/utils';

const typeColors: Record<string, string> = {
  work:        'bg-[#CFD2B2]/20 text-[#CFD2B2]',
  education:   'bg-[#9C9990]/20 text-[#9C9990]',
  project:     'bg-[#CFD2B2]/10 text-[#CFD2B2]/80',
  achievement: 'bg-[#E0D8DE]/10 text-[#E0D8DE]/80',
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 lg:py-32 bg-[#6A6262]/15 section-divider"
      aria-labelledby="experience-heading"
    >
      <Container>
        {/* Section header */}
        <div className="mb-12 lg:mb-16 max-w-xl">
          <motion.span
            variants={fadeUpVariant(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="text-[10px] text-[#9C9990] tracking-widest uppercase font-mono"
          >
            06 / Journey
          </motion.span>
          <motion.h2
            id="experience-heading"
            variants={fadeUpVariant(0.06)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="mt-2 text-3xl sm:text-4xl font-bold text-[#E0D8DE] tracking-tight"
          >
            MY JOURNEY
          </motion.h2>
          <motion.p
            variants={fadeUpVariant(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="mt-3 text-[#9C9990] text-base"
          >
            Experience, education, and milestones that shaped how I develop.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[84px] sm:left-[100px] top-0 bottom-0 w-px bg-[#9C9990]/15"
            aria-hidden="true"
          />

          <ol className="flex flex-col gap-0">
            {experiences.map((entry, i) => {
              const isPlaceholder = entry.title.startsWith('[');
              return (
                <motion.li
                  key={entry.id}
                  variants={fadeUpVariant(i * 0.08, 20)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, margin: '-60px' }}
                  className="relative flex gap-6 sm:gap-8 pb-10 last:pb-0"
                  aria-label={`${entry.year}: ${entry.title}`}
                >
                  {/* Year */}
                  <div className="flex-shrink-0 w-[72px] sm:w-[88px] text-right">
                    <span className="text-xs font-mono text-[#CFD2B2] font-semibold tracking-wider">
                      {entry.year}
                    </span>
                  </div>

                  {/* Timeline dot */}
                  <div
                    className="absolute left-[78px] sm:left-[93px] top-1 w-3 h-3 rounded-full border-2 border-[#9C9990]/40 bg-[#4B3B47] z-10"
                    aria-hidden="true"
                  />

                  {/* Content */}
                  <div className="flex-1 pl-8">
                    <motion.div
                      whileHover={{ x: 4, backgroundColor: 'rgba(106, 98, 98, 0.4)' }}
                      className="card-surface p-4 sm:p-5 transition-colors cursor-default"
                    >
                      {/* Header row */}
                      <div className="flex items-start justify-between gap-3 flex-wrap mb-3">
                        <div>
                          <h3 className={cn(
                            'text-sm sm:text-base font-semibold leading-snug',
                            isPlaceholder ? 'text-[#9C9990]/60 italic' : 'text-[#E0D8DE]'
                          )}>
                            {entry.title}
                          </h3>
                          <p className={cn(
                            'text-xs mt-0.5',
                            isPlaceholder ? 'text-[#9C9990]/40 italic' : 'text-[#9C9990]'
                          )}>
                            {entry.organization}
                          </p>
                        </div>
                        <span className={cn(
                          'text-[10px] font-mono tracking-wider px-2 py-0.5 rounded-full shrink-0',
                          typeColors[entry.type] ?? 'text-[#9C9990]'
                        )}>
                          {entry.type}
                        </span>
                      </div>

                      {/* Description */}
                      <p className={cn(
                        'text-xs leading-relaxed',
                        isPlaceholder ? 'text-[#9C9990]/40 italic' : 'text-[#9C9990]'
                      )}>
                        {entry.description}
                      </p>

                      {/* Technologies */}
                      {!isPlaceholder && entry.technologies && entry.technologies.length > 0 && (
                        <ul className="flex flex-wrap gap-1.5 mt-3" aria-label="Technologies">
                          {entry.technologies.map((tech) => (
                            <li key={tech}>
                              <span className="text-[10px] px-2 py-0.5 border border-[#9C9990]/20 text-[#9C9990] rounded font-mono">
                                {tech}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </motion.div>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
