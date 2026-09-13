'use client';

import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import { skillCategories } from '@/data/skills';
import { fadeUpVariant } from '@/lib/utils';

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 lg:py-32 bg-[#6A6262]/15 section-divider"
      aria-labelledby="skills-heading"
    >
      <Container>
        {/* Section header */}
        <div className="mb-12 lg:mb-16">
          <motion.span
            variants={fadeUpVariant(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="text-[10px] text-[#9C9990] tracking-widest uppercase font-mono"
          >
            02 / Tech Stack
          </motion.span>
          <motion.h2
            id="skills-heading"
            variants={fadeUpVariant(0.06)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="mt-2 text-3xl sm:text-4xl font-bold text-[#E0D8DE] tracking-tight"
          >
            TECH STACK
          </motion.h2>
          <motion.p
            variants={fadeUpVariant(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="mt-3 text-[#9C9990] text-base max-w-lg"
          >
            The tools and technologies I use to design, build, and ship digital products.
          </motion.p>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, catIdx) => (
              <motion.div
                key={category.id}
                variants={fadeUpVariant(catIdx * 0.06)}
                initial="hidden"
                whileInView="visible"
                whileHover={{ y: -4, borderColor: 'rgba(207, 210, 178, 0.4)' }}
                viewport={{ once: false }}
                className="card-surface p-5 flex flex-col gap-4 transition-colors duration-300 cursor-default"
              >
                {/* Category label */}
                <div className="flex items-center justify-between">
                  <h3 className="text-xs text-[#CFD2B2] font-mono tracking-widest uppercase font-semibold">
                    {category.label}
                  </h3>
                  <span className="text-[10px] text-[#9C9990]/50 font-mono">
                    {category.skills.length}
                  </span>
                </div>

                {/* Skills list */}
                <ul className="flex flex-wrap gap-2" aria-label={`${category.label} skills`}>
                  {category.skills.map((skill) => (
                    <motion.li key={skill.name} whileHover={{ scale: 1.05 }}>
                      <span
                        className="inline-block px-2.5 py-1 text-xs font-medium bg-[#4B3B47]/60 border border-[#9C9990]/20 text-[#E0D8DE] rounded-sm hover:border-[#CFD2B2]/60 hover:text-[#CFD2B2] transition-colors duration-200 cursor-default"
                      >
                        {skill.name}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
