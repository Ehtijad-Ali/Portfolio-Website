'use client';

import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { useI18n } from '@/contexts/i18nContext';

/* ------------------------------------------------------------------ */
/*  Icon components (inline SVGs to avoid external deps)              */
/* ------------------------------------------------------------------ */

const GitHubIcon = ({ size = 18, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = ({ size = 18, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const MediumIcon = ({ size = 18, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
);

const FiverrIcon = ({ size = 18, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M23.004 15.588a.995.995 0 10.002-1.99.995.995 0 00-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.677a1.37 1.37 0 00-1.292.857 2.098 2.098 0 00-1.737-.906c-1.303 0-2.218.996-2.218 2.53 0 1.566.915 2.56 2.218 2.56.692 0 1.263-.292 1.682-.732.067.427.42.732.903.732h.422V15.41c-.293-.075-.432-.26-.432-.576v-2.344c0-.316.166-.485.432-.485h.608v3.558h1.577v-2.344c0-.316.166-.485.432-.485h.608v3.558h1.61v-2.466c0-.682.294-1.092.84-1.092h.264a.86.86 0 00-.027.215v1.37c0 .907.468 1.473 1.394 1.473h.32v-1.378h-.14c-.324 0-.474-.168-.474-.478v-1.37a1.27 1.27 0 01.028-.278zM4.607 7.763V6.015H.965v1.748h3.642zm2.877 7.823V10.01c0-.842-.503-1.38-1.345-1.38H4.607v7.735H3.028v-7.735H1.41v-1.49h5.73v9.226h1.344z" />
  </svg>
);

const EmailIcon = ({ size = 16, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const WhatsAppIcon = ({ size = 16, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const ArrowUpIcon = ({ size = 16, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="19" x2="12" y2="5" />
    <polyline points="5 12 12 5 19 12" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const SOCIAL_LINKS: FooterLink[] = [
  { label: 'GitHub', href: 'https://github.com/ehtijadali', external: true },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/ehtijadali', external: true },
  { label: 'Medium', href: 'https://medium.com/@ehtijadali', external: true },
  { label: 'Fiverr', href: 'https://fiverr.com/ehtijadali', external: true },
];

const SECTIONS: FooterSection[] = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Skills', href: '/skills' },
      { label: 'Projects', href: '/projects' },
      { label: 'Experience', href: '/experience' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blogs' },
      { label: 'Certifications', href: '/certifications' },
      { label: 'Feedback', href: '/feedback' },
      { label: 'Resume', href: '/resume' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Email', href: 'mailto:hello@ehtijadali.com', external: true },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/ehtijadali', external: true },
      { label: 'GitHub', href: 'https://github.com/ehtijadali', external: true },
      { label: 'WhatsApp', href: 'https://wa.me/923001234567', external: true },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

const SOCIAL_ICON_MAP: Record<string, (props: { size?: number; color?: string }) => ReactNode> = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  Medium: MediumIcon,
  Fiverr: FiverrIcon,
};

const CONNECT_ICON_MAP: Record<string, (props: { size?: number; color?: string }) => ReactNode> = {
  Email: EmailIcon,
  LinkedIn: LinkedInIcon,
  GitHub: GitHubIcon,
  WhatsApp: WhatsAppIcon,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t, lang } = useI18n();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="relative mt-auto"
      style={{
        background: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
    >
      <div className="section-container">
        {/* Top Section: Logo + Description + Social */}
        <div className="flex flex-col items-center gap-6 pb-8 pt-12 md:flex-row md:items-start md:justify-between">
          {/* Logo + Description */}
          <div className="flex-1 text-center md:text-left">
            <Link
              to="/"
              className="font-display inline-block text-2xl font-bold tracking-wider transition-all duration-200 hover:opacity-80"
              style={{ color: 'var(--color-text-primary)' }}
            >
              NEXU
              <span style={{ color: 'var(--color-accent)' }}>X</span>
            </Link>
             <p
               className="mt-3 max-w-sm text-sm leading-relaxed"
               style={{ color: 'var(--color-text-secondary)' }}
             >
               {t('footer.description')}
             </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2.5">
            {SOCIAL_LINKS.map((link) => {
              const Icon = SOCIAL_ICON_MAP[link.label];
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-200"
                  style={{
                    color: 'var(--color-text-secondary)',
                    background: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                  }}
                  whileHover={{
                    color: 'var(--color-accent)',
                    borderColor: 'var(--color-accent)',
                    backgroundColor: 'var(--color-accent-light)',
                    scale: 1.05,
                  }}
                  aria-label={link.label}
                >
                  {Icon && <Icon size={18} />}
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px w-full"
          style={{ background: 'var(--color-border)' }}
        />

         {/* Middle Section: 3-Column Links */}
         <div className="grid grid-cols-1 gap-8 py-10 sm:grid-cols-2 lg:grid-cols-3">
          {SECTIONS.map((section) => (
            <div key={section.title}>
              <h4
                className="mb-4 text-xs font-semibold uppercase tracking-widest"
                style={{
                  color: 'var(--color-accent)',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.13em',
                }}
              >
                {t(`footer.${section.title.toLowerCase()}`)}
              </h4>
              <ul className="flex flex-col gap-0.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    {section.title === 'Connect' ? (
                      <motion.a
                        href={link.href}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center gap-2.5 py-1.5 text-sm transition-colors duration-200"
                        style={{ color: 'var(--color-text-secondary)' }}
                        whileHover={{ color: 'var(--color-accent)', x: 4 }}
                      >
                        {(() => {
                          const IconComp = CONNECT_ICON_MAP[link.label];
                          return IconComp ? <IconComp size={16} /> : null;
                        })()}
                        {link.label}
                      </motion.a>
                    ) : (
                      <Link
                        to={link.href}
                        className="inline-flex items-center gap-2.5 py-1.5 text-sm transition-all duration-200"
                        style={{ color: 'var(--color-text-secondary)' }}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="h-px w-full"
          style={{ background: 'var(--color-border)' }}
        />

        {/* Bottom Bar */}
        <div
          className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row"
        >
          <p
            className="text-xs"
            style={{ color: 'var(--color-text-muted)' }}
          >
            &copy; {currentYear} {t('footer.brand')}. {t('footer.rights')}
          </p>
          
          <div className="flex items-center gap-4">
            <p
              className="text-xs"
              style={{ 
                color: 'var(--color-text-muted)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              Built with{' '}
              <span style={{ color: 'var(--color-accent)' }}>React</span> &{' '}
              <span style={{ color: 'var(--color-accent)' }}>Tailwind</span>
            </p>
            
            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-200"
              style={{
                color: 'var(--color-text-secondary)',
                background: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
              }}
              whileHover={{
                color: 'var(--color-accent)',
                borderColor: 'var(--color-accent)',
                backgroundColor: 'var(--color-accent-light)',
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
              aria-label="Back to top"
            >
              <ArrowUpIcon size={14} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}