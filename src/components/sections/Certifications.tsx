import { motion } from 'motion/react';
import { certifications } from '@/data/portfolio';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const AwardIcon = ({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

const CalendarIcon = ({ size = 14, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const ExternalLinkIcon = ({ size = 16, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const Certifications = () => {
  return (
    <section className="section" style={{ background: 'var(--color-bg)' }}>
      <div className="section-container">
        {/* Section Header */}
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
            Credentials
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
            Certified <span style={{ color: 'var(--color-accent)' }}>Skills</span>
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

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              className="flex flex-col overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02]"
              variants={cardVariants}
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
              }}
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
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;