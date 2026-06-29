import { motion } from 'motion/react';
import { testimonials } from '@/data/portfolio';

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

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
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

const QuoteIcon = ({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z" />
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
  </svg>
);

const MapPinIcon = ({ size = 12, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
  </svg>
);

export default function ClientFeedback() {
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
            Testimonials
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
            Client <span style={{ color: 'var(--color-accent)' }}>Feedback</span>
          </h2>
          <p 
            className="max-w-2xl mt-4"
            style={{
              fontSize: 14,
              color: 'var(--color-text-secondary)',
              lineHeight: 1.7,
            }}
          >
            Real experiences from clients I've had the pleasure of working with.
          </p>
        </motion.div>

        {/* Testimonial Cards Grid */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="flex flex-col rounded-xl p-6 transition-all duration-300 hover:scale-[1.02]"
              variants={cardVariants}
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
              }}
              whileHover={{ y: -4 }}
            >
              {/* Quote Icon */}
              <div 
                className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4"
                style={{
                  background: 'var(--color-accent-light)',
                  color: 'var(--color-accent)',
                }}
              >
                <QuoteIcon size={24} />
              </div>

              {/* Quote Text */}
              <p 
                className="flex-1 mb-4 italic"
                style={{ 
                  fontSize: 15, 
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.7,
                }}
              >
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill={i < testimonial.rating ? 'var(--color-accent)' : 'none'}
                    stroke={i < testimonial.rating ? 'var(--color-accent)' : 'var(--color-border)'}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              {/* Divider */}
              <div 
                className="mb-4"
                style={{ 
                  height: 1,
                  background: 'var(--color-border)',
                }} 
              />

              {/* Author Info */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                  style={{
                    border: '2px solid var(--color-accent)',
                  }}
                  loading="lazy"
                />
                <div className="flex flex-col">
                  <span
                    className="font-semibold"
                    style={{ 
                      fontSize: 15, 
                      color: 'var(--color-text-primary)',
                      fontFamily: 'var(--font-display)',
                    }}
                  >
                    {testimonial.name}
                  </span>
                  <span
                    style={{ 
                      fontSize: 13, 
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    {testimonial.role}
                  </span>
                  <div className="flex items-center gap-1">
                    <MapPinIcon size={12} />
                    <span
                      style={{ 
                        fontSize: 12, 
                        color: 'var(--color-text-muted)',
                      }}
                    >
                      {testimonial.location}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}