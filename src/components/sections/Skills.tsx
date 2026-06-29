import { motion } from 'motion/react';
import { skills } from '@/data/portfolio';

const marqueeItems = [...skills.marquee, ...skills.marquee];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Skills() {
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
            Capabilities
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
            Skills & <span style={{ color: 'var(--color-accent)' }}>Tools</span>
          </h2>
          <p 
            className="max-w-2xl mt-4"
            style={{
              fontSize: 14,
              color: 'var(--color-text-secondary)',
              lineHeight: 1.7,
            }}
          >
            A comprehensive toolkit that powers my AI solutions, from research and development to deployment and scaling.
          </p>
        </motion.div>

        {/* Skills Marquee / Ticker */}
        <motion.div
          className="overflow-hidden mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="marquee-track">
            {marqueeItems.map((skill, index) => (
              <span
                key={`${skill}-${index}`}
                className="tag whitespace-nowrap mx-2"
                style={{ 
                  display: 'inline-block',
                  background: 'var(--color-surface)',
                  color: 'var(--color-text-secondary)',
                  border: '1px solid var(--color-border)',
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Skills Category Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {skills.categories.map((category) => (
            <motion.div 
              key={category.name} 
              className="rounded-xl p-6 transition-all duration-300 hover:scale-[1.02]"
              variants={cardVariants}
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
              }}
            >
              <h3
                className="font-display font-bold mb-4"
                style={{ 
                  fontSize: 18, 
                  color: 'var(--color-text-primary)',
                }}
              >
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}