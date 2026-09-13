'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '@/components/ui/BrandIcons';
import Container from '@/components/layout/Container';
import { SITE } from '@/lib/constants';
import { fadeUpVariant, fadeRightVariant } from '@/lib/utils';

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 lg:py-32 section-divider"
      aria-labelledby="contact-heading"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left — copy */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.span
              variants={fadeUpVariant(0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="text-[10px] text-[#9C9990] tracking-widest uppercase font-mono"
            >
              07 / Contact
            </motion.span>
            <motion.h2
              id="contact-heading"
              variants={fadeUpVariant(0.06)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#E0D8DE] leading-[1] tracking-tight"
            >
              HAVE AN IDEA?
              <br />
              <span className="text-[#CFD2B2]">LET&apos;S BUILD IT.</span>
            </motion.h2>
            <motion.p
              variants={fadeUpVariant(0.12)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="text-[#9C9990] text-base sm:text-lg leading-relaxed max-w-lg"
            >
              Whether you&apos;re looking for a developer, collaboration, or simply want to discuss
              an idea, feel free to reach out.
            </motion.p>
            <motion.div
              variants={fadeUpVariant(0.18)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${SITE.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#CFD2B2] text-[#4B3B47] text-sm font-bold tracking-widest uppercase rounded hover:bg-[#E0D8DE] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CFD2B2]"
              >
                <Mail size={16} />
                SEND A MESSAGE
              </motion.a>
            </motion.div>
          </div>

          {/* Right — contact links */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-center">
            <motion.p
              variants={fadeRightVariant(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="text-xs text-[#9C9990] tracking-widest uppercase font-mono mb-2"
            >
              Or reach me on
            </motion.p>

            {[
              { label: 'GitHub',    href: SITE.github,           Icon: GithubIcon,    meta: '@Geraldyy' },
              { label: 'LinkedIn',  href: SITE.linkedin,         Icon: LinkedinIcon,  meta: 'in/rizky-geraldy-3932a941' },
              { label: 'Instagram', href: SITE.instagram,        Icon: InstagramIcon, meta: '@rizkyygeraldyy' },
              { label: 'Email',     href: `https://mail.google.com/mail/?view=cm&fs=1&to=${SITE.email}`, Icon: Mail, meta: SITE.email },
            ].map(({ label, href, Icon, meta }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeRightVariant(0.25 + i * 0.06)}
                initial="hidden"
                whileInView="visible"
                whileHover={{ x: 6, borderColor: 'rgba(207, 210, 178, 0.4)' }}
                viewport={{ once: false }}
                className="group flex items-center gap-4 p-4 card-surface transition-all duration-200"
                aria-label={`${label}: ${meta}`}
              >
                <div className="w-9 h-9 rounded flex items-center justify-center bg-[#4B3B47] border border-[#9C9990]/20 shrink-0 group-hover:border-[#CFD2B2]/30 transition-colors">
                  <Icon size={15} className="text-[#9C9990] group-hover:text-[#CFD2B2] transition-colors" aria-hidden />
                </div>
                <div>
                  <p className="text-xs text-[#9C9990] tracking-wider uppercase font-mono">
                    {label}
                  </p>
                  <p className="text-sm text-[#E0D8DE] font-medium mt-0.5">
                    {meta}
                  </p>
                </div>
                <span
                  className="ml-auto text-[#9C9990]/40 group-hover:text-[#CFD2B2]/60 transition-colors text-xs font-mono"
                  aria-hidden="true"
                >
                  →
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
