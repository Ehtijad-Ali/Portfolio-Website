import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { testimonials } from '@/data/portfolio';
import CTABanner from '@/components/sections/CTABanner';

/* ═══════════════════════════════════════════════════════════
   SVG ICONS
═══════════════════════════════════════════════════════════ */

const StarIcon = ({ filled = false, size = 18 }: { filled?: boolean; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={filled ? 'var(--color-accent)' : 'none'}
    stroke={filled ? 'var(--color-accent)' : 'var(--color-border-strong)'}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const QuoteIcon = ({ size = 32, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z" />
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
  </svg>
);

const UserIcon = ({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
  </svg>
);

const MapPinIcon = ({ size = 16, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
  </svg>
);

const TrendingUpIcon = ({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
  </svg>
);

/* ═══════════════════════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════════════════════ */

export default function FeedbackPage() {
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

  const ratingData = [
    { stars: 5, percentage: 80, count: 4 },
    { stars: 4, percentage: 15, count: 1 },
    { stars: 3, percentage: 5, count: 0 },
    { stars: 2, percentage: 0, count: 0 },
    { stars: 1, percentage: 0, count: 0 },
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
              Client Reviews
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
              What Clients <span className="gradient-text">Say</span>
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
              Feedback from real clients across the US, Germany, Switzerland, and Pakistan.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════ TESTIMONIALS ══════════════════════ */}
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

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="flex flex-col rounded-xl p-6 transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
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
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon key={star} filled={star <= testimonial.rating} size={18} />
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
          </div>
        </div>
      </section>

      {/* ══════════════════════ RATING BREAKDOWN ══════════════════════ */}
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
              Reviews
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
              Rating <span style={{ color: 'var(--color-accent)' }}>Breakdown</span>
            </h2>
            <p 
              className="max-w-2xl mt-4"
              style={{
                fontSize: 14,
                color: 'var(--color-text-secondary)',
                lineHeight: 1.7,
              }}
            >
              A detailed look at client satisfaction across all projects.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto p-6 md:p-8 rounded-xl" style={{
            background: 'var(--color-bg)',
            border: '1px solid var(--color-border)',
          }}>
            {/* Average rating */}
            <motion.div
              className="mb-8 flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <div 
                className="inline-flex items-center justify-center w-24 h-24 rounded-full"
                style={{
                  background: 'var(--color-accent-light)',
                  border: '3px solid var(--color-accent)',
                }}
              >
                <div className="text-center">
                  <div 
                    className="font-display font-extrabold"
                    style={{ 
                      fontSize: 36, 
                      color: 'var(--color-accent)',
                      lineHeight: 1,
                    }}
                  >
                    4.9
                  </div>
                  <div className="flex justify-center gap-0.5 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon key={star} filled={star <= 5} size={12} />
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <p 
                  className="font-semibold mb-1"
                  style={{ 
                    fontSize: 18, 
                    color: 'var(--color-text-primary)',
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  Excellent Rating
                </p>
                <p 
                  style={{ 
                    fontSize: 14, 
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                  }}
                >
                  Based on 5 client reviews
                </p>
              </div>
            </motion.div>

            <div 
              className="mb-6"
              style={{ 
                height: 1,
                background: 'var(--color-border)',
              }} 
            />

            {/* Rating bars */}
            <div className="flex flex-col gap-4">
              {ratingData.map((rating, index) => (
                <motion.div
                  key={rating.stars}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.07 }}
                >
                  <div className="flex w-20 shrink-0 items-center gap-1.5">
                    <span
                      className="font-semibold"
                      style={{ 
                        fontSize: 14, 
                        color: 'var(--color-text-primary)',
                        fontFamily: 'var(--font-display)',
                      }}
                    >
                      {rating.stars}
                    </span>
                    <StarIcon filled={false} size={14} />
                  </div>

                  <div className="flex-1" style={{ 
                    height: 10, 
                    borderRadius: 999,
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    overflow: 'hidden',
                  }}>
                    <motion.div
                      style={{
                        height: '100%',
                        borderRadius: 999,
                        background: 'linear-gradient(to right, var(--color-accent), var(--color-accent-light))',
                      }}
                      initial={{ width: '0%' }}
                      whileInView={{ width: `${rating.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
                    />
                  </div>

                  <span
                    className="w-16 shrink-0 text-right font-mono"
                    style={{ 
                      fontSize: 13, 
                      color: 'var(--color-text-muted)',
                      fontWeight: 600,
                    }}
                  >
                    {rating.percentage}%
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ WORK WITH ME ══════════════════════ */}
      <section className="section" style={fade(0.4)}>
        <div className="section-container">
          <motion.div
            className="max-w-4xl mx-auto p-8 md:p-12 rounded-xl"
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div 
                className="inline-flex items-center justify-center w-16 h-16 rounded-full shrink-0"
                style={{
                  background: 'var(--color-accent-light)',
                  border: '2px solid var(--color-accent)',
                  color: 'var(--color-accent)',
                }}
              >
                <TrendingUpIcon size={28} />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h2 
                  className="font-display font-bold mb-3"
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  Ready to Work <span style={{ color: 'var(--color-accent)' }}>Together?</span>
                </h2>
                
                <p 
                  className="mb-6"
                  style={{
                    fontSize: 15,
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.7,
                  }}
                >
                  Whether you need an AI-powered solution, a full-stack application, or expert consultation on your data strategy — I'd love to hear about your project and explore how we can bring it to life.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  <a 
                    href="/contact" 
                    className="btn-primary inline-flex items-center justify-center gap-2"
                    style={{
                      background: 'var(--color-accent)',
                      color: 'white',
                    }}
                  >
                    Start a Project
                  </a>
                  <a 
                    href="/projects" 
                    className="btn-ghost inline-flex items-center justify-center gap-2"
                    style={{
                      border: '1px solid var(--color-border)',
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    View Portfolio
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════ CTA BANNER ══════════════════════ */}
      <CTABanner />

    </div>
  );
}