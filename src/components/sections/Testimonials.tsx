import { testimonials } from '@/data/portfolio';
import { motion } from 'motion/react';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < rating ? 'var(--color-accent)' : 'none'}
          stroke={i < rating ? 'var(--color-accent)' : 'var(--color-border)'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
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
          <span className="badge mb-4 inline-block">Testimonials</span>
          <h2 className="heading-xl">What People Say</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              className="card p-6 flex flex-col"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <StarRating rating={t.rating} />

              <blockquote className="body-sm text-[var(--color-text-secondary)] mt-4 mb-6 flex-1 leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              <div className="divider" />

              <div className="flex items-center gap-3 mt-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-[var(--color-border)]"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                    {t.name}
                  </p>
                  <p className="text-xs text-[var(--color-text-muted)]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}