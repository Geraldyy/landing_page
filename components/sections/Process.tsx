'use client';

import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import { fadeUpVariant } from '@/lib/utils';

const steps = [
  {
    number: '01',
    title: 'DISCOVER',
    description: 'Understand the problem and requirements. Listen to users, define scope, and identify constraints before writing a single line of code.',
  },
  {
    number: '02',
    title: 'DESIGN',
    description: 'Plan the interface, experience, and architecture. Map data models, API contracts, and component structure before implementation.',
  },
  {
    number: '03',
    title: 'BUILD',
    description: 'Develop frontend, backend, API, and database systems — iterating in focused, testable increments.',
  },
  {
    number: '04',
    title: 'TEST',
    description: 'Validate functionality, usability, and edge cases. Catch issues early so they never reach production.',
  },
  {
    number: '05',
    title: 'SHIP',
    description: 'Deploy, monitor, improve, and iterate. Shipping is not the end — it is where learning begins.',
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="py-24 lg:py-32 bg-[#6A6262]/15 section-divider"
      aria-labelledby="process-heading"
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
            04 / Process
          </motion.span>
          <motion.h2
            id="process-heading"
            variants={fadeUpVariant(0.06)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="mt-2 text-3xl sm:text-4xl font-bold text-[#E0D8DE] tracking-tight"
          >
            HOW I BUILD
          </motion.h2>
          <motion.p
            variants={fadeUpVariant(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="mt-3 text-[#9C9990] text-base"
          >
            A disciplined workflow that produces reliable, maintainable products.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical timeline line (desktop) */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#CFD2B2]/30 via-[#9C9990]/20 to-transparent hidden lg:block"
            aria-hidden="true"
          />

          <ol className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <motion.li
                key={step.number}
                variants={fadeUpVariant(i * 0.1, 20)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: '-60px' }}
                className="relative flex gap-8 lg:gap-12 pb-10 last:pb-0"
              >
                {/* Step number — acts as timeline node */}
                <div className="relative flex-shrink-0 w-12 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#4B3B47] border border-[#9C9990]/30 flex items-center justify-center z-10">
                    <span className="font-mono text-xs font-bold text-[#CFD2B2] tracking-wider">
                      {step.number}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="flex-1 w-px bg-[#9C9990]/15 mt-2 lg:hidden" aria-hidden="true" />
                  )}
                </div>

                {/* Step content */}
                <motion.div
                  whileHover={{ x: 6 }}
                  className="flex-1 pt-2.5 pb-4 cursor-default"
                >
                  <h3 className="text-lg font-bold text-[#E0D8DE] tracking-wider mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#9C9990] text-sm leading-relaxed max-w-xl transition-colors hover:text-[#CFD2B2]">
                    {step.description}
                  </p>
                </motion.div>
              </motion.li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
