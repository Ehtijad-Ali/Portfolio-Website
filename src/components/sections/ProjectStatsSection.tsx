 import { motion } from 'motion/react';

const projectStats = [
  { value: '6', label: 'Projects Shipped', sublabel: 'And counting' },
  { value: '4', label: 'Countries Served', sublabel: 'Global reach' },
  { value: '98%', label: 'Client Satisfaction', sublabel: 'Based on reviews' },
  { value: '100%', label: 'On-Time Delivery', sublabel: 'Every project' },
];

const ProjectStatsSection = () => {
  return (
    <section className="section" id="project-stats" style={{ background: 'var(--color-surface)' }}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p 
            className="text-xs font-semibold uppercase tracking-[0.13em] mb-3"
            style={{
              color: 'var(--color-accent)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            Impact
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
            Project <span style={{ color: 'var(--color-accent)' }}>Impact</span>
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

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {projectStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="relative flex flex-col items-center gap-3 p-6 text-center rounded-xl transition-all duration-300 hover:scale-105"
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
                className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-2"
                style={{
                  background: 'var(--color-accent-light)',
                  border: '1px solid var(--color-accent)',
                  color: 'var(--color-accent)',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
              </div>
              <span 
                className="font-display font-extrabold"
                style={{ 
                  fontSize: 36, 
                  color: 'var(--color-accent)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </span>
              <span
                className="font-semibold"
                style={{ 
                  fontSize: 14, 
                  color: 'var(--color-text-primary)',
                  fontFamily: 'var(--font-display)',
                }}
              >
                {stat.label}
              </span>
              <span
                style={{ 
                  fontSize: 12, 
                  color: 'var(--color-text-muted)',
                }}
              >
                {stat.sublabel}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectStatsSection;
