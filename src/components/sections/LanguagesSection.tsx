import { languages } from '@/data/portfolio';
import { motion } from 'motion/react';

export default function LanguagesSection() {
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
          <span className="badge mb-4 inline-block">Communication</span>
          <h2 className="heading-xl">Languages</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto stagger-children">
          {languages.map((lang, i) => (
            <motion.div
              key={lang.name}
              className="card p-5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="heading-sm">{lang.name}</h3>
                <span className="text-xs font-mono text-[var(--color-text-muted)]">
                  {lang.proficiency}
                </span>
              </div>
              <div className="progress-bar">
                <motion.div
                  className="progress-bar-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.level}%` }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: 'easeOut' }}
                />
              </div>
              <p className="text-[11px] font-mono text-[var(--color-text-muted)] mt-2 text-right">
                {lang.level}%
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}