'use client';

import { motion } from 'framer-motion';
import { MapPin, Cpu, Monitor, Zap } from 'lucide-react';
import Container from '@/components/layout/Container';
import { fadeUpVariant } from '@/lib/utils';

const metadata = [
  { icon: Monitor,  label: 'ROLE',     value: 'Junior Full-Stack Developer' },
  { icon: Zap,      label: 'FOCUS',    value: 'Modern Web Applications' },
  { icon: MapPin,   label: 'BASED IN', value: 'Indonesia' },
  { icon: Cpu,      label: 'WORKFLOW', value: 'AI-Assisted Development' },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 lg:py-32 section-divider"
      aria-labelledby="about-heading"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left column — section label + heading */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <motion.span
              variants={fadeUpVariant(0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="text-[10px] text-[#9C9990] tracking-widest uppercase font-mono"
            >
              01 / About
            </motion.span>
            <motion.h2
              id="about-heading"
              variants={fadeUpVariant(0.08)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="text-3xl sm:text-4xl font-bold text-[#E0D8DE] leading-tight tracking-tight"
            >
              ABOUT ME
            </motion.h2>

            {/* Metadata grid */}
            <motion.div
              variants={fadeUpVariant(0.16)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="mt-4 flex flex-col gap-4"
            >
              {metadata.map(({ icon: Icon, label, value }) => (
                <motion.div
                  whileHover={{ x: 4, backgroundColor: 'rgba(106, 98, 98, 0.4)' }}
                  key={label}
                  className="flex items-start gap-3 p-3 rounded-lg border border-[#9C9990]/15 bg-[#6A6262]/20 transition-colors cursor-default"
                >
                  <Icon
                    size={14}
                    className="text-[#CFD2B2] mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-[10px] text-[#9C9990] tracking-widest uppercase font-mono">
                      {label}
                    </p>
                    <p className="text-sm text-[#E0D8DE] font-medium mt-0.5">
                      {value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right column — body copy */}
          <div className="lg:col-span-8 flex flex-col justify-center gap-8">
            <motion.p
              variants={fadeUpVariant(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="text-xl sm:text-2xl lg:text-3xl text-[#CFD2B2] font-medium leading-snug"
            >
              &ldquo;Building useful things with code, curiosity, and AI.&rdquo;
            </motion.p>

            <motion.p
              variants={fadeUpVariant(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="text-[#9C9990] text-base sm:text-lg leading-relaxed"
            >
              I&apos;m a junior Full-Stack Developer who enjoys turning ideas and real-world problems
              into functional digital products. I work across frontend, backend, databases, and
              deployment while using AI-assisted development to accelerate exploration and
              implementation.
            </motion.p>

            <motion.p
              variants={fadeUpVariant(0.28)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="text-[#9C9990]/70 text-sm sm:text-base leading-relaxed border-l-2 border-[#CFD2B2]/30 pl-4"
            >
              AI is a development accelerator — not a replacement for engineering judgement.
              Architecture, validation, testing, and product decisions are always mine to own.
            </motion.p>
          </div>
        </div>
      </Container>
    </section>
  );
}
