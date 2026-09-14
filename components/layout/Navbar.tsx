'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, LayoutGroup } from 'framer-motion';
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons';
import { cn } from '@/lib/utils';
import { SITE, NAV_LINKS } from '@/lib/constants';
import Container from './Container';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Scroll spy for active section and navbar elevation
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace('#', ''));

    const handleScroll = () => {
      // Elevate navbar
      setScrolled(window.scrollY > 24);

      // Determine active section
      let currentActive = 'home';
      const triggerLine = window.scrollY + window.innerHeight / 3;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const elementTop = element.getBoundingClientRect().top + window.scrollY;
          if (elementTop <= triggerLine) {
            currentActive = id;
          }
        }
      }

      // If at the absolute bottom of the page, ensure the last section is active
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        currentActive = sectionIds[sectionIds.length - 1];
      }

      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // init

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Custom smooth scroll handler for all internal links
  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href?: string) => {
    if (href?.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        // Calculate position relative to body, offset by navbar height (80px)
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
        
        // Optionally update the URL hash without triggering scroll
        window.history.pushState(null, '', href);
      }
    }
    setMobileOpen(false);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-[rgba(106,98,98,0.15)] backdrop-blur-2xl border-b border-[rgba(207,210,178,0.1)] shadow-[0_4px_30px_rgba(0,0,0,0.1)]'
            : 'bg-transparent'
        )}
      >
        <Container as="nav" aria-label="Main navigation">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Brand */}
            <motion.a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-[#CFD2B2] font-mono text-sm font-semibold tracking-widest hover:text-[#E0D8DE] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CFD2B2] rounded-sm"
              aria-label="geraldy.dev — Back to top"
            >
              geraldy.dev
            </motion.a>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-2" role="list">
              <LayoutGroup>
                {NAV_LINKS.map((link) => {
                  const sectionId = link.href.replace('#', '');
                  const isActive = activeSection === sectionId;
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      role="listitem"
                      className={cn(
                        'relative px-3 py-1.5 text-xs tracking-widest font-medium uppercase transition-colors duration-200 rounded-sm',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CFD2B2]',
                        isActive
                          ? 'text-[#4B3B47]'
                          : 'text-[#9C9990] hover:text-[#CFD2B2]'
                      )}
                      aria-current={isActive ? 'location' : undefined}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-active-pill"
                          className="absolute inset-0 bg-[#CFD2B2] rounded-full z-0"
                          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{link.label}</span>
                    </motion.a>
                  );
                })}
              </LayoutGroup>
            </div>

            {/* Desktop social + CTA */}
            <div className="hidden md:flex items-center gap-4">
              <motion.a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="text-[#9C9990] hover:text-[#CFD2B2] transition-colors duration-200"
              >
                <GithubIcon size={17} aria-hidden />
              </motion.a>
              <motion.a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="text-[#9C9990] hover:text-[#CFD2B2] transition-colors duration-200"
              >
                <LinkedinIcon size={17} aria-hidden />
              </motion.a>
              <motion.a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${SITE.email}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-2 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase border border-[#CFD2B2]/60 text-[#CFD2B2] rounded hover:bg-[#CFD2B2]/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CFD2B2]"
              >
                Let&apos;s Talk
              </motion.a>
            </div>

            {/* Mobile menu toggle */}
            <button
              type="button"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="md:hidden p-2 text-[#9C9990] hover:text-[#CFD2B2] transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CFD2B2]"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile navigation drawer */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={cn(
          'fixed inset-0 z-40 md:hidden flex flex-col transition-all duration-300',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[rgba(106,98,98,0.2)] backdrop-blur-3xl"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />

        {/* Drawer content */}
        <div className="relative flex flex-col h-full pt-20 pb-10 px-8">
          <nav aria-label="Mobile navigation links">
            <ul className="flex flex-col gap-6">
              {NAV_LINKS.map((link, i) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={cn(
                        'block text-2xl font-medium tracking-wide transition-colors duration-200',
                        isActive ? 'text-[#CFD2B2]' : 'text-[#E0D8DE]',
                        'hover:text-[#CFD2B2]'
                      )}
                      style={{
                        transitionDelay: mobileOpen ? `${i * 50}ms` : '0ms',
                      }}
                      aria-current={isActive ? 'location' : undefined}
                    >
                      <span className="text-xs text-[#9C9990] font-mono mr-3">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile social links */}
          <div className="mt-auto flex items-center gap-6">
            <motion.a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="text-[#9C9990] hover:text-[#CFD2B2] transition-colors"
            >
              <GithubIcon size={20} aria-hidden />
            </motion.a>
            <motion.a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="text-[#9C9990] hover:text-[#CFD2B2] transition-colors"
            >
              <LinkedinIcon size={20} aria-hidden />
            </motion.a>
            <motion.a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${SITE.email}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-auto px-5 py-2 text-xs font-semibold tracking-widest uppercase border border-[#CFD2B2]/60 text-[#CFD2B2] rounded hover:bg-[#CFD2B2]/10 transition-all"
            >
              Let&apos;s Talk
            </motion.a>
          </div>
        </div>
      </div>
    </>
  );
}
