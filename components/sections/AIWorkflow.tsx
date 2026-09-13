'use client';

import { motion } from 'framer-motion';
import type { Easing } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Container from '@/components/layout/Container';
import { fadeUpVariant } from '@/lib/utils';

const EASE_OUT: Easing = 'easeOut';

const workflowSteps = [
  { id: 'idea',           label: 'IDEA',           description: 'Identify the goal or problem to solve.' },
  { id: 'exploration',    label: 'AI EXPLORATION',  description: 'Use AI to explore approaches, generate initial code, and surface options quickly.' },
  { id: 'architecture',   label: 'ARCHITECTURE',    description: 'I define the system design, data models, and component boundaries.' },
  { id: 'implementation', label: 'IMPLEMENTATION',  description: 'Build the full solution — frontend, backend, API, database.' },
  { id: 'testing',        label: 'TESTING',         description: 'Validate with real scenarios. AI does not test for me.' },
  { id: 'deployment',     label: 'DEPLOYMENT',      description: 'Ship it, monitor it, and improve it.' },
];

const principles = [
  { label: 'AI accelerates.', body: 'AI helps me move faster, explore more options, and handle boilerplate.' },
  { label: 'I decide.', body: 'Architecture, trade-offs, and product decisions are always mine to make.' },
  { label: 'Quality is non-negotiable.', body: 'AI output is reviewed, tested, and validated before it ships.' },
];

export default function AIWorkflow() {
  return (
    <section
      id="ai-workflow"
      className="py-24 lg:py-32 section-divider"
      aria-labelledby="ai-heading"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left — Copy */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <motion.span
              variants={fadeUpVariant(0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="text-[10px] text-[#9C9990] tracking-widest uppercase font-mono"
            >
              05 / AI Workflow
            </motion.span>
            <motion.h2
              id="ai-heading"
              variants={fadeUpVariant(0.06)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="text-3xl sm:text-4xl font-bold text-[#E0D8DE] tracking-tight leading-tight"
            >
              BUILDING FASTER
              <br />
              <span className="text-[#CFD2B2]">WITH AI</span>
            </motion.h2>
            <motion.p
              variants={fadeUpVariant(0.12)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="text-[#9C9990] text-sm sm:text-base leading-relaxed"
            >
              I use AI as a development partner to explore ideas, generate initial implementations,
              debug problems, and accelerate repetitive work — while architecture, validation,
              testing, and product decisions remain under my control.
            </motion.p>

            {/* Principles */}
            <motion.div
              variants={fadeUpVariant(0.18)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="flex flex-col gap-4 mt-2"
            >
              {principles.map((p) => (
                <motion.div
                  whileHover={{ x: 4, backgroundColor: 'rgba(106, 98, 98, 0.4)' }}
                  key={p.label}
                  className="flex gap-3 p-3 border border-[#9C9990]/15 rounded bg-[#6A6262]/15 transition-colors cursor-default"
                >
                  <span className="text-[#CFD2B2]" aria-hidden="true">→</span>
                  <div>
                    <span className="text-xs font-semibold text-[#E0D8DE] tracking-wide">
                      {p.label}
                    </span>
                    {' '}
                    <span className="text-xs text-[#9C9990] leading-relaxed">
                      {p.body}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right — Workflow diagram */}
          <div className="lg:col-span-7 flex flex-col gap-0">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7, delay: 0.15, ease: EASE_OUT }}
              className="flex flex-col items-center w-full"
              role="list"
              aria-label="AI-assisted development workflow steps"
            >
              {workflowSteps.map((step, i) => (
                <div
                  key={step.id}
                  role="listitem"
                  className="w-full flex flex-col items-center"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.02, borderColor: 'rgba(207, 210, 178, 0.4)' }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.08, ease: EASE_OUT }}
                    className="w-full max-w-sm card-surface px-5 py-3 flex flex-col gap-1 transition-colors duration-300 cursor-default"
                  >
                    <span className="text-xs font-bold text-[#CFD2B2] tracking-widest font-mono">
                      {step.label}
                    </span>
                    <p className="text-xs text-[#9C9990] leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                  {i < workflowSteps.length - 1 && (
                    <div className="flex flex-col items-center py-1.5" aria-hidden="true">
                      <ArrowDown size={14} className="text-[#9C9990]/50" />
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
