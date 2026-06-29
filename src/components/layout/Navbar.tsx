'use client';

import { useState, useCallback, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '@/contexts/ThemeContext';
import { useI18n } from '@/contexts/i18nContext';

const NAV_LINKS = [
  { key: 'nav.home', href: '/' },
  { key: 'nav.about', href: '/about' },
  { key: 'nav.skills', href: '/skills' },
  { key: 'nav.projects', href: '/projects' },
  { key: 'nav.experience', href: '/experience' },
  { key: 'nav.blogs', href: '/blogs' },
  { key: 'nav.certifications', href: '/certifications' },
  { key: 'nav.contact', href: '/contact' },
  { key: 'nav.feedback', href: '/feedback' },
] as const;

const SunIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <motion.line
      x1="4"
      y1="6"
      x2="20"
      y2="6"
      animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
      transition={{ duration: 0.3 }}
      style={{ transformOrigin: 'center' }}
    />
    <motion.line
      x1="4"
      y1="12"
      x2="20"
      y2="12"
      animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.2 }}
    />
    <motion.line
      x1="4"
      y1="18"
      x2="20"
      y2="18"
      animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
      transition={{ duration: 0.3 }}
      style={{ transformOrigin: 'center' }}
    />
  </svg>
);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang } = useI18n();
  const location = useLocation();

  const isActive = useCallback(
    (href: string) => {
      if (href === '/') return location.pathname === '/';
      return location.pathname.startsWith(href);
    },
    [location.pathname],
  );

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  // Track scroll position for navbar background intensity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    closeMobile();
  }, [location.pathname, closeMobile]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled
          ? 'var(--color-nav-bg)'
          : 'var(--color-nav-bg)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: scrolled
          ? '1px solid var(--color-border)'
          : '1px solid transparent',
      }}
    >
      <div className="section-container">
        <div className="flex h-16 items-center justify-between md:h-18">
          {/* Logo */}
          <Link
            to="/"
            className="font-display text-xl font-bold tracking-wider transition-colors duration-200 hover:opacity-80 md:text-2xl"
            style={{ color: 'var(--color-text-primary)' }}
          >
            NEXU
            <span style={{ color: 'var(--color-accent)' }}>X</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.key}
                to={link.href}
                className="relative rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200"
                style={{
                  color: isActive(link.href)
                    ? 'var(--color-accent)'
                    : 'var(--color-text-secondary)',
                  backgroundColor: isActive(link.href)
                    ? 'var(--color-accent-light)'
                    : 'transparent',
                }}
              >
                {link.key.split('.')[1]}
                {isActive(link.href) && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-md transition-colors duration-200"
              style={{
                color: 'var(--color-text-secondary)',
                backgroundColor: 'var(--color-surface)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-surface-hover)';
                e.currentTarget.style.color = 'var(--color-text-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-surface)';
                e.currentTarget.style.color = 'var(--color-text-secondary)';
              }}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === 'light' ? (
                  <motion.span
                    key="moon"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MoonIcon />
                  </motion.span>
                ) : (
                  <motion.span
                    key="sun"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <SunIcon />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="flex h-9 items-center rounded-md px-2.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-200"
              style={{
                color: 'var(--color-text-secondary)',
                backgroundColor: 'var(--color-surface)',
                fontFamily: 'var(--font-mono)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-surface-hover)';
                e.currentTarget.style.color = 'var(--color-text-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-surface)';
                e.currentTarget.style.color = 'var(--color-text-secondary)';
              }}
              aria-label="Toggle language"
            >
              {lang === 'en' ? 'EN' : 'UR'}
            </button>

            {/* Mobile Hamburger */}
            <button
              className="flex h-9 w-9 items-center justify-center rounded-md transition-colors duration-200 lg:hidden"
              style={{
                color: 'var(--color-text-secondary)',
              }}
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileOpen}
            >
              <HamburgerIcon isOpen={mobileOpen} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden"
              style={{ top: '64px' }}
              onClick={closeMobile}
              aria-hidden="true"
            />

            {/* Slide-in Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed right-0 top-16 bottom-0 w-72 overflow-y-auto lg:hidden"
              style={{
                backgroundColor: 'var(--color-nav-bg)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                borderLeft: '1px solid var(--color-border)',
              }}
            >
              <div className="flex flex-col gap-1 p-4">
                {NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.key}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <Link
                      to={link.href}
                      onClick={closeMobile}
                      className="flex items-center rounded-lg px-4 py-3 text-sm font-medium capitalize transition-colors duration-200"
                      style={{
                        color: isActive(link.href)
                          ? 'var(--color-accent)'
                          : 'var(--color-text-secondary)',
                        backgroundColor: isActive(link.href)
                          ? 'var(--color-accent-light)'
                          : 'transparent',
                      }}
                    >
                      <span
                        className="mr-3 inline-block h-1.5 w-1.5 rounded-full"
                        style={{
                          backgroundColor: isActive(link.href)
                            ? 'var(--color-accent)'
                            : 'var(--color-text-muted)',
                        }}
                      />
                      {link.key.split('.')[1]}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}