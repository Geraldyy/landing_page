'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants, Easing } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Container from '@/components/layout/Container';
import { SITE } from '@/lib/constants';

const EASE_OUT: Easing = 'easeOut';

// Terminal lines to type through
const TERMINAL_LINES = [
  { type: 'prompt', text: 'rizky@portfolio ~ % whoami' },
  { type: 'output', text: 'Full-Stack Developer' },
  { type: 'output', text: 'Laravel · Next.js · React · MySQL' },
  { type: 'blank', text: '' },
  { type: 'prompt', text: 'rizky@portfolio ~ % npm run build' },
  { type: 'output', text: '▸  Building digital products...' },
  { type: 'output', text: '▸  AI-assisted development  ✓' },
  { type: 'output', text: '▸  Deployed to production   ✓' },
];

function TerminalPanel() {
  const [displayedLines, setDisplayedLines] = useState<typeof TERMINAL_LINES>([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const line = TERMINAL_LINES[lineIndex];
    if (!line) return;

    if (line.type === 'blank') {
      timerRef.current = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, line]);
        setLineIndex((i) => i + 1);
        setCharIndex(0);
      }, 200);
      return;
    }

    if (charIndex < line.text.length) {
      const delay = line.type === 'prompt' ? 45 : 25;
      timerRef.current = setTimeout(() => {
        setCharIndex((c) => c + 1);
      }, delay);
    } else {
      timerRef.current = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, line]);
        setLineIndex((i) => i + 1);
        setCharIndex(0);
      }, line.type === 'prompt' ? 600 : 300);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [lineIndex, charIndex]);

  const currentLine = TERMINAL_LINES[lineIndex];
  const typingText = currentLine ? currentLine.text.slice(0, charIndex) : '';

  return (
    <div
      className="terminal-panel overflow-hidden w-full"
      aria-label="Developer terminal output"
      role="region"
    >
      {/* Terminal header bar */}
      <div className="terminal-header bg-[#5a5252]">
        <div className="terminal-dot bg-[#E05252]/70" aria-hidden="true" />
        <div className="terminal-dot bg-[#E0C452]/70" aria-hidden="true" />
        <div className="terminal-dot bg-[#52E07A]/70" aria-hidden="true" />
        <span className="ml-3 text-[10px] text-[#9C9990] tracking-wider font-mono">
          terminal — rizky@portfolio
        </span>
      </div>

      {/* Terminal body */}
      <div className="p-5 text-sm leading-7 min-h-[240px]" aria-live="polite" aria-atomic="false">
        {displayedLines.map((line, i) => (
          <div key={i} className="font-mono">
            {line.type === 'blank' ? (
              <br />
            ) : line.type === 'prompt' ? (
              <span className="text-[#CFD2B2]">{line.text}</span>
            ) : (
              <span className="text-[#E0D8DE]/80">{line.text}</span>
            )}
          </div>
        ))}

        {currentLine && currentLine.type !== 'blank' && (
          <div className="font-mono">
            {currentLine.type === 'prompt' ? (
              <span className="text-[#CFD2B2]">
                {typingText}
                <span className="animate-blink text-[#CFD2B2]">▌</span>
              </span>
            ) : (
              <span className="text-[#E0D8DE]/80">
                {typingText}
                <span className="animate-blink text-[#9C9990]">▌</span>
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: EASE_OUT 
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16"
      aria-labelledby="hero-heading"
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 20% 50%, rgba(207,210,178,0.04) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(224,216,222,0.03) 0%, transparent 50%)',
        }}
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <motion.div
            className="flex flex-col gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
          >
            {/* Status badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#9C9990]/30 rounded-full bg-[#6A6262]/30">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#CFD2B2] animate-pulse"
                  aria-hidden="true"
                />
                <span className="text-[10px] text-[#9C9990] tracking-widest font-mono uppercase">
                  {SITE.status}
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants}>
              <h1
                id="hero-heading"
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#E0D8DE] leading-[0.95] tracking-tight"
              >
                FULL-STACK
                <br />
                <span className="text-[#CFD2B2]">DEVELOPER</span>
                <br />
                <span className="text-[#E0D8DE]/70 text-3xl sm:text-4xl lg:text-5xl">
                  &amp; AI-ASSISTED
                </span>
                <br />
                <span className="text-[#E0D8DE]/70 text-3xl sm:text-4xl lg:text-5xl">
                  BUILDER
                </span>
              </h1>
            </motion.div>

            {/* Supporting statement */}
            <motion.p
              variants={itemVariants}
              className="text-[#9C9990] text-base sm:text-lg leading-relaxed max-w-md"
            >
              {SITE.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#CFD2B2] text-[#4B3B47] text-sm font-semibold tracking-widest uppercase rounded hover:bg-[#E0D8DE] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CFD2B2]"
              >
                View My Projects
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </motion.a>
              <motion.a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${SITE.email}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#9C9990]/40 text-[#E0D8DE] text-sm font-semibold tracking-widest uppercase rounded hover:border-[#CFD2B2]/60 hover:text-[#CFD2B2] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CFD2B2]"
              >
                <MessageCircle size={15} />
                Let&apos;s Talk
              </motion.a>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-xs text-[#9C9990]/50 font-mono tracking-widest mt-2"
            >
              {SITE.tagline}
            </motion.p>
          </motion.div>

          {/* Right — Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.4, 
              ease: EASE_OUT 
            }}
          >
            <TerminalPanel />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          aria-hidden="true"
        >
          <div className="w-px h-10 bg-gradient-to-b from-[#9C9990]/0 via-[#9C9990]/40 to-[#9C9990]/0 animate-pulse" />
        </motion.div>
      </Container>
    </section>
  );
}
