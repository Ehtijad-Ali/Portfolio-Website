import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { experience, education } from '@/data/portfolio';
import CTABanner from '@/components/sections/CTABanner';

/* ═══════════════════════════════════════════════════════════
   SVG ICONS
═══════════════════════════════════════════════════════════ */

const BriefcaseIcon = ({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const TrendingUpIcon = ({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
  </svg>
);

const GraduationCapIcon = ({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 2 6 3 6 3s6-1 6-3v-5" />
  </svg>
);

const AwardIcon = ({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

const MapPinIcon = ({ size = 16, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
  </svg>
);

const CalendarIcon = ({ size = 16, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

/* ═══════════════════════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════════════════════ */

export default function ExperiencePage() {
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

  const impacts = [
    {
      stat: '40%',
      title: 'Processing Time Reduction',
      description: 'Automated data pipelines at IT Directorate that cut manual processing by nearly half, freeing teams for higher-value work.',
      icon: <TrendingUpIcon size={24} />
    },
    {
      stat: '6',
      title: 'Professional Certifications',
      description: 'Industry-recognized credentials from Google, NUST, and W3Schools spanning data analytics, AI, cloud, and full-stack development.',
      icon: <AwardIcon size={24} />
    },
    {
      stat: '4',
      title: 'International Clients',
      description: 'Delivered projects for clients across the US, Germany, Switzerland, and Pakistan — adapting to diverse requirements and time zones.',
      icon: <BriefcaseIcon size={24} />
    },
    {
      stat: '∞',
      title: 'Open Source Contributor',
      description: 'Active contributor to the AI/ML community with published models on Hugging Face and open-source tools on GitHub.',
      icon: <GraduationCapIcon size={24} />
    },
  ];

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
              Career
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
              Work <span className="gradient-text">Experience</span>
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
              3 years applying machine learning in production — at IT Directorate, CodeAlpha, and NUST.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════ EXPERIENCE TIMELINE ══════════════════════ */}
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
              Career Path
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
              Professional <span style={{ color: 'var(--color-accent)' }}>Journey</span>
            </h2>
            <p 
              className="max-w-2xl mt-4"
              style={{
                fontSize: 14,
                color: 'var(--color-text-secondary)',
                lineHeight: 1.7,
              }}
            >
              Building expertise in AI/ML engineering across government, startup, and research environments.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative w-full px-4 md:px-8">
            {/* Vertical Timeline Line */}
            <div
              className="absolute left-4 md:left-1/2 top-0 bottom-0 md:-translate-x-px"
              style={{ 
                width: 2,
                background: 'linear-gradient(to bottom, var(--color-accent), var(--color-border))',
              }}
            />

            <div className="flex flex-col gap-8">
              {experience.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="relative pl-12 md:pl-0"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, delay: index * 0.15 }}
                >
                  {/* Timeline Dot */}
                  <div
                    className="absolute left-[9px] top-6 z-10 h-4 w-4 rounded-full md:left-1/2 md:-translate-x-1/2"
                    style={{
                      background: 'var(--color-accent)',
                      border: '3px solid var(--color-bg)',
                      boxShadow: '0 0 0 3px var(--color-accent-light)',
                    }}
                  />

                  {/* Card — alternating left/right on desktop */}
                  <div
                    className={`card p-6 transition-all duration-300 hover:scale-[1.02] ${
                      index % 2 === 0
                        ? 'md:ml-auto md:mr-[calc(50%+40px)] md:w-[calc(50%-40px)]'
                        : 'md:mr-auto md:ml-[calc(50%+40px)] md:w-[calc(50%-40px)]'
                    }`}
                    style={{
                      background: 'var(--color-surface)',
                      border: '1px solid var(--color-border)',
                    }}
                  >
                    {/* Period Badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <CalendarIcon size={14} />
                      <span 
                        className="text-xs font-semibold"
                        style={{
                          color: 'var(--color-accent)',
                          fontFamily: 'var(--font-mono)',
                          letterSpacing: '0.05em',
                        }}
                      >
                        {item.period}
                      </span>
                    </div>

                    {/* Role */}
                    <h3
                      className="font-display font-bold mb-2"
                      style={{ 
                        fontSize: 20, 
                        color: 'var(--color-text-primary)',
                        lineHeight: 1.3,
                      }}
                    >
                      {item.role}
                    </h3>

                    {/* Company & Location */}
                    <div className="flex items-start gap-2 mb-3">
                      <BriefcaseIcon size={16} />
                      <p
                        style={{ 
                          fontSize: 14, 
                          color: 'var(--color-text-secondary)',
                          fontWeight: 500,
                        }}
                      >
                        {item.company}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <MapPinIcon size={14} />
                      <p
                        style={{ 
                          fontSize: 13, 
                          color: 'var(--color-text-muted)',
                        }}
                      >
                        {item.location}
                      </p>
                    </div>

                    {/* Description */}
                    <p
                      className="leading-relaxed mb-4"
                      style={{ 
                        fontSize: 14, 
                        color: 'var(--color-text-secondary)',
                        lineHeight: 1.7,
                      }}
                    >
                      {item.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((h) => (
                        <span
                          key={h}
                          className="text-xs px-3 py-1.5 rounded-md font-medium"
                          style={{
                            background: 'var(--color-accent-light)',
                            color: 'var(--color-accent)',
                            border: '1px solid var(--color-accent)',
                            fontWeight: 600,
                          }}
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ IMPACT ══════════════════════ */}
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
              Results
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
              Impact & <span style={{ color: 'var(--color-accent)' }}>Achievements</span>
            </h2>
            <p 
              className="max-w-2xl mt-4"
              style={{
                fontSize: 14,
                color: 'var(--color-text-secondary)',
                lineHeight: 1.7,
              }}
            >
              Measurable results that demonstrate the value and quality delivered to clients worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {impacts.map((item, index) => (
              <motion.div
                key={item.title}
                className="relative flex flex-col items-center text-center gap-4 p-6 rounded-xl transition-all duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                style={{
                  background: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <div 
                  className="inline-flex items-center justify-center w-14 h-14 rounded-full"
                  style={{
                    background: 'var(--color-accent-light)',
                    border: '2px solid var(--color-accent)',
                    color: 'var(--color-accent)',
                  }}
                >
                  {item.icon}
                </div>
                <span 
                  className="font-display font-extrabold"
                  style={{ 
                    fontSize: 40, 
                    color: 'var(--color-accent)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1,
                  }}
                >
                  {item.stat}
                </span>
                <span
                  className="font-semibold"
                  style={{ 
                    fontSize: 15, 
                    color: 'var(--color-text-primary)',
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  {item.title}
                </span>
                <span
                  style={{ 
                    fontSize: 13, 
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                  }}
                >
                  {item.description}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ EDUCATION ══════════════════════ */}
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
              Academics
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
              <span style={{ color: 'var(--color-accent)' }}>Education</span>
            </h2>
            <p 
              className="max-w-2xl mt-4"
              style={{
                fontSize: 14,
                color: 'var(--color-text-secondary)',
                lineHeight: 1.7,
              }}
            >
              Academic foundation in computer science with focus on AI, data science, and software engineering.
            </p>
          </motion.div>

          <div className="relative w-full px-4 md:px-8">
            {/* Vertical Timeline Line */}
            <div
              className="absolute left-4 md:left-1/2 top-0 bottom-0 md:-translate-x-px"
              style={{ 
                width: 2,
                background: 'linear-gradient(to bottom, var(--color-accent), var(--color-border))',
              }}
            />

            <div className="flex flex-col gap-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="relative pl-12 md:pl-0"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, delay: index * 0.15 }}
                >
                  {/* Timeline Dot */}
                  <div
                    className="absolute left-[9px] top-6 z-10 h-4 w-4 rounded-full md:left-1/2 md:-translate-x-1/2"
                    style={{
                      background: 'var(--color-accent)',
                      border: '3px solid var(--color-bg)',
                      boxShadow: '0 0 0 3px var(--color-accent-light)',
                    }}
                  />

                  {/* Card — alternating left/right on desktop */}
                  <div
                    className={`card p-6 transition-all duration-300 hover:scale-[1.02] ${
                      index % 2 === 0
                        ? 'md:ml-auto md:mr-[calc(50%+40px)] md:w-[calc(50%-40px)]'
                        : 'md:mr-auto md:ml-[calc(50%+40px)] md:w-[calc(50%-40px)]'
                    }`}
                    style={{
                      background: 'var(--color-surface)',
                      border: '1px solid var(--color-border)',
                    }}
                  >
                    {/* Period Badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <CalendarIcon size={14} />
                      <span 
                        className="text-xs font-semibold"
                        style={{
                          color: 'var(--color-accent)',
                          fontFamily: 'var(--font-mono)',
                          letterSpacing: '0.05em',
                        }}
                      >
                        {edu.period}
                      </span>
                    </div>

                    {/* Degree */}
                    <h3
                      className="font-display font-bold mb-2"
                      style={{ 
                        fontSize: 20, 
                        color: 'var(--color-text-primary)',
                        lineHeight: 1.3,
                      }}
                    >
                      {edu.degree}
                    </h3>

                    {/* Institution */}
                    <div className="flex items-center gap-2 mb-3">
                      <GraduationCapIcon size={16} />
                      <p
                        style={{ 
                          fontSize: 14, 
                          color: 'var(--color-accent)',
                          fontWeight: 600,
                        }}
                      >
                        {edu.institution}
                      </p>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-2 mb-4">
                      <MapPinIcon size={14} />
                      <p
                        style={{ 
                          fontSize: 13, 
                          color: 'var(--color-text-muted)',
                        }}
                      >
                        📍 {edu.location}
                      </p>
                    </div>

                    {/* Description */}
                    <p
                      className="leading-relaxed mb-4"
                      style={{ 
                        fontSize: 14, 
                        color: 'var(--color-text-secondary)',
                        lineHeight: 1.7,
                      }}
                    >
                      {edu.description}
                    </p>

                    {/* GPA Badge */}
                    {'gpa' in edu && edu.gpa && (
                      <div
                        className="inline-flex items-center gap-2 rounded-full px-4 py-2"
                        style={{
                          background: 'var(--color-accent-light)',
                          color: 'var(--color-accent)',
                          border: '1px solid var(--color-accent)',
                          fontSize: 13,
                          fontWeight: 700,
                          fontFamily: 'var(--font-mono)',
                        }}
                      >
                        <AwardIcon size={14} />
                        GPA: {edu.gpa}
                      </div>
                    )}
                  </div>
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