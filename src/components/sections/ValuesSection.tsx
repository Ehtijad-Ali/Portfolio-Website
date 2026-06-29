import { values } from '@/data/portfolio';
import { motion } from 'motion/react';

const ICON_MAP: Record<string, string> = {
  lightbulb: '💡',
  shield: '🛡️',
  heart: '❤️',
  users: '👥',
};

export default function ValuesSection() {
  return (
    <section className="section">
      <div className="section-container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge mb-4 inline-block">Principles</span>
          <h2 className="heading-xl">My Values</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              className="card p-6 group"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <span
                className="text-3xl mb-4 block transition-transform duration-300 group-hover:scale-110"
                role="img"
                aria-label={v.icon}
              >
                {ICON_MAP[v.icon] ?? '◆'}
              </span>
              <h3 className="heading-sm mb-2">{v.title}</h3>
              <p className="body-sm text-[var(--color-text-secondary)] leading-relaxed">
                {v.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}