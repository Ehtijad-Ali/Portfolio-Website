import { motion } from 'motion/react';
import { topics } from '@/data/portfolio';

const TopicsSection = () => {
  return (
    <section className="section" id="topics">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="badge mb-4 inline-block">Focus Areas</span>
          <h2 className="heading-xl">Topics I Write About</h2>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4 }}
        >
          {topics.map((topic, index) => (
            <motion.span
              key={topic}
              className="inline-flex cursor-default items-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200"
              style={{
                backgroundColor: 'var(--color-surface)',
                color: 'var(--color-text-secondary)',
                border: '1px solid var(--color-border)',
              }}
              whileHover={{
                backgroundColor: 'var(--color-accent)',
                color: 'var(--color-bg)',
                borderColor: 'var(--color-accent)',
              }}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: index * 0.04 }}
            >
              {topic}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TopicsSection;