import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { certifications, skills } from '@/data/portfolio';
import CTABanner from '@/components/sections/CTABanner';

/* ═══════════════════════════════════════════════════════════
   SVG ICONS
═══════════════════════════════════════════════════════════ */

const AwardIcon = ({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

const ExternalLinkIcon = ({ size = 16, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const CheckIcon = ({ size = 14, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const CalendarIcon = ({ size = 16, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const TrendingUpIcon = ({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
  </svg>
);

/* ═══════════════════════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════════════════════ */

export default function CertificationsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => { 
    const t = setTimeout(() => setMounted(true), 60); 
    return () => clearTimeout(t); 
  }, []);

  const fade = (delay = 0): React.CSSProperties => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(22px)',
    transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
  });

  return (
    <div className="min-h-screen" style={{ background: 'var(--color-bg)', fontFamily: 'var(--font-sans)', color: 'var(--color-text-primary)' }}>

      {/* ══════════════════════ HERO ══════════════════════ */}
      <section 
        className="relative overflow-hidden"
        style={{ 
          background: 'var(--color-bg)',
          padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 5vw, 4rem)',
          ...fade(0)
        }}
      >
        <div className="section-container">
          <div className="max-w-4xl text-left">
            <p 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                fontSize: 13,
                color: 'var(--color-text-secondary)',
                fontFamily: 'var(--font-mono)',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                ...fade(0.05)
              }}
            >
              Credentials
            </p>
            
            <h1 
              className="font-display font-extrabold mb-4"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
                lineHeight: 1.07,
                letterSpacing: '-0.03em',
                color: 'var(--color-text-primary)',
                ...fade(0.1)
              }}
            >
              Certified <span className="gradient-text">Skills</span>
            </h1>
            
            <div 
              className="mb-5"
              style={{ 
                width: 48, 
                height: 3, 
                background: 'var(--color-accent)', 
                borderRadius: 2,
                ...fade(0.15)
              }} 
            />
            
            <p 
              className="max-w-2xl leading-relaxed"
              style={{
                fontSize: 16,
                color: 'var(--color-text-secondary)',
                lineHeight: 1.78,
                ...fade(0.2)
              }}
            >
              6 professional certifications from Google, NUST, Pak Angels, and W3Schools.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════ CERTIFICATIONS ══════════════════════ */}
      <section className="section" style={fade(0.25)}>
        <div className="section-container">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <p 
              className="text-xs font-semibold uppercase tracking-[0.13em] mb-3"
              style={{
                color: 'var(--color-accent)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              Professional Credentials
            </p>
            <h2 
              className="font-display font-bold"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: 'var(--color-text-primary)',
              }}
            >
              <span style={{ color: 'var(--color-accent)' }}>Certifications</span> & Awards
            </h2>
            <p 
              className="max-w-2xl mt-4"
              style={{
                fontSize: 14,
                color: 'var(--color-text-secondary)',
                lineHeight: 1.7,
              }}
            >
              Industry-recognized credentials validating expertise in AI, data science, and full-stack development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                className="group flex flex-col overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="flex flex-col gap-4 p-6 flex-1">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div 
                          className="inline-flex items-center justify-center w-10 h-10 rounded-lg"
                          style={{
                            background: 'var(--color-accent-light)',
                            border: '1px solid var(--color-accent)',
                            color: 'var(--color-accent)',
                          }}
                        >
                          <AwardIcon size={20} />
                        </div>
                        <p 
                          className="text-sm font-semibold"
                          style={{
                            color: 'var(--color-accent)',
                            fontFamily: 'var(--font-mono)',
                          }}
                        >
                          {cert.issuer}
                        </p>
                      </div>
                      <h3 
                        className="font-display font-bold"
                        style={{ 
                          fontSize: 20, 
                          color: 'var(--color-text-primary)',
                          lineHeight: 1.3,
                        }}
                      >
                        {cert.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CalendarIcon size={14} />
                      <span 
                        style={{ 
                          fontSize: 13, 
                          color: 'var(--color-text-muted)',
                          fontFamily: 'var(--font-mono)',
                        }}
                      >
                        {cert.date}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p 
                    className="leading-relaxed"
                    style={{ 
                      fontSize: 14, 
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.7,
                    }}
                  >
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-3 py-1.5 rounded-md font-medium"
                        style={{
                          background: 'var(--color-accent-light)',
                          color: 'var(--color-accent)',
                          border: '1px solid var(--color-accent)',
                          fontWeight: 600,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost text-sm mt-auto inline-flex w-fit items-center gap-2"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    <ExternalLinkIcon size={14} />
                    View Credential
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ SKILLS GAINED ══════════════════════ */}
      <section className="section" style={{ background: 'var(--color-surface)', ...fade(0.35) }}>
        <div className="section-container">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <p 
              className="text-xs font-semibold uppercase tracking-[0.13em] mb-3"
              style={{
                color: 'var(--color-accent)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              Growth
            </p>
            <h2 
              className="font-display font-bold"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: 'var(--color-text-primary)',
              }}
            >
              Skills <span style={{ color: 'var(--color-accent)' }}>Gained</span>
            </h2>
            <p 
              className="max-w-2xl mt-4"
              style={{
                fontSize: 14,
                color: 'var(--color-text-secondary)',
                lineHeight: 1.7,
              }}
            >
              Competencies earned through professional certifications and hands-on project work.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-3 justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4 }}
          >
            {skills.categories.flatMap(cat => cat.items).map((skill, index) => (
              <motion.span
                key={skill}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300"
                style={{
                  background: 'var(--color-bg)',
                  color: 'var(--color-text-secondary)',
                  border: '1px solid var(--color-border)',
                }}
                whileHover={{
                  background: 'var(--color-accent)',
                  color: 'var(--color-bg)',
                  borderColor: 'var(--color-accent)',
                  scale: 1.05,
                }}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: index * 0.03 }}
              >
                <CheckIcon size={14} />
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════ LEARNING PATH ══════════════════════ */}
      <section className="section" style={fade(0.4)}>
        <div className="section-container">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <p 
              className="text-xs font-semibold uppercase tracking-[0.13em] mb-3"
              style={{
                color: 'var(--color-accent)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              Journey
            </p>
            <h2 
              className="font-display font-bold"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: 'var(--color-text-primary)',
              }}
            >
              Learning <span style={{ color: 'var(--color-accent)' }}>Path</span>
            </h2>
            <p 
              className="max-w-2xl mt-4"
              style={{
                fontSize: 14,
                color: 'var(--color-text-secondary)',
                lineHeight: 1.7,
              }}
            >
              A timeline of continuous learning and skill development from 2021 to present.
            </p>
          </motion.div>

          {/* Desktop: horizontal path */}
          <div className="hidden md:block">
            <div className="grid grid-cols-6 gap-4">
                {[
                  { year: '2021', title: 'Python Fundamentals', desc: 'Programming basics, data structures, and scripting' },
                  { year: '2022', title: 'Data Science', desc: 'Analysis, statistics, Tableau, SQL, and R' },
                  { year: '2023', title: 'Machine Learning', desc: 'Predictive models, Google AI Essentials cert' },
                  { year: '2023', title: 'Deep Learning & NLP', desc: 'Neural networks, BERT, NUST research' },
                  { year: '2024', title: 'Production AI', desc: 'Deepfake detection, AI interviews, ML pipelines' },
                  { year: '2025', title: 'AI Leadership', desc: 'Agentic AI, RAG, full-stack AI products' },
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    className="relative flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                  >
                    {/* Node dot */}
                    <div
                      className="relative z-10 mb-3 h-3 w-3 rounded-full"
                      style={{
                        backgroundColor: 'var(--color-accent)',
                        boxShadow: index === 5 ? `0 0 0 4px var(--color-accent-light)` : 'none',
                      }}
                    />

                    <span
                      className="text-xs font-mono font-semibold mb-1"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      {step.year}
                    </span>
                    <h4
                      className="font-semibold mb-2"
                      style={{ 
                        fontSize: 14, 
                        color: 'var(--color-text-primary)',
                        fontFamily: 'var(--font-display)',
                      }}
                    >
                      {step.title}
                    </h4>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      {step.desc}
                    </p>
                  </motion.div>
                ))}
            </div>
          </div>

          {/* Mobile: vertical timeline */}
          <div className="relative md:hidden">
            <div className="flex flex-col gap-6 pl-10">
              {[
                { year: '2021', title: 'Python Fundamentals', desc: 'Programming basics, data structures, and scripting' },
                { year: '2022', title: 'Data Science', desc: 'Analysis, statistics, Tableau, SQL, and R' },
                { year: '2023', title: 'Machine Learning', desc: 'Predictive models, Google AI Essentials cert' },
                { year: '2023', title: 'Deep Learning & NLP', desc: 'Neural networks, BERT, NUST research' },
                { year: '2024', title: 'Production AI', desc: 'Deepfake detection, AI interviews, ML pipelines' },
                { year: '2025', title: 'AI Leadership', desc: 'Agentic AI, RAG, full-stack AI products' },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                >
                  {/* Node dot */}
                  <div
                    className="absolute left-[-25px] top-1 h-3 w-3 rounded-full"
                    style={{
                      backgroundColor: 'var(--color-accent)',
                      border: '2px solid var(--color-bg)',
                      boxShadow: index === 5 ? `0 0 0 3px var(--color-accent-light)` : 'none',
                    }}
                  />

                  <span
                    className="text-xs font-mono font-semibold"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    {step.year}
                  </span>
                  <h4 
                    className="font-semibold mt-1 mb-1"
                    style={{ 
                      fontSize: 16, 
                      color: 'var(--color-text-primary)',
                      fontFamily: 'var(--font-display)',
                    }}
                  >
                    {step.title}
                  </h4>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ CTA BANNER ══════════════════════ */}
      <CTABanner />

    </div>
  );
}