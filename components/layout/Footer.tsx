'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons';
import { SITE } from '@/lib/constants';
import Container from './Container';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative z-10 border-t border-[rgba(207,210,178,0.1)] bg-[rgba(106,98,98,0.1)] backdrop-blur-2xl py-12 shadow-[0_-4px_30px_rgba(0,0,0,0.05)]"
      role="contentinfo"
    >
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand + tagline */}
          <div className="flex flex-col gap-3 max-w-xs">
            <span className="text-[#CFD2B2] font-mono text-sm font-semibold tracking-widest">
              geraldy.dev
            </span>
            <p className="text-[#9C9990] text-xs leading-relaxed">
              Built with modern technologies, curiosity, and AI-assisted development.
            </p>
            <p className="text-[#9C9990]/60 text-xs font-mono tracking-wider">
              CODE × PRODUCT × AI
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-col gap-2 sm:flex-row sm:gap-6">
              {[
                { label: 'About',      href: '#about' },
                { label: 'Projects',   href: '#projects' },
                { label: 'Skills',     href: '#skills' },
                { label: 'Experience', href: '#experience' },
                { label: 'Contact',    href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <motion.a
                    href={link.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block text-xs text-[#9C9990] hover:text-[#CFD2B2] transition-colors duration-200 tracking-wider uppercase"
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <motion.a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block text-[#9C9990] hover:text-[#CFD2B2] transition-colors duration-200"
            >
              <GithubIcon size={17} aria-hidden />
            </motion.a>
            <motion.a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block text-[#9C9990] hover:text-[#CFD2B2] transition-colors duration-200"
            >
              <LinkedinIcon size={17} aria-hidden />
            </motion.a>
            <motion.a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${SITE.email}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block text-[#9C9990] hover:text-[#CFD2B2] transition-colors duration-200"
            >
              <Mail size={17} />
            </motion.a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-[#9C9990]/10 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[#9C9990]/60">
            © {year} Rizky. All rights reserved.
          </p>
          <p className="text-xs text-[#9C9990]/40 font-mono">
            v1.0.0
          </p>
        </div>
      </Container>
    </footer>
  );
}
