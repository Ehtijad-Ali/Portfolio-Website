import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { blogs, topics } from '@/data/portfolio';
import CTABanner from '@/components/sections/CTABanner';

/* ═══════════════════════════════════════════════════════════
   SVG ICONS
═══════════════════════════════════════════════════════════ */

const CalendarIcon = ({ size = 16, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const ClockIcon = ({ size = 16, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);

const ExternalLinkIcon = ({ size = 16, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const MailIcon = ({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
  </svg>
);

/* ═══════════════════════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════════════════════ */

export default function BlogsPage() {
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => { 
    const t = setTimeout(() => setMounted(true), 60); 
    return () => clearTimeout(t); 
  }, []);

  const fade = (delay = 0): React.CSSProperties => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(22px)',
    transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

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
              Writing
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
              Articles & <span className="gradient-text">Insights</span>
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
              Long-form writing on AI, large language models, machine learning trends, and data products.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════ BLOG CARDS ══════════════════════ */}
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
              Latest Posts
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
              Featured <span style={{ color: 'var(--color-accent)' }}>Articles</span>
            </h2>
            <p 
              className="max-w-2xl mt-4"
              style={{
                fontSize: 14,
                color: 'var(--color-text-secondary)',
                lineHeight: 1.7,
              }}
            >
              In-depth tutorials, research summaries, and practical guides on AI and machine learning.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {blogs.map((blog, index) => (
              <motion.a
                key={blog.id}
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  textDecoration: 'none',
                  color: 'var(--color-text-primary)',
                }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ aspectRatio: '16 / 9' }}>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div 
                    className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'var(--color-accent)',
                      color: 'white',
                    }}
                  >
                    <ExternalLinkIcon size={12} />
                    Read More
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 p-6 flex-1">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-md font-medium"
                        style={{
                          background: 'var(--color-accent-light)',
                          color: 'var(--color-accent)',
                          border: '1px solid var(--color-accent)',
                          fontWeight: 600,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 
                    className="font-display font-bold"
                    style={{ 
                      fontSize: 20, 
                      color: 'var(--color-text-primary)',
                      lineHeight: 1.3,
                    }}
                  >
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p 
                    className="leading-relaxed flex-1"
                    style={{ 
                      fontSize: 14, 
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.7,
                    }}
                  >
                    {blog.excerpt}
                  </p>

                  {/* Meta */}
                  <div 
                    className="flex items-center gap-3 pt-3"
                    style={{ 
                      borderTop: '1px solid var(--color-border)',
                    }}
                  >
                    <div className="flex items-center gap-1.5">
                      <CalendarIcon size={14} />
                      <span 
                        style={{ 
                          fontSize: 13, 
                          color: 'var(--color-text-muted)',
                          fontFamily: 'var(--font-mono)',
                        }}
                      >
                        {new Date(blog.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                    <span style={{ color: 'var(--color-border)' }}>·</span>
                    <div className="flex items-center gap-1.5">
                      <ClockIcon size={14} />
                      <span 
                        style={{ 
                          fontSize: 13, 
                          color: 'var(--color-text-muted)',
                        }}
                      >
                        {blog.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ TOPICS ══════════════════════ */}
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
              Focus Areas
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
              Topics I Write <span style={{ color: 'var(--color-accent)' }}>About</span>
            </h2>
            <p 
              className="max-w-2xl mt-4"
              style={{
                fontSize: 14,
                color: 'var(--color-text-secondary)',
                lineHeight: 1.7,
              }}
            >
              Deep dives into AI, machine learning, and emerging technologies.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-3 justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4 }}
          >
            {topics.map((topic, index) => (
              <motion.span
                key={topic}
                className="inline-flex cursor-default items-center rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300"
                style={{
                  background: 'var(--color-bg)',
                  color: 'var(--color-text-secondary)',
                  border: '1px solid var(--color-border)',
                }}
                whileHover={{
                  background: 'var(--color-accent)',
                  color: 'var(--color-bg)',
                  borderColor: 'var(--color-accent)',
                  scale: 1.05,
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

      {/* ══════════════════════ NEWSLETTER ══════════════════════ */}
      <section className="section" style={fade(0.4)}>
        <div className="section-container">
          <motion.div
            className="w-full p-8 md:p-12 rounded-xl"
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
                className="inline-flex items-center justify-center w-16 h-16 rounded-full flex-shrink-0"
                style={{
                  background: 'var(--color-accent-light)',
                  border: '2px solid var(--color-accent)',
                  color: 'var(--color-accent)',
                }}
              >
                <MailIcon size={28} />
              </div>

              <div className="flex-1 text-center md:text-left">
                <p 
                  className="text-xs font-semibold uppercase tracking-[0.13em] mb-3"
                  style={{
                    color: 'var(--color-accent)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  Newsletter
                </p>
                
                <h2 
                  className="font-display font-bold mb-3"
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  Stay <span style={{ color: 'var(--color-accent)' }}>Updated</span>
                </h2>
                
                <p 
                  className="mb-6"
                  style={{
                    fontSize: 14,
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.7,
                  }}
                >
                  Get notified about new articles, projects, and AI insights delivered straight to your inbox.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="py-4"
                  >
                    <div 
                      className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                      style={{
                        background: 'var(--color-accent-light)',
                        border: '2px solid var(--color-accent)',
                        color: 'var(--color-accent)',
                      }}
                    >
                      <span className="text-3xl">✓</span>
                    </div>
                    <p 
                      className="font-display font-bold mb-2"
                      style={{ 
                        fontSize: 20, 
                        color: 'var(--color-accent)',
                      }}
                    >
                      You're subscribed!
                    </p>
                    <p 
                      style={{ 
                        fontSize: 14, 
                        color: 'var(--color-text-secondary)',
                        lineHeight: 1.7,
                      }}
                    >
                      Thanks for subscribing. You'll hear from me soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="input flex-1"
                      style={{
                        background: 'var(--color-bg)',
                        border: '1px solid var(--color-border)',
                        color: 'var(--color-text-primary)',
                      }}
                    />
                    <button 
                      type="submit" 
                      className="btn-primary whitespace-nowrap"
                      style={{
                        background: 'var(--color-accent)',
                        color: 'white',
                      }}
                    >
                      Subscribe
                    </button>
                  </form>
                )}
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