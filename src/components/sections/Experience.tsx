import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { experience } from '@/data/portfolio';

const BriefcaseIcon = ({ size = 16, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const MapPinIcon = ({ size = 14, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
  </svg>
);

const itemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.2 * i,
    },
  }),
};

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section" style={{ background: 'var(--color-bg)' }} ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p 
            className="text-xs font-semibold uppercase tracking-[0.13em] mb-3"
            style={{
              color: 'var(--color-accent)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            Career
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
            Work <span style={{ color: 'var(--color-accent)' }}>Experience</span>
          </h2>
          <p 
            className="max-w-2xl mt-4"
            style={{
              fontSize: 14,
              color: 'var(--color-text-secondary)',
              lineHeight: 1.7,
            }}
          >
            3 years applying machine learning in production — at IT Directorate, CodeAlpha, and NUST.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Timeline Line */}
          <div
            className="absolute left-0 md:left-6 top-2 bottom-2"
            style={{ 
              width: 2,
              background: 'linear-gradient(to bottom, var(--color-accent), var(--color-border))',
            }}
          />

          <div className="space-y-8">
            {experience.map((item, index) => (
              <motion.div
                key={item.id}
                className="relative pl-8 md:pl-16"
                custom={index}
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                {/* Timeline Dot */}
                <div
                  className="absolute left-0 md:left-6 top-2 h-4 w-4 rounded-full -translate-x-1/2"
                  style={{
                    backgroundColor: 'var(--color-accent)',
                    border: '3px solid var(--color-bg)',
                    boxShadow: '0 0 0 3px var(--color-accent-light)',
                  }}
                />

                {/* Card */}
                <div 
                  className="p-6 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  {/* Period Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span 
                      className="text-xs font-semibold px-3 py-1.5 rounded-md"
                      style={{
                        background: 'var(--color-accent-light)',
                        color: 'var(--color-accent)',
                        border: '1px solid var(--color-accent)',
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
  );
}